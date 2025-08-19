import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedGauge } from "@/components/ui/animated-gauge";
import { ROICalculator } from "@/components/ui/roi-calculator";
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
         style={{ background: 'linear-gradient(180deg, #0B1B2B 0%, #0F2233 35%, #122339 100%)' }}>
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
        {/* Left Column - Animated Cost Gauges */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-[#F2F6FA]">Annual Quality Losses</h3>
          <div className="grid grid-cols-2 gap-4">
            <AnimatedGauge
              title="Storage/Egress load"
              icon={<DollarSign className="w-10 h-10 text-[#0EA5E9]" />}
              percentage={0}
              label="Use calculator on right"
              color="#0EA5E9"
            />
            <AnimatedGauge
              title="Compute load"
              icon={<Clock className="w-10 h-10 text-[#F59E0B]" />}
              percentage={0}
              label="Processing overhead"
              color="#F59E0B"
            />
            <AnimatedGauge
              title="Scrap & rework"
              icon={<AlertTriangle className="w-10 h-10 text-[#F59E0B]" />}
              percentage={0}
              label="Motion blur misses"
              color="#F59E0B"
            />
            <AnimatedGauge
              title="Nuisance downtime"
              icon={<TrendingDown className="w-10 h-10 text-[#F59E0B]" />}
              percentage={0}
              label="False stops"
              color="#F59E0B"
            />
          </div>

          {/* Pilot Target Impact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-6"
          >
            <div className="relative">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1.5, duration: 1.5 }}
                className="absolute top-0 left-0 h-full bg-[#00D1C1]/20 rounded-2xl"
              />
              <Card className="relative p-4 bg-[#0F2233] border border-[#0EA5E9]/20 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.35)] text-center">
                <Badge variant="secondary" className="mb-2 bg-[#0EA5E9] text-white border-0">Pilot Target</Badge>
                <div className="text-2xl font-bold text-[#0EA5E9] mb-2">20–50% reduction</div>
                <p className="text-xs text-[#93A1B5]">We'll replace with measured pilot results by line</p>
              </Card>
            </div>
          </motion.div>
        </div>

        {/* Right Column - ROI Calculator */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-[#F8FAFC]">Baseline Model (Illustrative)</h3>
          
          {/* ROI Calculator Component */}
          <ROICalculator title="Live ROI Calculator" />

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