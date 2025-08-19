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
    { year: "Year 2", customers: 8, arpu: "€75K", revenue: "€600K", team: 8 },
    { year: "Year 3", customers: 20, arpu: "€85K", revenue: "€1.7M", team: 15 },
    { year: "Year 4", customers: 45, arpu: "€95K", revenue: "€4.3M", team: 28 },
    { year: "Year 5", customers: 85, arpu: "€110K", revenue: "€9.4M", team: 50 }
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
    <div className="w-full h-full flex flex-col px-8 py-6">
      {/* Header */}
      <div className="text-center space-y-4 mb-6">
        <Badge variant="outline" className="text-lg px-6 py-2">
          FINANCIALS & FUNDING
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold">
          <span className="gradient-text">Path to Profitability</span><br />Strong Unit Economics
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Software-heavy business model with high margins and fast payback periods
        </p>
      </div>

      <div className="flex-1 space-y-6">
        {/* Use of Funds */}
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2">
            <h3 className="text-xl font-bold mb-4">Use of Funds (€2.5M Pre-Seed + Seed)</h3>
            <div className="grid grid-cols-3 gap-4">
              {useOfFunds.map((fund, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="p-4 text-center hover:scale-105 transition-all duration-300 h-full">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${fund.color} flex items-center justify-center text-white mx-auto mb-3`}>
                      <span className="text-lg font-bold">{fund.percentage}%</span>
                    </div>
                    <h4 className="font-bold text-sm mb-1">{fund.category}</h4>
                    <div className="text-xl font-bold gradient-text mb-2">{fund.amount}</div>
                    <p className="text-xs text-muted-foreground">{fund.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Funding Strategy</h3>
            <div className="space-y-3">
              {fundingStrategy.map((round, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                >
                  <Card className="p-3">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-sm">{round.round}</h4>
                      <Badge variant="outline" className="text-xs">{round.timeline}</Badge>
                    </div>
                    <div className="text-lg font-bold text-primary mb-1">{round.amount}</div>
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
          <h3 className="text-xl font-bold mb-4">Unit Economics & Key Metrics</h3>
          <div className="grid grid-cols-6 gap-4">
            {unitEconomics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
              >
                <Card className="p-4 text-center hover:scale-105 transition-all duration-300 h-full">
                  <div className="text-2xl font-bold gradient-text mb-2">{metric.value}</div>
                  <h4 className="font-semibold text-xs mb-2">{metric.metric}</h4>
                  <p className="text-xs text-muted-foreground mb-2">{metric.description}</p>
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
          <h3 className="text-xl font-bold mb-4">5-Year Revenue Projection</h3>
          <Card className="p-6">
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
          <Card className="p-6 bg-gradient-to-r from-green-500/10 to-blue-500/10 border-green-500/20">
            <h4 className="text-xl font-bold mb-4 text-center">🎯 Investment Highlights</h4>
            <div className="grid grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold gradient-text">€9.4M</div>
                <div className="text-sm text-muted-foreground">Revenue by Year 5</div>
              </div>
              <div>
                <div className="text-2xl font-bold gradient-text">78%</div>
                <div className="text-sm text-muted-foreground">Gross Margin</div>
              </div>
              <div>
                <div className="text-2xl font-bold gradient-text">11mo</div>
                <div className="text-sm text-muted-foreground">Payback Period</div>
              </div>
              <div>
                <div className="text-2xl font-bold gradient-text">6.8:1</div>
                <div className="text-sm text-muted-foreground">LTV:CAC Ratio</div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default FinancialsSlide;