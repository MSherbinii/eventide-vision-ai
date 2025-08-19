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
    fps: 60,
    itemsPerHour: 3600,
    defectRate: 0.3,
    scrapCost: 2.5,
    hoursPerDay: 24,
    cameraType: 'rgb', // 'rgb', '3d', 'event'
  });

  const [results, setResults] = useState({
    rgbSystem: {
      dataVolume: 0,
      storageCost: 0,
      computeCost: 0,
      reworkCost: 0,
      downtimeCost: 0,
      totalCost: 0,
    },
    eventSystem: {
      dataVolume: 0,
      storageCost: 0,
      computeCost: 0,
      reworkCost: 0,
      downtimeCost: 0,
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
    const resolution = 1920 * 1080; // 2MP industrial standard
    const daysInMonth = 30;
    
    // RGB Camera System Calculations
    const rgbBytesPerPixel = 3; // RGB 24-bit
    const frameDataGBPerDay = (inputs.fps * resolution * rgbBytesPerPixel * inputs.hoursPerDay * 3600) / (1024 ** 3);
    const frameDataGBPerMonth = frameDataGBPerDay * daysInMonth;
    
    // Event-based system (research: 10x-1000x reduction, using 100x conservative)
    const eventDataReduction = 100;
    const eventDataGBPerMonth = frameDataGBPerMonth / eventDataReduction;
    
    // Storage costs (S3 + Kinesis + egress)
    const storageCostPerGB = 0.023 + 0.014 + (0.09 * 0.1); // S3 + ingestion + 10% egress
    const rgbStorageCost = frameDataGBPerMonth * storageCostPerGB;
    const eventStorageCost = eventDataGBPerMonth * storageCostPerGB;
    
    // Compute costs (AWS g4dn.xlarge research-based + edge hardware power)
    const rgbComputeCostPerHour = 3.06 + (0.25 * 0.12); // GPU instance + 250W edge @ $0.12/kWh
    const eventComputeCostPerHour = 0.85 + (0.015 * 0.12); // Lower compute + 15W edge
    const rgbProcessingHours = inputs.hoursPerDay * daysInMonth; // Continuous processing
    const eventProcessingHours = (inputs.hoursPerDay * 0.6) * daysInMonth; // 60% active time (more realistic)
    
    const rgbComputeCost = rgbComputeCostPerHour * rgbProcessingHours;
    const eventComputeCost = eventComputeCostPerHour * eventProcessingHours;
    
    // Quality costs
    const defectsPerMonth = (inputs.itemsPerHour * inputs.hoursPerDay * daysInMonth) * (inputs.defectRate / 100);
    const baseReworkCost = defectsPerMonth * inputs.scrapCost;
    
    // RGB has higher false positive rate due to motion blur
    const rgbReworkCost = baseReworkCost * 1.2; // 20% more false positives
    const eventReworkCost = baseReworkCost * 0.8; // 20% fewer false positives
    
    // Downtime costs (false stops more common with RGB)
    const marginPerHour = 450; // Industry average
    const rgbStopsPerMonth = 3 * 4.33; // 3 per week
    const eventStopsPerMonth = 1 * 4.33; // 1 per week (more reliable)
    const minutesPerStop = 15;
    
    const rgbDowntimeCost = (rgbStopsPerMonth * minutesPerStop / 60) * marginPerHour;
    const eventDowntimeCost = (eventStopsPerMonth * minutesPerStop / 60) * marginPerHour;
    
    // Total costs
    const rgbTotalCost = rgbStorageCost + rgbComputeCost + rgbReworkCost + rgbDowntimeCost;
    const eventTotalCost = eventStorageCost + eventComputeCost + eventReworkCost + eventDowntimeCost;
    
    const newResults = {
      rgbSystem: {
        dataVolume: frameDataGBPerMonth,
        storageCost: rgbStorageCost,
        computeCost: rgbComputeCost,
        reworkCost: rgbReworkCost,
        downtimeCost: rgbDowntimeCost,
        totalCost: rgbTotalCost,
      },
      eventSystem: {
        dataVolume: eventDataGBPerMonth,
        storageCost: eventStorageCost,
        computeCost: eventComputeCost,
        reworkCost: eventReworkCost,
        downtimeCost: eventDowntimeCost,
        totalCost: eventTotalCost,
      },
      savings: {
        dataReduction: Math.round(((frameDataGBPerMonth - eventDataGBPerMonth) / frameDataGBPerMonth) * 100),
        costSavings: rgbTotalCost - eventTotalCost,
        percentageSavings: Math.round(((rgbTotalCost - eventTotalCost) / rgbTotalCost) * 100),
      }
    };
    
    setResults(newResults);
    
    // Notify parent component of calculation changes
    if (onCalculationChange) {
      onCalculationChange({
        storagePercentage: Math.round((rgbStorageCost / rgbTotalCost) * 100),
        computePercentage: Math.round((rgbComputeCost / rgbTotalCost) * 100),
        scrapPercentage: Math.round((rgbReworkCost / rgbTotalCost) * 100),
        downtimePercentage: Math.round((rgbDowntimeCost / rgbTotalCost) * 100),
        monthlyCosts: {
          storage: rgbStorageCost,
          compute: rgbComputeCost,
          rework: rgbReworkCost,
          downtime: rgbDowntimeCost,
          rgbCompute: rgbComputeCost,
          eventCompute: eventComputeCost
        },
        rgbComputeCost: rgbComputeCost,
        eventComputeCost: eventComputeCost,
        monthlySavings: rgbTotalCost - eventTotalCost
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
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted">Defect Rate: {inputs.defectRate}%</label>
            <Slider
              value={[inputs.defectRate]}
              onValueChange={(value) => handleInputChange('defectRate', value)}
              max={1.0}
              min={0.1}
              step={0.1}
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted">Scrap Cost: ${inputs.scrapCost}</label>
            <Slider
              value={[inputs.scrapCost]}
              onValueChange={(value) => handleInputChange('scrapCost', value)}
              max={10}
              min={1}
              step={0.5}
              className="w-full"
            />
          </div>
        </div>

        {/* RGB vs Event Comparison */}
        <div className="space-y-3 pt-4 border-t border-border">
          <h4 className="text-sm font-bold text-white">RGB vs Event-Based Comparison</h4>
          
          {/* Data Volume */}
          <div className="grid grid-cols-3 gap-3 text-center">
            <div>
              <div className="flex items-center gap-1 justify-center mb-1">
                <Database className="w-3 h-3 text-destructive" />
                <span className="text-xs text-muted">RGB Data</span>
              </div>
              <div className="text-lg font-bold text-destructive">{(results.rgbSystem.dataVolume).toLocaleString()} GB</div>
            </div>
            <div>
              <div className="flex items-center gap-1 justify-center mb-1">
                <Database className="w-3 h-3 text-primary" />
                <span className="text-xs text-muted">Event Data</span>
              </div>
              <div className="text-lg font-bold text-primary">{(results.eventSystem.dataVolume).toLocaleString()} GB</div>
            </div>
            <div>
              <div className="flex items-center gap-1 justify-center mb-1">
                <TrendingDown className="w-3 h-3 text-success" />
                <span className="text-xs text-muted">Reduction</span>
              </div>
              <div className="text-lg font-bold text-success">{results.savings.dataReduction}%</div>
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
          <div>• <strong>Purpose:</strong> Show customer TCO reduction with event-based vision</div>
          <div>• RGB: AWS g4dn.xlarge $3.06/hr + 250W edge compute</div>
          <div>• Event: $0.85/hr processing + 15W edge (94% power reduction)</div>
          <div>• Data: 100x reduction conservative (research shows 10x-1000x)</div>
        </div>
      </CardContent>
    </Card>
  );
}