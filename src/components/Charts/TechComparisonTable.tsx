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
      <Card className="p-4 bg-card/80 border border-border rounded-xl shadow-lg backdrop-blur-sm">
        <h4 className="text-base font-bold mb-3 text-white">Event vs Traditional Vision</h4>
        
        <div className="space-y-2">
          <div className="grid grid-cols-3 gap-3 pb-2 border-b border-border text-xs font-semibold">
            <div className="text-muted-foreground">Metric</div>
            <div className="text-primary">Event-Based</div>
            <div className="text-muted-foreground">Traditional RGB</div>
          </div>
          
          {techSpecs.comparison.map((row, index) => (
            <motion.div
              key={index}
              className="grid grid-cols-3 gap-3 py-2 border-b border-border/30 text-xs"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
            >
              <div className="font-medium text-white">{row.metric}</div>
              <div className="text-primary font-medium">{row.event}</div>
              <div className="text-muted-foreground">{row.rgb}</div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-3 p-3 bg-primary/10 border border-primary/20 rounded-lg">
          <div className="flex items-center gap-2 mb-1">
            <Badge variant="secondary" className="text-xs bg-primary text-white border-0">
              Industrial Performance
            </Badge>
          </div>
          <div className="text-xs">
            <span className="font-semibold text-primary">
              High-speed counting: &gt;1,000 obj/s
            </span>
            {" with "}
            <span className="font-semibold text-white">
              &gt;99.5% accuracy (demo)
            </span>
          </div>
        </div>
        
        <div className="text-xs text-muted-foreground text-center mt-2">
          Sony/Prophesee IMX636. Demo accuracy &gt;99.5% for counting tasks.
        </div>
      </Card>
    </motion.div>
  );
};

export default TechComparisonTable;