import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Clock, Lightbulb, Users, Building, Target } from "lucide-react";
import Interactive3DChart from "@/components/3D/Interactive3DChart";
import { motion } from "framer-motion";

const MarketSlide = () => {
  const timingFactors = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Timing",
      percentage: "42%",
      description: "Most critical success factor"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team/Execution", 
      percentage: "32%",
      description: "Strong technical leadership"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Idea Validation",
      percentage: "28%",
      description: "Event-based vision addressing real needs"
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Business Model",
      percentage: "24%",
      description: "Recurring SaaS revenue model"
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
    <div className="w-full h-full flex flex-col px-6 py-4">
      {/* Header */}
      <div className="text-center space-y-3 mb-6">
        <Badge variant="outline" className="text-sm px-4 py-2">
          BIG & GROWING MARKET
        </Badge>
        <h1 className="text-3xl md:text-4xl font-bold">
          <span className="gradient-text">Perfect Storm</span> of Opportunity
        </h1>
        <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
          Global machine vision: $20.38B (2024) → $41.74B (2030). MEA doubling to $3.4B.
        </p>
      </div>

      <div className="flex-1 grid grid-cols-2 gap-6">
        {/* Left Column - Why Now & Market Size */}
        <div className="space-y-6">
          {/* Why Now Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Why Now?</h3>
            <div className="grid grid-cols-2 gap-3">
              {timingFactors.map((factor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="p-4 text-center hover:scale-105 transition-all duration-300 glow-effect h-full">
                    <div className="text-primary mb-2 flex justify-center scale-75">
                      {factor.icon}
                    </div>
                    <div className="text-2xl font-bold gradient-text mb-1">{factor.percentage}</div>
                    <div className="font-semibold mb-1 text-xs">{factor.title}</div>
                    <p className="text-xs text-muted-foreground">{factor.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-3">
              <p className="text-xs text-muted-foreground">
                Source: Bill Gross (Idealab) - TED Talk Analysis
              </p>
            </div>
          </div>

          {/* Market Size */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Market Opportunity</h3>
            <div className="space-y-3">
              {marketSizes.map((market, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                >
                  <Card className="p-4 hover:scale-105 transition-all duration-300 glow-effect">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className={`text-2xl font-bold bg-gradient-to-r ${market.color} bg-clip-text text-transparent`}>
                          {market.size}
                        </div>
                        <h4 className="font-semibold text-xs">{market.market}</h4>
                        <p className="text-muted-foreground text-xs">{market.timeframe}</p>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {market.cagr} CAGR
                      </Badge>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
            <div className="mt-3 text-xs text-muted-foreground">
              Source: Grand View Research
            </div>
          </div>
        </div>

        {/* Right Column - 3D Chart (Simplified) */}
        <div className="flex flex-col">
          <h3 className="text-2xl font-bold mb-3 text-center">Market Growth</h3>
          <div className="flex-1 bg-card/20 rounded-lg border border-border p-4 flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-2">📈</div>
              <div className="text-xl font-bold text-accent mb-1">$20.4B → $41.7B</div>
              <div className="text-sm text-muted-foreground mb-2">2024 → 2030</div>
              <div className="text-xs text-accent font-medium">13.5% CAGR</div>
            </div>
          </div>
        </div>
      </div>

      {/* First Mover Advantage */}
      <motion.div 
        className="mt-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <div className="text-center p-4 bg-gradient-to-r from-accent/10 to-primary/10 rounded-xl border border-accent/20">
          <h4 className="text-lg font-bold mb-2">🎯 First Mover Advantage</h4>
          <p className="text-sm mb-3">
            We are the <strong>first startup globally</strong> providing complete end-to-end event-based vision solutions.
          </p>
          <div className="grid grid-cols-3 gap-4 text-xs">
            <div>
              <strong>Hardware Partners:</strong> Sony, Prophesee provide sensors but no complete solutions
            </div>
            <div>
              <strong>Zero Competition:</strong> No other startup offers full-stack event-based industrial vision
            </div>
            <div>
              <strong>Market Timing:</strong> Technology ready, demand high, competition non-existent
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MarketSlide;