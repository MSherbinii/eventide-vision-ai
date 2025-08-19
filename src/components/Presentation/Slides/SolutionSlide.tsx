import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Database, Cpu, Shield, CheckCircle } from "lucide-react";
import ParticleDataFlow from "@/components/3D/ParticleDataFlow";
import { motion } from "framer-motion";

const SolutionSlide = () => {
  const advantages = [
    {
      icon: <Zap className="w-10 h-10" />,
      title: "1000x Faster Processing",
      description: "Event-based sensors only capture changes, reducing data by 99%+",
      metric: "< 1ms latency",
      color: "text-primary border-primary/20"
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: "Massive Data Reduction",
      description: "Only meaningful pixel changes are processed, not entire frames",
      metric: "90% less storage",
      color: "text-secondary border-secondary/20"
    },
    {
      icon: <Cpu className="w-10 h-10" />,
      title: "Edge Processing Ready", 
      description: "Optimized algorithms work on low-power embedded hardware",
      metric: "10x power efficiency",
      color: "text-accent border-accent/20"
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Superior Accuracy",
      description: "No motion blur, high dynamic range, microsecond precision",
      metric: "> 99% accuracy",
      color: "text-green-500 border-green-500/20"
    }
  ];

  const comparison = [
    {
      category: "Response Time",
      traditional: "30-60 FPS (fixed)",
      eventBased: "Microsecond response",
      advantage: "1000x faster"
    },
    {
      category: "Data Processing",
      traditional: "Process entire frames",
      eventBased: "Only pixel changes",
      advantage: "99% less data"
    },
    {
      category: "Motion Blur",
      traditional: "Significant at high speeds",
      eventBased: "No motion blur ever",
      advantage: "Perfect clarity"
    },
    {
      category: "Dynamic Range",
      traditional: "60-80dB limited",
      eventBased: "120dB range",
      advantage: "2x dynamic range"
    },
    {
      category: "Power Consumption",
      traditional: "High processing load",
      eventBased: "Edge-optimized",
      advantage: "10x more efficient"
    }
  ];

  return (
    <div className="w-full h-full flex flex-col px-8 py-6">
      {/* Header */}
      <div className="text-center space-y-4 mb-8">
        <Badge variant="outline" className="text-lg px-6 py-2">
          OUR SOLUTION
        </Badge>
        <h1 className="text-5xl md:text-6xl font-bold">
          <span className="gradient-text">Event-Based Vision</span><br />Complete Platform
        </h1>
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
          The world's first end-to-end Perception-as-a-Service platform using neuromorphic vision sensors
        </p>
      </div>

      <div className="flex-1 grid grid-cols-2 gap-8">
        {/* Left Column - Key Advantages */}
        <div className="space-y-6">
          <h3 className="text-3xl font-bold">Key Advantages</h3>
          <div className="grid grid-cols-2 gap-4">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className={`p-6 hover:scale-105 transition-all duration-300 ${advantage.color} glow-effect h-full`}>
                  <div className="text-center space-y-3">
                    <div className="flex justify-center">
                      {advantage.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm mb-2">{advantage.title}</h4>
                      <p className="text-xs text-muted-foreground mb-3">{advantage.description}</p>
                      <Badge variant="secondary" className="text-xs font-mono">
                        {advantage.metric}
                      </Badge>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Data Flow Visualization */}
          <div className="mt-6">
            <h4 className="text-xl font-bold mb-4">Real-time Data Processing</h4>
            <ParticleDataFlow className="h-48" />
          </div>
        </div>

        {/* Right Column - Comparison Table */}
        <div className="space-y-6">
          <h3 className="text-3xl font-bold">Event-Based vs Traditional</h3>
          <Card className="p-6">
            <div className="space-y-4">
              <div className="grid grid-cols-4 gap-4 pb-3 border-b border-border text-sm font-semibold">
                <div>Feature</div>
                <div>Traditional RGB</div>
                <div>Event-Based</div>
                <div>Advantage</div>
              </div>
              {comparison.map((item, index) => (
                <motion.div
                  key={index}
                  className="grid grid-cols-4 gap-4 py-3 border-b border-border/30 text-sm"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                >
                  <div className="font-semibold">{item.category}</div>
                  <div className="text-muted-foreground">{item.traditional}</div>
                  <div className="text-primary">{item.eventBased}</div>
                  <div className="text-green-500 font-semibold">{item.advantage}</div>
                </motion.div>
              ))}
            </div>
          </Card>

          {/* Solution Components */}
          <div>
            <h4 className="text-xl font-bold mb-4">Complete Solution Stack</h4>
            <div className="space-y-3">
              {[
                { title: "Hardware Integration", desc: "Prophesee EVK4 HD, Sony IMX636 sensors" },
                { title: "AI Processing Engine", desc: "Custom deep learning models for event data" },
                { title: "Management Portal", desc: "Complete software platform for monitoring" }
              ].map((component, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                >
                  <Card className="p-4 bg-gradient-to-r from-card to-muted/5">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h5 className="font-semibold text-sm">{component.title}</h5>
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
            <h4 className="text-xl font-bold mb-4">Industrial Applications</h4>
            <div className="grid grid-cols-3 gap-2 text-xs">
              {[
                "Quality Assurance", "Positioning & Guidance", "Predictive Maintenance",
                "Measurement", "Identification", "Vibration Monitoring"
              ].map((app, index) => (
                <Badge key={index} variant="outline" className="text-center py-2">
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