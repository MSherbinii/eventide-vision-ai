import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, LabelList } from "recharts";
import { Card } from "@/components/ui/card";
import { marketData } from "@/data/market";
import { motion } from "framer-motion";

const MarketGrowthChart = () => {
  const data = marketData.global.chartData;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="w-full h-full"
    >
      <Card className="p-4 bg-card/20 border border-border">
        <div className="text-center">
          <div className="text-4xl mb-2">📈</div>
          <div className="text-xl font-bold text-accent mb-1">$20.38B → $41.74B</div>
          <div className="text-sm text-muted-foreground mb-2">2024 → 2030</div>
          <div className="text-xs text-accent font-medium">13.0% CAGR</div>
        </div>
        
        <div className="text-center mt-4 space-y-1">
          <div className="text-xs text-muted-foreground">
            {marketData.global.source}
          </div>
          <div className="text-xs text-warning font-medium">
            MEA: ${(marketData.mea.size2024 / 1000).toFixed(2)}B (2024), {marketData.mea.cagr}% CAGR
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default MarketGrowthChart;