import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const RoadmapSlide = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const timelinePhases = [
    {
      period: "Months 0-12",
      title: "MVP + First Pilot + Market Validation",
      status: "In Progress",
      milestones: [
        "Complete MVP development with core counting functionality",
        "Secure first pilot customer in Germany/Egypt", 
        "Validate >99% accuracy in real production environment",
        "XPRENEURS program participation (if accepted)",
        "Build foundational team and processes"
      ],
      keyMetric: "Product-Market Fit",
      color: "from-primary to-accent"
    },
    {
      period: "Months 12-18", 
      title: "Seed-Ready Phase",
      status: "Planned",
      milestones: [
        "Scale to 3-5 paying customers",
        "Achieve €150K-€300K ARR",
        "Build proven customer success cases",
        "Prepare seed funding materials",
        "Expand engineering team (2-3 hires)"
      ],
      keyMetric: "Seed Readiness",
      color: "from-accent to-warning"
    },
    {
      period: "Months 18-24",
      title: "Seed Growth & Scale", 
      status: "Target",
      milestones: [
        "Close seed round: €500K-€1M",
        "Scale to €500K-€1M ARR",
        "Expand to 10+ enterprise customers",
        "International market entry",
        "Build scalable operations & customer success"
      ],
      keyMetric: "Scale Achievement",
      color: "from-warning to-primary"
    }
  ];

  const realisticTargets = [
    { value: "€300K", label: "ARR Target Month 18", color: "primary" },
    { value: "€1M", label: "ARR Target Month 24", color: "accent" },
    { value: "4-6 mo", label: "Customer ROI Time", color: "warning" }
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
          EXECUTION TIMELINE
        </Badge>
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          <span className="text-primary">Month-Based Timeline</span>
        </h1>
        <p className="text-sm text-muted max-w-3xl mx-auto">
          Clear 24-month path from MVP to €1M ARR with realistic milestones
        </p>
      </div>

      <div className="relative z-10 flex-1 space-y-6">
        {/* Timeline Phases */}
        {timelinePhases.map((phase, index) => (
          <motion.div
            key={index}
            ref={index === 0 ? ref : null}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <Card className="p-6 bg-card/80 backdrop-blur-sm border border-border rounded-2xl shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{phase.title}</h3>
                  <div className="text-sm text-primary font-medium">{phase.period}</div>
                </div>
                <Badge variant="outline" className={
                  phase.color.includes('primary') 
                    ? "border-primary text-primary bg-primary/10"
                    : phase.color.includes('accent')
                    ? "border-accent text-accent bg-accent/10" 
                    : "border-warning text-warning bg-warning/10"
                }>
                  {phase.status}
                </Badge>
              </div>
              
              {/* Key Metric Highlight */}
              <div className="mb-4 p-3 bg-primary/5 rounded-lg border border-primary/20">
                <div className="text-sm font-medium text-primary">{phase.keyMetric}</div>
              </div>
              
              {/* Timeline Milestones */}
              <div className="space-y-2">
                {phase.milestones.map((milestone, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + (index * 0.2) + (itemIndex * 0.1), duration: 0.4 }}
                    className="flex items-start gap-3"
                  >
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      phase.status === 'In Progress' 
                        ? 'bg-primary' 
                        : phase.status === 'Planned'
                        ? 'bg-accent'
                        : 'bg-muted/50'
                    }`}></div>
                    <span className="text-sm text-muted flex-1">{milestone}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Realistic Targets */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.6 }}
        className="relative z-10 mt-6"
      >
        <div className="grid grid-cols-3 gap-4">
          {realisticTargets.map((target, index) => (
            <Card key={index} className={`p-4 bg-card/80 backdrop-blur-sm border rounded-2xl shadow-lg text-center ${
              target.color === 'primary' 
                ? 'border-primary/20'
                : target.color === 'accent'
                ? 'border-accent/20'
                : 'border-warning/20'
            }`}>
              <div className={`text-lg font-bold mb-1 ${
                target.color === 'primary'
                  ? 'text-primary'
                  : target.color === 'accent'
                  ? 'text-accent'
                  : 'text-warning'
              }`}>{target.value}</div>
              <div className="text-xs text-muted">{target.label}</div>
            </Card>
          ))}
        </div>
        
        <div className="text-xs text-muted text-center mt-4">
          Conservative estimates based on B2B SaaS benchmarks • XPRENEURS Program alignment
        </div>
      </motion.div>
    </div>
  );
};

export default RoadmapSlide;