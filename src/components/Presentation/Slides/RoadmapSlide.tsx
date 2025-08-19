import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import TimelineGantt from "@/components/Charts/TimelineGantt";
import { motion } from "framer-motion";

const RoadmapSlide = () => {
  const keyMilestones = [
    {
      quarter: "Q4 2025",
      items: ["Company setup", "EVK4 procurement", "MVP alpha"]
    },
    {
      quarter: "Q1-Q2 2026", 
      items: ["XPRENEURS Batch #19", "Pilot LOI", "Demo day"]
    },
    {
      quarter: "Q3-Q4 2026",
      items: ["2 active pilots", "First paid conversion"]
    },
    {
      quarter: "Q1-Q2 2027",
      items: ["Seed funding", "Team expansion", "v2 platform"]
    }
  ];

  return (
    <div className="w-full h-full flex flex-col px-6 py-4">
      {/* Header */}
      <div className="text-center space-y-3 mb-6">
        <Badge variant="outline" className="text-sm px-4 py-2">
          24-MONTH ROADMAP
        </Badge>
        <h1 className="text-3xl md:text-4xl font-bold">
          <span className="gradient-text">Path to Scale</span>
        </h1>
        <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
          From MVP to market leader: absolute dates with verified program timelines
        </p>
      </div>

      <div className="flex-1 grid grid-cols-3 gap-6">
        {/* Left Column - Key Milestones */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Key Milestones</h3>
          <div className="space-y-3">
            {keyMilestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="p-4 hover:scale-105 transition-all duration-300 glow-effect">
                  <h4 className="font-bold text-sm text-accent mb-2">
                    {milestone.quarter}
                  </h4>
                  <ul className="space-y-1">
                    {milestone.items.map((item, i) => (
                      <li key={i} className="text-xs text-muted-foreground">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Center & Right Columns - Timeline */}
        <div className="col-span-2">
          <TimelineGantt />
        </div>
      </div>

        <div className="text-xs text-[#93A1B5] text-center mt-3">
          Africa/Cairo timezone. Dates align with XPRENEURS Batch #19 cadence.
        </div>
      <motion.div 
        className="mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <div className="grid grid-cols-3 gap-4">
          <Card className="p-4 bg-gradient-to-r from-warning/10 to-warning/5 border-warning/20">
            <h4 className="font-semibold text-sm mb-2">🎯 XPRENEURS Advantage</h4>
            <p className="text-xs text-muted-foreground">
              Batch #19 (Mar-May 2026) provides Germany market entry + €25K funding
            </p>
          </Card>
          
          <Card className="p-4 bg-gradient-to-r from-accent/10 to-accent/5 border-accent/20">
            <h4 className="font-semibold text-sm mb-2">⚡ First Mover Edge</h4>
            <p className="text-xs text-muted-foreground">
              First mover in MENA with full-stack event-based PaaS (hardware-agnostic)
            </p>
          </Card>
          
          <Card className="p-4 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
            <h4 className="font-semibold text-sm mb-2">📈 Market Timing</h4>
            <p className="text-xs text-muted-foreground">
              13% CAGR market + production-ready event sensors + automation demand
            </p>
          </Card>
        </div>
      </motion.div>
    </div>
  );
};

export default RoadmapSlide;