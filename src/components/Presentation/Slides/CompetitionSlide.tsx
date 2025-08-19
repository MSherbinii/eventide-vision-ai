import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, X, Target } from "lucide-react";
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
      name: "IDS Imaging",
      hardware: true,
      sdk: true,
      integrator: false,
      fullStackPaaS: false,
      eventExpertise: false,
      mesErp: false,
      position: "Industrial cameras"
    },
    {
      name: "Prophesee",
      hardware: true,
      sdk: true,
      integrator: false,
      fullStackPaaS: false,
      eventExpertise: true,
      mesErp: false,
      position: "Event sensors, no applications"
    },
    {
      name: "Matroid/V7",
      hardware: false,
      sdk: false,
      integrator: false,
      fullStackPaaS: true,
      eventExpertise: false,
      mesErp: false,
      position: "Software platform, RGB only"
    },
    {
      name: "Our Solution",
      hardware: true,
      sdk: true,
      integrator: true,
      fullStackPaaS: true,
      eventExpertise: true,
      mesErp: true,
      position: "Complete event-based PaaS",
      highlight: true
    }
  ];

  const capabilities = [
    { name: "Hardware", description: "Camera sensors & systems" },
    { name: "SDK", description: "Development tools & APIs" },
    { name: "Integrator", description: "Custom implementation services" },
    { name: "Full-Stack PaaS", description: "Complete cloud platform" },
    { name: "Event Expertise", description: "Neuromorphic vision specialization" },
    { name: "MES/ERP", description: "Enterprise system integration" }
  ];

  const positioningData = [
    {
      quadrant: "High Speed, Low Data",
      companies: ["Our Solution"],
      description: "Event-based advantage zone",
      position: { x: 85, y: 85 },
      color: "text-primary"
    },
    {
      quadrant: "High Speed, High Data", 
      companies: ["Cognex", "Keyence"],
      description: "Performance with overhead",
      position: { x: 85, y: 15 },
      color: "text-orange-500"
    },
    {
      quadrant: "Low Speed, High Data",
      companies: ["Matroid", "V7"],
      description: "Software platforms",
      position: { x: 15, y: 15 },
      color: "text-red-500"
    },
    {
      quadrant: "Low Speed, Low Data",
      companies: ["Basler", "IDS"],
      description: "Basic hardware",
      position: { x: 15, y: 85 },
      color: "text-gray-500"
    }
  ];

  return (
    <div className="w-full h-full flex flex-col px-8 py-6">
      {/* Header */}
      <div className="text-center space-y-4 mb-8">
        <Badge variant="outline" className="text-lg px-6 py-2">
          COMPETITIVE LANDSCAPE
        </Badge>
        <h1 className="text-5xl md:text-6xl font-bold">
          <span className="gradient-text">No Direct Competition</span><br />in Event-Based PaaS
        </h1>
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
          Hardware vendors provide sensors but no complete solutions. Software platforms handle RGB only. We're the first full-stack event-based PaaS.
        </p>
      </div>

      <div className="flex-1 grid grid-cols-2 gap-8">
        {/* Left Column - Competitive Matrix */}
        <div className="space-y-6">
          <h3 className="text-3xl font-bold">Competitive Matrix</h3>
          
          <Card className="p-6">
            <div className="space-y-4">
              {/* Header */}
              <div className="grid grid-cols-7 gap-2 pb-3 border-b border-border text-xs font-semibold">
                <div>Company</div>
                {capabilities.map((cap, index) => (
                  <div key={index} className="text-center">{cap.name}</div>
                ))}
              </div>
              
              {/* Competitor Rows */}
              {competitors.map((competitor, index) => (
                <motion.div
                  key={index}
                  className={`grid grid-cols-7 gap-2 py-3 border-b border-border/30 text-xs ${
                    competitor.highlight ? 'bg-primary/10 rounded-lg px-2' : ''
                  }`}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className={`font-semibold ${competitor.highlight ? 'text-primary' : ''}`}>
                    {competitor.name}
                  </div>
                  <div className="text-center">
                    {competitor.hardware ? (
                      <CheckCircle className="w-4 h-4 text-green-500 mx-auto" />
                    ) : (
                      <X className="w-4 h-4 text-red-500 mx-auto" />
                    )}
                  </div>
                  <div className="text-center">
                    {competitor.sdk ? (
                      <CheckCircle className="w-4 h-4 text-green-500 mx-auto" />
                    ) : (
                      <X className="w-4 h-4 text-red-500 mx-auto" />
                    )}
                  </div>
                  <div className="text-center">
                    {competitor.integrator ? (
                      <CheckCircle className="w-4 h-4 text-green-500 mx-auto" />
                    ) : (
                      <X className="w-4 h-4 text-red-500 mx-auto" />
                    )}
                  </div>
                  <div className="text-center">
                    {competitor.fullStackPaaS ? (
                      <CheckCircle className="w-4 h-4 text-green-500 mx-auto" />
                    ) : (
                      <X className="w-4 h-4 text-red-500 mx-auto" />
                    )}
                  </div>
                  <div className="text-center">
                    {competitor.eventExpertise ? (
                      <CheckCircle className="w-4 h-4 text-green-500 mx-auto" />
                    ) : (
                      <X className="w-4 h-4 text-red-500 mx-auto" />
                    )}
                  </div>
                  <div className="text-center">
                    {competitor.mesErp ? (
                      <CheckCircle className="w-4 h-4 text-green-500 mx-auto" />
                    ) : (
                      <X className="w-4 h-4 text-red-500 mx-auto" />
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>

          {/* Key Differentiators */}
          <div>
            <h4 className="text-xl font-bold mb-4">Our Unique Position</h4>
            <div className="space-y-3">
              {[
                { title: "Event-Based Specialization", desc: "Only company offering complete event vision solutions" },
                { title: "Hardware Agnostic PaaS", desc: "Works with Sony, Prophesee, Samsung sensors" },
                { title: "Recurring Revenue Model", desc: "SaaS pricing vs one-time hardware sales" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                >
                  <Card className="p-4 bg-gradient-to-r from-primary/10 to-secondary/10">
                    <div className="flex items-start gap-3">
                      <Target className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h5 className="font-semibold text-sm">{item.title}</h5>
                        <p className="text-xs text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Positioning Map */}
        <div className="space-y-6">
          <h3 className="text-3xl font-bold">Market Positioning</h3>
          
          <Card className="p-6 h-80">
            <div className="relative w-full h-full">
              {/* Axes */}
              <div className="absolute bottom-4 left-4 right-4 h-px bg-border"></div>
              <div className="absolute bottom-4 left-4 top-4 w-px bg-border"></div>
              
              {/* Axis Labels */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-xs text-muted-foreground">
                Processing Speed →
              </div>
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -rotate-90 text-xs text-muted-foreground">
                Data Efficiency →
              </div>
              
              {/* Quadrants */}
              {positioningData.map((quadrant, index) => (
                <motion.div
                  key={index}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 ${quadrant.color}`}
                  style={{ 
                    left: `${quadrant.position.x}%`, 
                    top: `${100 - quadrant.position.y}%` 
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                >
                  <div className="text-center">
                    <div className="w-3 h-3 rounded-full bg-current mb-1 mx-auto"></div>
                    <div className="text-xs font-semibold whitespace-nowrap">
                      {quadrant.companies.join(', ')}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>

          {/* Market Timing Advantage */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <Card className="p-6 bg-gradient-to-r from-accent/10 to-primary/10 border-accent/20">
              <h4 className="text-xl font-bold mb-4">🎯 First Mover Advantage</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <strong>Technology Ready:</strong> Event sensors matured (Sony IMX636, Prophesee EVK4)
                </div>
                <div>
                  <strong>Market Timing:</strong> Industrial automation budgets at all-time highs
                </div>
                <div>
                  <strong>Zero Competition:</strong> No other startup offers full-stack event-based industrial vision
                </div>
                <div className="text-center pt-4">
                  <Badge variant="secondary" className="text-lg px-4 py-2">
                    18-24 Month Head Start Window
                  </Badge>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CompetitionSlide;