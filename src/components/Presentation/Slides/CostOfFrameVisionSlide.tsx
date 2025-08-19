import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, TrendingDown, Clock, DollarSign } from "lucide-react";
import { motion } from "framer-motion";

const CostOfFrameVisionSlide = () => {
  const costFactors = [
    {
      icon: <AlertTriangle className="w-10 h-10 text-[#FF5E5E]" />,
      title: "Scrap & Rework",
      impact: "",
      description: "Motion blur misses defects at speed",
      percentage: "Scrap",
      color: "bg-[#122339]/92 border-[#2C3D58]"
    },
    {
      icon: <Clock className="w-10 h-10 text-[#FFC466]" />,
      title: "Unplanned Downtime",
      impact: "",
      description: "Lighting/glare failures cause false stops",
      percentage: "Downtime", 
      color: "bg-[#122339]/92 border-[#2C3D58]"
    },
    {
      icon: <TrendingDown className="w-10 h-10 text-[#E6C069]" />,
      title: "Storage & Egress",
      impact: "",
      description: "Processing 24/7 full-frame video streams",
      percentage: "Data",
      color: "bg-[#122339]/92 border-[#2C3D58]"
    },
    {
      icon: <DollarSign className="w-10 h-10 text-[#00D1C1]" />,
      title: "Manual QC Hours",
      impact: "",
      description: "Human inspectors for what cameras miss",
      percentage: "Manual",
      color: "bg-[#122339]/92 border-[#2C3D58]"
    }
  ];

  return (
    <div className="w-full h-full flex flex-col px-6 py-4" 
         style={{ background: 'linear-gradient(180deg, #0F2440 0%, #0A1526 35%, #0B172A 100%)' }}>
      {/* Header */}
      <div className="text-center space-y-3 mb-6">
        <Badge variant="outline" className="text-sm px-4 py-2 border-[#E6C069] text-[#E6C069] bg-transparent">
          THE COST OF FRAME-ONLY VISION
        </Badge>
        <h1 className="text-3xl md:text-4xl font-bold text-[#F2F6FA] tracking-[-0.01em]">
          The Cost of <span className="text-[#E6C069]">Frame-Only Vision</span>
        </h1>
        <p className="text-sm text-[#CBD5E1] max-w-3xl mx-auto">
          Scrap/rework, unplanned downtime, storage/compute overhead, manual QC hours, model maintenance.
        </p>
      </div>

      <div className="flex-1 grid grid-cols-2 gap-6">
        {/* Left Column - Cost Breakdown */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-[#F2F6FA]">Annual Quality Losses</h3>
          <div className="grid grid-cols-2 gap-3">
            {costFactors.map((factor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
              >
                <Card className={`p-4 hover:scale-105 transition-all duration-300 ${factor.color} rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.35)] h-full`}>
                  <div className="text-center space-y-2">
                    <div className="flex justify-center scale-75">
                      {factor.icon}
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#E6C069] mb-1">{factor.percentage}</div>
                      <h4 className="font-bold text-xs mb-2 text-[#F2F6FA]">{factor.title}</h4>
                      <p className="text-xs text-[#CBD5E1]">{factor.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Total Cost Impact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <Card className="p-4 bg-[#122339]/92 border border-[#00D1C1]/20 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.35)] text-center">
              <h4 className="text-lg font-bold mb-2 text-[#F2F6FA]">Pilot Target Impact</h4>
              <div className="text-2xl font-bold text-[#00D1C1] mb-2">20–50% reduction</div>
              <p className="text-xs text-[#93A1B5]">Per production line (to be verified)</p>
            </Card>
          </motion.div>
        </div>

        {/* Right Column - Baseline Modeling */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-[#F2F6FA]">Baseline Modeling (Illustrative)</h3>
          
          <Card className="p-4 bg-[#122339]/92 border border-[#2C3D58] rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
            <div className="space-y-4">
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-[#F2F6FA]">Data volume =</span>
                  <span className="text-[#CBD5E1]">fps × resolution × bytes/pixel × hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-[#F2F6FA]">Rework cost =</span>
                  <span className="text-[#CBD5E1]">defect rate × items/hour × scrap cost</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-[#F2F6FA]">Downtime cost =</span>
                  <span className="text-[#CBD5E1]">lost throughput × margin/hour</span>
                </div>
              </div>
              <div className="pt-3 border-t border-[#2C3D58]">
                <p className="text-sm text-[#93A1B5] italic">
                  We'll quantify these with each pilot and show verified ROI.
                </p>
              </div>
            </div>
          </Card>
          
          <div className="bg-[#122339]/92 border border-[#00D1C1]/20 rounded-2xl p-3 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
            <Badge variant="secondary" className="mb-2 bg-[#00D1C1] text-white border-0">Pilot Target</Badge>
            <p className="text-sm text-[#CBD5E1]">
              Improvement band: 20–50% (to be replaced with real results)
            </p>
          </div>

          {/* Industry Context */}
          <div>
            <h4 className="text-lg font-bold mb-3 text-[#F2F6FA]">Industry Reality</h4>
            <div className="space-y-2">
              {[
                { stat: "67%", desc: "of manufacturers report vision system failures cause unplanned downtime" },
                { stat: "35%", desc: "of quality escapes happen during high-speed production runs" },
                { stat: "6-18mo", desc: "typical integration time for traditional machine vision systems" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                >
                  <Card className="p-3 bg-[#122339]/92 border border-[#2C3D58] rounded-2xl">
                    <div className="flex items-center gap-3">
                      <div className="text-lg font-bold text-[#E6C069] min-w-[60px]">{item.stat}</div>
                      <p className="text-xs text-[#CBD5E1]">{item.desc}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
          >
            <Card className="p-4 bg-[#122339]/92 border border-[#E6C069]/20 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.35)] text-center">
              <h4 className="text-lg font-bold mb-2 text-[#F2F6FA]">The Solution is Clear</h4>
              <p className="text-xs text-[#CBD5E1]">
                Event-based vision eliminates motion blur, reduces data volume by 99%, and integrates in weeks, not months.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CostOfFrameVisionSlide;