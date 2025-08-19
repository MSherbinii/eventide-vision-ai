import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Target, Rocket, Building2 } from "lucide-react";
import { motion } from "framer-motion";

const RoadmapSlide = () => {
  const roadmapPhases = [
    {
      phase: "0-6 Months",
      title: "Foundation & Setup",
      icon: <Building2 className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600",
      milestones: [
        "GmbH incorporation in Germany",
        "Egypt R&D office setup (Cairo/Alexandria)",
        "Purchase 3× Prophesee EVK4 HD kits",
        "Apply to XPRENEURS/UnternehmerTUM",
        "MVP development & initial demos"
      ],
      keyMetrics: "Legal entity, hardware, team foundation",
      budget: "€180K"
    },
    {
      phase: "6-12 Months", 
      title: "Product & Pilots",
      icon: <Target className="w-8 h-8" />,
      color: "from-green-500 to-green-600",
      milestones: [
        "Hire Engineering Lead (Egypt)",
        "Complete pharma packaging pilot (GCC)",
        "First paid customer contract",
        "Apply to YC/Techstars if traction",
        "Platform v1.0 with web portal"
      ],
      keyMetrics: "1-2 pilots, first revenue",
      budget: "€320K"
    },
    {
      phase: "12-18 Months",
      title: "Scale & Funding",
      icon: <Rocket className="w-8 h-8" />,
      color: "from-purple-500 to-purple-600",
      milestones: [
        "Seed round (€1.5-2M)",
        "Hire 3-5 A-level engineers (Egypt)",
        "ESOP implementation (10-15%)",
        "Platform v2.0 with predictive + MES integration",
        "Germany market entry"
      ],
      keyMetrics: "€500K ARR, 5+ customers",
      budget: "€850K"
    },
    {
      phase: "18-24 Months",
      title: "Expansion & Growth",
      icon: <MapPin className="w-8 h-8" />,
      color: "from-orange-500 to-orange-600",
      milestones: [
        "10+ enterprise customers",
        "Dubai or London sales office",
        "Series A preparation",
        "Defense/aerospace pilot evaluation",
        "Partnership with major integrator"
      ],
      keyMetrics: "€1.5M ARR, market leadership",
      budget: "€1.2M"
    }
  ];

  const programs = [
    {
      name: "XPRENEURS",
      type: "Incubator",
      timeline: "0-6 months",
      value: "€100K + Munich ecosystem",
      status: "Applied"
    },
    {
      name: "UnternehmerTUM",
      type: "Accelerator", 
      timeline: "6-12 months",
      value: "€25K + corporate partnerships",
      status: "Target"
    },
    {
      name: "YC/Techstars",
      type: "Global Accelerator",
      timeline: "12-18 months",
      value: "€100K + US market access",
      status: "Conditional"
    },
    {
      name: "NVIDIA Inception",
      type: "Partner Program",
      timeline: "Ongoing",
      value: "GPU credits + technical support",
      status: "Member"
    }
  ];

  const keyHires = [
    {
      role: "Engineering Lead",
      timeline: "Month 6",
      location: "Egypt",
      description: "Senior C++/Python engineer with computer vision experience"
    },
    {
      role: "Computer Vision Engineers (3)",
      timeline: "Month 12-15",
      location: "Egypt",
      description: "Event-based algorithms, deep learning, embedded systems"
    },
    {
      role: "Sales Lead",
      timeline: "Month 18",
      location: "Germany/Dubai",
      description: "Industrial automation sales, DACH + GCC markets"
    },
    {
      role: "DevOps Engineer",
      timeline: "Month 20",
      location: "Egypt",
      description: "Cloud infrastructure, edge deployment, monitoring"
    }
  ];

  return (
    <div className="w-full h-full flex flex-col px-8 py-6">
      {/* Header */}
      <div className="text-center space-y-4 mb-8">
        <Badge variant="outline" className="text-lg px-6 py-2">
          24-MONTH ROADMAP
        </Badge>
        <h1 className="text-5xl md:text-6xl font-bold">
          <span className="gradient-text">Foundation to Scale</span><br />in 2 Years
        </h1>
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
          Strategic milestones from GmbH setup to Series A, leveraging Egypt's talent advantage and DACH market access
        </p>
      </div>

      <div className="flex-1 space-y-8">
        {/* Roadmap Timeline */}
        <div className="grid grid-cols-4 gap-6">
          {roadmapPhases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <Card className="p-6 hover:scale-105 transition-all duration-300 h-full">
                <div className="space-y-4">
                  {/* Phase Header */}
                  <div className="text-center">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${phase.color} flex items-center justify-center text-white mx-auto mb-3`}>
                      {phase.icon}
                    </div>
                    <Badge variant="outline" className="text-xs mb-2">
                      {phase.phase}
                    </Badge>
                    <h3 className="font-bold text-lg">{phase.title}</h3>
                  </div>

                  {/* Milestones */}
                  <div className="space-y-2">
                    {phase.milestones.map((milestone, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{milestone}</span>
                      </div>
                    ))}
                  </div>

                  {/* Metrics & Budget */}
                  <div className="pt-3 border-t border-border">
                    <div className="text-xs text-muted-foreground mb-1">Key Metrics:</div>
                    <div className="font-semibold text-xs mb-2">{phase.keyMetrics}</div>
                    <Badge variant="secondary" className="text-xs">
                      Budget: {phase.budget}
                    </Badge>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Programs & Key Hires Grid */}
        <div className="grid grid-cols-2 gap-8">
          {/* Left Column - Programs */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Incubation & Acceleration Programs</h3>
            <div className="space-y-3">
              {programs.map((program, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                >
                  <Card className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-sm">{program.name}</h4>
                        <p className="text-xs text-muted-foreground">{program.type} • {program.timeline}</p>
                        <p className="text-xs text-primary font-medium">{program.value}</p>
                      </div>
                      <Badge 
                        variant={program.status === 'Applied' ? 'default' : program.status === 'Member' ? 'secondary' : 'outline'}
                        className="text-xs"
                      >
                        {program.status}
                      </Badge>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column - Key Hires */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Key Hiring Milestones</h3>
            <div className="space-y-3">
              {keyHires.map((hire, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                >
                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-semibold text-sm">{hire.role}</h4>
                          <Badge variant="outline" className="text-xs">
                            {hire.timeline}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground mb-1">📍 {hire.location}</p>
                        <p className="text-xs text-muted-foreground">{hire.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ESOP & Equity Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <Card className="p-6 bg-gradient-to-r from-accent/10 to-primary/10 border-accent/20">
            <h4 className="text-xl font-bold mb-4">🏆 Employee Stock Ownership Plan (ESOP)</h4>
            <div className="grid grid-cols-3 gap-6 text-sm">
              <div>
                <strong>Pool Size:</strong> 10-15% of total equity<br/>
                <span className="text-muted-foreground">Standard for tech startups</span>
              </div>
              <div>
                <strong>Vesting:</strong> 4-year vest, 1-year cliff<br/>
                <span className="text-muted-foreground">Retain top talent in Egypt</span>
              </div>
              <div>
                <strong>Target:</strong> A-level engineers from Cairo/Alexandria<br/>
                <span className="text-muted-foreground">Salary bands + equity upside</span>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default RoadmapSlide;