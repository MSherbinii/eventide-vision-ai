import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calculator } from "lucide-react";

interface ROICalculatorProps {
  title?: string;
}

export function ROICalculator({ title = "ROI Calculator (Illustrative)" }: ROICalculatorProps) {
  const [inputs, setInputs] = useState({
    fps: 60,
    resolution: 1920 * 1080,
    bitrate: 8,
    hoursPerDay: 24,
    itemsPerHour: 3600,
    defectRate: 0.3,
    scrapCost: 2.50,
    marginPerHour: 450,
    stopsPerWeek: 3,
    minutesPerStop: 15
  });

  const [results, setResults] = useState({
    frameDataGB: 0,
    eventDataGB: 0,
    monthlyStorageCost: 0,
    reworkCostMonthly: 0,
    downtimeCostMonthly: 0
  });

  useEffect(() => {
    // S3 Standard pricing $0.023/GB-month
    const s3CostPerGB = 0.023;
    
    // Frame-based data calculation
    const bytesPerPixel = inputs.bitrate / 8;
    const frameDataGBPerDay = (inputs.fps * inputs.resolution * bytesPerPixel * inputs.hoursPerDay * 3600) / (1024 ** 3);
    const frameDataGBPerMonth = frameDataGBPerDay * 30;
    
    // Event-based data (10x-1000x reduction, using 50x default)
    const eventReductionFactor = 50;
    const eventDataGBPerMonth = frameDataGBPerMonth / eventReductionFactor;
    
    // Monthly storage cost (storage only)
    const frameStorageCost = frameDataGBPerMonth * s3CostPerGB;
    
    // Rework cost
    const defectsPerMonth = (inputs.itemsPerHour * inputs.hoursPerDay * 30) * (inputs.defectRate / 100);
    const reworkCostMonthly = defectsPerMonth * inputs.scrapCost;
    
    // Downtime cost
    const downtimeHoursPerMonth = (inputs.stopsPerWeek * inputs.minutesPerStop * 4.33) / 60;
    const downtimeCostMonthly = downtimeHoursPerMonth * inputs.marginPerHour;
    
    setResults({
      frameDataGB: frameDataGBPerMonth,
      eventDataGB: eventDataGBPerMonth,
      monthlyStorageCost: frameStorageCost,
      reworkCostMonthly,
      downtimeCostMonthly
    });
  }, [inputs]);

  const handleInputChange = (key: keyof typeof inputs, value: number) => {
    setInputs(prev => ({ ...prev, [key]: value }));
  };

  return (
    <Card className="p-6 bg-[#0F2233] border border-[#2C3D58] rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
      <div className="flex items-center gap-2 mb-4">
        <Calculator className="w-5 h-5 text-[#0EA5E9]" />
        <h4 className="text-lg font-bold text-[#F8FAFC]">{title}</h4>
      </div>
      
      {/* Inputs Grid */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-xs text-[#CBD5E1] mb-1">FPS</label>
          <input
            type="number"
            value={inputs.fps}
            onChange={(e) => handleInputChange('fps', Number(e.target.value))}
            className="w-full px-2 py-1 bg-[#0B1B2B] border border-[#2C3D58] rounded text-white text-sm"
          />
        </div>
        <div>
          <label className="block text-xs text-[#CBD5E1] mb-1">Items/hour</label>
          <input
            type="number"
            value={inputs.itemsPerHour}
            onChange={(e) => handleInputChange('itemsPerHour', Number(e.target.value))}
            className="w-full px-2 py-1 bg-[#0B1B2B] border border-[#2C3D58] rounded text-white text-sm"
          />
        </div>
        <div>
          <label className="block text-xs text-[#CBD5E1] mb-1">Defect Rate (%)</label>
          <input
            type="number"
            step="0.1"
            value={inputs.defectRate}
            onChange={(e) => handleInputChange('defectRate', Number(e.target.value))}
            className="w-full px-2 py-1 bg-[#0B1B2B] border border-[#2C3D58] rounded text-white text-sm"
          />
        </div>
        <div>
          <label className="block text-xs text-[#CBD5E1] mb-1">Scrap Cost ($)</label>
          <input
            type="number"
            step="0.1"
            value={inputs.scrapCost}
            onChange={(e) => handleInputChange('scrapCost', Number(e.target.value))}
            className="w-full px-2 py-1 bg-[#0B1B2B] border border-[#2C3D58] rounded text-white text-sm"
          />
        </div>
      </div>

      {/* Results */}
      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <div className="text-center p-3 bg-[#0B1B2B] rounded-lg">
            <div className="text-lg font-bold text-[#0EA5E9]">{results.frameDataGB.toFixed(0)} GB</div>
            <div className="text-xs text-[#93A1B5]">Frame data/month</div>
          </div>
          <div className="text-center p-3 bg-[#0B1B2B] rounded-lg">
            <div className="text-lg font-bold text-[#22C55E]">{results.eventDataGB.toFixed(1)} GB</div>
            <div className="text-xs text-[#93A1B5]">Event data/month (50×)</div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          <div className="text-center p-3 bg-[#0B1B2B] rounded-lg">
            <div className="text-lg font-bold text-[#F59E0B]">${results.monthlyStorageCost.toFixed(0)}</div>
            <div className="text-xs text-[#93A1B5]">Storage/month</div>
          </div>
          <div className="text-center p-3 bg-[#0B1B2B] rounded-lg">
            <div className="text-lg font-bold text-[#F59E0B]">${results.reworkCostMonthly.toFixed(0)}</div>
            <div className="text-xs text-[#93A1B5]">Rework/month</div>
          </div>
        </div>

        <div className="p-3 bg-[#22C55E]/10 border border-[#22C55E]/20 rounded-lg text-center">
          <Badge className="bg-[#22C55E] text-white border-0 mb-1">Pilot Target: 20–50% reduction</Badge>
          <p className="text-xs text-[#93A1B5]">Event data volume often 10×–1000× less (scene-dependent)</p>
        </div>
      </div>

      <div className="mt-4 text-xs text-[#93A1B5] italic">
        Storage example uses S3 public pricing ($0.023/GB-month). Egress charged separately.
      </div>
    </Card>
  );
}