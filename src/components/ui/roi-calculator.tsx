import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './card';
import { Slider } from './slider';
import { Badge } from './badge';
import { Separator } from './separator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select';
import { Button } from './button';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './sheet';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './tooltip';
import { Info, ExternalLink } from 'lucide-react';
import { rgbCameras, eventCameras, scenePresets, compressionSpecs, costFactors, researchSources } from '@/data/cameras';
import { formatNumber, formatCurrency } from '@/lib/numberFormat';

interface ROICalculatorProps {
  title?: string;
  onCalculationChange?: (calculations: {
    rgbCosts: any;
    eventCosts: any;
    savings: any;
    percentageSavings: number;
    cameraCount: number;
    breakdown: any;
    assumptions: any;
    // Legacy compatibility
    storagePercentage: number;
    computePercentage: number;
    scrapPercentage: number;
    integrationPercentage: number;
    monthlyCosts: any;
    monthlySavings: number;
    rgbCameraCount: number;
    eventCameraCount: number;
  }) => void;
}

export function ROICalculator({ title = "ROI Calculator", onCalculationChange }: ROICalculatorProps) {
  const [inputs, setInputs] = useState({
    rgbCameraCount: 8,
    eventCameraCount: 8,
    fps: 30,
    itemsPerHour: 3600,
    hoursPerDay: 16,
    defectRate: 0.02, // 2% defect rate
    rgbCameraModel: 'Industrial 4MP RGB',
    eventCameraModel: 'Sony IMX636 (1280x720)',
    sceneType: 'Production Line',
    rgbCompressionFormat: 'H.264',
    eventCompressionFormat: 'EVT2/EVT3'
  });

  const [results, setResults] = useState({
    rgbTotalCost: 0,
    eventTotalCost: 0,
    monthlySavings: 0,
    percentageSavings: 0,
    rgbStorageCost: 0,
    eventStorageCost: 0,
    rgbComputeCost: 0,
    eventComputeCost: 0,
    breakdown: {} as any,
    assumptions: {} as any
  });

  const [showBreakdown, setShowBreakdown] = useState<'rgb' | 'event'>('rgb');

  useEffect(() => {
    const daysInMonth = 30;
    
    // Get selected camera specifications
    const selectedRgbCamera = rgbCameras.find(c => c.name === inputs.rgbCameraModel) || rgbCameras[0];
    const selectedEventCamera = eventCameras.find(c => c.name === inputs.eventCameraModel) || eventCameras[0];
    const selectedScene = scenePresets.find(s => s.name === inputs.sceneType) || scenePresets[1];
    const selectedRgbCompression = compressionSpecs.find(c => c.name === inputs.rgbCompressionFormat) || compressionSpecs[0];
    const selectedEventCompression = compressionSpecs.find(c => c.name === inputs.eventCompressionFormat) || compressionSpecs[2];
    
    // RGB System Data Calculation (compressed video)
    const rgbBytesPerPixel = selectedRgbCamera.bitDepth / 8;
    const rgbRawDataPerCameraPerDay = (inputs.fps * selectedRgbCamera.resolution * rgbBytesPerPixel * inputs.hoursPerDay * 3600) / (1024 ** 3);
    const rgbCompressedDataPerCameraPerDay = rgbRawDataPerCameraPerDay / selectedScene.rgbCompressionRatio;
    const rgbTotalDataPerMonth = rgbCompressedDataPerCameraPerDay * daysInMonth * inputs.rgbCameraCount;
    
    // Event System Data Calculation (naturally sparse)
    const eventTotalDataPerMonth = (rgbCompressedDataPerCameraPerDay / selectedScene.eventDataReduction) * daysInMonth * inputs.eventCameraCount;
    
    // Storage costs (S3 + Kinesis + egress)
    const rgbStorageCost = rgbTotalDataPerMonth * costFactors.storageCostPerGB;
    const eventStorageCost = eventTotalDataPerMonth * costFactors.storageCostPerGB;
    
    // Power consumption costs
    const rgbEdgePowerCostPerCamera = (selectedRgbCamera.powerConsumption / 1000) * 24 * daysInMonth * costFactors.electricityRatePerKwh;
    const eventEdgePowerCostPerCamera = (selectedEventCamera.powerConsumption / 1000) * 24 * daysInMonth * costFactors.electricityRatePerKwh;
    
    // Scaling factors
    const fpsMultiplier = inputs.fps / 30; // Baseline at 30fps
    const workloadMultiplier = inputs.itemsPerHour / 3600; // Baseline at 3600 items/hour
    
    const rgbEdgePowerCost = rgbEdgePowerCostPerCamera * inputs.rgbCameraCount * fpsMultiplier;
    const eventEdgePowerCost = eventEdgePowerCostPerCamera * inputs.eventCameraCount;
    
    // Cloud processing costs (based on workload complexity)
    const processingComplexity = selectedScene.motionLevel === 'high' ? 'heavy' : 
                                selectedScene.motionLevel === 'medium' ? 'medium' : 'light';
    const baseCloudComputePerHour = costFactors.baseCloudComputePerHour[processingComplexity];
    
    const rgbProcessingMultiplier = fpsMultiplier * workloadMultiplier;
    const eventProcessingMultiplier = workloadMultiplier * 0.15; // Event processing is 85% more efficient
    
    const rgbCloudHoursPerMonth = inputs.hoursPerDay * daysInMonth * rgbProcessingMultiplier * inputs.rgbCameraCount;
    const eventCloudHoursPerMonth = inputs.hoursPerDay * daysInMonth * eventProcessingMultiplier * inputs.eventCameraCount;
    
    const rgbCloudComputeCost = rgbCloudHoursPerMonth * baseCloudComputePerHour;
    const eventCloudComputeCost = eventCloudHoursPerMonth * baseCloudComputePerHour;
    
    const rgbTotalComputeCost = rgbEdgePowerCost + rgbCloudComputeCost;
    const eventTotalComputeCost = eventEdgePowerCost + eventCloudComputeCost;
    
    // Quality impact (rework costs) - research-backed accuracy improvements
    const baseReworkCost = inputs.itemsPerHour * inputs.hoursPerDay * daysInMonth * inputs.defectRate * costFactors.reworkCostPerDefect;
    
    // Motion blur and missed events in RGB systems
    const rgbAccuracyLoss = selectedScene.motionLevel === 'high' ? 0.25 : 
                           selectedScene.motionLevel === 'medium' ? 0.15 : 0.05;
    // Event cameras excel at detecting changes and motion
    const eventAccuracyGain = selectedScene.motionLevel === 'high' ? 0.40 : 
                             selectedScene.motionLevel === 'medium' ? 0.30 : 0.15;
    
    const rgbReworkCost = baseReworkCost * (1 + rgbAccuracyLoss);
    const eventReworkCost = baseReworkCost * (1 - eventAccuracyGain);
    
    // Integration & maintenance costs (amortized over 2 years)
    const cameraComplexityMultiplier = Math.sqrt(Math.max(inputs.rgbCameraCount, inputs.eventCameraCount)) / Math.sqrt(8);
    const rgbIntegrationCost = (costFactors.integrationCostBase.rgb / 24) * cameraComplexityMultiplier;
    const eventIntegrationCost = (costFactors.integrationCostBase.event / 24) * cameraComplexityMultiplier;
    
    // Total system costs
    const rgbTotalCost = rgbStorageCost + rgbTotalComputeCost + rgbReworkCost + rgbIntegrationCost;
    const eventTotalCost = eventStorageCost + eventTotalComputeCost + eventReworkCost + eventIntegrationCost;
    
    const monthlySavings = rgbTotalCost - eventTotalCost;
    const percentageSavings = rgbTotalCost > 0 ? (monthlySavings / rgbTotalCost) * 100 : 0;

    // Create detailed breakdown
    const breakdown = {
      rgb: {
        storage: { cost: rgbStorageCost, percentage: (rgbStorageCost / rgbTotalCost) * 100 },
        compute: { cost: rgbTotalComputeCost, percentage: (rgbTotalComputeCost / rgbTotalCost) * 100 },
        quality: { cost: rgbReworkCost, percentage: (rgbReworkCost / rgbTotalCost) * 100 },
        integration: { cost: rgbIntegrationCost, percentage: (rgbIntegrationCost / rgbTotalCost) * 100 },
        total: rgbTotalCost
      },
      event: {
        storage: { cost: eventStorageCost, percentage: eventTotalCost > 0 ? (eventStorageCost / eventTotalCost) * 100 : 0 },
        compute: { cost: eventTotalComputeCost, percentage: eventTotalCost > 0 ? (eventTotalComputeCost / eventTotalCost) * 100 : 0 },
        quality: { cost: eventReworkCost, percentage: eventTotalCost > 0 ? (eventReworkCost / eventTotalCost) * 100 : 0 },
        integration: { cost: eventIntegrationCost, percentage: eventTotalCost > 0 ? (eventIntegrationCost / eventTotalCost) * 100 : 0 },
        total: eventTotalCost
      }
    };

    const assumptions = {
      cameras: { rgb: selectedRgbCamera, event: selectedEventCamera },
      scene: selectedScene,
      compression: { rgb: selectedRgbCompression, event: selectedEventCompression },
      dataReduction: selectedScene.eventDataReduction,
      accuracyImprovement: { rgb: rgbAccuracyLoss, event: eventAccuracyGain }
    };

    setResults({
      rgbTotalCost,
      eventTotalCost,
      monthlySavings,
      percentageSavings,
      rgbStorageCost,
      eventStorageCost,
      rgbComputeCost: rgbTotalComputeCost,
      eventComputeCost: eventTotalComputeCost,
      breakdown,
      assumptions
    });

    // Call the callback with detailed breakdown (new format + legacy compatibility)
    if (onCalculationChange) {
      onCalculationChange({
        rgbCosts: {
          storage: rgbStorageCost,
          compute: rgbTotalComputeCost,
          quality: rgbReworkCost,
          integration: rgbIntegrationCost,
          total: rgbTotalCost
        },
        eventCosts: {
          storage: eventStorageCost,
          compute: eventTotalComputeCost,
          quality: eventReworkCost,
          integration: eventIntegrationCost,
          total: eventTotalCost
        },
        savings: {
          monthly: monthlySavings,
          percentage: percentageSavings
        },
        percentageSavings,
        cameraCount: inputs.rgbCameraCount + inputs.eventCameraCount,
        breakdown,
        assumptions,
        // Legacy compatibility for existing slide
        storagePercentage: Math.round((rgbStorageCost / rgbTotalCost) * 100),
        computePercentage: Math.round((rgbTotalComputeCost / rgbTotalCost) * 100),
        scrapPercentage: Math.round((rgbReworkCost / rgbTotalCost) * 100),
        integrationPercentage: Math.round((rgbIntegrationCost / rgbTotalCost) * 100),
        monthlyCosts: {
          storage: rgbStorageCost,
          compute: rgbTotalComputeCost,
          rework: rgbReworkCost,
          integration: rgbIntegrationCost,
          rgbCompute: rgbTotalComputeCost,
          eventCompute: eventTotalComputeCost
        },
        monthlySavings,
        rgbCameraCount: inputs.rgbCameraCount,
        eventCameraCount: inputs.eventCameraCount
      });
    }
  }, [inputs, onCalculationChange]);

  const handleInputChange = useCallback((key: string, value: any) => {
    setInputs(prev => ({ ...prev, [key]: value }));
  }, []);

  return (
    <TooltipProvider>
      <Card className="w-full max-w-5xl mx-auto">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CardTitle className="text-xl font-semibold">{title}</CardTitle>
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                Research-Backed Model
              </Badge>
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm">
                  <Info className="w-4 h-4 mr-2" />
                  Assumptions & Sources
                </Button>
              </SheetTrigger>
              <SheetContent className="w-[600px] sm:w-[700px] overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>Research Sources & Assumptions</SheetTitle>
                  <SheetDescription>
                    Data-backed specifications from manufacturers and research papers
                  </SheetDescription>
                </SheetHeader>
                <div className="mt-6 space-y-6 text-sm">
                  <div>
                    <h4 className="font-semibold mb-2">Research Papers</h4>
                    <div className="space-y-2">
                      {researchSources.papers.map((paper, i) => (
                        <div key={i} className="p-3 bg-muted/50 rounded">
                          <div className="font-medium">{paper.title}</div>
                          <div className="text-muted-foreground">
                            {paper.journal || `arXiv:${paper.arxiv}`} ({paper.year})
                          </div>
                          <div className="text-xs mt-1">{paper.key_findings}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Manufacturer Specifications</h4>
                    <div className="space-y-2">
                      {researchSources.manufacturers.map((mfg, i) => (
                        <div key={i} className="p-3 bg-muted/50 rounded">
                          <div className="font-medium">{mfg.name} - {mfg.product}</div>
                          <div className="text-xs">{mfg.specifications}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Current Calculation Assumptions</h4>
                    <div className="space-y-2 text-xs">
                      <div><strong>Scene:</strong> {results.assumptions.scene?.name} - {results.assumptions.scene?.description}</div>
                      <div><strong>Data Reduction:</strong> {results.assumptions.dataReduction}x less data than compressed RGB</div>
                      <div><strong>RGB Camera:</strong> {results.assumptions.cameras?.rgb?.name} ({results.assumptions.cameras?.rgb?.manufacturer})</div>
                      <div><strong>Event Camera:</strong> {results.assumptions.cameras?.event?.name} ({results.assumptions.cameras?.event?.manufacturer})</div>
                      <div><strong>Compression:</strong> RGB: {results.assumptions.compression?.rgb?.name}, Event: {results.assumptions.compression?.event?.name}</div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <CardDescription>
            Compare RGB frame-based vs Event-based vision system costs using research-backed specifications
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Configuration Controls */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Camera Selection */}
            <div className="space-y-4">
              <h3 className="font-semibold">Camera Configuration</h3>
              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium mb-2 block">RGB Camera Model</label>
                  <Select value={inputs.rgbCameraModel} onValueChange={(value) => handleInputChange('rgbCameraModel', value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {rgbCameras.map(camera => (
                        <SelectItem key={camera.name} value={camera.name}>
                          {camera.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Event Camera Model</label>
                  <Select value={inputs.eventCameraModel} onValueChange={(value) => handleInputChange('eventCameraModel', value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {eventCameras.map(camera => (
                        <SelectItem key={camera.name} value={camera.name}>
                          {camera.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Scene & Compression */}
            <div className="space-y-4">
              <h3 className="font-semibold">Scene & Compression</h3>
              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium mb-2 block">Application Scene</label>
                  <Select value={inputs.sceneType} onValueChange={(value) => handleInputChange('sceneType', value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {scenePresets.map(scene => (
                        <SelectItem key={scene.name} value={scene.name}>
                          <div>
                            <div>{scene.name}</div>
                            <div className="text-xs text-muted-foreground">{scene.description}</div>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">RGB Compression</label>
                  <Select value={inputs.rgbCompressionFormat} onValueChange={(value) => handleInputChange('rgbCompressionFormat', value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {compressionSpecs.filter(c => c.type === 'frame').map(comp => (
                        <SelectItem key={comp.name} value={comp.name}>
                          {comp.name} ({comp.compressionRatio}:1)
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Operational Parameters */}
            <div className="space-y-4">
              <h3 className="font-semibold">Operation Parameters</h3>
              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    RGB Cameras: {inputs.rgbCameraCount}
                  </label>
                  <Slider
                    value={[inputs.rgbCameraCount]}
                    onValueChange={([value]) => handleInputChange('rgbCameraCount', value)}
                    max={20}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Event Cameras: {inputs.eventCameraCount}
                  </label>
                  <Slider
                    value={[inputs.eventCameraCount]}
                    onValueChange={([value]) => handleInputChange('eventCameraCount', value)}
                    max={20}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Performance Parameters */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-medium mb-2 block">
                Frame Rate: {inputs.fps} fps
              </label>
              <Slider
                value={[inputs.fps]}
                onValueChange={([value]) => handleInputChange('fps', value)}
                max={120}
                min={10}
                step={10}
                className="w-full"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">
                Items/Hour: {inputs.itemsPerHour.toLocaleString()}
              </label>
              <Slider
                value={[inputs.itemsPerHour]}
                onValueChange={([value]) => handleInputChange('itemsPerHour', value)}
                max={10000}
                min={1000}
                step={500}
                className="w-full"
              />
            </div>
          </div>

          <Separator />

          {/* Cost Breakdown Toggle */}
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">Monthly Cost Breakdown</h3>
            <div className="flex items-center gap-2">
              <span className="text-sm">System:</span>
              <Button
                variant={showBreakdown === 'rgb' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setShowBreakdown('rgb')}
              >
                RGB ({formatNumber(results.rgbTotalCost, true)}/mo)
              </Button>
              <Button
                variant={showBreakdown === 'event' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setShowBreakdown('event')}
              >
                Event ({formatNumber(results.eventTotalCost, true)}/mo)
              </Button>
            </div>
          </div>

          {/* Cost Breakdown Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['storage', 'compute', 'quality', 'integration'].map((category) => {
              const data = results.breakdown[showBreakdown]?.[category] || { cost: 0, percentage: 0 };
              const categoryLabels = {
                storage: 'Storage',
                compute: 'Compute', 
                quality: 'Quality (Rework)',
                integration: 'Integration'
              };
              
              return (
                <Tooltip key={category}>
                  <TooltipTrigger asChild>
                    <Card className="p-4 cursor-help">
                      <div className="text-center space-y-2">
                        <div className="text-sm font-medium text-muted-foreground">
                          {categoryLabels[category]}
                        </div>
                        <div className="text-2xl font-bold">
                          {data.percentage.toFixed(1)}%
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {formatNumber(data.cost, true)}/mo
                        </div>
                      </div>
                    </Card>
                  </TooltipTrigger>
                  <TooltipContent>
                    <div className="text-sm">
                      <div className="font-medium">{categoryLabels[category]} Cost</div>
                      <div>Share of total {showBreakdown.toUpperCase()} system cost</div>
                    </div>
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </div>

          {/* Savings Summary */}
          <div className="p-6 bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg border border-primary/20">
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">
                {results.percentageSavings.toFixed(1)}% cost reduction
              </div>
              <div className="text-xl font-semibold">
                {formatNumber(results.monthlySavings, true)} saved per month
              </div>
              <div className="text-lg font-medium text-primary">
                {formatNumber(results.monthlySavings * 12, true)} annual savings
              </div>
              <div className="text-sm text-muted-foreground mt-4">
                Data reduction: <strong>{results.assumptions.dataReduction}x less</strong> than compressed RGB
              </div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="p-3 bg-muted/50 rounded">
              <div className="font-medium mb-1">Ultra-Low Latency</div>
              <div className="text-muted-foreground">1μs response time vs 33ms for RGB</div>
            </div>
            <div className="p-3 bg-muted/50 rounded">
              <div className="font-medium mb-1">No Motion Blur</div>
              <div className="text-muted-foreground">Perfect for high-speed applications</div>
            </div>
            <div className="p-3 bg-muted/50 rounded">
              <div className="font-medium mb-1">High Dynamic Range</div>
              <div className="text-muted-foreground">120dB vs 60dB for RGB cameras</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </TooltipProvider>
  );
}