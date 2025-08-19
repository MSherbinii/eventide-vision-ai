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
    <div className="w-full h-full flex flex-col justify-center px-8 py-6 bg-gradient-to-br from-background via-[hsl(220_34%_8%)] to-[hsl(4_100%_8%)]">
      {/* Chromatic Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-destructive/5 via-transparent to-primary/10"></div>
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-destructive/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      </div>
      
      {/* Header */}
      <div className="relative z-10 text-center space-y-4 mb-8">
        <Badge variant="outline" className="text-sm px-4 py-2 border-primary text-primary bg-transparent">
          THE PROBLEM
        </Badge>
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          Frame-based Vision Struggles
          <br />
          <span className="text-primary">at Line Speed</span>
        </h1>
        <p className="text-sm text-muted max-w-2xl mx-auto">
          High-speed lines + variable lighting break frame-based vision. Motion blur misses defects; data is heavy and expensive to move/store.
        </p>
      </div>

      {/* Video Comparison */}
      <div className="relative z-10 max-w-5xl mx-auto mb-8">
        <VideoCompare />
      </div>

      {/* Stats Grid */}
      <div className="relative z-10 grid grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
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

      {/* Bottom Banner */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="relative z-10 text-center"
      >
        <Card className="p-6 bg-card/80 backdrop-blur-sm border border-primary/20 rounded-2xl shadow-lg">
          <h3 className="text-lg font-bold mb-3 text-white">The Solution is Clear</h3>
          <p className="text-sm text-muted max-w-4xl mx-auto">
            <strong className="text-primary">Pilot goals:</strong> reduce rework/downtime; cut data/compute overhead. Actual % reported post-pilot.
          </p>
        </Card>
        <div className="text-center mt-4">
          <p className="text-xs text-muted-foreground">
            IMX636 pixel latency &lt;100 µs @1000 lux; HDR &gt;86 dB (up to &gt;120 dB in some conditions). Sony/Prophesee EVK4 specs.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default ProblemSlide;