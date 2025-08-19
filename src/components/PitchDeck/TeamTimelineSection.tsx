import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Users, MapPin, Briefcase, GraduationCap, Target, CheckCircle, Clock, DollarSign } from "lucide-react";

const TeamTimelineSection = () => {
  const teamStructure = [
    {
      level: "Class A Engineers",
      count: "3-5",
      salary: "$700-1,000",
      role: "R&D intensive work, AI/ML specialists",
      skills: "Event-based vision, Deep learning, Computer vision"
    },
    {
      level: "Class B Engineers", 
      count: "2-3",
      salary: "$500-700",
      role: "Software development, integrations",
      skills: "Full-stack development, API design, DevOps"
    },
    {
      level: "Class C Engineers",
      count: "1-2",
      salary: "$300-500", 
      role: "Testing, documentation, support",
      skills: "QA testing, Technical writing, Customer support"
    }
  ];

  const timeline = [
    {
      phase: "Phase 1: Foundation",
      timeframe: "0-6 months",
      milestones: [
        "GMBH incorporation in Germany",
        "Egypt R&D office setup",
        "Hire lead engineer (15% ESOP)",
        "Prophesee EVK4 hardware procurement",
        "XPRENEURS incubator application"
      ],
      funding: "Bootstrapped + Pre-seed",
      team: "2-3 people"
    },
    {
      phase: "Phase 2: MVP & Validation", 
      timeframe: "6-12 months",
      milestones: [
        "Complete MVP development",
        "First pilot deployment (Egypt)",
        "XPRENEURS program completion",
        "Validation with 2-3 customers",
        "Seed round preparation"
      ],
      funding: "$250K-500K Pre-seed",
      team: "5-7 people"
    },
    {
      phase: "Phase 3: Growth & Scale",
      timeframe: "12-24 months", 
      milestones: [
        "Y Combinator or Seed VC round",
        "5+ paying customers",
        "European expansion",
        "Partnership with hardware vendors",
        "Series A preparation"
      ],
      funding: "$1-2M Seed",
      team: "10-15 people"
    },
    {
      phase: "Phase 4: Market Leadership",
      timeframe: "24-36 months",
      milestones: [
        "Market leader in event-based vision",
        "Expansion to defence/space sectors",
        "Strategic partnerships",
        "International offices (Dubai/London)",
        "Series A funding"
      ],
      funding: "$5-8M Series A",
      team: "25-35 people"
    }
  ];

  const incubatorPrograms = [
    {
      name: "XPRENEURS",
      status: "Applied - Batch #19",
      timeline: "Q1 2026",
      benefits: [
        "3-month deep-tech incubation",
        "Access to TUM ecosystem",
        "Industry mentorship",
        "European market connections"
      ]
    },
    {
      name: "Y Combinator",
      status: "Target Application",
      timeline: "Winter 2027",
      benefits: [
        "$500K seed investment",
        "Silicon Valley network", 
        "Global investor access",
        "Demo Day exposure"
      ]
    },
    {
      name: "TUM Venture Labs",
      status: "Partnership",
      timeline: "Ongoing",
      benefits: [
        "Technical expertise",
        "Research collaboration",
        "Lab access",
        "Student talent pipeline"
      ]
    }
  ];

  const keyHires = [
    {
      role: "CTO/Lead Engineer",
      priority: "Critical",
      timeline: "Month 3-6",
      equity: "10-15%",
      salary: "$1,000/month",
      description: "Event-based vision expert to lead R&D"
    },
    {
      role: "VP of Engineering",
      priority: "High",
      timeline: "Month 12-18",
      equity: "3-5%", 
      salary: "$800/month",
      description: "Scale engineering team and processes"
    },
    {
      role: "Head of Sales",
      priority: "High",
      timeline: "Month 18-24",
      equity: "2-4%",
      salary: "$1,200/month",
      description: "Build enterprise sales and partnerships"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Team & Timeline Hero */}
        <div className="text-center space-y-6 mb-16">
          <Badge variant="outline" className="text-sm px-4 py-2">
            TEAM & TIMELINE
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold">
            Strategic Execution
            <br />
            <span className="gradient-text">Roadmap</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leveraging Egypt's Class-A engineering talent and strategic incubator partnerships for global expansion.
          </p>
        </div>

        {/* Team Structure */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">Egypt Engineering Team Structure</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamStructure.map((level, index) => (
              <Card key={index} className="p-6 hover:scale-105 transition-all duration-300 glow-effect">
                <div className="text-center space-y-4">
                  <h4 className="text-xl font-bold">{level.level}</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Team Size:</span>
                      <Badge variant="secondary">{level.count}</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Salary (USD/month):</span>
                      <Badge variant="outline">{level.salary}</Badge>
                    </div>
                  </div>
                  <p className="text-sm font-medium">{level.role}</p>
                  <p className="text-xs text-muted-foreground">{level.skills}</p>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl border border-primary/20">
            <h4 className="font-bold mb-2">💰 Egypt Cost Advantage</h4>
            <p className="text-sm text-muted-foreground">
              Class-A engineers in Egypt cost $700-1,000/month vs $8,000-12,000/month in Europe/US. 
              <strong> 10x cost efficiency</strong> while maintaining world-class technical expertise.
            </p>
          </div>
        </div>

        {/* Key Hires */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">Critical Hires & Equity Plan</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {keyHires.map((hire, index) => (
              <Card key={index} className="p-6 hover:scale-105 transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold">{hire.role}</h4>
                    <Badge variant={hire.priority === 'Critical' ? 'destructive' : 'secondary'}>
                      {hire.priority}
                    </Badge>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Timeline:</span>
                      <span>{hire.timeline}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Equity:</span>
                      <Badge variant="outline">{hire.equity}</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Salary:</span>
                      <span>{hire.salary}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{hire.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">Execution Timeline</h3>
          <div className="space-y-8">
            {timeline.map((phase, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold">{phase.phase}</h4>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {phase.timeframe}
                    </Badge>
                  </div>
                  <div className="md:col-span-2">
                    <h5 className="font-semibold mb-3">Key Milestones</h5>
                    <ul className="space-y-2">
                      {phase.milestones.map((milestone, milestoneIndex) => (
                        <li key={milestoneIndex} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          {milestone}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center gap-2 text-sm font-medium mb-1">
                        <DollarSign className="w-4 h-4" />
                        Funding
                      </div>
                      <p className="text-sm text-muted-foreground">{phase.funding}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-sm font-medium mb-1">
                        <Users className="w-4 h-4" />
                        Team Size
                      </div>
                      <p className="text-sm text-muted-foreground">{phase.team}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Incubator Strategy */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">Strategic Incubation Plan</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {incubatorPrograms.map((program, index) => (
              <Card key={index} className="p-6 hover:scale-105 transition-all duration-300 glow-effect">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xl font-bold">{program.name}</h4>
                    <Badge variant={program.status.includes('Applied') ? 'secondary' : program.status.includes('Target') ? 'outline' : 'default'}>
                      {program.status}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {program.timeline}
                  </div>
                  <ul className="space-y-2">
                    {program.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start gap-2 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl border border-accent/20">
            <h4 className="text-2xl font-bold mb-4">🚀 Network & Acceleration Strategy</h4>
            <p className="text-lg mb-6">
              Strategic partnerships with top-tier incubators provide access to expertise, funding, and global markets while maintaining cost-efficient operations in Egypt.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <strong>Technical Excellence:</strong> Access to TUM's deep-tech expertise and research facilities
              </div>
              <div>
                <strong>Market Access:</strong> European and global customer connections through incubator networks
              </div>
              <div>
                <strong>Capital Efficiency:</strong> 10x cost advantage with Egypt-based engineering team
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamTimelineSection;