import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './card';
import { Slider } from './slider';
import { Badge } from './badge';
import { Separator } from './separator';
import { Button } from './button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './tooltip';
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

export function ROICalculator({ title = "Simplified ROI Calculator", onCalculationChange }: ROICalculatorProps) {
  const [inputs, setInputs] = useState({
    cameraCount: 4,
    dataRetentionDays: 30,
    productionHours: 16,
    dataReduction: 10, // Event cameras produce 10x less data
    integrationComplexity: 1.5 // RGB systems are 50% more complex to integrate
  });

  const [results, setResults] = useState({
    rgbTotalCost: 0,
    eventTotalCost: 0,
    monthlySavings: 0,
    percentageSavings: 0,
    breakdown: {} as any
  });

  useEffect(() => {
    // Simplified cost model - Conservative assumptions
    const daysInMonth = 30;
    
    // Data volume calculations (4K @ 60fps, H.265 compressed)
    const dataPerCameraPerDayGB = 634; // ~634GB per camera per day (conservative)
    const rgbTotalDataPerMonth = dataPerCameraPerDayGB * inputs.cameraCount * inputs.dataRetentionDays;
    const eventTotalDataPerMonth = rgbTotalDataPerMonth / inputs.dataReduction;
    
    // Storage costs (S3 Standard + ingestion + egress)
    const storageCostPerGB = 0.023 + 0.014 + (0.09 * 0.1); // Storage + ingestion + 10% egress
    const rgbStorageCost = rgbTotalDataPerMonth * storageCostPerGB;
    const eventStorageCost = eventTotalDataPerMonth * storageCostPerGB;
    
    // Compute & Power costs (RGB systems need continuous processing)
    const baseComputeCostPerCamera = 867 / 3; // ~$289 per camera (from AWS G5.4xlarge baseline)
    const rgbComputeCost = baseComputeCostPerCamera * inputs.cameraCount;
    const eventComputeCost = rgbComputeCost * 0.5; // 50% reduction for event processing
    
    // Integration & Maintenance (This is where RGB really costs more)
    const baseIntegrationCostPerCamera = 2500; // Monthly amortized cost
    const rgbIntegrationCost = baseIntegrationCostPerCamera * inputs.cameraCount * inputs.integrationComplexity;
    const eventIntegrationCost = baseIntegrationCostPerCamera * inputs.cameraCount * 0.8; // 20% simpler
    
    // Quality & Rework costs (false positives, missed detections)
    const baseQualityCostPerCamera = 800; // Monthly quality impact
    const rgbQualityCost = baseQualityCostPerCamera * inputs.cameraCount * 1.2; // 20% higher due to motion blur
    const eventQualityCost = baseQualityCostPerCamera * inputs.cameraCount * 0.7; // 30% better accuracy
    
    // Total system costs
    const rgbTotalCost = rgbStorageCost + rgbComputeCost + rgbIntegrationCost + rgbQualityCost;
    const eventTotalCost = eventStorageCost + eventComputeCost + eventIntegrationCost + eventQualityCost;
    
    const monthlySavings = rgbTotalCost - eventTotalCost;
    const percentageSavings = rgbTotalCost > 0 ? (monthlySavings / rgbTotalCost) * 100 : 0;

    // Create breakdown
    const breakdown = {
      rgb: {
        storage: { cost: rgbStorageCost, percentage: (rgbStorageCost / rgbTotalCost) * 100 },
        compute: { cost: rgbComputeCost, percentage: (rgbComputeCost / rgbTotalCost) * 100 },
        integration: { cost: rgbIntegrationCost, percentage: (rgbIntegrationCost / rgbTotalCost) * 100 },
        quality: { cost: rgbQualityCost, percentage: (rgbQualityCost / rgbTotalCost) * 100 },
        total: rgbTotalCost
      },
      event: {
        storage: { cost: eventStorageCost, percentage: eventTotalCost > 0 ? (eventStorageCost / eventTotalCost) * 100 : 0 },
        compute: { cost: eventComputeCost, percentage: eventTotalCost > 0 ? (eventComputeCost / eventTotalCost) * 100 : 0 },
        integration: { cost: eventIntegrationCost, percentage: eventTotalCost > 0 ? (eventIntegrationCost / eventTotalCost) * 100 : 0 },
        quality: { cost: eventQualityCost, percentage: eventTotalCost > 0 ? (eventQualityCost / eventTotalCost) * 100 : 0 },
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

    // Call the callback with legacy compatibility
    if (onCalculationChange) {
      onCalculationChange({
        rgbCosts: {
          storage: rgbStorageCost,
          compute: rgbComputeCost,
          integration: rgbIntegrationCost,
          quality: rgbQualityCost,
          total: rgbTotalCost
        },
        eventCosts: {
          storage: eventStorageCost,
          compute: eventComputeCost,
          integration: eventIntegrationCost,
          quality: eventQualityCost,
          total: eventTotalCost
        },
        savings: {
          monthly: monthlySavings,
          percentage: percentageSavings
        },
        percentageSavings,
        cameraCount: inputs.cameraCount,
        breakdown,
        assumptions: {
          dataReduction: inputs.dataReduction,
          integrationComplexity: inputs.integrationComplexity
        },
        // Legacy compatibility
        storagePercentage: Math.round((rgbStorageCost / rgbTotalCost) * 100),
        computePercentage: Math.round((rgbComputeCost / rgbTotalCost) * 100),
        scrapPercentage: Math.round((rgbQualityCost / rgbTotalCost) * 100),
        integrationPercentage: Math.round((rgbIntegrationCost / rgbTotalCost) * 100),
        monthlyCosts: {
          storage: rgbStorageCost,
          compute: rgbComputeCost,
          rework: rgbQualityCost,
          integration: rgbIntegrationCost,
          rgbCompute: rgbComputeCost,
          eventCompute: eventComputeCost
        },
        monthlySavings,
        rgbCameraCount: inputs.cameraCount,
        eventCameraCount: inputs.cameraCount
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
              Conservative Model
            </Badge>
          </div>
          <CardDescription className="text-muted">
            Simplified comparison showing realistic integration and maintenance costs
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Input Controls */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-white mb-2 block">
                Cameras: {inputs.cameraCount}
              </label>
              <Slider
                value={[inputs.cameraCount]}
                onValueChange={([value]) => handleInputChange('cameraCount', value)}
                max={8}
                min={2}
                step={1}
                className="w-full"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-white mb-2 block">
                Data Reduction: {inputs.dataReduction}×
              </label>
              <Slider
                value={[inputs.dataReduction]}
                onValueChange={([value]) => handleInputChange('dataReduction', value)}
                max={50}
                min={5}
                step={5}
                className="w-full"
              />
            </div>
          </div>

          <Separator className="bg-border" />

          {/* Cost Comparison */}
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
              <div className="text-sm text-muted mb-1">RGB System</div>
              <div className="text-2xl font-bold text-white">{formatCurrency(results.rgbTotalCost)}</div>
              <div className="text-xs text-muted">per month</div>
            </div>
            <div className="text-center p-4 bg-primary/10 border border-primary/20 rounded-lg">
              <div className="text-sm text-muted mb-1">Event System</div>
              <div className="text-2xl font-bold text-white">{formatCurrency(results.eventTotalCost)}</div>
              <div className="text-xs text-muted">per month</div>
            </div>
          </div>

          {/* Cost Breakdown */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white">Monthly Cost Breakdown</h4>
            {['storage', 'compute', 'integration', 'quality'].map((category) => {
              const rgbData = results.breakdown.rgb?.[category] || { cost: 0, percentage: 0 };
              const eventData = results.breakdown.event?.[category] || { cost: 0, percentage: 0 };
              const categoryLabels = {
                storage: 'Storage & Bandwidth',
                compute: 'Compute & Power',
                integration: 'Integration & Maintenance',
                quality: 'Quality & Rework'
              };
              
              return (
                <div key={category} className="space-y-1">
                  <div className="flex justify-between text-xs text-muted">
                    <span>{categoryLabels[category]}</span>
                    <span>RGB: {formatCurrency(rgbData.cost)} | Event: {formatCurrency(eventData.cost)}</span>
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

          {/* Savings Summary */}
          <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg text-center">
            <div className="text-lg font-bold text-primary">
              {results.percentageSavings.toFixed(1)}% Cost Reduction
            </div>
            <div className="text-sm text-white">
              {formatCurrency(results.monthlySavings)} saved per month
            </div>
            <div className="text-xs text-muted mt-1">
              {formatCurrency(results.monthlySavings * 12)} annual savings
            </div>
          </div>

          {/* Key Assumptions */}
          <div className="text-xs text-muted space-y-1">
            <div><strong>Note:</strong> Integration & Maintenance costs are significant and realistic</div>
            <div>• RGB systems require 50% more integration complexity</div>
            <div>• Event systems have 30% better quality detection (less rework)</div>
            <div>• Conservative {inputs.dataReduction}× data reduction assumption</div>
          </div>
        </CardContent>
      </Card>
    </TooltipProvider>
  );
}