import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Pipeline } from "@/components/ui/pipeline";
import { Zap, Database, Cpu, Shield, CheckCircle, Play } from "lucide-react";
import TechComparisonTable from "@/components/Charts/TechComparisonTable";
import { motion } from "framer-motion";

const SolutionSlide = () => {
  const advantages = [
    {
      icon: <Zap className="w-10 h-10 text-primary" />,
      title: "μs-Level Latency",
      description: "Event-driven processing responds to changes instantly, not frame-by-frame",
      metric: "<100 μs @ 1000 lux",
      color: "bg-card/80 border-border"
    },
    {
      icon: <Database className="w-10 h-10 text-accent" />,
      title: "HDR Vision", 
      description: "Handles bright glare and dark shadows simultaneously without exposure adjustments",
      metric: ">86 dB; up to >120 dB (conditions)",
      color: "bg-card/80 border-border"
    },
    {
      icon: <Cpu className="w-10 h-10 text-warning" />,
      title: "Sparse Data",
      description: "Transmit only pixel changes, reducing bandwidth and storage significantly",
      metric: "Lower bandwidth & storage",
      color: "bg-card/80 border-border"
    },
    {
      icon: <Shield className="w-10 h-10 text-accent" />,
      title: "Edge Processing",
      description: "Edge-capable on Jetson-class hardware",
      metric: "Edge-capable",
      color: "bg-card/80 border-border"
    }
  ];

  return (
    <div className="w-full h-screen flex flex-col px-6 py-4 bg-gradient-to-br from-background via-[hsl(220_34%_8%)] to-[hsl(142_69%_8%)]">
      {/* Chromatic Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-accent/10"></div>
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
      </div>
      
      {/* Header */}
      <div className="relative z-10 text-center space-y-3 mb-6">
        <Badge variant="outline" className="text-sm px-4 py-2 border-primary text-primary bg-transparent">
          EVENT-BASED VISION INTELLIGENCE
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-[-0.01em]">
          <span className="text-primary">Neuromorphic Vision</span> Intelligence
        </h1>
        <p className="text-lg text-muted max-w-4xl mx-auto">
          Neuromorphic sensors detect microsecond changes — transforming quality control with 96% less data, μs-level response, and HDR imaging for challenging industrial environments.
        </p>
      </div>

      <div className="relative z-10 flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
        {/* Left Column - Advantages */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-white">Technology Edge</h2>
          <div className="grid grid-cols-1 gap-3">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
              >
                <Card className={`p-4 hover:scale-105 transition-all duration-300 ${advantage.color} backdrop-blur-sm shadow-lg`}>
                  <div className="flex items-start space-x-3">
                    <div className="text-primary mt-1">
                      {advantage.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-base mb-2 text-white">
                        {advantage.title}
                      </h3>
                      <p className="text-xs text-muted mb-2">
                        {advantage.description}
                      </p>
                      <div className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full inline-block">
                        {advantage.metric}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column - Demo & Comparison */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-white">Live Demo</h2>
          
          <div className="mt-2">
            <h4 className="text-sm font-bold mb-2 text-white">High-speed Counting Demo</h4>
            <Card className="p-3 bg-card/80 backdrop-blur-sm border border-border rounded-xl shadow-lg max-w-xs">
              <div className="relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-accent/10 rounded-lg flex items-center justify-center border border-primary/30">
                  <Play className="w-8 h-8 text-primary opacity-80" />
                  <div className="absolute top-2 left-2">
                    <Badge variant="secondary" className="bg-primary text-white border-0 text-xs px-2 py-1">
                      &gt;1K obj/s • &gt;99.5%
                    </Badge>
                  </div>
                </div>
                <p className="text-xs text-muted mt-1">
                  Task-dependent accuracy; validated per pilot
                </p>
              </div>
            </Card>
          </div>

          {/* Tech Comparison Table */}
          <div>
            <h4 className="text-base font-bold mb-2 text-white">Event vs. Traditional</h4>
            <TechComparisonTable />
          </div>

          {/* Process Pipeline */}
          <div>
            <h4 className="text-base font-bold mb-2 text-white">Complete Solution Stack</h4>
            <Card className="p-3 bg-card/80 backdrop-blur-sm border border-border rounded-2xl shadow-lg">
              <Pipeline />
              <p className="text-xs text-muted mt-2 text-center">
                Edge processing: 15W vs 250W traditional systems (94% power reduction)
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionSlide;