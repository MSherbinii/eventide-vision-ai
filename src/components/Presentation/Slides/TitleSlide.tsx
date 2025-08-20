import { StatTile } from "@/components/ui/stat-tile";
import { motion } from "framer-motion";
import { Expand } from "lucide-react";

const TitleSlide = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center relative overflow-hidden" style={{ background: 'var(--gradient-hero-light)' }}>
      {/* Background Image - Full Window */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/src/assets/hero-industrial.jpg" 
          alt="Industrial manufacturing facility" 
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0" style={{ background: 'var(--gradient-hero-light)' }} />
        <div className="absolute inset-0" style={{ background: 'var(--gradient-mesh)' }} />
      </div>
      {/* Expand Icon */}
      <motion.div 
        className="absolute top-6 right-6 z-20 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.4 }}
        title="Expand slide"
      >
        <Expand 
          size={24} 
          className="text-foreground hover:text-primary transition-colors" 
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-8 py-16">
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8 mb-12"
        >
          <h1 className="pitch-headline text-6xl md:text-7xl lg:text-8xl font-heading leading-tight tracking-[-0.02em]">
            <span 
              className="block font-display mb-2"
              style={{ 
                background: 'var(--gradient-titanium)', 
                WebkitBackgroundClip: 'text', 
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              LuminaX
            </span>
            <span className="block text-foreground pitch-title text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
              Event-Based AI for Robotics & Automation
            </span>
          </h1>
          
          <div className="pitch-body text-lg text-muted-foreground font-medium max-w-5xl mx-auto leading-relaxed">
            Event sensors are production-ready • Automation budgets rising • Microsecond-latency vision at scale
          </div>
        </motion.div>

        {/* Key Metrics */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <StatTile value="$20.38B" label="2024 Market Size" />
          <StatTile value="$41.74B" label="2030 Market Size" />
          <StatTile value="13.0%" label="CAGR (2024→2030)" />
        </motion.div>
        
        {/* Source Attribution */}
        <motion.div
          className="text-xs text-muted-foreground text-center cursor-pointer hover:text-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.4 }}
           title="Click to expand: Machine Vision Market data from Grand View Research 2025"
        >
          Source: Grand View Research, Machine Vision Market, 2025. <span className="text-primary">ⓘ</span>
        </motion.div>
      </div>
    </div>
  );
};

export default TitleSlide;