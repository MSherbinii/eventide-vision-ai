import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Building2, Package, Truck, Users, MapPin, Calendar, Target } from 'lucide-react';

const GoToMarketSlide = () => {
  const industrialSectors = [
    {
      icon: Building2,
      title: "Pharmaceutical Manufacturing",
      applications: ["High-speed tablet counting", "Cap/closure detection", "Label verification", "Serialization QC"],
      color: "bg-primary"
    },
    {
      icon: Package,
      title: "Food & Beverage Production", 
      applications: ["Fill-level detection", "Label placement", "Foreign object detection", "Bottling QC"],
      color: "bg-accent"
    },
    {
      icon: Truck,
      title: "Automotive Assembly",
      applications: ["Component inspection", "Surface defect detection", "Assembly verification", "Quality control"],
      color: "bg-secondary"
    }
  ];

  const futureMarkets = [
    {
      icon: Target,
      title: "Defense & Aerospace",
      phase: "Post-Seed (Year 2+)",
      applications: ["Critical component inspection", "Precision assembly QC", "Mission-critical systems"],
      reasoning: "High-value contracts, stringent quality requirements"
    },
    {
      icon: Building2, 
      title: "Advanced Manufacturing",
      phase: "Scale Phase",
      applications: ["Semiconductor inspection", "Electronics assembly", "Precision machining QC"],
      reasoning: "Complex geometries, ultra-high precision requirements"
    }
  ];

  const marketEntry = [
    {
      region: "MENA (Egypt Hub)",
      timeline: "Months 0-6",
      approach: "Direct sales via GCC network",
      targets: "Local pharma & F&B manufacturers",
      icon: MapPin
    },
    {
      region: "Germany (XPRENEURS)",
      timeline: "Months 6-12",
      approach: "UnternehmerTUM accelerator program",
      targets: "Industrial automation leaders",
      icon: Users,
      details: "XPRENEURS Batch #19: Applications open Dec 11, 2025; Program Mar–May 2026"
    },
    {
      region: "EU Expansion",
      timeline: "Months 12-18",
      approach: "Partner channel development",
      targets: "Regional system integrators",
      icon: Target
    }
  ];

  return (
    <div className="w-full h-full flex flex-col px-8 py-6 bg-gradient-to-br from-background via-[hsl(220_34%_8%)] to-[hsl(142_69%_8%)]">
      {/* Dynamic Chromatic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/8 via-transparent to-accent/12"></div>
        <div className="absolute top-1/5 left-1/5 w-96 h-96 bg-primary/12 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/5 right-1/5 w-80 h-80 bg-accent/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-2/3 left-3/4 w-64 h-64 bg-warning/6 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center mb-8"
      >
        <Badge variant="outline" className="mb-4 text-sm border-primary text-primary bg-transparent">
          GO-TO-MARKET STRATEGY
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white tracking-[-0.01em]">
          <span className="text-primary">Industrial Automation</span> Focus
        </h1>
        <p className="text-lg text-muted max-w-4xl mx-auto">
          Target high-speed production lines where event-based vision delivers measurable ROI. 
          Launch through GCC network and XPRENEURS/TUM in Germany.
        </p>
      </motion.div>

      <div className="relative z-10 space-y-12 max-w-7xl mx-auto">
        {/* Phase 1: Seed Round Focus */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="font-bold text-3xl mb-8 text-center text-white">
            Phase 1: <span className="text-primary">Seed Round</span> - Industrial Automation
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {industrialSectors.map((sector, index) => (
              <motion.div
                key={sector.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
              >
                <Card className="p-8 hover:shadow-xl transition-all duration-300 bg-card/80 backdrop-blur-sm border border-border rounded-2xl shadow-lg h-full">
                  <div className="text-center space-y-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${sector.color} mx-auto`}>
                      <sector.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <div>
                      <h3 className="font-bold text-xl mb-4 text-white">
                        {sector.title}
                      </h3>
                      <div className="space-y-2">
                        {sector.applications.map((app, appIndex) => (
                          <Badge key={appIndex} variant="secondary" className="text-sm bg-muted/20 text-muted border-0 block w-full py-2">
                            {app}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Phase 2: Future Markets */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="font-bold text-3xl mb-8 text-center text-white">
            Phase 2: <span className="text-accent">Scale & Expansion</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {futureMarkets.map((market, index) => (
              <motion.div
                key={market.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
              >
                <Card className="p-8 hover:shadow-xl transition-all duration-300 bg-card/80 backdrop-blur-sm border border-accent/30 rounded-2xl shadow-lg h-full">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent">
                        <market.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-white">
                          {market.title}
                        </h3>
                        <Badge variant="outline" className="text-xs border-accent text-accent bg-transparent mt-1">
                          {market.phase}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <p className="text-sm text-muted italic">{market.reasoning}</p>
                      <div className="space-y-2">
                        {market.applications.map((app, appIndex) => (
                          <Badge key={appIndex} variant="secondary" className="text-sm bg-accent/10 text-accent border-0 block w-full py-2">
                            {app}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Market Entry Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <h2 className="font-bold text-3xl mb-8 text-center text-white">
            Market Entry <span className="text-primary">Timeline</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {marketEntry.map((entry, index) => (
              <motion.div
                key={entry.region}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
              >
                <Card className="p-8 hover:shadow-xl transition-all duration-300 bg-card/80 backdrop-blur-sm border border-border rounded-2xl shadow-lg h-full">
                  <div className="text-center space-y-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary">
                      <entry.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <div>
                      <div className="mb-4">
                        <h3 className="font-bold text-xl text-white mb-2">
                          {entry.region}
                        </h3>
                        <Badge variant="outline" className="text-sm border-primary text-primary bg-transparent">
                          {entry.timeline}
                        </Badge>
                      </div>
                      
                      <div className="space-y-3 text-left">
                        <p className="text-sm text-muted">
                          <strong className="text-white">Approach:</strong> {entry.approach}
                        </p>
                        <p className="text-sm text-muted">
                          <strong className="text-white">Targets:</strong> {entry.targets}
                        </p>
                        {entry.details && (
                          <p className="text-xs text-primary mt-2 italic">
                            {entry.details}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GoToMarketSlide;