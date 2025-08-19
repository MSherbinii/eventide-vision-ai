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
      color: "bg-[#E6C069]"
    },
    {
      icon: Building2,
      title: "Food & Beverage",
      applications: ["Fill-level detection", "Label placement", "Foreign object detection", "Bottling QC"],
      color: "bg-[#00D1C1]"
    },
    {
      icon: Truck,
      title: "Logistics Sorting",
      applications: ["Package orientation", "Damage detection", "Barcode validation", "Conveyor monitoring"],
      color: "bg-[#FFC466]"
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
    <div className="w-full h-full flex flex-col px-8 py-6" 
         style={{ background: 'linear-gradient(180deg, #0F2440 0%, #0A1526 35%, #0B172A 100%)' }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <Badge variant="outline" className="mb-4 text-sm border-[#E6C069] text-[#E6C069] bg-transparent">
          GO-TO-MARKET STRATEGY
        </Badge>
        <h1 className="text-3xl md:text-4xl font-bold mb-3 text-[#F2F6FA] tracking-[-0.01em]">
          <span className="text-[#E6C069]">Where We Win First</span>
        </h1>
        <p className="text-sm text-[#CBD5E1] max-w-3xl mx-auto">
          Launch pilots via GCC network and XPRENEURS/TUM in Germany. 
          Land & expand through proven industrial verticals.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {/* Initial Vertical Focus */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="font-bold text-2xl mb-6 text-[#F2F6FA]">
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
                <Card className="p-6 hover:shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-all duration-300 bg-[#122339]/92 border border-[#2C3D58] rounded-2xl">
                  <div className="flex items-start space-x-4">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${vertical.color}`}>
                      <vertical.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-[#F2F6FA]">
                        {vertical.title}
                      </h3>
                      <div className="grid grid-cols-2 gap-2">
                        {vertical.applications.map((app, appIndex) => (
                          <Badge key={appIndex} variant="secondary" className="text-xs bg-[#2C3D58] text-[#93A1B5] border-0">
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
          <h2 className="font-bold text-2xl mb-6 text-[#F2F6FA]">
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
                <Card className="p-6 hover:shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-all duration-300 bg-[#122339]/92 border border-[#2C3D58] rounded-2xl">
                  <div className="flex items-start space-x-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#E6C069]">
                      <entry.icon className="w-5 h-5 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-lg text-[#F2F6FA]">
                          {entry.region}
                        </h3>
                        <Badge variant="outline" className="text-xs border-[#2C3D58] text-[#93A1B5] bg-transparent">
                          {entry.timeline}
                        </Badge>
                      </div>
                      <p className="text-sm text-[#CBD5E1] mb-2">
                        <strong>Approach:</strong> {entry.approach}
                      </p>
                      <p className="text-sm text-[#CBD5E1]">
                        <strong>Targets:</strong> {entry.targets}
                      </p>
                      {entry.details && (
                        <p className="text-xs text-[#E6C069] mt-1">
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