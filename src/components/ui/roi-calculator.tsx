import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./card";
import { Badge } from "./badge";
import { Calculator, TrendingDown, Zap, Database } from "lucide-react";
import { Slider } from "./slider";

interface ROICalculatorProps {
  title?: string;
  onCalculationChange?: (calculations: any) => void;
}

export function ROICalculator({ title = "ROI Calculator (Illustrative)", onCalculationChange }: ROICalculatorProps) {
  const [inputs, setInputs] = useState({
    rgbCameraCount: 4,
    eventCameraCount: 4,
    fps: 60,
    itemsPerHour: 3600,
    defectRate: 0.3,
    scrapCost: 2.5,
    hoursPerDay: 24,
    cameraType: 'both', // 'rgb', 'event', 'both'
  });

  const [results, setResults] = useState({
      rgbSystem: {
        dataVolume: 0,
        storageCost: 0,
        computeCost: 0,
        reworkCost: 0,
        integrationCost: 0,
        totalCost: 0,
      },
      eventSystem: {
        dataVolume: 0,
        storageCost: 0,
        computeCost: 0,
        reworkCost: 0,
        integrationCost: 0,
        totalCost: 0,
      },
    savings: {
      dataReduction: 0,
      costSavings: 0,
      percentageSavings: 0,
    }
  });

  // Calculate results whenever inputs change - based on research data
  useEffect(() => {
    const daysInMonth = 30;
    
    // Top-tier industrial camera specifications
    const rgbCameraSpecs = {
      name: "Basler ace 2 Pro 4K (Top-tier RGB)",
      resolution: 3840 * 2160, // 4K industrial
      fps: inputs.fps,
      bitDepth: 24, // RGB 8-bit per channel
      powerConsumption: 12, // Watts per camera
      processingLoad: 1.0 // Baseline processing requirement
    };
    
    const eventCameraSpecs = {
      name: "Sony IMX636 (Prophesee EVK4)",
      resolution: 1280 * 720, // Event sensor resolution
      eventsPerSecond: 20000, // Events per second per pixel capability
      powerConsumption: 2, // Watts per camera (much lower)
      processingLoad: 0.15 // 85% less processing needed
    };
    
    // RGB System Costs - using compressed video (not raw)
    const rgbCompressionRatio = 50; // H.264 compression (raw to compressed)
    const rgbBytesPerPixel = rgbCameraSpecs.bitDepth / 8;
    const rgbRawDataPerCameraPerDay = (rgbCameraSpecs.fps * rgbCameraSpecs.resolution * rgbBytesPerPixel * inputs.hoursPerDay * 3600) / (1024 ** 3);
    const rgbCompressedDataPerCameraPerDay = rgbRawDataPerCameraPerDay / rgbCompressionRatio;
    const rgbTotalDataPerMonth = rgbCompressedDataPerCameraPerDay * daysInMonth * inputs.rgbCameraCount;
    
    // Event System Costs (much less data, naturally sparse)
    const eventDataReductionFactor = 150; // Conservative 150x reduction vs compressed RGB
    const eventTotalDataPerMonth = (rgbCompressedDataPerCameraPerDay / eventDataReductionFactor) * daysInMonth * inputs.eventCameraCount;
    
    // Storage costs (S3 + Kinesis + egress)
    const storageCostPerGB = 0.023 + 0.014 + (0.09 * 0.1);
    const rgbStorageCost = rgbTotalDataPerMonth * storageCostPerGB;
    const eventStorageCost = eventTotalDataPerMonth * storageCostPerGB;
    
    // Edge compute costs (scale with FPS and camera count)
    const fpsMultiplier = inputs.fps / 30; // Baseline at 30fps
    const workloadMultiplier = inputs.itemsPerHour / 3600; // Baseline at 3600 items/hour
    
    const rgbEdgePowerCostPerCamera = (rgbCameraSpecs.powerConsumption / 1000) * 24 * daysInMonth * 0.12; // kW * hours * $/kWh
    const eventEdgePowerCostPerCamera = (eventCameraSpecs.powerConsumption / 1000) * 24 * daysInMonth * 0.12;
    
    const rgbEdgePowerCost = rgbEdgePowerCostPerCamera * inputs.rgbCameraCount * fpsMultiplier;
    const eventEdgePowerCost = eventEdgePowerCostPerCamera * inputs.eventCameraCount;
    
    // Cloud compute costs (scale with FPS, workload, and camera count)
    const baseCloudComputePerHour = 8.50; // Industrial edge compute instance (increased for realistic costs)
    const rgbProcessingMultiplier = fpsMultiplier * workloadMultiplier * rgbCameraSpecs.processingLoad;
    const eventProcessingMultiplier = workloadMultiplier * eventCameraSpecs.processingLoad; // Event doesn't scale with FPS
    
    const rgbCloudHoursPerMonth = inputs.hoursPerDay * daysInMonth * rgbProcessingMultiplier * inputs.rgbCameraCount;
    const eventCloudHoursPerMonth = inputs.hoursPerDay * daysInMonth * eventProcessingMultiplier * inputs.eventCameraCount;
    
    const rgbCloudComputeCost = rgbCloudHoursPerMonth * baseCloudComputePerHour;
    const eventCloudComputeCost = eventCloudHoursPerMonth * baseCloudComputePerHour;
    
    // Total compute costs (edge + cloud)
    const rgbTotalComputeCost = rgbEdgePowerCost + rgbCloudComputeCost;
    const eventTotalComputeCost = eventEdgePowerCost + eventCloudComputeCost;
    
    // Quality costs (defect detection accuracy difference)
    const defectsPerMonth = (inputs.itemsPerHour * inputs.hoursPerDay * daysInMonth) * (inputs.defectRate / 100);
    const baseReworkCost = defectsPerMonth * inputs.scrapCost;
    
    // RGB has motion blur issues at high speeds, Event-based has better accuracy
    const rgbAccuracyLoss = 0.15; // 15% accuracy loss due to motion blur at high speeds
    const eventAccuracyGain = 0.25; // 25% better detection due to no motion blur
    
    const rgbReworkCost = baseReworkCost * (1 + rgbAccuracyLoss);
    const eventReworkCost = baseReworkCost * (1 - eventAccuracyGain);
    
    // Integration & maintenance costs (monthly amortized, scale with camera count)
    const cameraComplexityMultiplier = Math.sqrt(inputs.rgbCameraCount + inputs.eventCameraCount) / Math.sqrt(8); // Baseline 8 cameras
    const rgbIntegrationCost = (180000 / 24) * cameraComplexityMultiplier; // €180K integration amortized over 2 years
    const eventIntegrationCost = (90000 / 24) * cameraComplexityMultiplier; // €90K integration (faster deployment)
    
    // Total system costs
    const rgbTotalCost = rgbStorageCost + rgbTotalComputeCost + rgbReworkCost + rgbIntegrationCost;
    const eventTotalCost = eventStorageCost + eventTotalComputeCost + eventReworkCost + eventIntegrationCost;
    
    const newResults = {
      rgbSystem: {
        dataVolume: rgbTotalDataPerMonth,
        storageCost: rgbStorageCost,
        computeCost: rgbTotalComputeCost,
        reworkCost: rgbReworkCost,
        integrationCost: rgbIntegrationCost,
        totalCost: rgbTotalCost,
      },
      eventSystem: {
        dataVolume: eventTotalDataPerMonth,
        storageCost: eventStorageCost,
        computeCost: eventTotalComputeCost,
        reworkCost: eventReworkCost,
        integrationCost: eventIntegrationCost,
        totalCost: eventTotalCost,
      },
      savings: {
        dataReduction: Math.round(((rgbTotalDataPerMonth - eventTotalDataPerMonth) / rgbTotalDataPerMonth) * 100),
        costSavings: rgbTotalCost - eventTotalCost,
        percentageSavings: Math.round(((rgbTotalCost - eventTotalCost) / rgbTotalCost) * 100),
      }
    };
    
    setResults(newResults);
    
    // Notify parent component of calculation changes
    if (onCalculationChange) {
      onCalculationChange({
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
        rgbComputeCost: rgbTotalComputeCost,
        eventComputeCost: eventTotalComputeCost,
        monthlySavings: rgbTotalCost - eventTotalCost,
        rgbCameraCount: inputs.rgbCameraCount,
        eventCameraCount: inputs.eventCameraCount
      });
    }
  }, [inputs, onCalculationChange]);

  const handleInputChange = (key: string, value: number[]) => {
    setInputs(prev => ({ ...prev, [key]: value[0] }));
  };

  return (
    <Card className="w-full max-w-2xl bg-card/80 backdrop-blur-sm border border-border rounded-2xl shadow-lg">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <Calculator className="w-6 h-6 text-primary" />
          <CardTitle className="text-lg text-white">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Input Controls */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted">RGB Cameras: {inputs.rgbCameraCount}</label>
            <Slider
              value={[inputs.rgbCameraCount]}
              onValueChange={(value) => handleInputChange('rgbCameraCount', value)}
              max={12}
              min={1}
              step={1}
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted">Event Cameras: {inputs.eventCameraCount}</label>
            <Slider
              value={[inputs.eventCameraCount]}
              onValueChange={(value) => handleInputChange('eventCameraCount', value)}
              max={12}
              min={1}
              step={1}
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted">FPS: {inputs.fps}</label>
            <Slider
              value={[inputs.fps]}
              onValueChange={(value) => handleInputChange('fps', value)}
              max={120}
              min={30}
              step={10}
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted">Items/Hour: {inputs.itemsPerHour.toLocaleString()}</label>
            <Slider
              value={[inputs.itemsPerHour]}
              onValueChange={(value) => handleInputChange('itemsPerHour', value)}
              max={7200}
              min={1800}
              step={200}
              className="w-full"
            />
          </div>
        </div>

        {/* RGB vs Event Comparison */}
        <div className="space-y-3 pt-4 border-t border-border">
          <h4 className="text-sm font-bold text-white">System Comparison</h4>
          
          {/* Camera Specs */}
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="bg-destructive/10 p-2 rounded">
              <div className="font-bold text-destructive">Basler ace 2 Pro 4K ({inputs.rgbCameraCount}x)</div>
              <div className="text-muted">4K • {inputs.fps}fps • 12W each</div>
            </div>
            <div className="bg-primary/10 p-2 rounded">
              <div className="font-bold text-primary">Sony IMX636 EVK4 ({inputs.eventCameraCount}x)</div>
              <div className="text-muted">720p • 20K events/sec • 2W each</div>
            </div>
          </div>
          
          {/* Cost Breakdown */}
          <div className="grid grid-cols-4 gap-2 text-xs">
            <div className="text-center">
              <div className="text-destructive font-medium">${(results.rgbSystem.storageCost).toLocaleString()}</div>
              <div className="text-muted">RGB Storage</div>
            </div>
            <div className="text-center">
              <div className="text-warning font-medium">${(results.rgbSystem.computeCost).toLocaleString()}</div>
              <div className="text-muted">RGB Compute</div>
            </div>
            <div className="text-center">
              <div className="text-primary font-medium">${(results.eventSystem.computeCost).toLocaleString()}</div>
              <div className="text-muted">Event Compute</div>
            </div>
            <div className="text-center">
              <div className="text-success font-medium">${(results.savings.costSavings).toLocaleString()}</div>
              <div className="text-muted">Monthly Savings</div>
            </div>
          </div>
        </div>

        {/* Total Savings */}
        <div className="bg-primary/10 border border-primary/20 rounded-lg p-3 text-center">
          <div className="text-2xl font-bold text-primary mb-1">
            {results.savings.percentageSavings}% Cost Reduction
          </div>
          <div className="text-sm text-muted">
            Total monthly savings: <span className="text-primary font-medium">${(results.savings.costSavings).toLocaleString()}</span>
          </div>
        </div>

        <div className="space-y-1 text-xs text-muted">
          <div>• <strong>Purpose:</strong> Compare total cost of ownership per camera</div>
          <div>• RGB: Basler 4K cameras - high data, continuous processing</div>
          <div>• Event: Sony IMX636 - sparse data, event-driven processing</div>
          <div>• Scales with camera count - compute costs linear with cameras</div>
        </div>
      </CardContent>
    </Card>
  );
}