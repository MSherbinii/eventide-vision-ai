import { StatTile } from "@/components/ui/stat-tile";
import { motion } from "framer-motion";

const TitleSlide = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center relative overflow-hidden bg-gradient-to-br from-background via-[hsl(220_34%_8%)] to-[hsl(142_69%_8%)]">
      {/* Chromatic Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-accent/10"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/8 rounded-full blur-3xl"></div>
        <img 
          src="/src/assets/hero-industrial.jpg" 
          alt="Industrial manufacturing facility" 
          className="w-full h-full object-cover opacity-15"
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
            <span className="block text-primary">Eventide Vision</span>
            <span className="block text-white text-4xl md:text-5xl">
              Event-Based Vision Intelligence
            </span>
          </h1>
          
        <p className="text-lg text-muted max-w-4xl mx-auto">
          Machine Vision Market: $15.83B (2025) → $23.63B (2030) at 8.3% CAGR — validated by MarketsandMarkets™
        </p>
          
          <div className="text-sm text-primary font-medium">
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
          <StatTile value="$15.83B" label="Vision Market 2025" />
          <StatTile value="$23.63B" label="Vision Market 2030" />
          <StatTile value="8.3%" label="CAGR 2025→2030" />
        </motion.div>
        
        {/* Source Attribution */}
        <motion.div
          className="text-xs text-[#93A1B5] text-center cursor-pointer hover:text-[#CBD5E1]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.4 }}
           title="Click to expand: Machine Vision Market data from MarketsandMarkets 2025"
        >
          Machine Vision Market data from MarketsandMarkets 2025. <span className="text-[#0EA5E9]">ⓘ</span>
        </motion.div>
      </div>
    </div>
  );
};

export default TitleSlide;