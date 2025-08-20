import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './card';
import { Slider } from './slider';
import { Badge } from './badge';
import { Separator } from './separator';
import { Button } from './button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './tooltip';
import { Info } from 'lucide-react';
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

export function ROICalculator({ title = "8-Camera System ROI", onCalculationChange }: ROICalculatorProps) {
  const [inputs, setInputs] = useState({
    cameraCount: 8, // Fixed at 8 cameras
    productionHours: 16, // Daily production hours
    defectCostMultiplier: 1.0, // Adjustable multiplier for failed detection costs
    powerCostMultiplier: 1.0 // Adjustable multiplier for power costs
  });

  const [results, setResults] = useState({
    rgbTotalCost: 0,
    eventTotalCost: 0,
    monthlySavings: 0,
    percentageSavings: 0,
    breakdown: {} as any
  });

  // Research-backed calculations for 8-camera industrial deployment
  useEffect(() => {
    const cameras = inputs.cameraCount;
    const hoursPerDay = inputs.productionHours;
    const daysPerMonth = 30;
    const itemsPerHour = 3600; // High-speed production line
    
    // Storage costs - RGB vs Event (Nature 2024 research)
    const rgbDataPerCameraPerDay = 634; // GB per camera per day (4K@60fps H.265)
    const rgbTotalDataPerMonth = rgbDataPerCameraPerDay * cameras * daysPerMonth;
    const eventDataReduction = 75; // Conservative 75x reduction (research shows 100x-1000x)
    const eventTotalDataPerMonth = rgbTotalDataPerMonth / eventDataReduction;
    
    const storageCostPerGB = 0.023 + 0.014 + (0.09 * 0.15); // S3 + Kinesis + 15% egress
    const rgbStorageCost = rgbTotalDataPerMonth * storageCostPerGB;
    const eventStorageCost = eventTotalDataPerMonth * storageCostPerGB;
    
    // Power & Compute costs (Research-backed hardware specs)
    const powerCostPerKWh = 0.12 * inputs.powerCostMultiplier;
    
    // Edge power consumption
    const rgbEdgePowerCost = (225 / 1000) * hoursPerDay * daysPerMonth * powerCostPerKWh * cameras; // 225W per RGB camera
    const eventEdgePowerCost = (16.5 / 1000) * hoursPerDay * daysPerMonth * powerCostPerKWh * cameras; // 16.5W per event camera
    
    // Cloud processing costs
    const rgbCloudComputePerHour = 1.20; // AWS g4dn.xlarge
    const rgbCloudCost = rgbCloudComputePerHour * hoursPerDay * daysPerMonth * cameras;
    const eventCloudCost = rgbCloudCost * 0.08; // 92% reduction with SNN processing
    
    const rgbTotalComputeCost = rgbEdgePowerCost + rgbCloudCost;
    const eventTotalComputeCost = eventEdgePowerCost + eventCloudCost;
    
    // Failed detection costs (Critical RGB weakness due to motion blur)
    const defectRate = 0.025; // 2.5% baseline defect rate
    const rgbMissedDetectionRate = 0.35; // RGB misses 35% due to motion blur
    const eventMissedDetectionRate = 0.05; // Event catches 95% (no motion blur)
    
    const totalItemsPerMonth = itemsPerHour * hoursPerDay * daysPerMonth;
    const costPerMissedDefect = 12 * inputs.defectCostMultiplier; // Cost of defective product reaching customer
    
    const rgbFailedDetectionCost = totalItemsPerMonth * defectRate * rgbMissedDetectionRate * costPerMissedDefect;
    const eventFailedDetectionCost = totalItemsPerMonth * defectRate * eventMissedDetectionRate * costPerMissedDefect;
    
    // Integration & deployment costs (Major differentiator)
    const rgbIntegrationCostPerCamera = 2800; // Monthly amortized cost (complex setup)
    const eventIntegrationCostPerCamera = 1600; // Simpler, self-calibrating
    const rgbIntegrationCost = rgbIntegrationCostPerCamera * cameras;
    const eventIntegrationCost = eventIntegrationCostPerCamera * cameras;
    
    // Total system costs
    const rgbTotalCost = rgbStorageCost + rgbTotalComputeCost + rgbFailedDetectionCost + rgbIntegrationCost;
    const eventTotalCost = eventStorageCost + eventTotalComputeCost + eventFailedDetectionCost + eventIntegrationCost;
    
    const monthlySavings = rgbTotalCost - eventTotalCost;
    const percentageSavings = rgbTotalCost > 0 ? (monthlySavings / rgbTotalCost) * 100 : 0;

    // Create breakdown
    const breakdown = {
      rgb: {
        storage: { cost: rgbStorageCost, percentage: (rgbStorageCost / rgbTotalCost) * 100 },
        compute: { cost: rgbTotalComputeCost, percentage: (rgbTotalComputeCost / rgbTotalCost) * 100 },
        failedDetection: { cost: rgbFailedDetectionCost, percentage: (rgbFailedDetectionCost / rgbTotalCost) * 100 },
        integration: { cost: rgbIntegrationCost, percentage: (rgbIntegrationCost / rgbTotalCost) * 100 },
        total: rgbTotalCost
      },
      event: {
        storage: { cost: eventStorageCost, percentage: eventTotalCost > 0 ? (eventStorageCost / eventTotalCost) * 100 : 0 },
        compute: { cost: eventTotalComputeCost, percentage: eventTotalCost > 0 ? (eventTotalComputeCost / eventTotalCost) * 100 : 0 },
        failedDetection: { cost: eventFailedDetectionCost, percentage: eventTotalCost > 0 ? (eventFailedDetectionCost / eventTotalCost) * 100 : 0 },
        integration: { cost: eventIntegrationCost, percentage: eventTotalCost > 0 ? (eventIntegrationCost / eventTotalCost) * 100 : 0 },
        total: eventTotalCost
      }
    };

    setResults({
      rgbTotalCost,
      eventTotalCost,
      monthlySavings,
      percentageSavings,
      breakdown
    });

    // Callback with both new and legacy formats
    if (onCalculationChange) {
      onCalculationChange({
        rgbCosts: {
          storage: rgbStorageCost,
          compute: rgbTotalComputeCost,
          failedDetection: rgbFailedDetectionCost,
          integration: rgbIntegrationCost,
          total: rgbTotalCost
        },
        eventCosts: {
          storage: eventStorageCost,
          compute: eventTotalComputeCost,
          failedDetection: eventFailedDetectionCost,
          integration: eventIntegrationCost,
          total: eventTotalCost
        },
        savings: {
          monthly: monthlySavings,
          percentage: percentageSavings
        },
        percentageSavings,
        cameraCount: cameras,
        breakdown,
        assumptions: {
          dataReduction: eventDataReduction,
          powerMultiplier: inputs.powerCostMultiplier,
          defectMultiplier: inputs.defectCostMultiplier
        },
        // Legacy compatibility for the slide
        storagePercentage: Math.round((rgbStorageCost / rgbTotalCost) * 100),
        computePercentage: Math.round((rgbTotalComputeCost / rgbTotalCost) * 100),
        scrapPercentage: Math.round((rgbFailedDetectionCost / rgbTotalCost) * 100),
        integrationPercentage: Math.round((rgbIntegrationCost / rgbTotalCost) * 100),
        monthlyCosts: {
          storage: rgbStorageCost,
          compute: rgbTotalComputeCost,
          rework: rgbFailedDetectionCost,
          integration: rgbIntegrationCost,
          rgbCompute: rgbTotalComputeCost,
          eventCompute: eventTotalComputeCost
        },
        monthlySavings,
        rgbCameraCount: cameras,
        eventCameraCount: cameras
      });
    }
  }, [inputs, onCalculationChange]);

  const handleInputChange = useCallback((key: string, value: any) => {
    setInputs(prev => ({ ...prev, [key]: value }));
  }, []);

  return (
    <TooltipProvider>
      <Card className="w-full bg-card/80 backdrop-blur-sm border border-border">
        <CardHeader>
          <div className="flex items-center gap-2">
            <CardTitle className="text-lg font-semibold text-white">{title}</CardTitle>
            <Badge variant="secondary" className="bg-primary/20 text-primary border-0">
              Research-Backed
            </Badge>
            <Tooltip>
              <TooltipTrigger>
                <Info className="w-4 h-4 text-muted" />
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-xs max-w-xs">Based on Nature 2024, EE Journal 2024, and manufacturer specifications for 8-camera industrial deployment.</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <CardDescription className="text-muted">
            Industrial-grade 8-camera system comparison with adjustable sensitivity parameters
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Adjustable Parameters */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-white mb-2 block">
                Production Hours: {inputs.productionHours}h/day
              </label>
              <Slider
                value={[inputs.productionHours]}
                onValueChange={([value]) => handleInputChange('productionHours', value)}
                max={24}
                min={8}
                step={1}
                className="w-full"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-white mb-2 block">
                Failed Detection Impact: {(inputs.defectCostMultiplier * 100).toFixed(0)}%
              </label>
              <Slider
                value={[inputs.defectCostMultiplier]}
                onValueChange={([value]) => handleInputChange('defectCostMultiplier', value)}
                max={2.0}
                min={0.5}
                step={0.1}
                className="w-full"
              />
            </div>
          </div>

          <Separator className="bg-border" />

          {/* System Comparison */}
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
              <div className="text-sm text-muted mb-1">8-Camera RGB System</div>
              <div className="text-2xl font-bold text-white">{formatCurrency(results.rgbTotalCost)}</div>
              <div className="text-xs text-muted">per month</div>
            </div>
            <div className="text-center p-4 bg-primary/10 border border-primary/20 rounded-lg">
              <div className="text-sm text-muted mb-1">8-Camera Event System</div>
              <div className="text-2xl font-bold text-white">{formatCurrency(results.eventTotalCost)}</div>
              <div className="text-xs text-muted">per month</div>
            </div>
          </div>

          {/* Detailed Cost Breakdown */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white">Cost Component Analysis</h4>
            {['storage', 'compute', 'failedDetection', 'integration'].map((category) => {
              const rgbData = results.breakdown.rgb?.[category] || { cost: 0, percentage: 0 };
              const eventData = results.breakdown.event?.[category] || { cost: 0, percentage: 0 };
              const categoryLabels = {
                storage: 'Storage & Bandwidth',
                compute: 'Compute & Power',
                failedDetection: 'Failed Detections',
                integration: 'Integration & Setup'
              };
              
              const savingsAmount = rgbData.cost - eventData.cost;
              const savingsPercent = rgbData.cost > 0 ? ((savingsAmount / rgbData.cost) * 100) : 0;
              
              return (
                <div key={category} className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-white font-medium">{categoryLabels[category]}</span>
                    <span className="text-primary font-semibold">
                      {formatCurrency(savingsAmount)} saved ({savingsPercent.toFixed(0)}%)
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-xs text-muted">
                      RGB: {formatCurrency(rgbData.cost)} ({rgbData.percentage.toFixed(1)}%)
                    </div>
                    <div className="text-xs text-muted">
                      Event: {formatCurrency(eventData.cost)} ({eventData.percentage.toFixed(1)}%)
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-2 bg-destructive/20 rounded">
                      <div 
                        className="h-full bg-destructive rounded" 
                        style={{ width: `${Math.min(rgbData.percentage, 100)}%` }}
                      />
                    </div>
                    <div className="h-2 bg-primary/20 rounded">
                      <div 
                        className="h-full bg-primary rounded" 
                        style={{ width: `${Math.min(eventData.percentage, 100)}%` }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ROI Summary */}
          <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
            <div className="text-center mb-2">
              <div className="text-2xl font-bold text-primary">
                {results.percentageSavings.toFixed(1)}% Cost Reduction
              </div>
              <div className="text-lg font-semibold text-white">
                {formatCurrency(results.monthlySavings)} monthly savings
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs text-muted">
              <div>Annual Savings: {formatCurrency(results.monthlySavings * 12)}</div>
              <div>3-Year Savings: {formatCurrency(results.monthlySavings * 36)}</div>
            </div>
          </div>

          {/* Key Research Points */}
          <div className="text-xs text-muted space-y-1 bg-muted/5 p-3 rounded-lg border border-border/20">
            <div><strong>Research Basis:</strong></div>
            <div>• 75× data reduction (Nature 2024: orders of magnitude less data)</div>
            <div>• 14× power reduction (225W RGB vs 16.5W event per camera)</div>
            <div>• 35% failed detection rate for RGB due to motion blur</div>
            <div>• 92% cloud compute reduction with neuromorphic/SNN processors</div>
            <div>• 43% lower integration costs (self-calibrating event cameras)</div>
          </div>
        </CardContent>
      </Card>
    </TooltipProvider>
  );
}