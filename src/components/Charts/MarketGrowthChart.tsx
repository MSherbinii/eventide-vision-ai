import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Target, DollarSign } from "lucide-react";
import { motion } from "framer-motion";

const MarketGrowthChart = ({ className = "" }: { className?: string }) => {
  const marketData = [
    { year: 2024, value: 20.3, percentage: 0 },
    { year: 2025, value: 23.1, percentage: 13.3 },
    { year: 2026, value: 26.8, percentage: 25.6 },
    { year: 2027, value: 31.2, percentage: 44.1 },
    { year: 2028, value: 36.5, percentage: 66.2 },
    { year: 2029, value: 42.8, percentage: 85.4 },
    { year: 2030, value: 50.2, percentage: 100 }
  ];

  const maxValue = Math.max(...marketData.map(d => d.value));

  return (
    <div className={`w-full ${className}`}>
      <Card className="p-8 bg-gradient-to-br from-card to-muted/20 border-primary/20">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="outline" className="text-sm">
              MARKET GROWTH PROJECTION
            </Badge>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <TrendingUp className="w-4 h-4" />
              13.04% CAGR
            </div>
          </div>
          <h3 className="text-2xl font-bold gradient-text mb-2">
            Machine Vision Market Size
          </h3>
          <p className="text-muted-foreground">
            Global market value projected through 2030
          </p>
        </div>

        {/* Chart */}
        <div className="relative">
          {/* Y-axis labels */}
          <div className="absolute left-0 top-0 h-64 flex flex-col justify-between text-xs text-muted-foreground">
            <span>$60B</span>
            <span>$45B</span>
            <span>$30B</span>
            <span>$15B</span>
            <span>$0B</span>
          </div>

          {/* Chart area */}
          <div className="ml-12">
            <div className="relative h-64 flex items-end justify-between gap-2 border-l border-b border-border/30">
              {marketData.map((data, index) => (
                <motion.div
                  key={data.year}
                  className="flex-1 flex flex-col items-center gap-2"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <motion.div
                    className="w-full bg-gradient-to-t from-primary to-primary-glow rounded-t-sm relative group cursor-pointer"
                    initial={{ height: 0 }}
                    animate={{ height: `${(data.value / maxValue) * 200}px` }}
                    transition={{ delay: index * 0.15, duration: 0.8, ease: "easeOut" }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {/* Value label on hover */}
                    <motion.div
                      className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-card/90 backdrop-blur-sm rounded px-2 py-1 text-xs font-bold whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-10"
                      initial={{ y: 10 }}
                      whileHover={{ y: 0 }}
                    >
                      ${data.value}B
                    </motion.div>
                  </motion.div>
                  
                  {/* Year label */}
                  <div className="text-xs text-muted-foreground font-mono">
                    {data.year}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* X-axis label */}
            <div className="text-center mt-4 text-xs text-muted-foreground">
              Year
            </div>
          </div>
        </div>

        {/* Key insights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div className="text-center p-4 bg-primary/10 rounded-lg border border-primary/20">
            <DollarSign className="w-6 h-6 mx-auto mb-2 text-primary" />
            <div className="text-2xl font-bold gradient-text">$69.49B</div>
            <div className="text-xs text-muted-foreground">Market by 2034</div>
          </div>
          <div className="text-center p-4 bg-secondary/10 rounded-lg border border-secondary/20">
            <Target className="w-6 h-6 mx-auto mb-2 text-secondary" />
            <div className="text-2xl font-bold gradient-text">2.4x</div>
            <div className="text-xs text-muted-foreground">Growth multiplier</div>
          </div>
          <div className="text-center p-4 bg-accent/10 rounded-lg border border-accent/20">
            <TrendingUp className="w-6 h-6 mx-auto mb-2 text-accent" />
            <div className="text-2xl font-bold gradient-text">13.04%</div>
            <div className="text-xs text-muted-foreground">Annual growth</div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default MarketGrowthChart;