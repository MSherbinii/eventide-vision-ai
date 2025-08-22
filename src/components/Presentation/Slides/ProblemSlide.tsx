import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StatTile } from "@/components/ui/stat-tile";
import VideoCompare from "@/components/ui/video-compare";
import { AlertTriangle, DollarSign, Clock, TrendingDown, Play, Maximize2 } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
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

      {/* Failure Cases (RGB) */}
      <div className="relative z-10 max-w-7xl mx-auto mb-16">
        <div className="flex justify-between items-start px-16 gap-24">
          {/* Motion blur failure */}
          <Dialog>
            <DialogTrigger asChild>
              <Card className="p-3 bg-card/80 backdrop-blur-sm border border-destructive/20 rounded-xl shadow-lg cursor-pointer group scale-150 mx-8 my-12">
                <div className="relative">
                  <div className="aspect-[16/9] bg-gradient-to-br from-destructive/15 to-transparent rounded-lg flex items-center justify-center border border-destructive/30">
                    <Play className="w-10 h-10 text-destructive opacity-80 group-hover:scale-110 transition-transform duration-200" />
                    <div className="absolute top-2 right-2">
                      <Badge variant="outline" className="text-[10px] flex items-center gap-1">
                        <Maximize2 className="w-3 h-3" /> Expand
                      </Badge>
                    </div>
                  </div>
                  <div className="mt-2 text-center">
                    <h4 className="text-sm font-bold text-white mb-1">Motion Blur at Line Speed</h4>
                    <p className="text-xs text-muted">Fast-moving parts → missed micro-defects (frame exposure/blur)</p>
                  </div>
                </div>
              </Card>
            </DialogTrigger>
            <DialogContent className="max-w-5xl p-0 overflow-hidden">
              <div className="bg-card">
                <div className="aspect-[16/9] bg-background border-b border-border flex items-center justify-center">
                  {/* Replace src with real failure case video URL */}
                  <div className="text-center text-muted text-xs p-6">Add RGB failure video URL here (motion blur). Placeholder shown.</div>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          {/* Glare/lighting failure */}
          <Dialog>
            <DialogTrigger asChild>
              <Card className="p-3 bg-card/80 backdrop-blur-sm border border-destructive/20 rounded-xl shadow-lg cursor-pointer group scale-150 mx-8 my-12">
                <div className="relative">
                  <div className="aspect-[16/9] bg-gradient-to-br from-destructive/15 to-transparent rounded-lg flex items-center justify-center border border-destructive/30">
                    <Play className="w-10 h-10 text-destructive opacity-80 group-hover:scale-110 transition-transform duration-200" />
                    <div className="absolute top-2 right-2">
                      <Badge variant="outline" className="text-[10px] flex items-center gap-1">
                        <Maximize2 className="w-3 h-3" /> Expand
                      </Badge>
                    </div>
                  </div>
                  <div className="mt-2 text-center">
                    <h4 className="text-sm font-bold text-white mb-1">Glare / Lighting Sensitivity</h4>
                    <p className="text-xs text-muted">Reflective surfaces → false negatives/positives under variable light</p>
                  </div>
                </div>
              </Card>
            </DialogTrigger>
            <DialogContent className="max-w-5xl p-0 overflow-hidden">
              <div className="bg-card">
                <div className="aspect-[16/9] bg-background border-b border-border flex items-center justify-center">
                  {/* Replace src with real failure case video URL */}
                  <div className="text-center text-muted text-xs p-6">Add RGB failure video URL here (glare/lighting). Placeholder shown.</div>
                </div>
              </div>
            </DialogContent>
          </Dialog>

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
          <p className="text-xl font-bold text-destructive">
            RGB frame vision = 10ms+ latency • 50x excess data • 10x higher power • Months-long integrations
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