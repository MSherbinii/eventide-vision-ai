import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, TrendingDown, Clock, DollarSign } from "lucide-react";
import { motion } from "framer-motion";

const CostOfFrameVisionSlide = () => {
  const costFactors = [
    {
      icon: <AlertTriangle className="w-10 h-10" />,
      title: "Scrap & Rework Costs",
      impact: "$2.3M annually",
      description: "Motion blur misses 15-20% of high-speed defects",
      percentage: "40%",
      color: "text-red-500 border-red-500/20"
    },
    {
      icon: <Clock className="w-10 h-10" />,
      title: "Unplanned Downtime",
      impact: "$850K per incident",
      description: "Lighting/glare failures cause false stops",
      percentage: "25%", 
      color: "text-orange-500 border-orange-500/20"
    },
    {
      icon: <TrendingDown className="w-10 h-10" />,
      title: "Data Storage & Compute",
      impact: "$180K monthly",
      description: "Processing 24/7 full-frame video streams",
      percentage: "20%",
      color: "text-yellow-500 border-yellow-500/20"
    },
    {
      icon: <DollarSign className="w-10 h-10" />,
      title: "Manual QC Hours",
      impact: "$95K monthly",
      description: "Human inspectors for what cameras miss",
      percentage: "15%",
      color: "text-blue-500 border-blue-500/20"
    }
  ];

  const comparisonData = [
    {
      metric: "Motion Blur Impact",
      traditional: "High-speed = missed defects",
      cost: "$2.3M/year in rework"
    },
    {
      metric: "Data Volume",
      traditional: "24/7 full-frame processing",
      cost: "$180K/month storage"
    },
    {
      metric: "Integration Time",
      traditional: "6-18 months typical",
      cost: "$400K in delays"
    },
    {
      metric: "Lighting Sensitivity",
      traditional: "Glare causes false stops",
      cost: "$850K per incident"
    }
  ];

  return (
    <div className="w-full h-full flex flex-col px-6 py-4">
      {/* Header */}
      <div className="text-center space-y-3 mb-6">
        <Badge variant="outline" className="text-sm px-4 py-2">
          THE COST OF FRAME-ONLY VISION
        </Badge>
        <h1 className="text-3xl md:text-4xl font-bold">
          The Cost of <span className="gradient-text">Frame-Only Vision</span>
        </h1>
        <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
          Scrap/rework, unplanned downtime, storage/compute overhead, manual QC hours, model maintenance.
        </p>
      </div>

      <div className="flex-1 grid grid-cols-2 gap-6">
        {/* Left Column - Cost Breakdown */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">Annual Quality Losses</h3>
          <div className="grid grid-cols-2 gap-3">
            {costFactors.map((factor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
              >
                <Card className={`p-4 hover:scale-105 transition-all duration-300 ${factor.color} glow-effect h-full`}>
                  <div className="text-center space-y-2">
                    <div className="flex justify-center scale-75">
                      {factor.icon}
                    </div>
                    <div>
                      <div className="text-2xl font-bold gradient-text mb-1">{factor.percentage}</div>
                      <h4 className="font-bold text-xs mb-1">{factor.title}</h4>
                      <div className="text-sm font-semibold text-primary mb-1">{factor.impact}</div>
                      <p className="text-xs text-muted-foreground">{factor.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Total Cost Impact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <Card className="p-4 bg-gradient-to-br from-red-500/10 to-orange-500/10 border-red-500/20 text-center">
              <h4 className="text-lg font-bold mb-1">Total Annual Impact</h4>
              <div className="text-3xl font-bold gradient-text mb-2">$4.2M+</div>
              <p className="text-xs text-muted-foreground">Per typical pharma production line</p>
              <p className="text-xs text-accent mt-1">Pilot target: reduce 30–70%</p>
            </Card>
          </motion.div>
        </div>

        {/* Right Column - Detailed Breakdown */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">Where Traditional Vision Fails</h3>
          
          <Card className="p-4">
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-3 pb-2 border-b border-border text-xs font-semibold">
                <div>Problem Area</div>
                <div>Traditional Impact</div>
                <div>Annual Cost</div>
              </div>
              {comparisonData.map((item, index) => (
                <motion.div
                  key={index}
                  className="grid grid-cols-3 gap-3 py-2 border-b border-border/30 text-xs"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                >
                  <div className="font-semibold">{item.metric}</div>
                  <div className="text-muted-foreground">{item.traditional}</div>
                  <div className="text-red-500 font-semibold">{item.cost}</div>
                </motion.div>
              ))}
            </div>
          </Card>

          {/* Industry Context */}
          <div>
            <h4 className="text-lg font-bold mb-3">Industry Reality</h4>
            <div className="space-y-2">
              {[
                { stat: "67%", desc: "of manufacturers report vision system failures cause unplanned downtime" },
                { stat: "35%", desc: "of quality escapes happen during high-speed production runs" },
                { stat: "6-18mo", desc: "typical integration time for traditional machine vision systems" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                >
                  <Card className="p-3 bg-gradient-to-r from-card to-muted/5">
                    <div className="flex items-center gap-3">
                      <div className="text-lg font-bold gradient-text min-w-[60px]">{item.stat}</div>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
          >
            <Card className="p-4 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20 text-center">
              <h4 className="text-lg font-bold mb-2">The Solution is Clear</h4>
              <p className="text-xs text-muted-foreground">
                Event-based vision eliminates motion blur, reduces data volume by 99%, and integrates in weeks, not months.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CostOfFrameVisionSlide;