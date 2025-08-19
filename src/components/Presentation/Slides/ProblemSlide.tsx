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
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-[-0.01em]">
          Frame-based Vision Struggles
          <br />
          <span className="text-primary">at Line Speed</span>
        </h1>
        <p className="text-lg text-muted max-w-4xl mx-auto">
          High-speed manufacturing lines exceed RGB camera capabilities. Motion blur, lighting variations, and petabyte-scale data costs overwhelm traditional vision systems.
        </p>
      </div>

      {/* Video Comparison */}
      <div className="relative z-10 max-w-5xl mx-auto mb-8">
        <VideoCompare />
      </div>

      {/* Stats Grid */}
      <div className="relative z-10 grid grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
        <StatTile 
          value="9.31%" 
          label="Machine Vision CAGR" 
          foot="2024-2028 global growth"
        />
        <StatTile 
          value="96%" 
          label="Data Reduction" 
          foot="Event vs frame-based"
        />
        <StatTile 
          value="100μs" 
          label="Latency Edge" 
          foot="Event response time"
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
            <strong className="text-primary">Manufacturing pain points:</strong> Edge compute costs $2-5K/month per line for RGB processing; event-based reduces to sub-$500/month with 96% less data.
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