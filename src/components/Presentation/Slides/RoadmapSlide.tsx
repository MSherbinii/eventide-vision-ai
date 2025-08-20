import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const RoadmapSlide = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const timelinePhases = [
    {
      period: "Q4 2025",
      title: "Foundation & First Steps",
      status: "In Progress",
      milestones: [
        "Eventide GmbH incorporation completed",
        "Cairo office established & equipped", 
        "Event camera hardware secured (3x EVK4)",
        "MVP alpha version with basic counting"
      ],
      keyMetric: "MVP Ready",
      color: "from-primary to-accent"
    },
    {
      period: "Q1 2026", 
      title: "XPRENEURS Program & Validation",
      status: "Planned",
      milestones: [
        "XPRENEURS application submitted (Dec 11, 2025)",
        "1 German pilot LOI secured before program",
        "Beta testing with initial manufacturing partner",
        "Accuracy validation: >99% counting precision"
      ],
      keyMetric: "Program Acceptance",
      color: "from-accent to-warning"
    },
    {
      period: "Q2-Q3 2026",
      title: "Pilot Deployment & Market Entry", 
      status: "Roadmap",
      milestones: [
        "2 active pilot deployments running",
        "XPRENEURS Demo Day presentation (May 2026)",
        "First customer testimonials & case studies",
        "Product-market fit validation in industrial QA"
      ],
      keyMetric: "Market Validation",
      color: "from-warning to-primary"
    },
    {
      period: "Q4 2026 - Q1 2027",
      title: "Revenue & Team Growth",
      status: "Target",  
      milestones: [
        "First paid customer conversion",
        "€25-50K ARR milestone achieved",
        "Seed funding round: €500K-1M raised",
        "Engineering Lead hired (Germany/Egypt)"
      ],
      keyMetric: "Revenue Stream",
      color: "from-primary to-accent"
    }
  ];

  const realisticTargets = [
    { value: "€50K", label: "ARR Target End 2026", color: "primary" },
    { value: "3-5", label: "Active Customers", color: "accent" },
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
          <span className="text-primary">24-Month Roadmap</span>
        </h1>
        <p className="text-sm text-muted max-w-3xl mx-auto">
          Realistic milestones from MVP to first revenue with verified dates
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