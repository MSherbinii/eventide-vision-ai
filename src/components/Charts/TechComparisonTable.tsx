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
      <Card className="p-6">
        <h4 className="text-lg font-bold mb-4">Event vs Traditional Vision</h4>
        
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-4 pb-3 border-b border-graphite text-sm font-semibold">
            <div className="text-muted">Metric</div>
            <div className="text-warning">Event-Based</div>
            <div className="text-muted">Traditional RGB</div>
          </div>
          
          {techSpecs.comparison.map((row, index) => (
            <motion.div
              key={index}
              className="grid grid-cols-3 gap-4 py-3 border-b border-graphite/30 text-sm"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              <div className="font-medium text-paper">{row.metric}</div>
              <div className="text-warning font-medium">{row.event}</div>
              <div className="text-muted">{row.rgb}</div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-4 p-3 bg-warning/10 border border-warning/20 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="secondary" className="text-xs">
              Industrial Performance
            </Badge>
          </div>
          <div className="text-sm">
            <span className="font-semibold text-warning">
              {techSpecs.performance.useCase}
            </span>
            : &gt;{techSpecs.performance.throughputObjPerS} obj/s with{" "}
            <span className="font-semibold">
              &gt;{techSpecs.performance.accuracyPct}% accuracy
            </span>
          </div>
        </div>
        
        <div className="text-xs text-muted mt-3">
          Source: {techSpecs.imx636.source}
        </div>
      </Card>
    </motion.div>
  );
};

export default TechComparisonTable;