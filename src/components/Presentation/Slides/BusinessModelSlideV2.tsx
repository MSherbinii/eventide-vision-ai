import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, TrendingUp, DollarSign, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";

const BusinessModelSlideV2 = () => {
  const pricingTiers = [
    {
      name: "Pilot",
      price: "€2,800",
      period: "per line/month",
      description: "1-2 lines • validation phase",
      features: [
        "Core detection (counting/quality)",
        "KPI dashboard & alerts",
        "Standard monitoring",
        "Email support"
      ],
      target: "Small manufacturers",
      color: "border-primary/20"
    },
    {
      name: "Growth", 
      price: "€4,200",
      period: "per line/month",
      description: "3-8 lines • production scale",
      features: [
        "Anomaly detection models",
        "Audit trails and compliance",
        "MES/ERP API integration",
        "Priority support"
      ],
      target: "Mid-size manufacturers",
      color: "border-accent/20",
      popular: true
    },
    {
      name: "Enterprise",
      price: "€3,500",
      period: "per line/month",
      description: "Full facility • multi-site",
      features: [
        "Custom AI development",
        "Multi-site admin console",
        "24/7 dedicated support",
        "On-prem options"
      ],
      target: "Large corporations",
      color: "border-warning/20"
    }
  ];

  const revenueStreams = [
    {
      stream: "Integration Fee",
      description: "One-time setup & customization",
      amount: "€25K–€55K",
      icon: <Zap className="w-5 h-5" />
    },
    {
      stream: "Monthly SaaS",
      description: "Per line subscription",
      amount: "€2.8K–€4.2K/line",
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      stream: "Maintenance & Support",
      description: "20% of integration annually",
      amount: "€5K–€11K/year",
      icon: <DollarSign className="w-5 h-5" />
    }
  ];

  const unitEconomics = {
    cac: "€25,000",
    ltv: "€100,000",
    payback: "7.8 months",
    grossMargin: "75%",
    nrr: "115%"
  };

  const marketComparison = [
    {
      solution: "Traditional Integrators",
      setup: "€50K-€200K",
      monthly: "Varies", 
      timeToValue: "6–12 months",
      accuracy: "85–95%",
      dataEfficiency: "Low",
      highlight: false
    },
    {
      solution: "Cloud Vision APIs",
      setup: "Low",
      monthly: "Per-use",
      timeToValue: "Weeks",
      accuracy: "General",
      dataEfficiency: "Low",
      highlight: false
    },
    {
      solution: "Our Event-Based SaaS",
      setup: "€25K–€55K",
      monthly: "€2.8K–€4.2K",
      timeToValue: "4–8 weeks",
      accuracy: ">95% validated",
      dataEfficiency: "75% reduction",
      highlight: true
    }
  ];

  return (
    <div className="w-full min-h-screen flex flex-col px-8 py-6 bg-background relative">
      {/* Unified Animated Background */}
      <div className="animated-bg">
        <div className="floating-orb orb-primary" />
        <div className="floating-orb orb-accent" />
        <div className="floating-orb orb-warning" />
      </div>
      <div className="geometric-pattern" />
      
      {/* Header */}
      <div className="relative z-10 text-center space-y-4 mb-8">
        <Badge variant="outline" className="text-sm px-4 py-2 border-primary text-primary bg-transparent">
          BUSINESS MODEL
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
          <span className="text-gradient text-glow-animate">Proven SaaS</span> Economics
        </h1>
        <p className="text-lg text-muted max-w-4xl mx-auto">
          Industrial SaaS: €50K ARPU with 7.8-month payback and 4:1 LTV:CAC ratio
        </p>
      </div>

      <div className="relative z-10 flex-1 grid grid-cols-2 gap-8">
        {/* Left Column - Pricing Strategy */}
        <div className="space-y-6">
          {/* Pricing Tiers */}
          <div>
            <h3 className="text-3xl font-bold mb-4 text-white">Pricing Strategy</h3>
            <div className="text-sm text-muted mb-4">
              Pilot: €25–55k one-off + <strong className="text-primary">SaaS €2.8K–€4.2K/line/month</strong> (benchmarks: industrial automation €3K–€8K/line).
            </div>
            <div className="space-y-4">
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                >
                  <Card className={`p-6 relative bg-card border ${tier.color} ${tier.popular ? 'scale-105 shadow-xl border-2 border-primary' : 'border-border'} hover:scale-105 transition-all duration-300`}>
                    {tier.popular && (
                      <Badge className="absolute -top-2 left-4 bg-primary text-white border-0">
                        Most Popular
                      </Badge>
                    )}
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-white">{tier.name}</h4>
                        <div className="text-2xl font-bold text-primary">{tier.price}</div>
                        <p className="text-sm text-muted mb-2">{tier.period}</p>
                        <p className="text-sm text-muted mb-3">{tier.description}</p>
                        <div className="flex flex-wrap gap-1">
                          {tier.features.slice(0, 3).map((feature, fIndex) => (
                            <Badge key={fIndex} variant="secondary" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                          {tier.features.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{tier.features.length - 3} more
                            </Badge>
                          )}
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className="mb-2">
                          {tier.target}
                        </Badge>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
            <div className="mt-4 text-xs text-muted">
              Hardware integration: €25k–€55k one-time (partner-delivered when possible)
            </div>
          </div>
        </div>

        {/* Right Column - Revenue Model & Metrics */}
        <div className="space-y-6">
          {/* Revenue Streams */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">Revenue Streams</h3>
            <div className="space-y-3">
              {revenueStreams.map((stream, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <Card className="p-4 hover:shadow-md transition-all">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="text-primary">{stream.icon}</div>
                        <div>
                          <h5 className="font-semibold text-foreground">{stream.stream}</h5>
                          <p className="text-xs text-muted-foreground">{stream.description}</p>
                        </div>
                      </div>
                      <Badge variant="secondary" className="text-sm">
                        {stream.amount}
                      </Badge>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Unit Economics */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">Unit Economics</h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{unitEconomics.ltv}</div>
                    <div className="text-xs text-muted-foreground">Lifetime Value</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">{unitEconomics.cac}</div>
                    <div className="text-xs text-muted-foreground">Customer Acquisition</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{unitEconomics.grossMargin}</div>
                    <div className="text-xs text-muted-foreground">Gross Margin</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">{unitEconomics.nrr}</div>
                    <div className="text-xs text-muted-foreground">Net Revenue Retention</div>
                  </div>
                </div>
                <div className="pt-4 border-t border-border/50 text-center">
                  <span className="text-sm text-muted-foreground">Payback Period: </span>
                  <span className="text-sm font-bold text-primary">{unitEconomics.payback}</span>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Target Industries */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">Target Markets</h3>
            <Card className="p-4 bg-card/80">
              <div className="space-y-1 text-sm text-muted-foreground">
                <div>• <strong>Pharma:</strong> High-speed counting, quality control</div>
                <div>• <strong>F&B:</strong> Packaging validation, closure inspection</div>
                <div>• <strong>Wire & cable:</strong> Velocity monitoring, defect detection</div>
                <div>• <strong>Avg. customer ROI:</strong> 62% first year, €50K ARPU</div>
                <div className="border-t border-border/30 pt-2 mt-2">
                  <div>• <strong>Small mfg:</strong> €50K = 0.2% of €25M revenue</div>
                  <div>• <strong>Mid mfg:</strong> €50K = 0.05% of €100M revenue</div>
                  <div>• <strong>Large mfg:</strong> €50K = 0.01% of €500M+ revenue</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessModelSlideV2;