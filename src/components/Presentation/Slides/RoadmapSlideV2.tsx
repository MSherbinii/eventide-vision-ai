import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Circle, Target, Users, Rocket, Building } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const RoadmapSlideV2 = () => {
  const [selectedPhase, setSelectedPhase] = useState(1);

  const phases = [
    {
      id: 1,
      quarter: "Q1-Q2 2025",
      title: "Foundation",
      status: "current",
      icon: <Building className="w-6 h-6" />,
      budget: "€200K",
      milestones: [
        { task: "Establish GmbH in Germany", done: true },
        { task: "Hire 3-5 Class A engineers in Egypt", done: false },
        { task: "Purchase Prophesee evaluation kits", done: false },
        { task: "Develop MVP with core features", done: false }
      ],
      kpis: {
        team: "8 people",
        product: "MVP ready",
        customers: "2 pilots"
      }
    },
    {
      id: 2,
      quarter: "Q3-Q4 2025",
      title: "Validation",
      status: "upcoming",
      icon: <Target className="w-6 h-6" />,
      budget: "€300K",
      milestones: [
        { task: "Complete 3 paid pilot projects", done: false },
        { task: "Join XPRENEURS incubator", done: false },
        { task: "Achieve product-market fit", done: false },
        { task: "Hire sales lead in Germany", done: false }
      ],
      kpis: {
        arr: "€300K",
        customers: "5 pilots",
        nps: "50+"
      }
    },
    {
      id: 3,
      quarter: "Q1-Q2 2026",
      title: "Scale",
      status: "upcoming",
      icon: <Rocket className="w-6 h-6" />,
      budget: "Seed Round",
      milestones: [
        { task: "Expand to 10+ customers", done: false },
        { task: "Enter GCC market via Dubai", done: false },
        { task: "Build customer success team", done: false },
        { task: "Launch v2.0 with AI features", done: false }
      ],
      kpis: {
        arr: "€1.5M",
        customers: "15",
        team: "20 people"
      }
    },
    {
      id: 4,
      quarter: "Q3-Q4 2026",
      title: "Expand",
      status: "upcoming",
      icon: <Users className="w-6 h-6" />,
      budget: "Series A",
      milestones: [
        { task: "30+ enterprise customers", done: false },
        { task: "Defense & aerospace entry", done: false },
        { task: "Strategic partnerships", done: false },
        { task: "€10M ARR milestone", done: false }
      ],
      kpis: {
        arr: "€10M+",
        customers: "50+",
        markets: "5 countries"
      }
    }
  ];

  const currentPhase = phases.find(p => p.id === selectedPhase) || phases[0];

  return (
    <div className="w-full h-full flex flex-col px-8 py-6 bg-gradient-to-br from-background to-accent/5">
      {/* Clean Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
      
      {/* Header */}
      <div className="relative z-10 text-center space-y-3 mb-8">
        <Badge variant="outline" className="text-sm px-4 py-2 border-primary text-primary">
          18-MONTH ROADMAP
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
          Clear Path to <span className="text-primary">€10M ARR</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Disciplined execution with measurable milestones at each phase
        </p>
      </div>

      <div className="relative z-10 flex-1 space-y-6">
        {/* Interactive Timeline */}
        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-border -translate-y-1/2"></div>
          <div className="relative flex justify-between">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.id}
                className="relative flex flex-col items-center cursor-pointer"
                onClick={() => setSelectedPhase(phase.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={`
                  w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300
                  ${selectedPhase === phase.id 
                    ? 'bg-primary text-white shadow-lg scale-110' 
                    : phase.status === 'current'
                      ? 'bg-accent text-white'
                      : 'bg-card border-2 border-border text-muted-foreground hover:border-primary'
                  }
                `}>
                  {phase.icon}
                </div>
                <div className="absolute -bottom-8 text-center">
                  <p className={`text-sm font-semibold ${
                    selectedPhase === phase.id ? 'text-primary' : 'text-muted-foreground'
                  }`}>
                    {phase.title}
                  </p>
                  <p className="text-xs text-muted-foreground">{phase.quarter}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Phase Details */}
        <motion.div
          key={selectedPhase}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-12 gap-6 mt-16"
        >
          {/* Milestones */}
          <div className="col-span-7">
            <Card className="p-6 h-full">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-foreground">
                  {currentPhase.title} Milestones
                </h3>
                <Badge variant="secondary" className="text-sm">
                  Budget: {currentPhase.budget}
                </Badge>
              </div>
              <div className="space-y-3">
                {currentPhase.milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    {milestone.done ? (
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    ) : (
                      <Circle className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                    )}
                    <span className={`text-sm ${
                      milestone.done ? 'text-foreground' : 'text-muted-foreground'
                    }`}>
                      {milestone.task}
                    </span>
                  </motion.div>
                ))}
              </div>
            </Card>
          </div>

          {/* KPIs & Metrics */}
          <div className="col-span-5 space-y-4">
            <Card className="p-6">
              <h4 className="text-lg font-bold text-foreground mb-4">Success Metrics</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg">
                  <span className="text-sm font-medium text-foreground">ARR Target</span>
                  <span className="text-lg font-bold text-primary">{currentPhase.kpis.arr || "—"}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-accent/10 rounded-lg">
                  <span className="text-sm font-medium text-foreground">Customers</span>
                  <span className="text-lg font-bold text-accent">{currentPhase.kpis.customers}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <span className="text-sm font-medium text-foreground">Team Size</span>
                  <span className="text-lg font-bold text-foreground">{currentPhase.kpis.team || currentPhase.kpis.nps || currentPhase.kpis.markets}</span>
                </div>
              </div>
            </Card>

            {/* Risk Mitigation */}
            <Card className="p-4 bg-warning/10 border-warning/20">
              <h5 className="font-semibold text-foreground mb-2">De-risking Strategy</h5>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Gradual team scaling with proven milestones</li>
                <li>• Customer validation before major expansion</li>
                <li>• Strategic advisor network for market entry</li>
              </ul>
            </Card>
          </div>
        </motion.div>

        {/* Bottom Progress Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="p-6 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <div className="grid grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary">€500K</div>
                <div className="text-sm text-muted-foreground">Pre-Seed Ask</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">18 mo</div>
                <div className="text-sm text-muted-foreground">To €10M ARR</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">50</div>
                <div className="text-sm text-muted-foreground">Target Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">45x</div>
                <div className="text-sm text-muted-foreground">Expected Return</div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default RoadmapSlideV2;
