import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StatTile } from "@/components/ui/stat-tile";
import { Milestone, Users, DollarSign, TrendingUp, Target, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import TimelineGantt from "@/components/Charts/TimelineGantt";

const ScaleTimelineSlide = () => {
  const timeline = [
    {
      period: "Months 0-6",
      phase: "MVP Development",
      funding: "€500K Pre-Seed",
      team: "3 co-founders",
      arr: "€0",
      customers: 0,
      milestones: [
        "Complete MVP development",
        "Hire CTO and 2 CV engineers", 
        "Technical validation complete",
        "Lab setup in Egypt"
      ],
      risks: "Technical execution, team building",
      roi: "Foundation building"
    },
    {
      period: "Months 6-18", 
      phase: "First Pilot & Validation",
      funding: "€500K Pre-Seed",
      team: "6-8 people",
      arr: "€29K",
      customers: 1,
      milestones: [
        "First paying pilot customer",
        "Full-stack engineers hired",
        "Successful deployment & case study",
        "Market validation complete"
      ],
      risks: "Customer acquisition, product-market fit",
      roi: "€29K ARPU validated"
    },
    {
      period: "Months 18-30",
      phase: "Growth & Seed Prep", 
      funding: "€500K Pre-Seed",
      team: "8-10 people",
      arr: "€145K",
      customers: 5,
      milestones: [
        "4 additional customers",
        "Sales processes refined",
        "Seed funding secured", 
        "DACH market entry plan"
      ],
      risks: "Market expansion readiness, funding",
      roi: "€29K ARPU maintained"
    },
    {
      period: "Months 30-42",
      phase: "Seed Growth",
      funding: "€2M Seed",
      team: "12-15 people",
      arr: "€435K", 
      customers: 15,
      milestones: [
        "DACH market expansion",
        "Sales Lead hired",
        "Platform automation features",
        "Enterprise customer wins"
      ],
      risks: "International expansion, competition",
      roi: "€29K ARPU, 110% NRR"
    },
    {
      period: "Months 42-54",
      phase: "Scale Phase",
      funding: "€2M Seed",
      team: "18-22 people", 
      arr: "€725K",
      customers: 25,
      milestones: [
        "GCC market entry",
        "Advanced AI features",
        "Strategic partnerships",
        "Series A preparation"
      ],
      risks: "Competitive response, execution at scale",
      roi: "€29K ARPU, path to profitability"
    },
    {
      period: "Months 54-60",
      phase: "Series A Growth", 
      funding: "€5M Series A",
      team: "25-35 people",
      arr: "€1.16M",
      customers: 40,
      milestones: [
        "Multi-market presence",
        "Cash flow positive", 
        "Strategic partnership offers",
        "€20M+ valuation"
      ],
      risks: "Market competition, execution at scale",
      roi: "€29K ARPU, 70%+ gross margin"
    }
  ];

  const investorReturns = [
    {
      round: "Pre-Seed (€500K for 15%)",
      equity: "15%",
      valuation: "€3.3M pre-money",
      exitMonth: "60",
      exitValuation: "€20M", 
      returnMultiple: "6x",
      exitValue: "€3M",
      irr: "42%",
      roiMonths: "48 months to 4x return"
    },
    {
      round: "Seed (€2M for 20%)", 
      equity: "20%",
      valuation: "€8M pre-money",
      exitMonth: "60",
      exitValuation: "€20M",
      returnMultiple: "2.5x",
      exitValue: "€4M", 
      irr: "25%",
      roiMonths: "30 months to 2x return"
    },
    {
      round: "Series A (€5M for 25%)",
      equity: "25%", 
      valuation: "€15M pre-money",
      exitMonth: "60", 
      exitValuation: "€20M",
      returnMultiple: "1.25x",
      exitValue: "€5M",
      irr: "8%", 
      roiMonths: "Capital preservation"
    }
  ];

  const arrProgression = [
    { year: "Year 1", arr: "€29K", growth: "", customers: 1, arpu: "€29K" },
    { year: "Year 2", arr: "€145K", growth: "+400%", customers: 5, arpu: "€29K" },
    { year: "Year 3", arr: "€435K", growth: "+200%", customers: 15, arpu: "€29K" },
    { year: "Year 4", arr: "€725K", growth: "+67%", customers: 25, arpu: "€29K" },
    { year: "Year 5", arr: "€1.16M", growth: "+60%", customers: 40, arpu: "€29K" }
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
    <div className="w-full min-h-screen flex flex-col px-6 py-4 bg-gradient-to-br from-background via-[hsl(220_34%_8%)] to-[hsl(142_69%_8%)]">
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
          <span className="text-primary">Validated Growth</span> Timeline
        </h1>
        <p className="text-lg text-muted max-w-4xl mx-auto">
          60-month path to €1.16M ARR with realistic growth and validated €29K ARPU
        </p>
      </div>

      <div className="relative z-10 flex-1 space-y-6">
        {/* Simplified 2D Gantt Timeline (replaces 3D) */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Growth Timeline & Milestones</h3>
          <TimelineGantt />
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
                        {investment.exitMonth} mo
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div>
                        <div className="text-muted">Equity: {investment.equity}</div>
                        <div className="text-muted">Pre-money: {investment.valuation}</div>
                      </div>
                      <div>
                        <div className="text-primary font-bold">Return: {investment.exitValue}</div>
                        <div className="text-accent font-bold">Multiple: {investment.returnMultiple}</div>
                      </div>
                    </div>
                    <div className="mt-2 text-xs text-muted">
                      ROI Timeline: {investment.roiMonths}
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
                <div className="text-2xl font-bold text-primary">€20M</div>
                <div className="text-sm text-muted">Conservative Exit (Month 60)</div>
                <div className="text-xs text-accent">17x revenue multiple</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">€35M</div>
                <div className="text-sm text-muted">Strong Growth (Month 72)</div>
                <div className="text-xs text-accent">25x revenue multiple</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-warning">€60M+</div>
                <div className="text-sm text-muted">Market Leader (Month 84)</div>
                <div className="text-xs text-accent">Platform valuation</div>
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <p className="text-sm text-primary font-bold">Pre-Seed Investor (€500K for 15%): €3M return = 6x multiple in 60 months</p>
              <p className="text-xs text-muted">Based on realistic industrial automation startup growth patterns</p>
            </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default ScaleTimelineSlide;