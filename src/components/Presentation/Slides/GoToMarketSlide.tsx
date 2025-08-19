import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Building2, Package, Truck, Users, MapPin, Calendar, Target } from 'lucide-react';

const GoToMarketSlide = () => {
  const verticals = [
    {
      icon: Package,
      title: "Pharma Packaging",
      applications: ["High-speed counting", "Cap/closure detection", "Label verification", "Serialization QC"],
      color: "bg-primary"
    },
    {
      icon: Building2,
      title: "Food & Beverage", 
      applications: ["Fill-level detection", "Label placement", "Foreign object detection", "Bottling QC"],
      color: "bg-accent"
    },
    {
      icon: Truck,
      title: "Logistics Sorting",
      applications: ["Package orientation", "Damage detection", "Barcode validation", "Conveyor monitoring"],
      color: "bg-warning"
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
        <h1 className="text-3xl md:text-4xl font-bold mb-3 text-white tracking-[-0.01em]">
          <span className="text-primary">Where We Win First</span>
        </h1>
        <p className="text-sm text-muted max-w-3xl mx-auto">
          Launch pilots via GCC network and XPRENEURS/TUM in Germany. 
          Land & expand through proven industrial verticals.
        </p>
      </motion.div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {/* Initial Vertical Focus */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="font-bold text-2xl mb-6 text-white">
              Initial Vertical Focus
            </h2>
          
          <div className="space-y-4">
            {verticals.map((vertical, index) => (
              <motion.div
                key={vertical.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
              >
                <Card className="p-6 hover:shadow-xl transition-all duration-300 bg-card/80 backdrop-blur-sm border border-border rounded-2xl shadow-lg">
                  <div className="flex items-start space-x-4">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${vertical.color}`}>
                      <vertical.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-white">
                        {vertical.title}
                      </h3>
                      <div className="grid grid-cols-2 gap-2">
                        {vertical.applications.map((app, appIndex) => (
                          <Badge key={appIndex} variant="secondary" className="text-xs bg-muted/20 text-muted border-0">
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

        {/* Market Entry Strategy */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="font-bold text-2xl mb-6 text-white">
              Market Entry Timeline
            </h2>
          
          <div className="space-y-4">
            {marketEntry.map((entry, index) => (
              <motion.div
                key={entry.region}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
              >
                <Card className="p-6 hover:shadow-xl transition-all duration-300 bg-card/80 backdrop-blur-sm border border-border rounded-2xl shadow-lg">
                  <div className="flex items-start space-x-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary">
                      <entry.icon className="w-5 h-5 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-lg text-white">
                          {entry.region}
                        </h3>
                        <Badge variant="outline" className="text-xs border-border text-muted bg-transparent">
                          {entry.timeline}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted mb-2">
                        <strong>Approach:</strong> {entry.approach}
                      </p>
                      <p className="text-sm text-muted">
                        <strong>Targets:</strong> {entry.targets}
                      </p>
                      {entry.details && (
                        <p className="text-xs text-primary mt-1">
                          {entry.details}
                        </p>
                      )}
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