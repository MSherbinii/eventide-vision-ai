import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Users, Building, Zap, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const BusinessModelSlide = () => {
  const pricingTiers = [
    {
      name: "Pilot",
      price: "$5,000",
      period: "setup + $500/month",
      description: "Single production line deployment",
      features: [
        "1-3 camera installation",
        "Basic defect detection",
        "Real-time monitoring",
        "30-day trial included",
        "Email support"
      ],
      target: "Small manufacturers",
      color: "border-primary/20"
    },
    {
      name: "Professional", 
      price: "$25,000",
      period: "setup + $2,500/month",
      description: "Multi-line factory deployment",
      features: [
        "5-15 camera installation",
        "Advanced AI models",
        "Custom analytics dashboard",
        "Integration with MES/ERP",
        "Priority support"
      ],
      target: "Mid-size manufacturers",
      color: "border-secondary/20",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact sales",
      description: "Full facility automation",
      features: [
        "Unlimited cameras",
        "Custom AI development",
        "White-label solutions",
        "Dedicated account manager",
        "On-site support"
      ],
      target: "Large corporations",
      color: "border-accent/20"
    }
  ];

  const revenueStreams = [
    {
      title: "Software Licensing",
      percentage: "60%",
      description: "Monthly SaaS subscriptions",
      icon: <DollarSign className="w-8 h-8" />
    },
    {
      title: "Hardware Integration",
      percentage: "25%",
      description: "One-time setup fees",
      icon: <Building className="w-8 h-8" />
    },
    {
      title: "Custom Development",
      percentage: "10%",
      description: "Tailored AI solutions",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Support & Training",
      percentage: "5%",
      description: "Professional services",
      icon: <Users className="w-8 h-8" />
    }
  ];

  const marketComparison = [
    {
      solution: "Traditional Integrators",
      setup: "Varies",
      monthly: "Varies",
      timeToValue: "Multi-month",
      accuracy: "Frame-limited",
      highlight: false
    },
    {
      solution: "Cloud Vision APIs",
      setup: "Variable",
      monthly: "Per-use",
      timeToValue: "Weeks-months",
      accuracy: "General",
      highlight: false
    },
    {
      solution: "Eventide Vision PaaS",
      setup: "$5k–$25k (target)",
      monthly: "$500–$2,500 (target)",
      timeToValue: "pilot in 4–8 weeks (target)",
      accuracy: "task-dependent; demos >99.5% in high-speed counting",
      highlight: true
    }
  ];

  return (
    <div className="w-full h-full flex flex-col px-8 py-6">
      {/* Header */}
      <div className="text-center space-y-4 mb-8">
        <Badge variant="outline" className="text-lg px-6 py-2">
          BUSINESS MODEL
        </Badge>
        <h1 className="text-5xl md:text-6xl font-bold">
          <span className="gradient-text">Recurring Revenue</span><br />SaaS Model
        </h1>
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
          Perception-as-a-Service with tiered subscriptions, ensuring predictable recurring revenue
        </p>
      </div>

      <div className="flex-1 grid grid-cols-2 gap-8">
        {/* Left Column - Revenue Streams & Pricing */}
        <div className="space-y-6">
          {/* Revenue Streams */}
          <div>
            <h3 className="text-3xl font-bold mb-6">Revenue Streams</h3>
            <div className="grid grid-cols-2 gap-4">
              {revenueStreams.map((stream, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="p-6 text-center hover:scale-105 transition-all duration-300 glow-effect h-full">
                    <div className="text-primary mb-3 flex justify-center">
                      {stream.icon}
                    </div>
                    <div className="text-3xl font-bold gradient-text mb-2">{stream.percentage}</div>
                    <h4 className="font-semibold mb-2 text-sm">{stream.title}</h4>
                    <p className="text-xs text-muted-foreground">{stream.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Pricing Tiers */}
          <div>
            <h3 className="text-3xl font-bold mb-6">Pricing Strategy</h3>
            <div className="text-sm text-muted-foreground mt-4">
              Public benchmark <strong>$100/stream/month</strong> (Google Visual Inspection AI) used as floor for full-stack pricing.
            </div>
            <div className="space-y-4">
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                >
                  <Card className={`p-6 relative ${tier.color} ${tier.popular ? 'scale-105 shadow-xl border-2' : ''} hover:scale-110 transition-all duration-300`}>
                    {tier.popular && (
                      <Badge className="absolute -top-2 left-4 bg-gradient-to-r from-primary to-secondary">
                        Most Popular
                      </Badge>
                    )}
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="text-xl font-bold">{tier.name}</h4>
                        <div className="text-2xl font-bold gradient-text">{tier.price}</div>
                        <p className="text-sm text-muted-foreground mb-2">{tier.period}</p>
                        <p className="text-sm mb-3">{tier.description}</p>
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
          </div>
        </div>

        {/* Right Column - Market Comparison & Projections */}
        <div className="space-y-6">
          {/* Market Comparison */}
          <div>
            <h3 className="text-3xl font-bold mb-6">Competitive Advantage</h3>
            <Card className="p-6">
              <div className="space-y-4">
                <div className="grid grid-cols-5 gap-3 pb-3 border-b border-border text-sm font-semibold">
                  <div>Solution</div>
                  <div>Setup Cost</div>
                  <div>Monthly Cost</div>
                  <div>Implementation</div>
                  <div>Accuracy</div>
                </div>
                {marketComparison.map((item, index) => (
                  <motion.div
                    key={index}
                    className={`grid grid-cols-5 gap-3 py-3 rounded-lg text-sm ${
                      item.highlight 
                        ? 'bg-primary/10 border border-primary/20 font-semibold' 
                        : 'border-b border-border/30'
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
                  </motion.div>
                ))}
              </div>
            </Card>
          </div>

          {/* Financial Projections */}
          <div>
            <h3 className="text-3xl font-bold mb-6">Financial Projections</h3>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
                <div className="text-4xl font-bold gradient-text mb-2">$10M</div>
                <div className="text-sm text-muted-foreground">Year 3 ARR Target</div>
              </Card>
              <Card className="p-6 text-center bg-gradient-to-br from-secondary/10 to-accent/10 border-secondary/20">
                <div className="text-4xl font-bold gradient-text mb-2">85%</div>
                <div className="text-sm text-muted-foreground">Customer Retention</div>
              </Card>
            </div>
          </div>

          {/* Go-to-Market Strategy */}
          <div>
            <h3 className="text-3xl font-bold mb-6">Go-to-Market</h3>
            <div className="space-y-4">
              <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
                <h4 className="text-lg font-bold mb-4">Target Markets</h4>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Primary:</strong> Pharmaceutical manufacturing</li>
                  <li>• <strong>Secondary:</strong> Food & Beverage processing</li>
                  <li>• <strong>Geographic:</strong> MENA → Europe → Global</li>
                </ul>
              </Card>
              
              <Card className="p-6 bg-gradient-to-br from-secondary/5 to-accent/5 border-secondary/20">
                <h4 className="text-lg font-bold mb-4">Sales Strategy</h4>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Pilot Projects:</strong> Free trials to demonstrate ROI</li>
                  <li>• <strong>Partner Network:</strong> System integrators</li>
                  <li>• <strong>Direct Sales:</strong> Enterprise accounts</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessModelSlide;