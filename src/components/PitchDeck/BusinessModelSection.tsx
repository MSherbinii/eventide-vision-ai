import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DollarSign, Users, Building, Zap, TrendingUp, Target, Calendar, CheckCircle } from "lucide-react";

const BusinessModelSection = () => {
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
      description: "Monthly SaaS subscriptions for platform access",
      icon: <DollarSign className="w-6 h-6" />
    },
    {
      title: "Hardware Integration",
      percentage: "25%",
      description: "One-time setup and camera installation fees",
      icon: <Building className="w-6 h-6" />
    },
    {
      title: "Custom Development",
      percentage: "10%",
      description: "Tailored AI models and industry-specific solutions",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Support & Training",
      percentage: "5%",
      description: "Professional services and customer success",
      icon: <Users className="w-6 h-6" />
    }
  ];

  const marketComparison = [
    {
      solution: "Our Platform",
      setup: "$5K-25K",
      monthly: "$500-2,500",
      timeToValue: "2-4 weeks",
      accuracy: ">99%",
      support: "Full-service"
    },
    {
      solution: "Traditional Vision",
      setup: "$50K-200K",
      monthly: "$5K-15K",
      timeToValue: "6-12 months",
      accuracy: "85-95%",
      support: "Limited"
    },
    {
      solution: "In-house Development",
      setup: "$200K-500K",
      monthly: "$10K-30K",
      timeToValue: "12-24 months", 
      accuracy: "Variable",
      support: "Self-managed"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-6xl mx-auto">
        {/* Business Model Hero */}
        <div className="text-center space-y-6 mb-16">
          <Badge variant="outline" className="text-sm px-4 py-2">
            BUSINESS MODEL
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold">
            <span className="gradient-text">Recurring Revenue</span>
            <br />
            SaaS Model
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Perception-as-a-Service with tiered subscriptions, ensuring predictable recurring revenue and continuous customer value.
          </p>
        </div>

        {/* Revenue Streams */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">Revenue Streams</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {revenueStreams.map((stream, index) => (
              <Card key={index} className="p-6 text-center hover:scale-105 transition-all duration-300 glow-effect">
                <div className="text-primary mb-4 flex justify-center">
                  {stream.icon}
                </div>
                <div className="text-3xl font-bold gradient-text mb-2">{stream.percentage}</div>
                <h4 className="font-semibold mb-2">{stream.title}</h4>
                <p className="text-sm text-muted-foreground">{stream.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">Pricing Strategy</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className={`p-8 relative ${tier.color} ${tier.popular ? 'scale-105 shadow-2xl' : ''} hover:scale-110 transition-all duration-300`}>
                {tier.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-secondary">
                    Most Popular
                  </Badge>
                )}
                <div className="text-center mb-6">
                  <h4 className="text-2xl font-bold mb-2">{tier.name}</h4>
                  <div className="text-3xl font-bold gradient-text mb-1">{tier.price}</div>
                  <p className="text-sm text-muted-foreground mb-3">{tier.period}</p>
                  <p className="text-sm">{tier.description}</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <Badge variant="outline" className="mb-4">
                    {tier.target}
                  </Badge>
                  <Button 
                    variant={tier.popular ? "gradient" : "outline"} 
                    className="w-full"
                  >
                    Get Started
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Market Comparison */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">Competitive Pricing Advantage</h3>
          <Card className="p-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4 font-semibold">Solution Type</th>
                    <th className="text-left p-4 font-semibold">Setup Cost</th>
                    <th className="text-left p-4 font-semibold">Monthly Cost</th>
                    <th className="text-left p-4 font-semibold">Time to Value</th>
                    <th className="text-left p-4 font-semibold">Accuracy</th>
                    <th className="text-left p-4 font-semibold">Support</th>
                  </tr>
                </thead>
                <tbody>
                  {marketComparison.map((item, index) => (
                    <tr key={index} className={`border-b ${index === 0 ? 'bg-primary/5' : ''}`}>
                      <td className="p-4 font-semibold">{item.solution}</td>
                      <td className="p-4">{item.setup}</td>
                      <td className="p-4">{item.monthly}</td>
                      <td className="p-4">{item.timeToValue}</td>
                      <td className="p-4">{item.accuracy}</td>
                      <td className="p-4">{item.support}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        {/* Go-to-Market Strategy */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">Go-to-Market Strategy</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
              <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                Target Markets
              </h4>
              <ul className="space-y-3 text-sm">
                <li>• <strong>Primary:</strong> Pharmaceutical manufacturing (strict quality requirements)</li>
                <li>• <strong>Secondary:</strong> Food & Beverage processing (safety regulations)</li>
                <li>• <strong>Expansion:</strong> Automotive, Electronics, Logistics</li>
                <li>• <strong>Geographic:</strong> MENA region initially, then Europe/Asia</li>
              </ul>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-secondary/5 to-accent/5 border-secondary/20">
              <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-secondary" />
                Sales Strategy
              </h4>
              <ul className="space-y-3 text-sm">
                <li>• <strong>Pilot Projects:</strong> Free/low-cost trials to demonstrate ROI</li>
                <li>• <strong>Partner Network:</strong> System integrators and automation companies</li>
                <li>• <strong>Direct Sales:</strong> Enterprise accounts through industry connections</li>
                <li>• <strong>Channel Partners:</strong> Industrial equipment distributors</li>
              </ul>
            </Card>
          </div>

          <div className="text-center mt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6">
                <div className="text-3xl font-bold gradient-text mb-2">$10M</div>
                <p className="text-sm text-muted-foreground">Year 3 ARR Target</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold gradient-text mb-2">40%</div>
                <p className="text-sm text-muted-foreground">Gross Margin</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold gradient-text mb-2">85%</div>
                <p className="text-sm text-muted-foreground">Customer Retention</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessModelSection;