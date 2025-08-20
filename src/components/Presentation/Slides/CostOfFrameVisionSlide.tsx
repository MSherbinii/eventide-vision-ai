import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Switch } from "@/components/ui/switch";
import { Info, Server, Zap, HardDrive, Cloud } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { formatNumber, formatCurrency } from "@/lib/numberFormat";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from "recharts";

const CostOfFrameVisionSlide = () => {
  const [selectedScenario, setSelectedScenario] = useState<'conservative' | 'typical' | 'aggressive'>('typical');
  const [cloudClipsEnabled, setCloudClipsEnabled] = useState(false);
  const [calculations, setCalculations] = useState({
    monthlySavings: 0,
    paybackMonths: 0,
    rgbCosts: { storage: 0, egress: 0, compute: 0, hardware: 0 },
    eventCosts: { storage: 0, egress: 0, compute: 0, hardware: 0 }
  });

  // Scenario definitions with research-backed parameters
  const scenarios = {
    conservative: {
      bitrateMbps: 6,
      dataReduction: 10,
      retention: 30
    },
    typical: {
      bitrateMbps: 8,
      dataReduction: 50,
      retention: 30
    },
    aggressive: {
      bitrateMbps: 12,
      dataReduction: 200,
      retention: 30
    }
  };

  // Calculate costs based on scenario
  useEffect(() => {
    const scenario = scenarios[selectedScenario];
    const cameras = 8;
    const daysPerMonth = 30;
    
    // Monthly data calculation (GB)
    // Formula: (cameras × bitrate_Mbps ÷ 8 MB/s) × 3600s × 24h × 30d ÷ 1024
    const rgbMonthlyDataGB = (cameras * scenario.bitrateMbps / 8) * 3600 * 24 * daysPerMonth / 1024;
    const eventMonthlyDataGB = rgbMonthlyDataGB / scenario.dataReduction;
    
    // Storage costs (S3 Standard: $0.023/GB-month)
    const rgbStorageCost = rgbMonthlyDataGB * 0.023;
    const eventStorageCost = eventMonthlyDataGB * 0.023;
    
    // Data egress costs (AWS: $0.09/GB first 10TB)
    const egressPercentage = cloudClipsEnabled ? (scenario.dataReduction > 20 ? 0.05 : 0.15) : 0;
    const rgbEgressCost = cloudClipsEnabled ? rgbMonthlyDataGB * egressPercentage * 0.09 : 0;
    const eventEgressCost = cloudClipsEnabled ? eventMonthlyDataGB * egressPercentage * 0.09 : 0;
    
    // Compute costs (hardware amortization + energy)
    // RGB: $4000 system → $111/mo amortization + 250W × 24/7 × $0.12/kWh
    // Event: $1000 system → $28/mo amortization + 25W × 24/7 × $0.12/kWh
    const rgbHardwareCost = 111; // 3-year amortization of $4000 system
    const eventHardwareCost = 28; // 3-year amortization of $1000 system
    
    const energyCostKWh = 0.12;
    const rgbEnergyCost = (250 / 1000) * 24 * daysPerMonth * energyCostKWh;
    const eventEnergyCost = (25 / 1000) * 24 * daysPerMonth * energyCostKWh;
    
    const rgbComputeCost = rgbHardwareCost + rgbEnergyCost;
    const eventComputeCost = eventHardwareCost + eventEnergyCost;
    
    // Total monthly costs
    const rgbTotal = rgbStorageCost + rgbEgressCost + rgbComputeCost;
    const eventTotal = eventStorageCost + eventEgressCost + eventComputeCost;
    const monthlySavings = rgbTotal - eventTotal;
    
    // Payback calculation (assuming $3000 integration delta)
    const integrationDelta = 3000;
    const paybackMonths = integrationDelta / monthlySavings;
    
    setCalculations({
      monthlySavings,
      paybackMonths,
      rgbCosts: {
        storage: rgbStorageCost,
        egress: rgbEgressCost,
        compute: rgbComputeCost,
        hardware: rgbHardwareCost
      },
      eventCosts: {
        storage: eventStorageCost,
        egress: eventEgressCost,
        compute: eventComputeCost,
        hardware: eventHardwareCost
      }
    });
  }, [selectedScenario, cloudClipsEnabled]);

  // Prepare chart data for stacked bar comparison
  const chartData = [
    {
      name: 'RGB System',
      storage: calculations.rgbCosts.storage,
      egress: calculations.rgbCosts.egress,
      compute: calculations.rgbCosts.compute,
      total: calculations.rgbCosts.storage + calculations.rgbCosts.egress + calculations.rgbCosts.compute
    },
    {
      name: 'Event System',
      storage: calculations.eventCosts.storage,
      egress: calculations.eventCosts.egress,
      compute: calculations.eventCosts.compute,
      total: calculations.eventCosts.storage + calculations.eventCosts.egress + calculations.eventCosts.compute
    }
  ];

  const colors = {
    storage: 'hsl(var(--primary))',
    egress: 'hsl(var(--warning))',
    compute: 'hsl(var(--destructive))'
  };

  return (
    <div className="w-full h-full flex flex-col px-6 py-4 bg-gradient-to-br from-background via-[hsl(220_34%_8%)] to-[hsl(4_100%_8%)]">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-destructive/5 via-transparent to-primary/10"></div>
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-destructive/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      </div>
      
      {/* Header with One-line Takeaway */}
      <div className="relative z-10 text-center space-y-4 mb-6">
        <div className="flex items-center justify-center gap-2">
          <Badge variant="outline" className="text-sm px-3 py-1 border-primary text-primary bg-transparent">
            Edge-first
          </Badge>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted">Cloud clips</span>
            <Switch checked={cloudClipsEnabled} onCheckedChange={setCloudClipsEnabled} />
          </div>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-white tracking-[-0.01em]">
          Infrastructure <span className="text-primary">ROI Story</span>
        </h1>
        
        <p className="text-lg text-accent font-medium max-w-4xl mx-auto">
          Event-based + edge storage cuts data & infra cost by ~90%+ per line; payback in months.
        </p>

        {/* Scenario Pills */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {(['conservative', 'typical', 'aggressive'] as const).map((scenario) => (
            <Button
              key={scenario}
              variant={selectedScenario === scenario ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedScenario(scenario)}
              className={selectedScenario === scenario ? "bg-primary text-white" : "border-border text-muted hover:text-white"}
            >
              {scenario.charAt(0).toUpperCase() + scenario.slice(1)}
            </Button>
          ))}
        </div>
      </div>

      <div className="relative z-10 flex-1 grid grid-cols-3 gap-6">
        {/* Left Column - Hero Numbers */}
        <div className="space-y-6">
          {/* Monthly Savings */}
          <Card className="p-6 bg-card/80 backdrop-blur-sm border border-primary/20 rounded-2xl shadow-lg text-center">
            <div className="text-sm text-muted mb-2">Monthly Savings</div>
            <div className="text-4xl font-bold text-primary mb-2">
              {formatCurrency(calculations.monthlySavings)}
            </div>
            <div className="text-xs text-muted">per 8-camera line</div>
          </Card>

          {/* Payback Period */}
          <Card className="p-6 bg-card/80 backdrop-blur-sm border border-accent/20 rounded-2xl shadow-lg text-center">
            <div className="text-sm text-muted mb-2">Payback Period</div>
            <div className="text-4xl font-bold text-accent mb-2">
              {Math.ceil(calculations.paybackMonths)}
            </div>
            <div className="text-xs text-muted">months</div>
          </Card>

          {/* Assumptions Drawer */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="w-full border-border text-muted hover:text-white">
                <Info className="w-4 h-4 mr-2" />
                Assumptions & Sources
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[400px] sm:w-[540px]">
              <SheetHeader>
                <SheetTitle>Model Assumptions</SheetTitle>
                <SheetDescription>
                  Research-backed parameters for {selectedScenario} scenario
                </SheetDescription>
              </SheetHeader>
              <div className="mt-6 space-y-4">
                <div className="space-y-2">
                  <h4 className="font-semibold">Current Scenario: {selectedScenario}</h4>
                  <div className="text-sm space-y-1">
                    <div>• Bitrate: {scenarios[selectedScenario].bitrateMbps} Mbps/camera</div>
                    <div>• Data reduction: {scenarios[selectedScenario].dataReduction}× less</div>
                    <div>• Retention: {scenarios[selectedScenario].retention} days</div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-semibold">Fixed Parameters</h4>
                  <div className="text-sm space-y-1">
                    <div>• Cameras: 8 × 1080p@60fps</div>
                    <div>• Storage: $0.023/GB-month (S3 Standard)</div>
                    <div>• Energy: $0.12/kWh</div>
                    <div>• RGB Power: 250W/system</div>
                    <div>• Event Power: 25W/system</div>
                    <div>• Data egress: $0.09/GB (first 10TB)</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold">Sources</h4>
                  <div className="text-xs space-y-1 text-muted-foreground">
                    <div>• AWS S3 Standard pricing (public docs)</div>
                    <div>• Jetson Orin power envelope (10-60W)</div>
                    <div>• Event sensor data reduction (Prophesee, IDS)</div>
                    <div>• Industrial GPU box ~250W typical</div>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Middle Column - Stacked Bar Chart */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white text-center">Monthly Cost Comparison</h3>
          
          <Card className="p-4 bg-card/80 backdrop-blur-sm border border-border rounded-2xl shadow-lg">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <XAxis dataKey="name" stroke="hsl(var(--muted))" />
                  <YAxis stroke="hsl(var(--muted))" tickFormatter={(value) => `$${(value/1000).toFixed(1)}K`} />
                  <Bar dataKey="storage" stackId="a" fill={colors.storage} />
                  <Bar dataKey="egress" stackId="a" fill={colors.egress} />
                  <Bar dataKey="compute" stackId="a" fill={colors.compute} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            {/* Legend */}
            <div className="flex justify-center gap-4 mt-4 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded" style={{backgroundColor: colors.storage}}></div>
                <span className="text-muted">Storage</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded" style={{backgroundColor: colors.egress}}></div>
                <span className="text-muted">Data Egress</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded" style={{backgroundColor: colors.compute}}></div>
                <span className="text-muted">Compute & HW</span>
              </div>
            </div>
          </Card>

          {/* Cost Breakdown */}
          <div className="grid grid-cols-2 gap-3 text-xs">
            <Card className="p-3 bg-card/60 backdrop-blur-sm border border-border rounded-lg">
              <div className="font-semibold text-white mb-2">RGB System</div>
              <div className="space-y-1 text-muted">
                <div className="flex justify-between">
                  <span>Storage:</span>
                  <span>{formatCurrency(calculations.rgbCosts.storage)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Egress:</span>
                  <span>{formatCurrency(calculations.rgbCosts.egress)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Compute:</span>
                  <span>{formatCurrency(calculations.rgbCosts.compute)}</span>
                </div>
                <div className="flex justify-between border-t border-border pt-1 font-semibold text-white">
                  <span>Total:</span>
                  <span>{formatCurrency(calculations.rgbCosts.storage + calculations.rgbCosts.egress + calculations.rgbCosts.compute)}</span>
                </div>
              </div>
            </Card>
            
            <Card className="p-3 bg-card/60 backdrop-blur-sm border border-border rounded-lg">
              <div className="font-semibold text-white mb-2">Event System</div>
              <div className="space-y-1 text-muted">
                <div className="flex justify-between">
                  <span>Storage:</span>
                  <span>{formatCurrency(calculations.eventCosts.storage)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Egress:</span>
                  <span>{formatCurrency(calculations.eventCosts.egress)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Compute:</span>
                  <span>{formatCurrency(calculations.eventCosts.compute)}</span>
                </div>
                <div className="flex justify-between border-t border-border pt-1 font-semibold text-white">
                  <span>Total:</span>
                  <span>{formatCurrency(calculations.eventCosts.storage + calculations.eventCosts.egress + calculations.eventCosts.compute)}</span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Right Column - Context & Validation */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white">Model Validation</h3>
          
          {/* Data Volume Comparison */}
          <Card className="p-4 bg-card/80 backdrop-blur-sm border border-border rounded-2xl shadow-lg">
            <h4 className="font-semibold text-white mb-3">Data Volume ({selectedScenario})</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted">RGB monthly:</span>
                <span className="text-white">{((8 * scenarios[selectedScenario].bitrateMbps / 8) * 3600 * 24 * 30 / 1024 / 1024).toFixed(1)} TB</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Event monthly:</span>
                <span className="text-primary">{((8 * scenarios[selectedScenario].bitrateMbps / 8) * 3600 * 24 * 30 / 1024 / 1024 / scenarios[selectedScenario].dataReduction).toFixed(2)} TB</span>
              </div>
              <div className="flex justify-between border-t border-border pt-2">
                <span className="text-muted">Reduction factor:</span>
                <span className="text-accent font-semibold">{scenarios[selectedScenario].dataReduction}×</span>
              </div>
            </div>
          </Card>

          {/* Power Comparison */}
          <Card className="p-4 bg-card/80 backdrop-blur-sm border border-border rounded-2xl shadow-lg">
            <h4 className="font-semibold text-white mb-3">Power & Compute</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted">RGB system:</span>
                <span className="text-white">250W + amortization</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Event system:</span>
                <span className="text-primary">25W + amortization</span>
              </div>
              <div className="flex justify-between border-t border-border pt-2">
                <span className="text-muted">Power reduction:</span>
                <span className="text-accent font-semibold">10×</span>
              </div>
            </div>
          </Card>

          {/* Industry Context */}
          <Card className="p-4 bg-card/80 backdrop-blur-sm border border-border rounded-2xl shadow-lg">
            <h4 className="font-semibold text-white mb-3">Industry Benchmarks</h4>
            <div className="space-y-2 text-xs text-muted">
              <div>• Event sensors: 10×–1000× data reduction (Prophesee, IDS)</div>
              <div>• S3 Standard: $0.023/GB-month (AWS public pricing)</div>
              <div>• Jetson Orin: 10–60W envelope (NVIDIA specs)</div>
              <div>• Industrial GPU boxes: 200–400W typical</div>
            </div>
          </Card>

          {/* Footnote */}
          <Card className="p-4 bg-destructive/10 backdrop-blur-sm border border-destructive/20 rounded-2xl shadow-lg">
            <div className="text-xs text-destructive font-medium">
              ⚠️ Infra-only ROI; quality/downtime upside next slide
            </div>
            <p className="text-xs text-muted mt-1">
              This model counts only infrastructure costs. Quality improvements and downtime reduction provide additional ROI not shown here.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CostOfFrameVisionSlide;