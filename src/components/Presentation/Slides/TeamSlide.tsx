import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, MapPin, GraduationCap, Briefcase, Target, Star } from "lucide-react";
import { motion } from "framer-motion";

const TeamSlide = () => {
  const foundingTeam = [
    {
      name: "Mohamed El Sherbini",
      role: "Co-Founder & CEO", 
      background: "Event-based computer vision expertise, technical leadership",
      skills: ["Neuromorphic algorithms", "Industrial systems", "Strategic vision"]
    },
    {
      name: "Aly Barakat",
      role: "Co-Founder & COO",
      background: "Operations and business development expertise", 
      skills: ["Operations scaling", "Business strategy", "Market development"]
    },
    {
      name: "Peter Essam", 
      role: "Co-Founder & CIO",
      background: "Information systems and technology infrastructure",
      skills: ["System architecture", "IT infrastructure", "Data management"]
    }
  ];

  const keyHires = [
    {
      role: "Chief Technology Officer (CTO)",
      location: "Germany (Munich)",
      timeline: "0-6 months",
      requirements: [
        "PhD/MS Computer Vision or related",
        "10+ years CV/ML leadership experience", 
        "Event-based processing expertise",
        "Industrial systems architecture",
        "Team building and technical strategy"
      ],
      equity: "2-4%",
      priority: "Critical"
    },
    {
      role: "Computer Vision Engineers (3)",
      location: "Egypt", 
      timeline: "0-6 months",
      requirements: [
        "Deep learning & computer vision",
        "Event-based processing knowledge",
        "Real-time systems optimization",
        "Python/C++ proficiency"
      ],
      equity: "0.3-0.8% each (ESOP)",
      priority: "Critical"
    },
    {
      role: "Full-Stack Engineers (2)",
      location: "Egypt",
      timeline: "3-9 months", 
      requirements: [
        "SaaS platform development",
        "React/Node.js expertise",
        "Cloud infrastructure (AWS/Azure)",
        "Industrial IoT integration"
      ],
      equity: "0.2-0.5% each",
      priority: "Critical"
    },
    {
      role: "Sales Head",
      location: "Germany/Dubai",
      timeline: "After first pilot (6-12 months)",
      requirements: [
        "Industrial automation sales", 
        "DACH + GCC market experience",
        "Enterprise B2B relationships",
        "Technical sales capability"
      ],
      equity: "0.5-1.0%",
      priority: "High"
    }
  ];

  const egyptAdvantages = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "World-Class Talent",
      description: "Cairo University, AUC, German University - top CS programs",
      metric: "15K+ CS graduates annually"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Cost Advantage",
      description: "Tiered compensation bands for Egypt-based engineers",
      metric: "Class A: $700–1,000/mo • B: $500–700 • C: $300–500"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Strategic Location", 
      description: "Bridge between Europe and GCC markets",
      metric: "3-4 hour flights to key markets"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Government Support",
      description: "Tech startup incentives and regulatory support",
      metric: "0% tax first 2 years"
    }
  ];

  const esopDetails = {
    poolSize: "10-15%",
    vestingSchedule: "4 years, 1-year cliff",
    eligibility: "Full-time employees after 90 days",
    strikes: "Fair market value at grant",
    acceleration: "Double trigger on acquisition"
  };

  const advisoryBoard = [
    {
      profile: "Industrial Automation Executive",
      value: "DACH market access, enterprise relationships",
      equity: "0.5-1.0%"
    },
    {
      profile: "Computer Vision Research Leader",
      value: "Technical guidance, academic connections",
      equity: "0.25-0.5%"
    },
    {
      profile: "GCC Manufacturing Executive",
      value: "Middle East market entry, customer introductions",
      equity: "0.5-1.0%"
    }
  ];

  return (
    <div className="w-full h-screen flex flex-col px-6 py-4 bg-gradient-to-br from-background via-[hsl(220_34%_8%)] to-[hsl(142_69%_8%)]">
      {/* Chromatic Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-accent/10"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      {/* Header */}
      <div className="relative z-10 text-center space-y-4 mb-8">
        <Badge variant="outline" className="text-sm px-4 py-2 border-primary text-primary bg-transparent">
          TEAM & HIRING STRATEGY
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-[-0.01em]">
          <span className="text-primary">Experienced Founders</span><br />+ Critical Tech Hires
        </h1>
        <p className="text-lg text-muted max-w-4xl mx-auto">
          Proven founding team with complementary skills, focused on rapid technical team scaling
        </p>
      </div>

      <div className="relative z-10 flex-1 grid grid-cols-2 gap-6">
        {/* Left Column - Current Team & Hiring Plan */}
        <div className="space-y-6">
          {/* Founding Team */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Founding Team</h3>
            <div className="space-y-4">
              {foundingTeam.map((founder, index) => (
                <Card key={index} className="p-6 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-primary-glow flex items-center justify-center">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold mb-1 text-white">{founder.name}</h4>
                      <p className="text-sm font-medium text-primary mb-2">{founder.role}</p>
                      <p className="text-xs text-muted mb-3">{founder.background}</p>
                      <div className="grid grid-cols-3 gap-2">
                        {founder.skills.map((skill, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs text-center">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Critical Hires Timeline */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Critical Hires (Next 12 Months)</h3>
            <div className="space-y-4">
              {keyHires.map((hire, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                >
                  <Card className="p-4 hover:scale-102 transition-all duration-300">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-bold text-sm">{hire.role}</h4>
                        <p className="text-xs text-muted-foreground">📍 {hire.location} • {hire.timeline}</p>
                      </div>
                      <div className="text-right">
                        <Badge 
                          variant={hire.priority === 'Critical' ? 'default' : hire.priority === 'High' ? 'secondary' : 'outline'}
                          className="text-xs mb-1"
                        >
                          {hire.priority}
                        </Badge>
                        <p className="text-xs text-primary font-medium">{hire.equity}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {hire.requirements.map((req, idx) => (
                        <div key={idx} className="flex items-center gap-1 text-xs">
                          <Star className="w-3 h-3 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{req}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Egypt Advantage & ESOP */}
        <div className="space-y-6">
          {/* Egypt Advantages */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Why Egypt Hub?</h3>
            <div className="grid grid-cols-2 gap-4">
              {egyptAdvantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                >
                  <Card className="p-4 text-center hover:scale-105 transition-all duration-300 h-full">
                    <div className="text-primary mb-3 flex justify-center">
                      {advantage.icon}
                    </div>
                    <h4 className="font-bold text-sm mb-2">{advantage.title}</h4>
                    <p className="text-xs text-muted-foreground mb-2">{advantage.description}</p>
                    <Badge variant="outline" className="text-xs">
                      {advantage.metric}
                    </Badge>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ESOP Details */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Employee Stock Option Plan</h3>
            <Card className="p-6 bg-gradient-to-r from-accent/10 to-primary/10 border-accent/20">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong>Pool Size:</strong> {esopDetails.poolSize}<br/>
                    <span className="text-muted-foreground">Of total company equity</span>
                  </div>
                  <div>
                    <strong>Vesting:</strong> {esopDetails.vestingSchedule}<br/>
                    <span className="text-muted-foreground">Standard tech schedule</span>
                  </div>
                  <div>
                    <strong>Eligibility:</strong> {esopDetails.eligibility}<br/>
                    <span className="text-muted-foreground">After probation period</span>
                  </div>
                  <div>
                    <strong>Exercise:</strong> {esopDetails.strikes}<br/>
                    <span className="text-muted-foreground">At time of grant</span>
                  </div>
                </div>
                <div className="pt-2 border-t border-border/30">
                  <p className="text-xs text-muted-foreground">
                    <strong>Accelerated Vesting:</strong> {esopDetails.acceleration} - protects employees in M&A scenarios
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Advisory Board */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Strategic Advisory Board</h3>
            <div className="space-y-3">
              {advisoryBoard.map((advisor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                >
                  <Card className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm">{advisor.profile}</h4>
                        <p className="text-xs text-muted-foreground">{advisor.value}</p>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {advisor.equity}
                      </Badge>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Hiring Timeline Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <Card className="p-6 bg-gradient-to-r from-green-500/10 to-blue-500/10 border-green-500/20 text-center">
              <h4 className="text-lg font-bold mb-3">Team Growth Target</h4>
              <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <div className="text-2xl font-bold gradient-text">6-9</div>
                <div className="text-muted-foreground">Critical hires by Month 12</div>
              </div>
                <div>
                  <div className="text-2xl font-bold gradient-text">€60K</div>
                  <div className="text-muted-foreground">Avg senior engineer salary</div>
                </div>
                <div>
                  <div className="text-2xl font-bold gradient-text">12%</div>
                  <div className="text-muted-foreground">ESOP pool allocation</div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TeamSlide;