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
      color: "bg-accent"
    },
    {
      icon: Building2,
      title: "Food & Beverage",
      applications: ["Fill-level detection", "Label placement", "Foreign object detection", "Bottling QC"],
      color: "bg-warning"
    },
    {
      icon: Truck,
      title: "Logistics Sorting",
      applications: ["Package orientation", "Damage detection", "Barcode validation", "Conveyor monitoring"],
      color: "bg-primary"
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

  const partnerships = [
    { name: "IDS Imaging", type: "Startup Collaboration", focus: "Hardware integration" },
    { name: "NVIDIA Inception", type: "Technology Partner", focus: "Edge AI optimization" },
    { name: "Prophesee", type: "Sensor Ecosystem", focus: "Event camera access" },
    { name: "GCC Network", type: "Regional Partner", focus: "MENA market entry" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background p-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <Badge variant="outline" className="mb-4 font-heading text-sm border-accent text-accent">
          GO-TO-MARKET STRATEGY
        </Badge>
        <h1 className="text-2xl font-bold mb-3">
          <span className="gradient-text">Lumina AI: Where We Win First</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Launch pilots via GCC network and XPRENEURS/TUM in Germany. 
          Land & expand through proven industrial verticals.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
        {/* Initial Vertical Focus */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="font-heading font-bold text-3xl mb-6 text-foreground">
            Initial Vertical Focus
          </h2>
          
          <div className="space-y-6">
            {verticals.map((vertical, index) => (
              <motion.div
                key={vertical.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
              >
                <Card className="p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-l-accent">
                  <div className="flex items-start space-x-4">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${vertical.color}`}>
                      <vertical.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-heading font-semibold text-xl mb-3 text-foreground">
                        {vertical.title}
                      </h3>
                      <div className="grid grid-cols-2 gap-2">
                        {vertical.applications.map((app, appIndex) => (
                          <Badge key={appIndex} variant="secondary" className="text-xs">
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
          <h2 className="font-heading font-bold text-3xl mb-6 text-foreground">
            Market Entry Timeline
          </h2>
          
          <div className="space-y-6">
            {marketEntry.map((entry, index) => (
              <motion.div
                key={entry.region}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
              >
                <Card className="p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary">
                      <entry.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-heading font-semibold text-lg text-foreground">
                          {entry.region}
                        </h3>
                        <Badge variant="outline" className="text-xs">
                          {entry.timeline}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong>Approach:</strong> {entry.approach}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Targets:</strong> {entry.targets}
                      </p>
                      {entry.details && (
                        <p className="text-xs text-accent mt-1">
                          {entry.details}
                        </p>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Strategic Partnerships */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-8"
          >
            <h3 className="font-heading font-semibold text-xl mb-4 text-foreground">
              Strategic Partnerships
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {partnerships.map((partner, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                  <div>
                    <span className="font-medium text-foreground">{partner.name}</span>
                    <Badge variant="secondary" className="ml-2 text-xs">{partner.type}</Badge>
                  </div>
                  <span className="text-sm text-muted-foreground">{partner.focus}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="mt-12 text-center bg-gradient-to-r from-accent/10 to-warning/10 border border-accent/20 rounded-lg p-6 max-w-4xl mx-auto"
      >
        <h3 className="font-heading font-bold text-2xl mb-2 text-foreground">
          Land & Expand Strategy
        </h3>
        <p className="text-muted-foreground">
          Start with high-value pilots → prove ROI → scale across facilities → expand to adjacent verticals
        </p>
      </motion.div>
    </div>
  );
};

export default GoToMarketSlide;