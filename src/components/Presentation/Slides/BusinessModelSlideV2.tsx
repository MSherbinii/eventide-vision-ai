import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, TrendingUp, DollarSign, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";

const BusinessModelSlideV2 = () => {
  const pricingTiers = [
    {
      name: "Pilot (per line)",
      price: "€1,500",
      period: "/month",
      description: "Single site, 1–2 lines",
      features: [
        "Up to 4 cameras/line",
        "Standard support",
        "Monthly reports",
        "Basic dashboard"
      ],
      color: "border-muted",
      popular: false
    },
    {
      name: "Growth (per line)",
      price: "€3,000",
      period: "/month",
      description: "3–8 lines, multi-station",
      features: [
        "Up to 12 cameras/line",
        "Priority support",
        "Real-time analytics",
        "MES/ERP integration"
      ],
      color: "border-primary",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Full facility coverage",
      features: [
        "Unlimited lines",
        "Unlimited cameras",
        "24/7 dedicated support",
        "On-site training",
        "SLA guarantees"
      ],
      color: "border-accent",
      popular: false
    }
  ];

  const revenueStreams = [
    {
      stream: "Integration Fee",
      description: "One-time setup & customization",
      amount: "€5K–€25K",
      icon: <Zap className="w-5 h-5" />
    },
    {
      stream: "Monthly SaaS",
      description: "Per line subscription",
      amount: "€1.5K–€3K/line",
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      stream: "Success Fees",
      description: "Performance-based upside",
      amount: "5–10% savings",
      icon: <DollarSign className="w-5 h-5" />
    }
  ];

  const unitEconomics = {
    cac: "€20,000",
    ltv: "€150,000",
    payback: "9–12 months",
    grossMargin: "75–80%",
    nrr: "120%"
  };

  return (
    <div className="w-full min-h-screen flex flex-col px-8 py-6 bg-gradient-to-br from-background to-primary/5">
      {/* Clean Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
      
      {/* Header */}
      <div className="relative z-10 text-center space-y-3 mb-8">
        <Badge variant="outline" className="text-sm px-4 py-2 border-primary text-primary">
          PAAS + SUCCESS FEES
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
          Proven <span className="text-primary">SaaS Economics</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Land with integration, expand with value — targeting $175K ARPU with 125% NRR
        </p>
      </div>

      <div className="relative z-10 flex-1 grid grid-cols-12 gap-6">
        {/* Left: Pricing Tiers */}
        <div className="col-span-7 space-y-4">
          <h3 className="text-2xl font-bold text-foreground mb-4">Simple, Scalable Pricing</h3>
          <div className="grid grid-cols-3 gap-4">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-primary text-white px-3 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <Card className={`p-6 h-full hover:shadow-xl transition-all ${tier.color} ${
                  tier.popular ? 'border-2 shadow-lg' : ''
                }`}>
                  <div className="text-center mb-4">
                    <h4 className="text-xl font-bold text-foreground">{tier.name}</h4>
                    <div className="mt-2">
                      <span className="text-3xl font-bold text-primary">{tier.price}</span>
                      <span className="text-muted-foreground">{tier.period}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{tier.description}</p>
                  </div>
                  <div className="space-y-2">
                    {tier.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: Revenue & Metrics */}
        <div className="col-span-5 space-y-4">
          {/* Revenue Streams */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-3">Revenue Streams</h3>
            <div className="space-y-2">
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
              <h4 className="text-lg font-bold text-foreground mb-4">Unit Economics</h4>
              <div className="grid grid-cols-2 gap-4">
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
              <div className="mt-4 pt-4 border-t border-border/50 text-center">
                <span className="text-sm text-muted-foreground">Payback Period: </span>
                <span className="text-sm font-bold text-primary">{unitEconomics.payback}</span>
              </div>
            </Card>
          </motion.div>

          {/* Customer Examples */}
          <Card className="p-4 bg-card/80">
            <h5 className="font-semibold text-foreground mb-2">Target Customers</h5>
            <div className="space-y-1 text-sm text-muted-foreground">
              <div>• Mid-size pharma: 5-20 production lines</div>
              <div>• F&B manufacturers: High-speed packaging</div>
              <div>• Automotive suppliers: Quality critical parts</div>
            </div>
          </Card>
        </div>
      </div>

      {/* Bottom Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="relative z-10 mt-6"
      >
        <Card className="p-4 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">7:1</div>
                <div className="text-xs text-muted-foreground">LTV:CAC Ratio</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">€72K</div>
                <div className="text-xs text-muted-foreground">Avg Annual Contract (3 lines)</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">90%+</div>
                <div className="text-xs text-muted-foreground">Gross Retention</div>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold text-foreground">Path to €1M ARR in ~24 months</p>
              <p className="text-xs text-muted-foreground">~15 customers × €72K ARPU</p>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default BusinessModelSlideV2;
