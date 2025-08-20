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
    <div className="w-full h-screen flex flex-col px-4 py-4 bg-background relative overflow-hidden">
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
        <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
          Frame Vision Fails at <span className="text-gradient text-glow-animate">High-Speed, High-Variance</span>
        </h1>
        <div className="text-base md:text-lg max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="p-3 rounded-lg bg-card/60 border border-border">
            <div className="text-foreground font-semibold mb-1">Latency & Blur</div>
            <div className="text-muted-foreground">Events happen between frames → defects missed at line speed</div>
          </div>
          <div className="p-3 rounded-lg bg-card/60 border border-border">
            <div className="text-foreground font-semibold mb-1">Data & Cloud Costs</div>
            <div className="text-muted-foreground">Redundant full frames → storage, egress, GPU bills balloon</div>
          </div>
          <div className="p-3 rounded-lg bg-card/60 border border-border">
            <div className="text-foreground font-semibold mb-1">Engineering Drag</div>
            <div className="text-muted-foreground">Complex integration stacks → slow deployment, fragile ops</div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <Badge variant="secondary">High-Speed QC</Badge>
          <Badge variant="secondary">99.9% Uptime</Badge>
          <Badge variant="secondary">Edge AI</Badge>
          <Badge variant="secondary">Real-time MLOps</Badge>
        </div>
      </div>

      {/* Video Comparison */}
      <div className="relative z-10 max-w-7xl mx-auto mb-8">
        <VideoCompare />
      </div>

      {/* Impact Stats */}
      <div className="relative z-10 grid grid-cols-4 gap-6 max-w-7xl mx-auto mb-6">
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
        <Card className="p-8 bg-card/80 backdrop-blur-sm border border-primary/20 rounded-2xl shadow-lg max-w-6xl mx-auto">
          <p className="text-xl font-bold text-primary">
            Event-based vision = Microsecond latency • 96% less data • 10× lower power • Weeks-to-value deployments.
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