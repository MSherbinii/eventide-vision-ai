import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"; 
import { TrendingUp, Clock, Lightbulb, Users, Building, Target } from "lucide-react";
import { MarketAreaChart } from "@/components/Charts/MarketAreaChart";
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
         style={{ background: 'linear-gradient(180deg, #0B1B2B 0%, #0F2233 35%, #122339 100%)' }}>
      {/* Header */}
      <div className="text-center space-y-3 mb-6">
        <Badge variant="outline" className="text-sm px-4 py-2 border-[#E6C069] text-[#E6C069] bg-transparent">
          BIG & GROWING MARKET
        </Badge>
        <h1 className="text-3xl md:text-4xl font-bold text-[#F2F6FA] tracking-[-0.01em]">
          <span className="text-[#E6C069]">Perfect Storm</span> of Opportunity
        </h1>
        <p className="text-sm text-[#CBD5E1] max-w-3xl mx-auto">
          Global machine-vision is $20.38B (2024) and projected to $41.74B by 2030 (13.0% CAGR). The Quality Assurance & Inspection application is the largest segment and the ME&A region is among the fastest-growing.
        </p>
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

          {/* KPI Chips */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#F8FAFC]">What this means for Eventide</h3>
            <div className="space-y-3">
              <Card className="p-4 bg-[#0F2233] border border-[#E6C069]/20 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
                <span className="font-semibold text-[#F8FAFC]">Global MV: $20.38B → $41.74B by 2030, 13.0% CAGR</span>
                <p className="text-xs text-[#CBD5E1] mt-1">(GVR)</p>
              </Card>
              
              <Card className="p-4 bg-[#0F2233] border border-[#0EA5E9]/20 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
                <span className="font-semibold text-[#F8FAFC]">Largest application: Quality Assurance/Inspection</span>
                <p className="text-xs text-[#CBD5E1] mt-1">(GVR segmentation)</p>
              </Card>
              
              <Card className="p-4 bg-[#0F2233] border border-[#22C55E]/20 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
                <span className="font-semibold text-[#F8FAFC]">Event-based niche: under-served vs. frame-based incumbents</span>
              </Card>
              
              <Card className="p-4 bg-[#0F2233] border border-[#F59E0B]/20 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
                <span className="font-semibold text-[#F8FAFC]">Edge AI readiness: Jetson & cloud MLOps maturity</span>
              </Card>
            </div>
          </div>

          {/* TAM/SAM/SOM */}
          <div>
            <h4 className="text-lg font-bold mb-3 text-[#F8FAFC]">TAM / SAM / SOM</h4>
            <div className="space-y-2">
              <div className="text-sm text-[#CBD5E1]">
                <strong className="text-[#F8FAFC]">TAM:</strong> GVR total = $20.38B → $41.74B
              </div>
              <div className="text-sm text-[#CBD5E1]">
                <strong className="text-[#F8FAFC]">SAM:</strong> QA/predictive in Pharma + F&B (conservative % of TAM; validate with pilots)
              </div>
              <div className="text-sm text-[#CBD5E1]">
                <strong className="text-[#F8FAFC]">SOM:</strong> Egypt+GCC+DACH early adopters (target plant count)
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Market Charts */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-2xl font-bold mb-3 text-center text-[#F8FAFC]">Global Machine Vision Market 2024–2030</h3>
          <div className="flex-1">
            <MarketAreaChart />
          </div>
          
          {/* Mini doughnut placeholder */}
          <Card className="p-4 bg-[#0F2233] border border-[#2C3D58] rounded-2xl">
            <h4 className="text-sm font-bold text-[#F8FAFC] mb-2 text-center">Application Share</h4>
            <div className="text-center">
              <div className="text-lg font-bold text-[#0EA5E9]">QA & Inspection</div>
              <div className="text-xs text-[#93A1B5]">Largest segment (illustrative; see source)</div>
            </div>
          </Card>
        </div>
      </div>

      {/* First Mover Advantage */}
      <motion.div 
        className="mt-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <div className="text-center p-4 bg-[#0F2233] border border-[#E6C069]/20 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
          <h4 className="text-lg font-bold mb-2 text-[#F8FAFC]">🎯 First Mover Edge in MENA + EU</h4>
          <p className="text-sm mb-3 text-[#CBD5E1]">
            <strong className="text-[#E6C069]">First-mover edge in MENA (GCC) + EU</strong> — fewer local event-based specialists; leverage German network via XPRENEURS.
          </p>
          <div className="grid grid-cols-3 gap-4 text-xs">
            <div className="text-[#CBD5E1]">
              <strong className="text-[#F8FAFC]">Sensor vendors ≠ turnkey PaaS:</strong> Prophesee + Sony IMX636 provide hardware, not complete solutions
            </div>
            <div className="text-[#CBD5E1]">
              <strong className="text-[#F8FAFC]">Few integrated options:</strong> Integrators mainly frame-based in industrial QA
            </div>
            <div className="text-[#CBD5E1]">
              <strong className="text-[#F8FAFC]">Perfect timing:</strong> Event sensors matured + edge compute ready + Industry 4.0 budgets
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MarketSlide;