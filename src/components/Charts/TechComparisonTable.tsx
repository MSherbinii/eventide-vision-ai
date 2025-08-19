import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { techSpecs } from "@/data/market";

const TechComparisonTable = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <Card className="p-6 bg-[#122339]/92 border border-[#2C3D58] rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
        <h4 className="text-lg font-bold mb-4 text-[#F2F6FA]">Event vs Traditional Vision</h4>
        
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-4 pb-3 border-b border-[#2C3D58] text-sm font-semibold">
            <div className="text-[#93A1B5]">Metric</div>
            <div className="text-[#E6C069]">Event-Based</div>
            <div className="text-[#93A1B5]">Traditional RGB</div>
          </div>
          
          {techSpecs.comparison.map((row, index) => (
            <motion.div
              key={index}
              className="grid grid-cols-3 gap-4 py-3 border-b border-[#2C3D58]/30 text-sm"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              <div className="font-medium text-[#F2F6FA]">{row.metric}</div>
              <div className="text-[#E6C069] font-medium">{row.event}</div>
              <div className="text-[#93A1B5]">{row.rgb}</div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-4 p-3 bg-[#E6C069]/10 border border-[#E6C069]/20 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="secondary" className="text-xs bg-[#E6C069] text-white border-0">
              Industrial Performance
            </Badge>
          </div>
          <div className="text-sm">
            <span className="font-semibold text-[#E6C069]">
              High-speed counting: &gt;1,000 obj/s
            </span>
            {" with "}
            <span className="font-semibold text-[#F2F6FA]">
              &gt;99.5% accuracy (task-dependent demo)
            </span>
          </div>
        </div>
        
        <div className="text-xs text-[#93A1B5] text-center mt-3">
          Anchor sensor: Sony/Prophesee IMX636 (EVK4). Task-dependent accuracy; industrial counting demos &gt;99.5%.
        </div>
      </Card>
    </motion.div>
  );
};

export default TechComparisonTable;