import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, ResponsiveContainer, Cell } from "recharts";
import { Info, Settings } from "lucide-react";
import { useState } from "react";

const InvestorROISlide = () => {
  const [cameras, setCameras] = useState(3);
  const [bitrate, setBitrate] = useState(20);
  const [retention, setRetention] = useState(30);
  const [externalAccess, setExternalAccess] = useState(10);
  const [eventReduction, setEventReduction] = useState(10);
  const [gpuReduction, setGpuReduction] = useState(50);

  // Calculate costs based on current settings
  const calculateCosts = () => {
    // Frame-based costs
    const monthlyDataPerCamGB = (bitrate * 8 * 60 * 60 * 24 * retention) / (8 * 1024); // Convert to GB
    const totalDataGB = monthlyDataPerCamGB * cameras;
    const frameStorage = totalDataGB * 0.023; // S3 Standard $0.023/GB-mo
    const frameEgress = (totalDataGB * externalAccess / 100) * 0.09; // $0.09/GB for first 10TB
    const frameGpu = 1.204 * 24 * 30; // G5.4xlarge $1.204/hr for 30 days
    const frameTotal = frameStorage + frameEgress + frameGpu;

    // Event-based costs
    const eventDataGB = totalDataGB / eventReduction;
    const eventStorage = eventDataGB * 0.023;
    const eventEgress = (eventDataGB * externalAccess / 100) * 0.09;
    const eventGpu = frameGpu * (1 - gpuReduction / 100);
    const eventTotal = eventStorage + eventEgress + eventGpu;

    const savings = frameTotal - eventTotal;
    const savingsPercent = (savings / frameTotal) * 100;

    return {
      frame: { storage: frameStorage, egress: frameEgress, gpu: frameGpu, total: frameTotal },
      event: { storage: eventStorage, egress: eventEgress, gpu: eventGpu, total: eventTotal },
      savings,
      savingsPercent
    };
  };

  const costs = calculateCosts();

  const chartData = [
    {
      name: "Frame",
      Storage: costs.frame.storage,
      Egress: costs.frame.egress,
      GPU: costs.frame.gpu,
      total: costs.frame.total
    },
    {
      name: "Event (est.)",
      Storage: costs.event.storage,
      Egress: costs.event.egress,
      GPU: costs.event.gpu,
      total: costs.event.total
    }
  ];

  const colors = {
    Storage: "#3B82F6",
    Egress: "#10B981", 
    GPU: "#F59E0B"
  };

  const formatCurrency = (value: number) => `$${Math.round(value).toLocaleString()}`;
  const formatPercent = (value: number) => `${Math.round(value)}%`;

  return (
    <TooltipProvider>
      <div className="w-full min-h-screen flex flex-col px-6 py-4 bg-gradient-to-br from-background via-[hsl(220_34%_8%)] to-[hsl(142_76%_8%)]">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/8 via-transparent to-accent/10"></div>
          <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/8 rounded-full blur-3xl"></div>
        </div>
        
        {/* Header */}
        <div className="relative z-10 text-center space-y-3 mb-6">
          <Badge variant="outline" className="text-sm px-4 py-2 border-primary text-primary bg-transparent">
            COST ANALYSIS
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-[-0.01em]">
            Cost & ROI: <span className="text-primary">Frame vs Event-Driven</span>
          </h1>
          <p className="text-sm text-muted max-w-3xl mx-auto">
            Event-based vision typically produces far less data (sparse changes, µs latency, high dynamic range), reducing storage, bandwidth, and GPU hours at line speed.
          </p>
        </div>

        <div className="relative z-10 flex-1 space-y-6">
          {/* Row 1: KPI Band */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Card className="p-6 bg-[#0E1A16] border border-primary/20 rounded-2xl shadow-lg text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-white">Frame Monthly Cost</h3>
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="w-4 h-4 text-muted" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="text-xs max-w-xs">Storage: ${Math.round(costs.frame.storage)} + Egress: ${Math.round(costs.frame.egress)} + GPU: ${Math.round(costs.frame.gpu)}</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <div className="text-4xl font-bold text-[#EAF7EF] mb-2">{formatCurrency(costs.frame.total)}</div>
                <p className="text-sm text-[#9AB5A7]">{cameras}× 4K60 RGB (H.265), 30-day retention</p>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <Card className="p-6 bg-[#0E1A16] border border-accent/20 rounded-2xl shadow-lg text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-white">Event Monthly Cost (est.)</h3>
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="w-4 h-4 text-muted" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="text-xs max-w-xs">Storage: ${Math.round(costs.event.storage)} + Egress: ${Math.round(costs.event.egress)} + GPU: ${Math.round(costs.event.gpu)}</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <div className="text-4xl font-bold text-[#EAF7EF] mb-2">{formatCurrency(costs.event.total)}</div>
                <p className="text-sm text-[#9AB5A7]">{eventReduction}× lower data, {gpuReduction}% lower GPU</p>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
              <Card className="p-6 bg-[#0E1A16] border border-warning/20 rounded-2xl shadow-lg text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-white">Estimated Savings</h3>
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="w-4 h-4 text-muted" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="text-xs max-w-xs">Monthly savings: ${Math.round(costs.savings)}</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <div className="text-4xl font-bold text-[#EAF7EF] mb-2">{formatPercent(costs.savingsPercent)}</div>
                <p className="text-sm text-[#9AB5A7]">≈ {formatCurrency(costs.savings)} saved per line / month</p>
              </Card>
            </motion.div>
          </div>

          {/* Row 2: Chart and Assumptions */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left: Chart (7/12) */}
            <motion.div 
              className="lg:col-span-7"
              initial={{ opacity: 0, x: -20 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card className="p-6 bg-card/80 backdrop-blur-sm border border-border rounded-2xl shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">Where costs go</h3>
                  <Badge variant="outline" className="text-xs">Scenario: Conservative</Badge>
                </div>
                
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <XAxis dataKey="name" axisLine={false} tickLine={false} className="text-xs fill-muted" />
                      <Bar dataKey="Storage" stackId="costs" fill={colors.Storage} radius={[0, 0, 0, 0]} />
                      <Bar dataKey="Egress" stackId="costs" fill={colors.Egress} radius={[0, 0, 0, 0]} />
                      <Bar dataKey="GPU" stackId="costs" fill={colors.GPU} radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div className="flex justify-end gap-4 mt-4 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded" style={{ backgroundColor: colors.Storage }}></div>
                    <span className="text-muted">Storage</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded" style={{ backgroundColor: colors.Egress }}></div>
                    <span className="text-muted">Egress</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded" style={{ backgroundColor: colors.GPU }}></div>
                    <span className="text-muted">GPU</span>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Right: Assumptions (5/12) */}
            <motion.div 
              className="lg:col-span-5"
              initial={{ opacity: 0, x: 20 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Card className="p-6 bg-card/80 backdrop-blur-sm border border-border rounded-2xl shadow-lg h-full">
                <h3 className="text-xl font-bold text-white mb-4">Assumptions (Conservative)</h3>
                
                <ul className="space-y-3 text-sm text-muted mb-6">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>{cameras}× cameras, 4K @ 60 fps, H.265 ≈ {bitrate} Mb/s each</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Retention: {retention} days (S3 Standard)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Data accessed externally: {externalAccess}%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>Event data volume: {eventReduction}× lower vs. RGB</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span>GPU: G5.4xlarge 24/7; event GPU −{gpuReduction}%</span>
                  </li>
                </ul>

                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="w-full">
                      <Settings className="w-4 h-4 mr-2" />
                      Adjust Assumptions
                    </Button>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>Adjust Assumptions</SheetTitle>
                    </SheetHeader>
                    
                    <div className="space-y-6 mt-6">
                      <div>
                        <label className="text-sm font-medium text-white mb-2 block">Cameras: {cameras}</label>
                        <Slider
                          value={[cameras]}
                          onValueChange={(value) => setCameras(value[0])}
                          max={6}
                          min={1}
                          step={1}
                          className="w-full"
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium text-white mb-2 block">Bitrate per cam (Mb/s): {bitrate}</label>
                        <Slider
                          value={[bitrate]}
                          onValueChange={(value) => setBitrate(value[0])}
                          max={40}
                          min={10}
                          step={1}
                          className="w-full"
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium text-white mb-2 block">Retention (days): {retention}</label>
                        <Slider
                          value={[retention]}
                          onValueChange={(value) => setRetention(value[0])}
                          max={90}
                          min={7}
                          step={1}
                          className="w-full"
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium text-white mb-2 block">External access (%): {externalAccess}%</label>
                        <Slider
                          value={[externalAccess]}
                          onValueChange={(value) => setExternalAccess(value[0])}
                          max={25}
                          min={0}
                          step={1}
                          className="w-full"
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium text-white mb-2 block">Event data reduction (×): {eventReduction}×</label>
                        <Slider
                          value={[eventReduction]}
                          onValueChange={(value) => setEventReduction(value[0])}
                          max={50}
                          min={5}
                          step={1}
                          className="w-full"
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium text-white mb-2 block">Event GPU reduction (%): {gpuReduction}%</label>
                        <Slider
                          value={[gpuReduction]}
                          onValueChange={(value) => setGpuReduction(value[0])}
                          max={70}
                          min={20}
                          step={1}
                          className="w-full"
                        />
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </Card>
            </motion.div>
          </div>

          {/* Bottom Footer */}
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
            <p className="text-xs text-muted leading-relaxed">
              S3 Standard $0.023/GB-mo; data transfer to Internet $0.09/GB (first 10 TB). 4K bitrates reference live 2160p guidance. Event cameras transmit only pixel changes → orders-of-magnitude lower data; we use a conservative {eventReduction}× reduction.
              <br />
              <span className="font-medium">Sources:</span> AWS pricing (S3, EC2), YouTube/Restream guidance, IDS Imaging, Prophesee documentation.
            </p>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default InvestorROISlide;