import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Circle, Target } from "lucide-react";
import { motion } from "framer-motion";

const CompetitionSlide = () => {
  const competitors = [
    {
      name: "Cognex",
      hardware: true,
      sdk: true,
      integrator: false,
      fullStackPaaS: false,
      eventExpertise: false,
      mesErp: true,
      position: "Hardware + basic software"
    },
    {
      name: "Instrumental",
      hardware: false,
      sdk: true,
      integrator: true,
      fullStackPaaS: false,
      eventExpertise: false,
      mesErp: true,
      position: "AI QC platform (frame-based)"
    },
    {
      name: "Landing AI",
      hardware: false,
      sdk: true,
      integrator: true,
      fullStackPaaS: false,
      eventExpertise: false,
      mesErp: true,
      position: "Vision platform + services"
    },
    {
      name: "Elementary",
      hardware: true,
      sdk: true,
      integrator: true,
      fullStackPaaS: false,
      eventExpertise: false,
      mesErp: true,
      position: "Edge cameras + AI (frame-based)"
    },
    {
      name: "V7/Matroid",
      hardware: false,
      sdk: true,
      integrator: true,
      fullStackPaaS: false,
      eventExpertise: false,
      mesErp: false,
      position: "Labeling + model ops (frame)"
    },
    {
      name: "Keyence", 
      hardware: true,
      sdk: false,
      integrator: true,
      fullStackPaaS: false,
      eventExpertise: false,
      mesErp: true,
      position: "Closed hardware ecosystem"
    },
    {
      name: "Basler",
      hardware: true,
      sdk: true,
      integrator: false,
      fullStackPaaS: false,
      eventExpertise: false,
      mesErp: false,
      position: "Camera hardware focus"
    },
    {
      name: "Prophesee",
      hardware: true,
      sdk: true,
      integrator: false,
      fullStackPaaS: false,
      eventExpertise: true,
      mesErp: false,
      position: "Event sensors + SDK"
    },
    {
      name: "LuminaX AI",
      hardware: false,
      sdk: true,
      integrator: true,
      fullStackPaaS: true,
      eventExpertise: true,
      mesErp: true,
      position: "Full-stack event-based PaaS"
    }
  ];

  const categories = ["Hardware", "SDK", "Integrator", "Full-Stack PaaS", "Event Expertise", "MES/ERP"];

  const scatterPlotData = [
    { name: "Generalist frame-only", x: 25, y: 20, color: "text-muted" },
    { name: "Basler/IDS", x: 45, y: 35, color: "text-muted" }, 
    { name: "Cognex/Keyence", x: 70, y: 30, color: "text-muted" },
    { name: "Instrumental/Landing AI", x: 60, y: 40, color: "text-muted" },
    { name: "LuminaX AI", x: 85, y: 85, color: "text-primary" }
  ];

  return (
    <div className="w-full min-h-screen flex flex-col px-8 py-6 bg-gradient-to-br from-background via-[hsl(220_34%_8%)] to-[hsl(287_77%_8%)]">
      {/* Dynamic Chromatic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/8 via-transparent to-secondary/10"></div>
        <div className="absolute top-1/6 left-1/4 w-96 h-96 bg-primary/12 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-88 h-88 bg-secondary/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-3/4 left-2/3 w-64 h-64 bg-accent/6 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2.5s' }}></div>
      </div>
      
      {/* Header */}
      <div className="relative z-10 text-center space-y-4 mb-8">
        <Badge variant="outline" className="text-sm px-4 py-2 border-primary text-primary bg-transparent">
          COMPETITIVE LANDSCAPE
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-[-0.01em]">
          <span className="text-primary">Few Integrated</span> Event-Centric Options
        </h1>
        <p className="text-lg text-muted max-w-4xl mx-auto">
          Sensor vendors ≠ turnkey PaaS; integrators mainly frame-based in industrial QA
        </p>
      </div>

      <div className="relative z-10 flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Competitive Matrix */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-white">Competitive Matrix</h3>
          <Card className="p-8 bg-card/80 backdrop-blur-sm border border-border rounded-2xl shadow-lg">
            <div className="space-y-4">
              {/* Header */}
              <div className="grid grid-cols-7 gap-2 pb-3 border-b border-border">
                <div className="text-sm font-semibold text-white">Company</div>
                {categories.map((category, index) => (
                  <div key={index} className="text-xs font-semibold text-muted text-center">
                    {category}
                  </div>
                ))}
              </div>
              
              {/* Rows */}
              {competitors.map((competitor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className={`grid grid-cols-7 gap-2 py-2 rounded-lg ${
                    competitor.name === "LuminaX AI"
                      ? 'bg-primary/10 border border-primary/20' 
                      : ''
                  }`}
                >
                  <div className={`text-sm font-semibold ${
                    competitor.name === "LuminaX AI" ? 'text-primary' : 'text-white'
                  }`}>
                    {competitor.name}
                  </div>
                  <div className="flex justify-center">
                    {competitor.hardware ? 
                      <CheckCircle className="w-4 h-4 text-primary" /> : 
                      <Circle className="w-4 h-4 text-muted/50" />
                    }
                  </div>
                  <div className="flex justify-center">
                    {competitor.sdk ? 
                      <CheckCircle className="w-4 h-4 text-primary" /> : 
                      <Circle className="w-4 h-4 text-muted/50" />
                    }
                  </div>
                  <div className="flex justify-center">
                    {competitor.integrator ? 
                      <CheckCircle className="w-4 h-4 text-primary" /> : 
                      <Circle className="w-4 h-4 text-muted/50" />
                    }
                  </div>
                  <div className="flex justify-center">
                    {competitor.fullStackPaaS ? 
                      <CheckCircle className="w-4 h-4 text-primary" /> : 
                      <Circle className="w-4 h-4 text-muted/50" />
                    }
                  </div>
                  <div className="flex justify-center">
                    {competitor.eventExpertise ? 
                      <CheckCircle className="w-4 h-4 text-primary" /> : 
                      <Circle className="w-4 h-4 text-muted/50" />
                    }
                  </div>
                  <div className="flex justify-center">
                    {competitor.mesErp ? 
                      <CheckCircle className="w-4 h-4 text-primary" /> : 
                      <Circle className="w-4 h-4 text-muted/50" />
                    }
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-4 text-xs text-muted text-center">
              Based on public docs as of 2025; scope = industrial QA deployments
            </div>
          </Card>
        </div>

        {/* Right Column - Positioning Scatter Plot */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-white">Market Positioning</h3>
          <Card className="p-8 bg-card/80 backdrop-blur-sm border border-border rounded-2xl shadow-lg">
            <div className="relative w-full h-80">
              {/* Chart Background with Grid */}
              <div className="absolute inset-0 border-2 border-border/40 rounded-lg bg-gradient-to-tr from-background/20 to-background/5">
                {/* Grid Lines */}
                <div className="absolute inset-0">
                  {/* Vertical Grid Lines */}
                  {[25, 50, 75].map((x) => (
                    <div key={x} className="absolute h-full border-l border-border/20" style={{ left: `${x}%` }}></div>
                  ))}
                  {/* Horizontal Grid Lines */}
                  {[25, 50, 75].map((y) => (
                    <div key={y} className="absolute w-full border-t border-border/20" style={{ top: `${y}%` }}></div>
                  ))}
                </div>
              </div>
              
              {/* Axis Lines */}
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-border"></div>
              <div className="absolute bottom-0 left-0 w-0.5 h-full bg-border"></div>
              
              {/* X-Axis Labels */}
              <div className="absolute -bottom-8 left-0 text-xs text-muted/70">Low</div>
              <div className="absolute -bottom-8 right-0 text-xs text-muted/70">High</div>
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-sm font-medium text-white">
                Real-Time Line Speed Capability
              </div>
              
              {/* Y-Axis Labels */}
              <div className="absolute -left-8 bottom-0 text-xs text-muted/70">Low</div>
              <div className="absolute -left-8 top-0 text-xs text-muted/70">High</div>
              <div className="absolute -left-16 top-1/2 transform -translate-y-1/2 -rotate-90 text-sm font-medium text-white origin-center">
                Data Efficiency / Edge Suitability
              </div>
              
              {/* Data Points */}
              {scatterPlotData.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                  className="absolute group cursor-pointer"
                  style={{ 
                    left: `${point.x}%`, 
                    top: `${100 - point.y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  {/* Data Point */}
                  <div className={`w-4 h-4 rounded-full border-2 transition-all duration-300 group-hover:scale-125 ${
                    point.name === "LuminaX AI"
                      ? 'bg-primary border-primary/50 shadow-lg shadow-primary/30' 
                      : 'bg-muted/60 border-muted/40 group-hover:bg-muted/80'
                  }`}>
                    {point.name === "LuminaX AI" && (
                      <Target className="w-2 h-2 text-background absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    )}
                  </div>
                  
                  {/* Label */}
                  <div className={`text-xs mt-2 text-center whitespace-nowrap font-medium transition-colors duration-300 ${
                    point.name === "LuminaX AI" ? 'text-primary' : 'text-muted group-hover:text-white'
                  }`}>
                    {point.name}
                  </div>
                  
                  {/* Hover Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="bg-background/90 backdrop-blur-sm border border-border rounded-lg px-3 py-2 text-xs text-white shadow-lg">
                      <div className="font-medium">{point.name}</div>
                      <div className="text-muted text-xs">
                        Speed: {point.x}% | Efficiency: {point.y}%
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-4 text-xs text-muted text-center">
              Event-based sparsity; edge-first architecture
            </div>
          </Card>
        </div>
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="relative z-10 mt-8"
      >
        <Card className="p-8 bg-card/80 backdrop-blur-sm border border-primary/20 rounded-2xl shadow-lg text-center">
          <h4 className="text-xl font-bold mb-3 text-white">Our Unique Position</h4>
          <p className="text-base text-muted mb-4">
            Only full-stack event-based PaaS focused on QA/Inspection for high-speed lines
          </p>
          <div className="text-sm text-primary">
            <strong>First-mover edge in MENA (GCC) + EU</strong> — fewer local event-based specialists; leverage German network via XPRENEURS.
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default CompetitionSlide;