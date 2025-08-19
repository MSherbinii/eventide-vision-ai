import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Pipeline } from "@/components/ui/pipeline";
import { Zap, Database, Cpu, Shield, CheckCircle, Play } from "lucide-react";
import TechComparisonTable from "@/components/Charts/TechComparisonTable";
import { motion } from "framer-motion";

const SolutionSlide = () => {
  const advantages = [
    {
      icon: <Zap className="w-10 h-10 text-[#E6C069]" />,
      title: "μs-Level Latency",
      description: "Event-driven processing responds to changes instantly, not frame-by-frame",
      metric: "<100 μs @ 1000 lux",
      color: "bg-[#122339]/92 border-[#2C3D58]"
    },
    {
      icon: <Database className="w-10 h-10 text-[#00D1C1]" />,
      title: "HDR Vision", 
      description: "Handles bright glare and dark shadows simultaneously without exposure adjustments",
      metric: ">86 dB; up to >120 dB (conditions)",
      color: "bg-[#122339]/92 border-[#2C3D58]"
    },
    {
      icon: <Cpu className="w-10 h-10 text-[#FFC466]" />,
      title: "Sparse Data",
      description: "Transmit only pixel changes, reducing bandwidth and storage significantly",
      metric: "Lower bandwidth & storage",
      color: "bg-[#122339]/92 border-[#2C3D58]"
    },
    {
      icon: <Shield className="w-10 h-10 text-[#00D1C1]" />,
      title: "Edge Processing",
      description: "Edge-capable on Jetson-class hardware",
      metric: "Edge-capable",
      color: "bg-[#122339]/92 border-[#2C3D58]"
    }
  ];

  return (
    <div className="w-full h-full flex flex-col px-6 py-4" 
         style={{ background: 'linear-gradient(180deg, #0F2440 0%, #0A1526 35%, #0B172A 100%)' }}>
      {/* Header */}
      <div className="text-center space-y-3 mb-6">
        <Badge variant="outline" className="text-sm px-4 py-2 border-[#E6C069] text-[#E6C069] bg-transparent">
          PERCEPTION OS FOR THE FACTORY
        </Badge>
        <h1 className="text-3xl md:text-4xl font-bold text-[#F2F6FA] tracking-[-0.01em]">
          <span className="text-[#E6C069]">Perception OS</span> for the Factory
        </h1>
        <p className="text-sm text-[#CBD5E1] max-w-3xl mx-auto">
          Event + RGB → Edge (Jetson) → Models → Portal (KPIs, audit, alerts) → MES/ERP API
        </p>
        <div className="text-xs text-[#93A1B5]">
          • μs-level temporal resolution • HDR &gt;86 dB; up to &gt;120 dB (conditions) • Sparse events → lower bandwidth &amp; storage; edge-capable on Jetson
        </div>
      </div>

      <div className="flex-1 grid grid-cols-2 gap-6">
        {/* Left Column - Key Advantages */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-[#F2F6FA]">Key Advantages</h3>
          <div className="grid grid-cols-2 gap-3">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className={`p-4 hover:scale-105 transition-all duration-300 ${advantage.color} rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.35)] h-full`}>
                  <div className="text-center space-y-2">
                    <div className="flex justify-center scale-75">
                      {advantage.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-xs mb-1 text-[#F2F6FA]">{advantage.title}</h4>
                      <p className="text-xs text-[#CBD5E1] mb-2">{advantage.description}</p>
                      <Badge variant="secondary" className="text-xs font-mono bg-[#2C3D58] text-[#93A1B5] border-0">
                        {advantage.metric}
                      </Badge>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Demo Section */}
          <div className="mt-4">
            <h4 className="text-lg font-bold mb-3 text-[#F2F6FA]">High-speed Counting Demo</h4>
            <Card className="p-4 bg-[#122339]/92 border border-[#2C3D58] rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-[#0F2440] to-[#0B172A] rounded-xl flex items-center justify-center">
                  <Play className="w-16 h-16 text-[#00D1C1] opacity-80" />
                  <div className="absolute top-3 left-3">
                    <Badge variant="secondary" className="bg-[#00D1C1] text-white border-0">
                      &gt;1,000 obj/s • &gt;99.5% demo accuracy
                    </Badge>
                  </div>
                </div>
                <p className="text-xs text-[#93A1B5] mt-2">
                  Task-dependent demo results. Actual footage available upon pilot setup.
                </p>
              </div>
            </Card>
          </div>

          {/* Pipeline Diagram */}
          <div className="mt-4">
            <h4 className="text-lg font-bold mb-3 text-[#F2F6FA]">Solution Pipeline</h4>
            <Card className="p-4 bg-[#122339]/92 border border-[#2C3D58] rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
              <Pipeline />
            </Card>
          </div>
        </div>

        {/* Right Column - Tech Comparison */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-[#F2F6FA]">Technology Edge</h3>
          <TechComparisonTable />

          {/* Solution Components */}
          <div className="mt-4">
            <h4 className="text-lg font-bold mb-3 text-[#F2F6FA]">Complete Solution Stack</h4>
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
                  <Card className="p-3 bg-[#122339]/92 border border-[#2C3D58] rounded-2xl">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#00D1C1] flex-shrink-0 mt-0.5" />
                      <div>
                        <h5 className="font-semibold text-xs text-[#F2F6FA]">{component.title}</h5>
                        <p className="text-xs text-[#CBD5E1]">{component.desc}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Applications */}
          <div>
            <h4 className="text-lg font-bold mb-3 text-[#F2F6FA]">Primary Applications</h4>
            <div className="grid grid-cols-3 gap-2 text-xs">
              {[
                "High-speed counting (~1000 obj/s)", "Predictive maintenance", "Area monitoring",
                "Quality assurance", "Positioning", "Vibration detection"
              ].map((app, index) => (
                <Badge key={index} variant="outline" className="text-center py-1 text-xs border-[#2C3D58] text-[#93A1B5] bg-transparent">
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