import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"; 
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
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
    <div className="w-full h-full flex flex-col px-8 py-6 bg-gradient-to-br from-background via-[hsl(220_34%_8%)] to-[hsl(142_69%_8%)] max-w-[1320px] mx-auto">
      {/* Chromatic Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-accent/10"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      </div>
      {/* Header */}
      <div className="relative z-10 text-center space-y-4 mb-8">
        <Badge variant="outline" className="text-sm px-4 py-2 border-primary text-primary bg-transparent">
          BIG & GROWING MARKET
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-[-0.01em]">
          <span className="text-primary">Perfect Storm</span> of Opportunity
        </h1>
        <p className="text-lg text-muted max-w-4xl mx-auto">
          Global machine-vision is $20.38B (2024) and projected to $41.74B by 2030 (13.0% CAGR). The Quality Assurance & Inspection application is the largest segment and the ME&A region is among the fastest-growing.
        </p>
      </div>

      <div className="relative z-10 flex-1 grid grid-cols-2 gap-8">
        {/* Left Column - Why Now & Expandable Chips */}
        <div className="space-y-6">
          {/* Why Now Section */}
          <div>
            <h3 className="text-3xl font-bold mb-4 text-white">Why Now?</h3>
            <div className="grid grid-cols-2 gap-4">
              {timingFactors.map((factor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="p-6 text-center hover:scale-105 transition-all duration-300 bg-card border border-border rounded-2xl shadow-lg h-full">
                    <div className="mb-3 flex justify-center">
                      {factor.icon}
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">{factor.percentage}</div>
                    <div className="font-semibold mb-2 text-sm text-white">{factor.title}</div>
                    <p className="text-xs text-muted">{factor.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-4">
              <p className="text-xs text-muted-foreground">
                Source: Bill Gross (Idealab) - TED Talk Analysis
              </p>
            </div>
          </div>

          {/* Expandable Market Chips */}
          <div>
            <h3 className="text-3xl font-bold mb-4 text-white">What this means for Eventide</h3>
            <div className="space-y-3">
              {expandableChips.map((chip, index) => (
                <Dialog key={chip.id}>
                  <DialogTrigger asChild>
                    <Card className="p-4 bg-card border border-border/50 hover:border-primary/50 rounded-2xl shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-white text-sm line-clamp-1">{chip.title}</span>
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
            <h4 className="text-xl font-bold mb-3 text-white">TAM / SAM / SOM</h4>
            <div className="space-y-2">
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
        <div className="flex flex-col space-y-6">
          <h3 className="text-3xl font-bold text-center text-white">Global Machine Vision Market 2024–2030</h3>
          <div className="flex-1 bg-card border border-border rounded-2xl shadow-lg p-6">
            <MarketAreaChart />
          </div>
          
          {/* Application Share Card */}
          <Card className="p-6 bg-card border border-border rounded-2xl shadow-lg">
            <h4 className="text-lg font-bold text-white mb-3 text-center">Application Share</h4>
            <div className="text-center">
              <div className="text-xl font-bold text-accent">QA & Inspection</div>
              <div className="text-sm text-muted-foreground mt-1">Largest segment (illustrative; see source)</div>
              <div className="mt-3 text-xs text-muted">
                <strong className="text-white">Hover micro-panel:</strong> Largest application: QA/Inspection; Fastest-growing regions include MEA
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* First Mover Advantage */}
      <motion.div 
        className="relative z-10 mt-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <div className="text-center p-6 bg-card border border-primary/20 rounded-2xl shadow-lg">
          <h4 className="text-xl font-bold mb-3 text-white">🎯 First Mover Edge in MENA + EU</h4>
          <p className="text-base mb-4 text-muted">
            <strong className="text-primary">First-mover edge in MENA (GCC) + EU</strong> — fewer local event-based specialists; leverage German network via XPRENEURS.
          </p>
          <div className="grid grid-cols-3 gap-6 text-sm">
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