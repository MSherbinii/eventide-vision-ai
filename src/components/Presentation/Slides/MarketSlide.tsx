import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"; 
import { TrendingUp, Clock, Lightbulb, Users, Building, Target } from "lucide-react";
import MarketGrowthChart from "@/components/Charts/MarketGrowthChart";
import { motion } from "framer-motion";

const MarketSlide = () => {
  const timingFactors = [
    {
      icon: <Clock className="w-8 h-8 text-[#E6C069]" />,
      title: "Timing",
      percentage: "42%",
      description: "Most critical success factor"
    },
    {
      icon: <Users className="w-8 h-8 text-[#00D1C1]" />,
      title: "Team/Execution", 
      percentage: "32%",
      description: "Strong technical leadership"
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-[#FFC466]" />,
      title: "Idea Validation",
      percentage: "28%",
      description: "Event-based vision addressing real needs"
    },
    {
      icon: <Building className="w-8 h-8 text-[#00D1C1]" />,
      title: "Business Model",
      percentage: "24%",
      description: "Recurring SaaS revenue model"
    }
  ];

  return (
    <div className="w-full h-full flex flex-col px-6 py-4" 
         style={{ background: 'linear-gradient(180deg, #0F2440 0%, #0A1526 35%, #0B172A 100%)' }}>
      {/* Header */}
      <div className="text-center space-y-3 mb-6">
        <Badge variant="outline" className="text-sm px-4 py-2 border-[#E6C069] text-[#E6C069] bg-transparent">
          BIG & GROWING MARKET
        </Badge>
        <h1 className="text-3xl md:text-4xl font-bold text-[#F2F6FA] tracking-[-0.01em]">
          <span className="text-[#E6C069]">Perfect Storm</span> of Opportunity
        </h1>
        <p className="text-sm text-[#CBD5E1] max-w-3xl mx-auto">
          Global machine vision: $20.38B (2024) → $41.74B (2030) at 13.0% CAGR
        </p>
        <div className="text-xs text-[#93A1B5]">
          Source: Grand View Research (2025)
        </div>
      </div>

      <div className="flex-1 grid grid-cols-2 gap-6">
        {/* Left Column - Why Now & Market Size */}
        <div className="space-y-6">
          {/* Why Now Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#F2F6FA]">Why Now?</h3>
            <div className="grid grid-cols-2 gap-3">
              {timingFactors.map((factor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="p-4 text-center hover:scale-105 transition-all duration-300 bg-[#122339]/92 border border-[#2C3D58] rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.35)] h-full">
                    <div className="mb-2 flex justify-center scale-75">
                      {factor.icon}
                    </div>
                    <div className="text-2xl font-bold text-[#E6C069] mb-1">{factor.percentage}</div>
                    <div className="font-semibold mb-1 text-xs text-[#F2F6FA]">{factor.title}</div>
                    <p className="text-xs text-[#CBD5E1]">{factor.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-3">
              <p className="text-xs text-[#93A1B5]">
                Source: Bill Gross (Idealab) - TED Talk Analysis
              </p>
            </div>
          </div>

          {/* Market Opportunity */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#F2F6FA]">Market Opportunity</h3>
            <div className="space-y-3">
              <Card className="p-4 bg-[#122339]/92 border border-[#E6C069]/20 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
                <div className="space-y-2">
                  <span className="font-semibold text-[#F2F6FA]">TAM (global machine vision)</span>
                  <p className="text-xs text-[#CBD5E1]">$20.38B (2024) → $41.74B (2030)</p>
                </div>
              </Card>
              
              <Card className="p-4 bg-[#122339]/92 border border-[#00D1C1]/20 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
                <div className="space-y-2">
                  <span className="font-semibold text-[#F2F6FA]">SAM (QA & predictive in Pharma + F&B)</span>
                  <p className="text-xs text-[#CBD5E1]">subset of TAM (to be sized with pilots)</p>
                </div>
              </Card>
              
              <Card className="p-4 bg-[#122339]/92 border border-[#FFC466]/20 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
                <div className="space-y-2">  
                  <span className="font-semibold text-[#F2F6FA]">SOM (Egypt + GCC + DACH early adopters)</span>
                  <p className="text-xs text-[#CBD5E1]">initial selling region</p>
                </div>
              </Card>
              
              <div className="text-sm text-[#93A1B5] mt-3">
                <strong>MEA:</strong> $1.61B (2024), ~13.5% CAGR to 2030
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Market Growth Chart */}
        <div className="flex flex-col">
          <h3 className="text-2xl font-bold mb-3 text-center text-[#F2F6FA]">Market Growth</h3>
          <div className="flex-1">
            <MarketGrowthChart />
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
        <div className="text-center p-4 bg-[#122339]/92 border border-[#E6C069]/20 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
          <h4 className="text-lg font-bold mb-2 text-[#F2F6FA]">🎯 First Mover Advantage</h4>
          <p className="text-sm mb-3 text-[#CBD5E1]">
            We are the <strong className="text-[#E6C069]">first mover in MENA</strong> offering a full-stack, event-based industrial vision PaaS.
          </p>
          <div className="grid grid-cols-3 gap-4 text-xs">
            <div className="text-[#CBD5E1]">
              <strong className="text-[#F2F6FA]">Hardware Partners:</strong> Sony, Prophesee provide sensors but no complete solutions
            </div>
            <div className="text-[#CBD5E1]">
              <strong className="text-[#F2F6FA]">Zero Competition:</strong> No other startup offers full-stack event-based industrial vision
            </div>
            <div className="text-[#CBD5E1]">
              <strong className="text-[#F2F6FA]">Market Timing:</strong> Technology ready, demand high, competition non-existent
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MarketSlide;