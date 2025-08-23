import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"; 
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { TrendingUp, Clock, Lightbulb, Users, Building, Target, ExpandIcon } from "lucide-react";
import { MarketAreaChart } from "@/components/Charts/MarketAreaChart";
import { motion } from "framer-motion";
import { useState } from "react";

const MarketSlide = () => {
  const [expandedChip, setExpandedChip] = useState<string | null>(null);

  const timingFactors = [
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Timing",
      percentage: "42%",
      description: "Most critical success factor"
    },
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "Team/Execution", 
      percentage: "32%",
      description: "Strong technical leadership"
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-warning" />,
      title: "Idea Validation",
      percentage: "28%",
      description: "Event-based vision addressing real needs"
    },
    {
      icon: <Building className="w-8 h-8 text-accent" />,
      title: "Business Model",
      percentage: "24%",
      description: "Recurring SaaS revenue model"
    }
  ];

  const expandableChips = [
    {
      id: "tam",
      title: "TAM → 41.7B by 2030",
      content: "Global machine-vision grows at ~13% CAGR to ~$41.7B by 2030. QA/Inspection is the largest application."
    },
    {
      id: "niche", 
      title: "Event-based niche under-served",
      content: "Most incumbents are frame-based; event sensors (Sony/Prophesee) create a new performance/cost curve."
    },
    {
      id: "edge",
      title: "Edge AI & cloud MLOps mature", 
      content: "Jetson-class edge + modern CI/CD for models reduce integration time from months to weeks."
    },
    {
      id: "first-mover",
      title: "First-mover in MEA + DACH",
      content: "We target **DACH + GCC** first where capex and automation budgets are highest."
    }
  ];

  return (
    <div className="w-full min-h-screen flex flex-col px-8 py-6 bg-gradient-to-br from-background via-background to-primary/5">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/3 via-transparent to-accent/5"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-accent/8 rounded-full blur-3xl"></div>
      </div>
      {/* Header */}
      <div className="relative z-10 text-center space-y-3 mb-6">
        <Badge variant="outline" className="text-sm px-4 py-2 border-primary text-primary bg-transparent">
          BIG & GROWING MARKET
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
          <span className="text-primary">$41.7B Market</span> by 2030
        </h1>
        <div className="flex items-center justify-center gap-3">
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Machine vision growing at 13% CAGR. Event-based is the next frontier - we're first to market with a complete solution.
          </p>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Badge variant="outline" className="text-[10px] border-accent text-accent cursor-default">Vision 2034</Badge>
              </TooltipTrigger>
              <TooltipContent>
                <div className="text-xs space-y-1">
                  <div><strong>TAM (2034):</strong> ~$69.5B (industry consensus)</div>
                  <div><strong>Drivers:</strong> QA/Inspection, logistics, automotive, electronics</div>
                  <div><strong>Sources:</strong> Grand View Research (2025), MarketsandMarkets (2025)</div>
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

      <div className="relative z-10 flex-1 grid grid-cols-2 gap-6 min-h-0">
        {/* Left Column - Why Now & Expandable Chips */}
        <div className="space-y-5 flex flex-col">
          {/* Why Now Section */}
          <div>
            <h3 className="text-2xl font-bold mb-3 text-white">Why Now?</h3>
            <div className="grid grid-cols-2 gap-3">
              {timingFactors.map((factor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="p-4 text-center hover:shadow-xl transition-all duration-300 bg-card border border-border rounded-xl h-full">
                    <div className="mb-2 flex justify-center">
                      {factor.icon}
                    </div>
                    <div className="text-2xl font-bold text-primary mb-1">{factor.percentage}</div>
                    <div className="font-semibold mb-1 text-sm text-foreground">{factor.title}</div>
                    <p className="text-xs text-muted-foreground line-clamp-2">{factor.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-3">
              <p className="text-xs text-muted-foreground">
                Source: Bill Gross (Idealab) - TED Talk Analysis
              </p>
            </div>
          </div>

          {/* Expandable Market Chips */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-3 text-white">What this means for LuminarX AI</h3>
            <div className="space-y-2">
              {expandableChips.map((chip, index) => (
                <Dialog key={chip.id}>
                  <DialogTrigger asChild>
                    <Card className="p-4 bg-card border border-border/50 hover:border-primary/50 rounded-2xl shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-white text-sm line-clamp-2">{chip.title}</span>
                        <ExpandIcon className="w-4 h-4 text-muted flex-shrink-0 ml-2" />
                      </div>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-md">
                    <div className="p-6">
                      <h4 className="text-lg font-bold mb-3 text-white">{chip.title}</h4>
                      <p className="text-muted">{chip.content}</p>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>

          {/* TAM/SAM/SOM */}
          <div>
            <h4 className="text-lg font-bold mb-2 text-white">TAM / SAM / SOM</h4>
            <div className="space-y-1">
              <div className="text-sm text-muted">
                <strong className="text-white">TAM:</strong> GVR total = $20.38B → $41.74B
              </div>
              <div className="text-sm text-muted">
                <strong className="text-white">SAM:</strong> QA/predictive in Pharma + F&B (conservative % of TAM; validate with pilots)
              </div>
              <div className="text-sm text-muted">
                <strong className="text-white">SOM:</strong> Egypt+GCC+DACH early adopters (target plant count)
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Market Charts */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-2xl font-bold text-center text-white">Global Machine Vision Market 2024–2030</h3>
          <div className="flex-1 bg-card border border-border rounded-xl shadow-md p-4 min-h-0 overflow-hidden">
            <MarketAreaChart />
          </div>
          
          {/* Application Share Card */}
          <Card className="p-4 bg-card border border-border rounded-2xl shadow-lg">
            <h4 className="text-base font-bold text-white mb-2 text-center">Application Share</h4>
            <div className="text-center">
              <div className="text-lg font-bold text-accent">QA & Inspection</div>
              <div className="text-sm text-muted-foreground mt-1">Largest segment (illustrative; see source)</div>
              <div className="mt-2 text-xs text-muted">
                <strong className="text-white">Hover micro-panel:</strong> Largest application: QA/Inspection; Fastest-growing regions include MEA
              </div>
            </div>
          </Card>

          {/* Regional Growth Card */}
          <Card className="p-4 bg-card border border-border rounded-2xl shadow-lg">
            <h4 className="text-base font-bold text-white mb-2 text-center">Regional Growth</h4>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-lg font-bold text-primary">13.5%</div>
                <div className="text-xs text-muted">MEA CAGR</div>
              </div>
              <div>
                <div className="text-lg font-bold text-accent">14.0%</div>
                <div className="text-xs text-muted">UAE CAGR</div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* First Mover Advantage */}
      <motion.div 
        className="relative z-10 mt-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <div className="text-center p-4 bg-card border border-primary/20 rounded-2xl shadow-lg">
          <h4 className="text-lg font-bold mb-2 text-white">🎯 First Mover Edge in MENA + EU</h4>
          <p className="text-sm mb-3 text-muted">
            <strong className="text-primary">First-mover edge in MENA (GCC) + EU</strong> — fewer local event-based specialists; leverage German network via XPRENEURS.
          </p>
          <div className="grid grid-cols-3 gap-4 text-xs">
            <div className="text-muted">
              <strong className="text-white">Sensor vendors ≠ turnkey PaaS:</strong> Prophesee + Sony IMX636 provide hardware, not complete solutions
            </div>
            <div className="text-muted">
              <strong className="text-white">Few integrated options:</strong> Integrators mainly frame-based in industrial QA
            </div>
            <div className="text-muted">
              <strong className="text-white">Perfect timing:</strong> Event sensors matured + edge compute ready + Industry 4.0 budgets
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MarketSlide;