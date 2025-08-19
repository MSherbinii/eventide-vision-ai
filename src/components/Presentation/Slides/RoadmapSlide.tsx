import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const RoadmapSlide = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const phases = [
    {
      name: "Foundation & Setup",
      timeline: "Q4 2025",
      progress: 85,
      items: ["GmbH set-up", "Egypt office lease", "3× EVK4 kits procured", "MVP alpha"],
      color: "from-primary to-accent"
    },
    {
      name: "XPRENEURS & Pilots", 
      timeline: "Mar–May 2026",
      progress: 25,
      items: ["Application window opens Dec 11, 2025", "1 DACH pilot LOI before program", "Demo Day by May", "≥2 pilots live"],
      color: "from-accent to-warning"
    },
    {
      name: "Scale & Revenue",
      timeline: "H2 2026 – Q2 2027", 
      progress: 5,
      items: ["1 paid conversion", ">99.5% counting accuracy", "Seed $1–2M raised", "Hire Eng Lead"],
      color: "from-warning to-primary"
    }
  ];

  return (
    <div className="w-full h-full flex flex-col px-6 py-4 bg-gradient-to-br from-background via-[hsl(220_34%_8%)] to-[hsl(48_100%_8%)]">
      {/* Dynamic Chromatic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-warning/8 via-transparent to-primary/10"></div>
        <div className="absolute top-1/5 left-1/6 w-96 h-96 bg-warning/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/5 w-80 h-80 bg-primary/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.2s' }}></div>
        <div className="absolute top-2/3 left-1/2 w-72 h-72 bg-accent/6 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2.8s' }}></div>
      </div>
      
      {/* Header */}
      <div className="relative z-10 text-center space-y-3 mb-6">
        <Badge variant="outline" className="text-sm px-4 py-2 border-primary text-primary bg-transparent">
          24-MONTH ROADMAP
        </Badge>
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          <span className="text-primary">Path to Scale</span>
        </h1>
        <p className="text-sm text-muted max-w-3xl mx-auto">
          From MVP to market leader: absolute dates with verified program timelines
        </p>
      </div>

      <div className="relative z-10 flex-1 space-y-8">
        {/* Timeline Phases */}
        {phases.map((phase, index) => (
          <motion.div
            key={index}
            ref={index === 0 ? ref : null}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3, duration: 0.6 }}
          >
            <Card className="p-6 bg-card/80 backdrop-blur-sm border border-border rounded-2xl shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{phase.name}</h3>
                  <div className="text-sm text-primary font-medium">{phase.timeline}</div>
                </div>
                <Badge variant="outline" className="border-primary text-primary bg-primary/10">
                  {phase.progress}% Complete
                </Badge>
              </div>
              
              {/* Progress Bar */}
              <div className="relative mb-4" ref={index === 0 ? ref : null}>
                <div className="h-3 bg-muted/20 rounded-full overflow-hidden">
                  <motion.div 
                    className={`h-full bg-gradient-to-r ${phase.color} rounded-full`}
                    initial={{ width: "0%" }}
                    animate={{ width: isInView ? `${phase.progress}%` : "0%" }}
                    transition={{ duration: 1.5, delay: index * 0.2 }}
                  />
                </div>
                <div className="absolute right-0 top-4 text-xs text-muted">
                  {phase.progress}%
                </div>
              </div>
              
              {/* Milestone Items */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {phase.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + (index * 0.3) + (itemIndex * 0.1), duration: 0.4 }}
                    className="flex items-center gap-2"
                  >
                    <div className={`w-2 h-2 rounded-full ${
                      (index === 0 && itemIndex < 2) || (index === 1 && itemIndex === 0)
                        ? 'bg-primary' 
                        : 'bg-accent'
                    }`}></div>
                    <span className="text-sm text-muted">{item}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* KPI Targets */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="relative z-10 mt-6"
      >
        <div className="grid grid-cols-3 gap-4">
          <Card className="p-4 bg-card/80 backdrop-blur-sm border border-primary/20 rounded-2xl shadow-lg text-center">
            <div className="text-lg font-bold text-primary mb-1">€100k+</div>
            <div className="text-xs text-muted">ARR Target by Q4 2026</div>
          </Card>
          
          <Card className="p-4 bg-card/80 backdrop-blur-sm border border-accent/20 rounded-2xl shadow-lg text-center">
            <div className="text-lg font-bold text-accent mb-1">&lt;6 months</div>
            <div className="text-xs text-muted">Customer Payback Time</div>
          </Card>
          
          <Card className="p-4 bg-card/80 backdrop-blur-sm border border-warning/20 rounded-2xl shadow-lg text-center">
            <div className="text-lg font-bold text-warning mb-1">10+ lines</div>
            <div className="text-xs text-muted">Active Deployments Target</div>
          </Card>
        </div>
        
        <div className="text-xs text-muted text-center mt-4">
          Africa/Cairo timezone. Dates aligned to XPRENEURS #19 cadence.
        </div>
      </motion.div>
    </div>
  );
};

export default RoadmapSlide;