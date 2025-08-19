import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StatTile } from "@/components/ui/stat-tile";
import { Milestone, Users, DollarSign, TrendingUp, Target, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const ScaleTimelineSlide = () => {
  const timeline = [
    {
      period: "Q1-Q2 2025",
      phase: "Foundation",
      funding: "€500K Pre-Seed",
      team: "2-4 people",
      arr: "€0",
      customers: 0,
      milestones: [
        "Complete MVP development",
        "First pilot customer (Pharma/F&B)",
        "Egypt office setup",
        "Technical validation complete"
      ],
      risks: "Technical execution, pilot success",
      roi: "Foundation building"
    },
    {
      period: "Q3-Q4 2025", 
      phase: "Market Entry",
      funding: "€500K Pre-Seed",
      team: "4-6 people",
      arr: "€120K",
      customers: 2,
      milestones: [
        "2 paying pilot customers",
        "Engineering Lead hired",
        "First successful deployments",
        "Case studies documented"
      ],
      risks: "Customer acquisition, product-market fit",
      roi: "Early revenue validation"
    },
    {
      period: "Q1-Q2 2026",
      phase: "Seed Growth", 
      funding: "€2M Seed",
      team: "8-12 people",
      arr: "€600K",
      customers: 8,
      milestones: [
        "DACH market expansion",
        "Sales Lead hired",
        "3 CV engineers onboarded", 
        "Industrial partnerships"
      ],
      risks: "Market expansion, team scaling",
      roi: "3x ARR growth, €75K ARPU"
    },
    {
      period: "Q3-Q4 2026",
      phase: "Scale Phase 1",
      funding: "€2M Seed",
      team: "12-18 people",
      arr: "€1.7M", 
      customers: 20,
      milestones: [
        "GCC market entry",
        "Platform automation features",
        "Enterprise customer wins",
        "Series A preparation"
      ],
      risks: "International expansion, competition",
      roi: "€85K ARPU, 125% NRR"
    },
    {
      period: "Q1-Q2 2027",
      phase: "Series A Growth",
      funding: "€8M Series A",
      team: "25-35 people", 
      arr: "€4.3M",
      customers: 45,
      milestones: [
        "Multi-market presence",
        "Advanced AI features",
        "Strategic partnerships",
        "International team scaling"
      ],
      risks: "Competitive response, execution at scale",
      roi: "€95K ARPU, path to profitability"
    },
    {
      period: "Q3-Q4 2027",
      phase: "Market Leadership", 
      funding: "€8M Series A",
      team: "40-55 people",
      arr: "€9.4M",
      customers: 85,
      milestones: [
        "Market leadership in MENA/DACH",
        "Profitability achieved",
        "Strategic acquisition offers",
        "IPO/Exit preparation"
      ],
      risks: "Market saturation, exit timing",
      roi: "€110K ARPU, 40%+ gross margin"
    }
  ];

  const investorReturns = [
    {
      round: "Pre-Seed (€500K)",
      equity: "12-15%",
      valuation: "€3-4M pre",
      exitMultiple: "25-35x",
      exitValue: "€12.5-17.5M",
      irr: "85-120%",
      timeline: "30 months"
    },
    {
      round: "Seed (€2M)", 
      equity: "15-20%",
      valuation: "€12-15M pre",
      exitMultiple: "8-12x",
      exitValue: "€16-24M", 
      irr: "65-85%",
      timeline: "24 months"
    },
    {
      round: "Series A (€8M)",
      equity: "20-25%", 
      valuation: "€35-50M pre",
      exitMultiple: "3-5x",
      exitValue: "€24-40M",
      irr: "45-65%", 
      timeline: "18 months"
    }
  ];

  const arrProgression = [
    { year: "2025", arr: "€120K", growth: "", customers: 2, arpu: "€60K" },
    { year: "2026", arr: "€1.7M", growth: "+1,317%", customers: 20, arpu: "€85K" },
    { year: "2027", arr: "€9.4M", growth: "+453%", customers: 85, arpu: "€110K" },
    { year: "2028", arr: "€22M", growth: "+134%", customers: 180, arpu: "€122K" },
    { year: "2029", arr: "€45M", growth: "+105%", customers: 350, arpu: "€128K" }
  ];

  const scaleFactors = [
    {
      factor: "Geographic Expansion",
      approach: "Egypt → DACH → GCC → EU expansion",
      timeline: "18-month cycles per region"
    },
    {
      factor: "Product Evolution", 
      approach: "Pilots → Platform → AI-Enhanced → Autonomous QC",
      timeline: "6-month feature cycles"
    },
    {
      factor: "Market Segments",
      approach: "Pharma/F&B → Automotive → Electronics → Defense",
      timeline: "12-month vertical entry"
    },
    {
      factor: "Business Model",
      approach: "Project → SaaS → Platform → Marketplace", 
      timeline: "Evolution over 36 months"
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
      <div className="relative z-10 text-center space-y-4 mb-6">
        <Badge variant="outline" className="text-sm px-4 py-2 border-primary text-primary bg-transparent">
          PATH TO SCALE
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-[-0.01em]">
          <span className="text-primary">Realistic Growth</span> Timeline
        </h1>
        <p className="text-lg text-muted max-w-4xl mx-auto">
          30-month path to €9.4M ARR with validated milestones and investor returns
        </p>
      </div>

      <div className="relative z-10 flex-1 space-y-6">
        {/* Timeline */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Growth Timeline & Milestones</h3>
          <div className="space-y-3">
            {timeline.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
              >
                <Card className="p-4 bg-card/80 backdrop-blur-sm border border-border rounded-2xl shadow-lg hover:scale-[1.02] transition-all duration-300">
                  <div className="grid grid-cols-12 gap-3 items-start">
                    {/* Timeline Marker */}
                    <div className="col-span-2 text-center">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mb-2">
                        <Milestone className="w-5 h-5 text-primary" />
                      </div>
                      <div className="text-xs font-bold text-primary">{phase.period}</div>
                      <div className="text-xs text-muted">{phase.phase}</div>
                    </div>
                    
                    {/* Key Metrics */}
                    <div className="col-span-3">
                      <div className="space-y-1">
                        <div className="text-base font-bold text-accent">{phase.arr} ARR</div>
                        <div className="text-xs text-white">{phase.customers} customers</div>
                        <div className="text-xs text-muted">{phase.team}</div>
                        <Badge variant="outline" className="text-xs">
                          {phase.funding}
                        </Badge>
                      </div>
                    </div>
                    
                    {/* Milestones */}
                    <div className="col-span-5">
                      <div className="space-y-1">
                        {phase.milestones.map((milestone, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-white">
                            <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0"></div>
                            <span>{milestone}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Risk & ROI */}
                    <div className="col-span-2">
                      <div className="text-xs">
                        <div className="text-warning font-medium mb-1">Key Risks:</div>
                        <div className="text-muted mb-2">{phase.risks}</div>
                        <div className="text-accent font-medium">ROI:</div>
                        <div className="text-muted">{phase.roi}</div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ARR Progression & Investor Returns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* ARR Progression */}
          <div>
            <h3 className="text-lg font-bold text-white mb-3">ARR Growth Trajectory</h3>
            <Card className="p-4 bg-card/80 backdrop-blur-sm border border-border rounded-2xl shadow-lg">
              <div className="space-y-4">
                <div className="grid grid-cols-5 gap-2 pb-3 border-b border-border text-xs font-semibold text-muted">
                  <div>Year</div>
                  <div>ARR</div>
                  <div>Growth</div>
                  <div>Customers</div>
                  <div>ARPU</div>
                </div>
                {arrProgression.map((data, index) => (
                  <motion.div
                    key={index}
                    className="grid grid-cols-5 gap-2 py-2 text-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  >
                    <div className="font-semibold text-white">{data.year}</div>
                    <div className="font-bold text-primary">{data.arr}</div>
                    <div className="text-accent">{data.growth}</div>
                    <div className="text-center text-white">{data.customers}</div>
                    <div className="text-white">{data.arpu}</div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </div>

          {/* Investor Returns */}
          <div>
            <h3 className="text-lg font-bold text-white mb-3">Investor Return Projections</h3>
            <div className="space-y-2">
              {investorReturns.map((investment, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                >
                  <Card className="p-3 bg-card/80 backdrop-blur-sm border border-border rounded-xl shadow-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-bold text-sm text-white">{investment.round}</h4>
                      <Badge variant="secondary" className="text-xs">
                        {investment.timeline}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div>
                        <div className="text-muted">Equity: {investment.equity}</div>
                        <div className="text-muted">Valuation: {investment.valuation}</div>
                      </div>
                      <div>
                        <div className="text-primary font-bold">Exit: {investment.exitValue}</div>
                        <div className="text-accent font-bold">IRR: {investment.irr}</div>
                      </div>
                    </div>
                    <div className="mt-2 text-xs text-muted">
                      Multiple: {investment.exitMultiple} (conservative)
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Scale Factors */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Scaling Methodology</h3>
          <div className="grid grid-cols-2 gap-4">
            {scaleFactors.map((factor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
              >
                <Card className="p-4 bg-card/80 backdrop-blur-sm border border-border rounded-xl shadow-lg">
                  <h4 className="font-bold text-sm text-white mb-2">{factor.factor}</h4>
                  <p className="text-xs text-muted mb-2">{factor.approach}</p>
                  <Badge variant="outline" className="text-xs">
                    {factor.timeline}
                  </Badge>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Summary */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="relative z-10 mt-6"
      >
        <Card className="p-6 bg-card/80 backdrop-blur-sm border border-primary/20 rounded-2xl shadow-lg text-center">
          <h4 className="text-xl font-bold mb-4 text-white">Conservative Exit Scenarios</h4>
          <div className="grid grid-cols-3 gap-6">
            <div>
              <div className="text-2xl font-bold text-primary">€150M</div>
              <div className="text-sm text-muted">Strategic Exit (Month 30)</div>
              <div className="text-xs text-accent">15x revenue multiple</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent">€300M</div>
              <div className="text-sm text-muted">Market Leader (Month 36)</div>
              <div className="text-xs text-accent">25x revenue multiple</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-warning">€500M+</div>
              <div className="text-sm text-muted">IPO Path (Month 48)</div>
              <div className="text-xs text-accent">Platform valuation</div>
            </div>
          </div>
          <p className="text-xs text-muted mt-4">
            Based on comparable SaaS exits in industrial automation sector
          </p>
        </Card>
      </motion.div>
    </div>
  );
};

export default ScaleTimelineSlide;