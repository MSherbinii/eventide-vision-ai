import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { formatNumber } from "@/lib/numberFormat";
import { TrendingUp, Target, Clock } from "lucide-react";

const InvestorROISlide = () => {
  const investmentScenario = {
    amount: 500000,
    equity: 25,
    description: "€500K for 25% equity"
  };

  const timeline = [
    {
      period: "Months 0-12",
      phase: "MVP + First Pilot + Validation",
      details: ["Complete MVP development", "Secure first pilot customer", "Validate product-market fit", "Build initial team"],
      color: "primary"
    },
    {
      period: "Months 12-18", 
      phase: "Seed-Ready (Fundraising Window)",
      details: ["3-5 paid deployments", "Proven customer success", "Seed round preparation", "Scale team & operations"],
      color: "accent"
    },
    {
      period: "Months 18-24",
      phase: "Seed Growth & Scaling",
      details: ["Scale customer base", "Product iteration", "Market expansion", "Team growth"],
      color: "warning"
    }
  ];

  const exitScenarios = [
    { valuation: 10000000, multiple: "5x", timeframe: "30-36 months", probability: "Conservative" },
    { valuation: 20000000, multiple: "10x", timeframe: "36-42 months", probability: "Realistic" },
    { valuation: 50000000, multiple: "25x", timeframe: "42-48 months", probability: "Optimistic" }
  ];

  const getReturnForEquity = (valuation: number) => {
    return (valuation * investmentScenario.equity) / 100;
  };

  return (
    <div className="w-full h-full flex flex-col px-6 py-4 bg-gradient-to-br from-background via-[hsl(220_34%_8%)] to-[hsl(142_76%_8%)]">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/8 via-transparent to-accent/10"></div>
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/8 rounded-full blur-3xl"></div>
      </div>
      
      {/* Header */}
      <div className="relative z-10 text-center space-y-3 mb-6">
        <Badge variant="outline" className="text-sm px-4 py-2 border-primary text-primary bg-transparent">
          INVESTOR RETURNS
        </Badge>
        <h1 className="text-3xl md:text-4xl font-bold text-white tracking-[-0.01em]">
          <span className="text-primary">Investor ROI</span> Projection
        </h1>
        <p className="text-sm text-muted max-w-3xl mx-auto">
          Clear timeline and return scenarios for {investmentScenario.description}
        </p>
      </div>

      <div className="relative z-10 flex-1 space-y-6">
        {/* Investment Scenario */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="p-6 bg-card/80 backdrop-blur-sm border border-primary/20 rounded-2xl shadow-lg text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Target className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-bold text-white">Investment Scenario</h2>
            </div>
            <div className="text-3xl font-bold text-primary mb-2">{investmentScenario.description}</div>
            <p className="text-muted">Pre-seed funding to reach seed-ready milestones</p>
          </Card>
        </motion.div>

        {/* Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {timeline.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <Card className={`p-4 bg-card/80 backdrop-blur-sm border rounded-2xl shadow-lg h-full ${
                phase.color === 'primary' ? 'border-primary/20' :
                phase.color === 'accent' ? 'border-accent/20' : 'border-warning/20'
              }`}>
                <div className="mb-3">
                  <Badge variant="outline" className={
                    phase.color === 'primary' ? "border-primary text-primary bg-primary/10" :
                    phase.color === 'accent' ? "border-accent text-accent bg-accent/10" :
                    "border-warning text-warning bg-warning/10"
                  }>
                    {phase.period}
                  </Badge>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{phase.phase}</h3>
                <ul className="space-y-1 text-xs text-muted">
                  {phase.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full mt-1.5 ${
                        phase.color === 'primary' ? 'bg-primary' :
                        phase.color === 'accent' ? 'bg-accent' : 'bg-warning'
                      }`}></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Exit Scenarios */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Card className="p-6 bg-card/80 backdrop-blur-sm border border-accent/20 rounded-2xl shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-6 h-6 text-accent" />
              <h3 className="text-xl font-bold text-white">Return Scenarios (25% Equity)</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {exitScenarios.map((scenario, index) => (
                <div key={index} className="text-center p-4 bg-background/50 rounded-lg border border-border">
                  <Badge variant="outline" className="mb-2 text-xs">
                    {scenario.probability}
                  </Badge>
                  <div className="text-xl font-bold text-accent mb-1">
                    {formatNumber(getReturnForEquity(scenario.valuation), true)}
                  </div>
                  <div className="text-sm text-primary font-semibold mb-1">
                    {scenario.multiple} MOIC
                  </div>
                  <div className="text-xs text-muted mb-2">
                    {formatNumber(scenario.valuation, true)} valuation
                  </div>
                  <div className="flex items-center justify-center gap-1 text-xs text-muted">
                    <Clock className="w-3 h-3" />
                    {scenario.timeframe}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-4 p-3 bg-primary/5 rounded-lg border border-primary/20 text-center">
              <p className="text-xs text-muted">
                Returns based on B2B SaaS benchmarks for industrial automation. Conservative estimates assume 10x revenue multiples.
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default InvestorROISlide;