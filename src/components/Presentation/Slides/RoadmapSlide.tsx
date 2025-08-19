import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import TimelineGantt from "@/components/Charts/TimelineGantt";

const RoadmapSlide = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
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
    <div className="w-full h-full flex flex-col px-6 py-4" 
         style={{ background: 'linear-gradient(180deg, #0F2440 0%, #0A1526 35%, #0B172A 100%)' }}>
      {/* Header */}
      <div className="text-center space-y-3 mb-6">
        <Badge variant="outline" className="text-sm px-4 py-2 border-[#E6C069] text-[#E6C069] bg-transparent">
          24-MONTH ROADMAP
        </Badge>
        <h1 className="text-3xl md:text-4xl font-bold text-[#F2F6FA]">
          <span className="text-[#E6C069]">Path to Scale</span>
        </h1>
        <p className="text-sm text-[#CBD5E1] max-w-3xl mx-auto">
          From MVP to market leader: absolute dates with verified program timelines
        </p>
      </div>

      <div className="flex-1 grid grid-cols-3 gap-6">
        {/* Left Column - Key Milestones */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-[#F2F6FA]">Key Milestones</h3>
          <div className="space-y-3">
            {keyMilestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="p-4 hover:scale-105 transition-all duration-300 bg-[#122339]/92 border border-[#2C3D58] shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
                  <h4 className="font-bold text-sm text-[#E6C069] mb-2">
                    {milestone.quarter}
                  </h4>
                  <ul className="space-y-1">
                    {milestone.items.map((item, i) => (
                      <li key={i} className="text-xs text-[#CBD5E1]">
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
          <h3 className="text-xl font-bold text-[#F2F6FA] mb-4">Development Phases</h3>
          <div className="space-y-4">
            {[
              { name: "Foundation & Setup", progress: 85, milestones: [
                { title: "Company formed", achieved: true },
                { title: "EVK4 ordered", achieved: true },
                { title: "MVP Alpha", achieved: false }
              ]},
              { name: "XPRENEURS & Pilots", progress: 25, milestones: [
                { title: "Application", achieved: false },
                { title: "Pilot LOIs", achieved: false },
                { title: "Demo Day", achieved: false }
              ]},
              { name: "Scale & Growth", progress: 5, milestones: [
                { title: "Paid pilots", achieved: false },
                { title: "Seed round", achieved: false },
                { title: "Team expansion", achieved: false }
              ]}
            ].map((phase, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <h4 className="text-sm font-semibold text-[#F2F6FA]">{phase.name}</h4>
                  <span className="text-xs text-[#93A1B5]">{phase.progress}%</span>
                </div>
                
                <div className="relative" ref={index === 0 ? ref : null}>
                  <div className="absolute inset-0 h-4 bg-[#2C3D58] rounded-full" />
                  <motion.div 
                    className="h-4 bg-gradient-to-r from-[#00D1C1] to-[#E6C069] rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: isInView ? `${phase.progress}%` : "0%" }}
                    transition={{ duration: 1.5, delay: index * 0.2 }}
                  />
                </div>

                {/* Milestones */}
                <div className="flex justify-between items-center mt-2">
                  {phase.milestones.map((milestone, mIndex) => (
                    <motion.div 
                      key={mIndex} 
                      className="flex flex-col items-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: isInView ? 1 : 0 }}
                      transition={{ duration: 0.5, delay: (index * 0.2) + (mIndex * 0.1) + 1 }}
                    >
                      <div className={`w-3 h-3 rounded-full ${milestone.achieved ? 'bg-[#E6C069]' : 'bg-[#00D1C1]'} mb-1 shadow-lg`} />
                      <span className="text-xs text-[#93A1B5] text-center max-w-[80px]">{milestone.title}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-xs text-[#93A1B5] text-center mt-4">
            Africa/Cairo timezone. Dates aligned to XPRENEURS #19 cadence.
          </div>
        </div>
      </div>

      <motion.div 
        className="mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <div className="grid grid-cols-3 gap-4">
          <Card className="p-4 bg-[#122339]/92 border border-[#E6C069]/20 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
            <h4 className="font-semibold text-sm mb-2 text-[#F2F6FA]">🎯 XPRENEURS Advantage</h4>
            <p className="text-xs text-[#CBD5E1]">
              Batch #19 (Mar-May 2026) provides Germany market entry + €25K funding
            </p>
          </Card>
          
          <Card className="p-4 bg-[#122339]/92 border border-[#00D1C1]/20 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
            <h4 className="font-semibold text-sm mb-2 text-[#F2F6FA]">⚡ First Mover Edge</h4>
            <p className="text-xs text-[#CBD5E1]">
              First mover in MENA with full-stack event-based PaaS (hardware-agnostic)
            </p>
          </Card>
          
          <Card className="p-4 bg-[#122339]/92 border border-[#2C3D58] shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
            <h4 className="font-semibold text-sm mb-2 text-[#F2F6FA]">📈 Market Timing</h4>
            <p className="text-xs text-[#CBD5E1]">
              13% CAGR market + production-ready event sensors + automation demand
            </p>
          </Card>
        </div>
      </motion.div>
    </div>
  );
};

export default RoadmapSlide;