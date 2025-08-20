import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { AlertTriangle, DollarSign, Clock, TrendingDown, Server, Zap, HardDrive, Cloud, Info, Battery } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { formatCurrency } from "@/lib/numberFormat";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

const ProblemSlide = () => {
  const [animateValues, setAnimateValues] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setAnimateValues(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // Real cost calculations for typical 8-camera production line
  const costData = {
    monthlyCosts: {
      storage: 2850,     // RGB data storage costs
      compute: 1200,     // Edge computing hardware + energy
      egress: 980,       // Data transfer costs
      maintenance: 800   // Integration & maintenance
    },
    annualLosses: {
      defects: 2500000,     // $2.5M from undetected defects
      downtime: 850000,     // $850K from false alarms/system issues
      engineering: 450000   // $450K engineering overhead
    }
  };

  const totalMonthlyCost = Object.values(costData.monthlyCosts).reduce((a, b) => a + b, 0);
  const totalAnnualLoss = Object.values(costData.annualLosses).reduce((a, b) => a + b, 0);

  // Chart data for cost visualization
  const chartData = [
    { name: 'Storage', value: costData.monthlyCosts.storage, color: 'hsl(var(--primary))' },
    { name: 'Compute', value: costData.monthlyCosts.compute, color: 'hsl(var(--warning))' },
    { name: 'Egress', value: costData.monthlyCosts.egress, color: 'hsl(var(--destructive))' },
    { name: 'Maintenance', value: costData.monthlyCosts.maintenance, color: 'hsl(var(--accent))' }
  ];

  const problems = [
    {
      icon: <Clock className="w-12 h-12 text-primary" />,
      title: "Missed Defects",
      description: "40-100ms frame delays mean defects pass between captures",
      impact: "15-25% error rate",
      cost: "$2.5M annually",
      color: "border-primary/30 bg-primary/5"
    },
    {
      icon: <Battery className="w-12 h-12 text-warning" />,
      title: "High Power Consumption", 
      description: "RGB systems require 250W+ for edge processing vs <25W events",
      impact: "10x power usage",
      cost: "$1,200/mo compute",
      color: "border-warning/30 bg-warning/5"
    },
    {
      icon: <HardDrive className="w-12 h-12 text-destructive" />,
      title: "Massive Data Overhead",
      description: "Redundant full-frame data creates storage & egress cost explosion",
      impact: "96% wasted data",
      cost: "$3,830/mo storage+egress",
      color: "border-destructive/30 bg-destructive/5"
    },
    {
      icon: <AlertTriangle className="w-12 h-12 text-accent" />,
      title: "Integration Complexity",
      description: "Fragmented vendor ecosystem requires 6-18 month custom projects",
      impact: "18 months average",
      cost: "$450K engineering",
      color: "border-accent/30 bg-accent/5"
    }
  ];

  return (
    <div className="w-full h-screen flex flex-col px-6 py-4 bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="animated-bg">
        <div className="floating-orb orb-primary" />
        <div className="floating-orb orb-accent" />
        <div className="floating-orb orb-warning" />
      </div>
      <div className="geometric-pattern" />
      
      {/* Header */}
      <div className="relative z-10 text-center space-y-3 mb-6">
        <Badge variant="outline" className="text-sm px-4 py-2 border-destructive text-destructive bg-transparent">
          THE PROBLEM
        </Badge>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
          RGB Vision Systems Are <span className="text-gradient text-glow-animate">Bleeding Money</span>
        </h1>
        <p className="text-base text-muted-foreground max-w-4xl mx-auto">
          Manufacturing companies lose millions annually due to frame-based systems that miss defects, waste compute, and drain budgets
        </p>
      </div>

      <div className="relative z-10 flex-1 grid grid-cols-12 gap-4">
        {/* Left Column - Failure Videos & Problem Cards */}
        <div className="col-span-7 space-y-4">
          {/* Failure Case Videos */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-card/80 rounded-lg overflow-hidden border border-destructive/30">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?start=0&autoplay=0&mute=1&loop=1&controls=0&modestbranding=1"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-3">
                <div className="text-xs font-semibold text-destructive mb-1">MISSED DEFECT</div>
                <div className="text-xs text-muted-foreground">Frame timing misses critical failure at high speed</div>
              </div>
            </div>
            
            <div className="bg-card/80 rounded-lg overflow-hidden border border-warning/30">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?start=15&autoplay=0&mute=1&loop=1&controls=0&modestbranding=1"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-3">
                <div className="text-xs font-semibold text-warning mb-1">MOTION BLUR</div>
                <div className="text-xs text-muted-foreground">Blur artifacts cause false positives & missed inspections</div>
              </div>
            </div>
          </div>

          {/* Problem Cards */}
          <div className="grid grid-cols-2 gap-3">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`p-4 ${problem.color} border hover:scale-[1.02] transition-all duration-300`}>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">{problem.icon}</div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-sm mb-1">{problem.title}</h3>
                      <p className="text-xs text-muted-foreground mb-2 leading-relaxed">{problem.description}</p>
                      <div className="flex justify-between items-center">
                        <Badge variant="secondary" className="text-xs px-2 py-1">
                          {problem.impact}
                        </Badge>
                        <div className="text-xs font-mono font-bold text-right">
                          {problem.cost}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column - Cost Analysis */}
        <div className="col-span-5 space-y-4">
          {/* Annual Loss Hero Number */}
          <Card className="p-6 bg-destructive/10 border-destructive/30 text-center">
            <div className="text-xs text-muted-foreground mb-2">Annual Manufacturing Losses</div>
            <div className="text-4xl font-bold text-destructive mb-2">
              {animateValues && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  {formatCurrency(totalAnnualLoss)}
                </motion.span>
              )}
            </div>
            <div className="text-xs text-muted-foreground">per production facility</div>
          </Card>

          {/* Monthly Operational Costs Chart */}
          <Card className="p-4 bg-card/80 backdrop-blur-sm border border-border">
            <h4 className="font-semibold text-sm mb-3 text-center">Monthly RGB System Costs</h4>
            <div className="h-32">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                  <XAxis dataKey="name" tick={{ fontSize: 10 }} stroke="hsl(var(--muted-foreground))" />
                  <YAxis tick={{ fontSize: 10 }} stroke="hsl(var(--muted-foreground))" tickFormatter={(value) => `$${(value/1000).toFixed(0)}K`} />
                  <Bar dataKey="value" fill="hsl(var(--primary))" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="text-center mt-2">
              <div className="text-lg font-bold text-primary">
                {formatCurrency(totalMonthlyCost)}<span className="text-xs text-muted-foreground">/month</span>
              </div>
            </div>
          </Card>

          {/* Industry Impact Stats */}
          <div className="grid grid-cols-1 gap-3">
            <Card className="p-4 bg-card/60 border border-border">
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Defect Detection Miss Rate:</span>
                  <span className="font-bold text-destructive">15-25%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Average Integration Time:</span>
                  <span className="font-bold text-warning">18 months</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Data Processing Efficiency:</span>
                  <span className="font-bold text-primary">4% useful data</span>
                </div>
              </div>
            </Card>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="w-full border-border text-muted hover:text-white">
                  <Info className="w-4 h-4 mr-2" />
                  Cost Breakdown Sources
                </Button>
              </SheetTrigger>
              <SheetContent className="w-[400px] sm:w-[540px]">
                <SheetHeader>
                  <SheetTitle>RGB System Cost Analysis</SheetTitle>
                  <SheetDescription>
                    Real-world costs for 8-camera production line
                  </SheetDescription>
                </SheetHeader>
                <div className="mt-6 space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Monthly Operational Costs</h4>
                    <div className="text-sm space-y-1">
                      <div>• Storage: {formatCurrency(costData.monthlyCosts.storage)} (8x 1080p@60fps, 30 days)</div>
                      <div>• Compute: {formatCurrency(costData.monthlyCosts.compute)} (250W edge system + energy)</div>
                      <div>• Data Egress: {formatCurrency(costData.monthlyCosts.egress)} (AWS transfer costs)</div>
                      <div>• Maintenance: {formatCurrency(costData.monthlyCosts.maintenance)} (integration overhead)</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold">Annual Loss Sources</h4>
                    <div className="text-sm space-y-1">
                      <div>• Undetected Defects: {formatCurrency(costData.annualLosses.defects)}</div>
                      <div>• System Downtime: {formatCurrency(costData.annualLosses.downtime)}</div>
                      <div>• Engineering Overhead: {formatCurrency(costData.annualLosses.engineering)}</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold">Sources</h4>
                    <div className="text-xs space-y-1 text-muted-foreground">
                      <div>• AWS S3 + CloudFront pricing (public)</div>
                      <div>• Industrial Vision Systems Association</div>
                      <div>• McKinsey Manufacturing Survey 2024</div>
                      <div>• Quality control failure rate studies</div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemSlide;