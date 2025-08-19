import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Database, Cpu, Shield, CheckCircle } from "lucide-react";
import TechComparisonTable from "@/components/Charts/TechComparisonTable";
import { motion } from "framer-motion";

const SolutionSlide = () => {
  const advantages = [
    {
      icon: <Zap className="w-10 h-10" />,
      title: "μs-Level Latency",
      description: "Event-driven processing responds to changes instantly, not frame-by-frame",
      metric: "<100 μs @ 1000 lux",
      color: "text-primary border-primary/20"
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: "HDR Vision", 
      description: "Handles bright glare and dark shadows simultaneously without exposure adjustments",
      metric: ">86 dB; up to >120 dB (conditions)",
      color: "text-secondary border-secondary/20"
    },
    {
      icon: <Cpu className="w-10 h-10" />,
      title: "Sparse Data",
      description: "Transmit only pixel changes, reducing bandwidth and storage significantly",
      metric: "Lower bandwidth & storage",
      color: "text-accent border-accent/20"
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Edge Processing",
      description: "Edge-capable on Jetson-class hardware",
      metric: "Edge-capable",
      color: "text-warning border-warning/20"
    }
  ];

  return (
    <div className="w-full h-full flex flex-col px-6 py-4">
      {/* Header */}
      <div className="text-center space-y-3 mb-6">
        <Badge variant="outline" className="text-sm px-4 py-2">
          PERCEPTION OS FOR THE FACTORY
        </Badge>
        <h1 className="text-3xl md:text-4xl font-bold">
          <span className="gradient-text">Perception OS</span> for the Factory
        </h1>
        <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
          Event + RGB → Edge (Jetson) → Models → Portal (KPIs, audit, alerts) → MES/ERP API
        </p>
        <div className="text-xs text-muted-foreground">
          • μs-level temporal resolution • HDR {'>'}86 dB; up to {'>'}120 dB (conditions) • Sparse events → lower bandwidth & storage; edge-capable on Jetson
        </div>
      </div>

      <div className="flex-1 grid grid-cols-2 gap-6">
        {/* Left Column - Key Advantages */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">Key Advantages</h3>
          <div className="grid grid-cols-2 gap-3">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className={`p-4 hover:scale-105 transition-all duration-300 ${advantage.color} glow-effect h-full`}>
                  <div className="text-center space-y-2">
                    <div className="flex justify-center scale-75">
                      {advantage.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-xs mb-1">{advantage.title}</h4>
                      <p className="text-xs text-muted-foreground mb-2">{advantage.description}</p>
                      <Badge variant="secondary" className="text-xs font-mono">
                        {advantage.metric}
                      </Badge>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Pipeline Diagram */}
          <div className="mt-4">
            <h4 className="text-lg font-bold mb-3">Solution Pipeline</h4>
            <Card className="p-4 bg-gradient-to-r from-card to-muted/5">
              <div className="flex items-center justify-between text-center">
                <div className="flex-1">
                  <div className="text-sm font-semibold mb-1">Event + RGB</div>
                  <div className="text-xs text-muted-foreground">Hybrid sensors</div>
                </div>
                <div className="text-accent">→</div>
                <div className="flex-1">
                  <div className="text-sm font-semibold mb-1">Edge AI</div>
                  <div className="text-xs text-muted-foreground">NVIDIA Jetson</div>
                </div>
                <div className="text-accent">→</div>
                <div className="flex-1">
                  <div className="text-sm font-semibold mb-1">Cloud Portal</div>
                  <div className="text-xs text-muted-foreground">KPIs, alerts</div>
                </div>
                <div className="text-accent">→</div>
                <div className="flex-1">
                  <div className="text-sm font-semibold mb-1">MES/ERP</div>
                  <div className="text-xs text-muted-foreground">API integration</div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Right Column - Tech Comparison */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">Technology Edge</h3>
          <TechComparisonTable />

          {/* Solution Components */}
          <div className="mt-4">
            <h4 className="text-lg font-bold mb-3">Complete Solution Stack</h4>
            <div className="space-y-2">
              {[
                { title: "Hardware Integration", desc: "Prophesee EVK4 (IMX636): 1280×720, <100 μs @ 1000 lux" },
                { title: "AI Processing Engine", desc: "Custom deep learning models optimized for event data" },
                { title: "Management Portal", desc: "Real-time KPIs, audit trails, alerts & MES/ERP integration" }
              ].map((component, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                >
                  <Card className="p-3 bg-gradient-to-r from-card to-muted/5">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h5 className="font-semibold text-xs">{component.title}</h5>
                        <p className="text-xs text-muted-foreground">{component.desc}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Applications */}
          <div>
            <h4 className="text-lg font-bold mb-3">Primary Applications</h4>
            <div className="grid grid-cols-3 gap-2 text-xs">
              {[
                "High-speed counting (~1000 obj/s)", "Predictive maintenance", "Area monitoring",
                "Quality assurance", "Positioning", "Vibration detection"
              ].map((app, index) => (
                <Badge key={index} variant="outline" className="text-center py-1 text-xs">
                  {app}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionSlide;