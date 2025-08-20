import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StatTile } from "@/components/ui/stat-tile";
import VideoCompare from "@/components/ui/video-compare";
import { AlertTriangle, DollarSign, Clock, TrendingDown } from "lucide-react";
import { motion } from "framer-motion";

const ProblemSlide = () => {
  const problems = [
    {
      icon: <Clock className="w-12 h-12 text-primary" />,
      title: "Processing Latency",
      description: "Frame pipelines choke on high-speed lines; events happen between frames.",
      impact: "",
      color: "border-border bg-card/80"
    },
    {
      icon: <DollarSign className="w-12 h-12 text-accent" />,
      title: "High Data Costs",
      description: "Full-frame video creates heavy storage/egress and compute bills.",
      impact: "",
      color: "border-border bg-card/80"
    },
    {
      icon: <TrendingDown className="w-12 h-12 text-warning" />,
      title: "Limited Performance",
      description: "Motion blur + glare miss micro-defects at line speed.",
      impact: "",
      color: "border-border bg-card/80"
    },
    {
      icon: <AlertTriangle className="w-12 h-12 text-destructive" />,
      title: "Complex Integration",
      description: "Fragmented tools → multi-month, cross-vendor projects.",
      impact: "",
      color: "border-border bg-card/80"
    }
  ];

  return (
    <div className="w-full h-screen flex flex-col px-8 py-6 bg-background relative overflow-hidden">
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
          THE PROBLEM
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-[-0.01em]">
          Frame-based Vision Struggles
          <br />
          <span className="text-primary">at Line Speed</span>
        </h1>
        <div className="text-lg max-w-4xl mx-auto space-y-2">
          <p className="text-muted">
            <strong className="text-white">Traditional RGB →</strong> blurred/missed micro-defects; slow frame latency (~10 ms+).
          </p>
          <p className="text-muted">
            <strong className="text-white">Event-Based (Sony IMX636) →</strong> &lt;100 µs latency; sparse, low-power output.
          </p>
        </div>
      </div>

      {/* Video Comparison */}
      <div className="relative z-10 max-w-5xl mx-auto mb-8">
        <VideoCompare />
      </div>

      {/* Stats Grid */}
      <div className="relative z-10 grid grid-cols-4 gap-4 max-w-6xl mx-auto mb-6">
        <div className="rounded-2xl border border-[#2C3D58] bg-[#122339]/92 px-4 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
          <div className="text-lg font-bold text-white mb-1">Latency</div>
          <div className="text-sm text-primary">~10 ms (frame) vs &lt;0.1 ms (event)</div>
          <div className="text-xs text-[#93A1B5] mt-2">Source: Sony IMX636 spec</div>
        </div>
        <div className="rounded-2xl border border-[#2C3D58] bg-[#122339]/92 px-4 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
          <div className="text-lg font-bold text-white mb-1">Sensor Power</div>
          <div className="text-sm text-primary">&lt;100 mW event vs frame ≫</div>
          <div className="text-xs text-[#93A1B5] mt-2">UAV platform: 10.7 mW</div>
        </div>
        <div className="rounded-2xl border border-[#2C3D58] bg-[#122339]/92 px-4 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
          <div className="text-lg font-bold text-white mb-1">Edge Compute</div>
          <div className="text-sm text-primary">~20 W</div>
          <div className="text-xs text-[#93A1B5] mt-2">Jetson Xavier, 1080p/24fps</div>
        </div>
        <div className="rounded-2xl border border-[#2C3D58] bg-[#122339]/92 px-4 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
          <div className="text-lg font-bold text-white mb-1">Cloud Vision Cost</div>
          <div className="text-sm text-primary">$100/stream/mo</div>
          <div className="text-xs text-[#93A1B5] mt-2">Visual Inspection AI benchmark</div>
        </div>
      </div>

      {/* Bottom Banner */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="relative z-10 text-center"
      >
        <Card className="p-6 bg-card/80 backdrop-blur-sm border border-primary/20 rounded-2xl shadow-lg">
          <p className="text-lg font-bold text-primary max-w-4xl mx-auto">
            Event-based vision delivers microsecond latency, ultra-efficient data and power use, and ~80–90% total cost reduction compared to frame-only systems.
          </p>
        </Card>
          <div className="text-center mt-4">
            <p className="text-xs text-muted-foreground">
              Industrial edge computing requirements: millisecond response time for 1000+ fps production lines. Traditional RGB: 50-200ms; Events: &lt;1ms.
            </p>
          </div>
      </motion.div>
    </div>
  );
};

export default ProblemSlide;