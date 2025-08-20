import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Users, Building, Zap, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const BusinessModelSlide = () => {
  const pricingTiers = [
    {
      name: "Pilot",
      price: "€1,500",
      period: "per line/month",
      description: "1-2 lines • validation phase",
      features: [
        "Core detection (counting/lot/labels)",
        "KPI dashboard & alerts",
        "Standard monitoring",
        "Email support"
      ],
      target: "Small manufacturers",
      color: "border-primary/20"
    },
    {
      name: "Growth", 
      price: "€3,500",
      period: "per line/month",
      description: "3-5 lines • production scale",
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
      price: "Custom",
      period: "per line/month",
      description: "Full facility automation • multi-site",
      features: [
        "Custom AI development",
        "Multi-site admin console",
        "SSO and on-prem options",
        "Dedicated account manager"
      ],
      target: "Large corporations",
      color: "border-warning/20"
    }
  ];

  const marketComparison = [
    {
      solution: "Traditional Integrators",
      setup: "Varies",
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
      solution: "LuminarX AI PaaS",
      setup: "€5k–€25k (target)",
      monthly: "€500–€2,500 (target)",
      timeToValue: "4–8 weeks (target)",
      accuracy: ">99%* demo accuracy in high-speed counting",
      dataEfficiency: "High",
      highlight: true
    }
  ];

  return (
    <div className="w-full h-full flex flex-col px-8 py-6 bg-background relative overflow-hidden max-w-[1320px] mx-auto">
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
          <span className="text-gradient text-glow-animate">Recurring Revenue</span> SaaS Model
        </h1>
        <p className="text-lg text-muted max-w-4xl mx-auto">
          Perception-as-a-Service with tiered subscriptions, ensuring predictable recurring revenue
        </p>
      </div>

      <div className="relative z-10 flex-1 grid grid-cols-2 gap-8">
        {/* Left Column - Pricing Strategy */}
        <div className="space-y-6">
          {/* Pricing Tiers */}
          <div>
            <h3 className="text-3xl font-bold mb-4 text-white">Pricing Strategy</h3>
            <div className="text-sm text-muted mb-4">
              Pilot: €5–15k one-off + <strong className="text-primary">PaaS €100–€300/stream/mo</strong> (benchmarks: Google Visual Inspection floor ≈ $100/stream/month).
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
              Hardware integration (optional): €5k–€25k one-time (partner-delivered when possible)
            </div>
          </div>
        </div>

        {/* Right Column - Competitive Advantage */}
        <div className="space-y-6">
          {/* Market Comparison */}
          <div>
            <h3 className="text-3xl font-bold mb-4 text-white">Competitive Advantage</h3>
            <Card className="p-6 bg-card border border-border rounded-2xl shadow-lg">
              <div className="space-y-4">
                <div className="grid grid-cols-6 gap-3 pb-3 border-b border-border text-sm font-semibold text-white">
                  <div>Solution</div>
                  <div>Setup Cost</div>
                  <div>Monthly</div>
                  <div>Time-to-Value</div>
                  <div>Accuracy</div>
                  <div>Data Efficiency</div>
                </div>
                {marketComparison.map((item, index) => (
                  <motion.div
                    key={index}
                    className={`grid grid-cols-6 gap-3 py-3 rounded-lg text-sm ${
                      item.highlight 
                        ? 'bg-primary/10 border border-primary/20 font-semibold text-white' 
                        : 'border-b border-border/30 text-muted'
                    }`}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                  >
                    <div className={item.highlight ? 'text-primary' : ''}>{item.solution}</div>
                    <div>{item.setup}</div>
                    <div>{item.monthly}</div>
                    <div>{item.timeToValue}</div>
                    <div>{item.accuracy}</div>
                    <div>{item.dataEfficiency}</div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-4 text-xs text-muted">
                *Demo accuracy refers to high-speed counting; inspection accuracy is task-dependent and validated per pilot.
              </div>
            </Card>
          </div>

          {/* ROI Example */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">ROI Example</h3>
            <Card className="p-6 bg-card border border-primary/20 rounded-2xl shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">At 0.3% scrap reduction</div>
                <div className="text-lg text-muted mb-3">and 1 nuisance stop/week avoided</div>
                <div className="text-2xl font-bold text-accent">Payback &lt;3 months</div>
                <div className="text-xs text-muted-foreground mt-2">(Input-driven in live calculator)</div>
              </div>
            </Card>
          </div>

          {/* Revenue Model */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">Why This Model Works</h3>
            <Card className="p-6 bg-card border border-border rounded-2xl shadow-lg">
              <p className="text-muted text-sm">
                Recurring SaaS aligns with ongoing model updates & compliance logging; 
                hardware is commoditizing while software & data compound.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessModelSlide;