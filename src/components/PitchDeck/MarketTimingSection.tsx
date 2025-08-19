import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Clock, Lightbulb, Users, Building, Target } from "lucide-react";

const MarketTimingSection = () => {
  const timingFactors = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Timing",
      percentage: "42%",
      description: "Most critical success factor according to 200+ company analysis"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team/Execution", 
      percentage: "32%",
      description: "Strong technical leadership with domain expertise"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Idea Validation",
      percentage: "28%",
      description: "Event-based vision addressing real industrial needs"
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "Business Model",
      percentage: "24%",
      description: "Recurring SaaS revenue with hardware integration"
    }
  ];

  const marketSizes = [
    {
      market: "Total Addressable Market",
      size: "$69.49B",
      timeframe: "by 2034",
      cagr: "13.04%",
      color: "from-primary to-primary-glow"
    },
    {
      market: "Serviceable Available Market",
      size: "$23.63B", 
      timeframe: "by 2030",
      cagr: "8.3%",
      color: "from-secondary to-secondary-glow"
    },
    {
      market: "Serviceable Obtainable Market",
      size: "$2.1B",
      timeframe: "Pharma + F&B",
      cagr: "12%+",
      color: "from-accent to-accent-glow"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-6xl mx-auto">
        {/* Market Timing Hero */}
        <div className="text-center space-y-6 mb-16">
          <Badge variant="outline" className="text-sm px-4 py-2">
            MARKET TIMING & OPPORTUNITY
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold">
            <span className="gradient-text">Perfect Storm</span>
            <br />
            of Opportunity
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Event-based vision technology has reached industrial maturity just as manufacturing demands unprecedented automation quality.
          </p>
        </div>

        {/* Why Now Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-8 text-center">Why Now?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timingFactors.map((factor, index) => (
              <Card key={index} className="p-6 text-center hover:scale-105 transition-all duration-300 glow-effect">
                <div className="text-primary mb-4 flex justify-center">
                  {factor.icon}
                </div>
                <div className="text-3xl font-bold gradient-text mb-2">{factor.percentage}</div>
                <div className="font-semibold mb-2">{factor.title}</div>
                <p className="text-sm text-muted-foreground">{factor.description}</p>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              Source: Bill Gross (Idealab) - TED Talk Analysis of 200+ Companies
            </p>
          </div>
        </div>

        {/* Market Size */}
        <div className="space-y-12">
          <h3 className="text-3xl font-bold text-center">Massive Market Opportunity</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {marketSizes.map((market, index) => (
              <Card key={index} className="p-8 text-center hover:scale-105 transition-all duration-300 glow-effect">
                <div className={`text-4xl font-bold bg-gradient-to-r ${market.color} bg-clip-text text-transparent mb-4`}>
                  {market.size}
                </div>
                <h4 className="font-semibold mb-2">{market.market}</h4>
                <p className="text-muted-foreground text-sm mb-4">{market.timeframe}</p>
                <Badge variant="secondary" className="text-xs">
                  {market.cagr} CAGR
                </Badge>
              </Card>
            ))}
          </div>

          {/* Market Drivers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Technology Readiness
              </h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Prophesee, Sony, Samsung now offer production-ready sensors</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>AI algorithms for event-based data are mature</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Edge computing hardware can handle processing</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-secondary/5 to-accent/5 border-secondary/20">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-secondary" />
                Market Demand
              </h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Manufacturing 4.0 driving automation adoption</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Quality standards increasingly stringent</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Labor shortages accelerating automation</span>
                </li>
              </ul>
            </Card>
          </div>

          {/* First Mover Advantage */}
          <div className="text-center p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl border border-accent/20">
            <h4 className="text-2xl font-bold mb-4">🎯 First Mover Advantage</h4>
            <p className="text-lg mb-6">
              We are the <strong>first startup globally</strong> providing complete end-to-end event-based vision solutions for industrial applications.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <strong>Hardware Partners:</strong> Sony, Prophesee, Samsung provide sensors but no complete solutions
              </div>
              <div>
                <strong>Zero Competition:</strong> No other startup offers full-stack event-based industrial vision
              </div>
              <div>
                <strong>Market Timing:</strong> Technology ready, demand high, competition non-existent
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketTimingSection;