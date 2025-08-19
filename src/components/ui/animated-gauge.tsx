import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedGaugeProps {
  title: string;
  icon: ReactNode;
  percentage: number;
  label: string;
  color?: string;
}

export function AnimatedGauge({ 
  title, 
  icon, 
  percentage, 
  label, 
  color = "#FF5E5E" 
}: AnimatedGaugeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl border border-[#2C3D58] bg-[#122339]/92 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.35)] text-center"
    >
      <div className="flex justify-center mb-3 scale-75">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-[#F2F6FA] mb-2">{title}</h3>
      
      {/* Animated gauge */}
      <div className="relative w-24 h-24 mx-auto mb-3">
        <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
          <path
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="#2C3D58"
            strokeWidth="2"
          />
          <motion.path
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke={color}
            strokeWidth="2"
            strokeDasharray="100, 100"
            initial={{ strokeDashoffset: 100 }}
            animate={{ strokeDashoffset: 100 - percentage }}
            transition={{ duration: 2, delay: 0.5 }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-bold text-[#F2F6FA]">{percentage}%</span>
        </div>
      </div>
      
      <p className="text-sm text-[#CBD5E1]">{label}</p>
    </motion.div>
  );
}