import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StatTile } from "@/components/ui/stat-tile";
import VideoCompare from "@/components/ui/video-compare";
import { AlertTriangle, DollarSign, Clock, TrendingDown } from "lucide-react";
import { motion } from "framer-motion";

const ProblemSlide = () => {
  const problems = [
    {
      icon: <Clock className="w-12 h-12 text-[#E6C069]" />,
      title: "Processing Latency",
      description: "Frame pipelines choke on high-speed lines; events happen between frames.",
      impact: "",
      color: "border-[#2C3D58] bg-[#122339]/92"
    },
    {
      icon: <DollarSign className="w-12 h-12 text-[#00D1C1]" />,
      title: "High Data Costs",
      description: "Full-frame video creates heavy storage/egress and compute bills.",
      impact: "",
      color: "border-[#2C3D58] bg-[#122339]/92"
    },
    {
      icon: <TrendingDown className="w-12 h-12 text-[#FFC466]" />,
      title: "Limited Performance",
      description: "Motion blur + glare miss micro-defects at line speed.",
      impact: "",
      color: "border-[#2C3D58] bg-[#122339]/92"
    },
    {
      icon: <AlertTriangle className="w-12 h-12 text-[#FF5E5E]" />,
      title: "Complex Integration",
      description: "Fragmented tools → multi-month, cross-vendor projects.",
      impact: "",
      color: "border-[#2C3D58] bg-[#122339]/92"
    }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center px-8 py-6" 
         style={{ background: 'linear-gradient(180deg, #0F2440 0%, #0A1526 35%, #0B172A 100%)' }}>
      {/* Header */}
      <div className="text-center space-y-4 mb-8">
        <Badge variant="outline" className="text-sm px-4 py-2 border-[#E6C069] text-[#E6C069] bg-transparent">
          THE PROBLEM
        </Badge>
        <h1 className="text-3xl md:text-4xl font-bold text-[#F2F6FA]">
          Frame-based Vision Struggles
          <br />
          <span className="text-[#E6C069]">at Line Speed</span>
        </h1>
        <p className="text-sm text-[#CBD5E1] max-w-2xl mx-auto">
          High-speed lines + variable lighting break frame-based vision. Motion blur misses defects; data is heavy and expensive to move/store.
        </p>
      </div>

      {/* Video Comparison */}
      <div className="max-w-5xl mx-auto mb-8">
        <VideoCompare />
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
        <StatTile 
          value="Missed" 
          label="Micro-defects at line speed" 
          foot="RGB only"
        />
        <StatTile 
          value="~100×" 
          label="Higher data volume" 
          foot="RGB streams (illustrative)"
        />
        <StatTile 
          value="<100 µs" 
          label="Event latency (IMX636)" 
          foot="vs ms-scale RGB"
        />
      </div>

      {/* Industry Impact */}
      <motion.div 
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <div className="p-6 bg-[#122339]/92 rounded-2xl border border-[#00D1C1]/20 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
          <h3 className="text-2xl font-bold mb-4 text-center text-[#F2F6FA]">Pilot Goals</h3>
          <div className="text-center space-y-2">
            <p className="text-lg text-[#CBD5E1]">Reduce rework/downtime; cut data/compute overhead.</p>
            <p className="text-sm text-[#93A1B5]">
              Actual % reported post-pilot.
            </p>
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="text-xs text-[#93A1B5]">
            IMX636 pixel latency &lt;100 µs @1000 lux; HDR &gt;86 dB (up to &gt;120 dB in some conditions). Sony/Prophesee EVK4 specs.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default ProblemSlide;