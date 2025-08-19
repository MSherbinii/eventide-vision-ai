import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Clock, TrendingUp, Zap, CheckCircle } from 'lucide-react';

const WhyNowSlide = () => {
  const timingFactors = [
    {
      icon: Clock,
      title: "Event Sensor Maturity",
      description: "Sony & Prophesee production-ready sensors",
      status: "Now Available",
      color: "bg-[#E6C069]"
    },
    {
      icon: TrendingUp,
      title: "Industry 4.0 Budgets",
      description: "Automation investments rising post-pandemic",
      status: "Peak Timing",
      color: "bg-[#00D1C1]"
    },
    {
      icon: Zap,
      title: "AI Stack Convergence",
      description: "Edge AI + cloud infrastructure mature",
      status: "Production Ready",
      color: "bg-[#FFC466]"
    },
    {
      icon: CheckCircle,
      title: "Market Validation",
      description: "Quality automation demand proven",
      status: "Validated",
      color: "bg-[#00D1C1]"
    }
  ];

  return (
    <div className="w-full h-full flex flex-col px-6 py-4" 
         style={{ background: 'linear-gradient(180deg, #0F2440 0%, #0A1526 35%, #0B172A 100%)' }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <Badge variant="outline" className="mb-3 text-xs border-[#E6C069] text-[#E6C069] bg-transparent">
          MARKET TIMING
        </Badge>
        <h1 className="font-bold text-3xl mb-3 text-[#F2F6FA] tracking-[-0.01em]">
          Timing Is Everything
        </h1>
        <p className="text-sm text-[#CBD5E1] max-w-2xl mx-auto">
          Bill Gross identified timing as the #1 factor for startup success. 
          Event-based vision technology has reached the perfect convergence point.
        </p>
      </motion.div>

      {/* Timing Bars Visualization */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full max-w-6xl"
        >
          {/* Timeline */}
          <div className="relative mb-8">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-[#93A1B5]">2020</span>
              <span className="text-xl font-bold text-[#E6C069]">NOW</span>
              <span className="text-sm text-[#93A1B5]">2025</span>
            </div>
            
            <div className="relative h-2 bg-[#2C3D58] rounded-full mb-6">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "75%" }}
                transition={{ duration: 2, delay: 0.5 }}
                className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#00D1C1] to-[#E6C069] rounded-full"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
                className="absolute left-3/4 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-[#E6C069] rounded-full border-2 border-[#F2F6FA] shadow-lg"
              />
            </div>
          </div>

          {/* Factors Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {timingFactors.map((factor, index) => (
              <motion.div
                key={factor.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                className="bg-[#122339]/92 border border-[#2C3D58] rounded-2xl p-4 text-center hover:shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-all duration-300"
              >
                <div className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${factor.color} mb-3`}>
                  <factor.icon className="w-4 h-4 text-white" />
                </div>
                
                <h3 className="font-semibold text-sm mb-2 text-[#F2F6FA]">
                  {factor.title}
                </h3>
                <p className="text-xs text-[#CBD5E1] mb-2">
                  {factor.description}
                </p>
                <Badge variant="secondary" className="text-xs bg-[#2C3D58] text-[#93A1B5] border-0">
                  {factor.status}
                </Badge>
              </motion.div>
            ))}
          </div>

          {/* Key Insight */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2 }}
            className="mt-8 text-center bg-[#122339]/92 border border-[#E6C069]/20 rounded-2xl p-4 shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
          >
            <h3 className="font-bold text-lg mb-2 text-[#F2F6FA]">
              The Perfect Storm
            </h3>
            <p className="text-sm text-[#CBD5E1] max-w-3xl mx-auto">
              Hardware maturity + software ecosystem + market demand + automation budgets = 
              <span className="text-[#E6C069] font-semibold"> First-mover opportunity</span>
            </p>
            
            <div className="mt-3 text-xs text-[#93A1B5]">
              Bill Gross (Idealab) TED Talk — "The Single Biggest Reason Why Startups Succeed"
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyNowSlide;