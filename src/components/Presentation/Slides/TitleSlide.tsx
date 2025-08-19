import { StatTile } from "@/components/ui/stat-tile";
import { motion } from "framer-motion";

const TitleSlide = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center relative overflow-hidden" 
         style={{ background: 'linear-gradient(180deg, #0B1B2B 0%, #0F2233 35%, #122339 100%)' }}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/src/assets/hero-industrial.jpg" 
          alt="Industrial manufacturing facility" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-8 py-16">
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6 mb-12"
        >
          <h1 className="text-6xl md:text-7xl font-bold leading-tight tracking-[-0.01em]">
            <span className="block text-[#E6C069]">Eventide Vision</span>
            <span className="block text-[#F8FAFC] text-4xl md:text-5xl">
              Perception-as-a-Service for Factories
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-[#CBD5E1] max-w-3xl mx-auto">
            Event-based cameras + Edge AI → Fewer misses, less data, faster installs
          </p>
          
          <div className="text-sm text-[#E6C069] font-medium">
            Hardware maturity + automation demand = first-mover opportunity
          </div>
        </motion.div>

        {/* Key Metrics */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <StatTile value="$20.38B" label="Market Size 2024" />
          <StatTile value="$41.74B" label="Market 2030" />
          <StatTile value="13.0%" label="CAGR 2024→2030" />
        </motion.div>
        
        {/* Source Attribution */}
        <motion.div
          className="text-xs text-[#93A1B5] text-center cursor-pointer hover:text-[#CBD5E1]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.4 }}
          title="Click to expand: Specs from Sony/Prophesee IMX636 & EVK4; market from GVR 2025"
        >
          Specs from Sony/Prophesee IMX636 & EVK4; market from GVR 2025. <span className="text-[#0EA5E9]">ⓘ</span>
        </motion.div>
      </div>
    </div>
  );
};

export default TitleSlide;