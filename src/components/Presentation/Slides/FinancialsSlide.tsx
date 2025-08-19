import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, TrendingUp, Calculator, Target } from "lucide-react";
import { motion } from "framer-motion";

const FinancialsSlide = () => {
  const useOfFunds = [
    {
      category: "Team & Salaries",
      amount: "€1.2M",
      percentage: 48,
      description: "Engineering Lead + 5 engineers over 18 months",
      color: "from-blue-500 to-blue-600"
    },
    {
      category: "Hardware & Equipment", 
      amount: "€350K",
      percentage: 14,
      description: "EVK4 kits, RGB cameras, edge compute, lab setup",
      color: "from-green-500 to-green-600"
    },
    {
      category: "Operations & Office",
      amount: "€450K", 
      percentage: 18,
      description: "Egypt office, Germany legal, insurance, compliance",
      color: "from-purple-500 to-purple-600"
    },
    {
      category: "Sales & Marketing",
      amount: "€300K",
      percentage: 12,
      description: "Trade shows, pilots, demos, sales materials",
      color: "from-orange-500 to-orange-600"
    },
    {
      category: "Working Capital",
      amount: "€200K",
      percentage: 8,
      description: "6-month runway buffer, unexpected costs",
      color: "from-red-500 to-red-600"
    }
  ];

  const unitEconomics = [
    {
      metric: "Customer Acquisition Cost (CAC)",
      value: "€25K",
      description: "Sales cycle 6-9 months, enterprise deals",
      trend: "↓ with scale"
    },
    {
      metric: "Annual Contract Value (ACV)",
      value: "€85K",
      description: "Platform license + integration + support",
      trend: "↑ with expansion"
    },
    {
      metric: "LTV:CAC Ratio",
      value: "6.8:1",
      description: "Strong unit economics, 3+ year contracts",
      trend: "↑ improving"
    },
    {
      metric: "Gross Margin",
      value: "78%",
      description: "Software-heavy model, minimal COGS",
      trend: "→ stable"
    },
    {
      metric: "Payback Period",
      value: "11 months",
      description: "Fast recovery, recurring revenue model",
      trend: "↓ target <10mo"
    },
    {
      metric: "Net Revenue Retention",
      value: "125%",
      description: "Expansion within existing customers",
      trend: "↑ with maturity"
    }
  ];

  const revenueProjection = [
    { year: "Year 1", customers: 2, arpu: "€60K", revenue: "€120K", team: 4 },
    { year: "Year 2", customers: 20, arpu: "€85K", revenue: "€1.7M", team: 15 },
    { year: "Year 3", customers: 85, arpu: "€110K", revenue: "€9.4M", team: 50 },
    { year: "Year 4", customers: 180, arpu: "€122K", revenue: "€22M", team: 85 },
    { year: "Year 5", customers: 350, arpu: "€128K", revenue: "€45M", team: 150 }
  ];

  const fundingStrategy = [
    {
      round: "Pre-Seed",
      amount: "€500K",
      timeline: "Now",
      investors: "Angels, family offices",
      valuation: "€3-4M pre",
      use: "MVP, first pilot, team"
    },
    {
      round: "Seed",
      amount: "€2M", 
      timeline: "Month 12",
      investors: "VCs, strategic",
      valuation: "€12-15M pre",
      use: "Scale team, expand markets"
    },
    {
      round: "Series A",
      amount: "€8M",
      timeline: "Month 24",
      investors: "Growth VCs",
      valuation: "€35-50M pre", 
      use: "International expansion"
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
          FINANCIALS & FUNDING
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-[-0.01em]">
          <span className="text-primary">Path to Profitability</span><br />Strong Unit Economics
        </h1>
        <p className="text-lg text-muted max-w-4xl mx-auto">
          Software-heavy business model with high margins and fast payback periods
        </p>
      </div>

      <div className="relative z-10 flex-1 space-y-6">
        {/* Use of Funds */}
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <h3 className="text-lg font-bold mb-3">Use of Funds (€2.5M Pre-Seed + Seed)</h3>
            <div className="grid grid-cols-3 gap-3">
              {useOfFunds.map((fund, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="p-3 text-center hover:scale-105 transition-all duration-300 h-full">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${fund.color} flex items-center justify-center text-white mx-auto mb-2`}>
                      <span className="text-sm font-bold">{fund.percentage}%</span>
                    </div>
                    <h4 className="font-bold text-xs mb-1">{fund.category}</h4>
                    <div className="text-lg font-bold gradient-text mb-1">{fund.amount}</div>
                    <p className="text-xs text-muted-foreground">{fund.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-3">Funding Strategy</h3>
            <div className="space-y-2">
              {fundingStrategy.map((round, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                >
                  <Card className="p-3">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-xs">{round.round}</h4>
                      <Badge variant="outline" className="text-xs">{round.timeline}</Badge>
                    </div>
                    <div className="text-base font-bold text-primary mb-1">{round.amount}</div>
                    <p className="text-xs text-muted-foreground mb-1">{round.valuation}</p>
                    <p className="text-xs text-muted-foreground">{round.use}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Unit Economics */}
        <div>
          <h3 className="text-lg font-bold mb-3">Unit Economics & Key Metrics</h3>
          <div className="grid grid-cols-6 gap-3">
            {unitEconomics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
              >
                <Card className="p-3 text-center hover:scale-105 transition-all duration-300 h-full">
                  <div className="text-lg font-bold gradient-text mb-1">{metric.value}</div>
                  <h4 className="font-semibold text-xs mb-1">{metric.metric}</h4>
                  <p className="text-xs text-muted-foreground mb-1">{metric.description}</p>
                  <Badge variant="secondary" className="text-xs">
                    {metric.trend}
                  </Badge>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Revenue Projection */}
        <div>
          <h3 className="text-lg font-bold mb-3">5-Year Revenue Projection</h3>
          <Card className="p-4">
            <div className="space-y-4">
              <div className="grid grid-cols-5 gap-4 pb-3 border-b border-border text-sm font-semibold">
                <div>Year</div>
                <div>Customers</div>
                <div>ARPU</div>
                <div>Revenue</div>
                <div>Team Size</div>
              </div>
              {revenueProjection.map((projection, index) => (
                <motion.div
                  key={index}
                  className="grid grid-cols-5 gap-4 py-2 border-b border-border/30 text-sm"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                >
                  <div className="font-semibold">{projection.year}</div>
                  <div className="text-center">{projection.customers}</div>
                  <div className="text-center">{projection.arpu}</div>
                  <div className="font-bold text-primary">{projection.revenue}</div>
                  <div className="text-center">{projection.team}</div>
                </motion.div>
              ))}
            </div>
          </Card>
        </div>

        {/* Key Financial Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <Card className="p-4 bg-gradient-to-r from-green-500/10 to-blue-500/10 border-green-500/20">
            <h4 className="text-lg font-bold mb-3 text-center">🎯 Investment Highlights</h4>
            <div className="grid grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-xl font-bold gradient-text">€45M</div>
                <div className="text-xs text-muted-foreground">Revenue by Year 5</div>
              </div>
              <div>
                <div className="text-xl font-bold gradient-text">78%</div>
                <div className="text-xs text-muted-foreground">Gross Margin</div>
              </div>
              <div>
                <div className="text-xl font-bold gradient-text">11mo</div>
                <div className="text-xs text-muted-foreground">Payback Period</div>
              </div>
              <div>
                <div className="text-xl font-bold gradient-text">6.8:1</div>
                <div className="text-xs text-muted-foreground">LTV:CAC Ratio</div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default FinancialsSlide;