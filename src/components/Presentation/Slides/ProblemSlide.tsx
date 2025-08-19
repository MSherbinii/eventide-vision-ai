import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, DollarSign, Clock, TrendingDown } from "lucide-react";
import { motion } from "framer-motion";

const ProblemSlide = () => {
  const problems = [
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Processing Latency",
      description: "Traditional RGB cameras process entire frames, creating bottlenecks in high-speed applications",
      impact: "40-100ms delays",
      color: "border-destructive/20 text-destructive"
    },
    {
      icon: <DollarSign className="w-12 h-12" />,
      title: "High Data Costs",
      description: "Massive data streams require expensive cloud processing and storage infrastructure",
      impact: "$50K-200K annually",
      color: "border-orange-500/20 text-orange-500"
    },
    {
      icon: <TrendingDown className="w-12 h-12" />,
      title: "Limited Performance",
      description: "Motion blur and lighting issues cause 15-25% error rates in quality inspection",
      impact: "25% error rate",
      color: "border-yellow-500/20 text-yellow-500"
    },
    {
      icon: <AlertTriangle className="w-12 h-12" />,
      title: "Complex Integration",
      description: "Current solutions require extensive in-house engineering teams and custom development",
      impact: "6-12 months setup",
      color: "border-blue-500/20 text-blue-500"
    }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center px-8 py-6">
      {/* Header */}
      <div className="text-center space-y-4 mb-8">
        <Badge variant="outline" className="text-sm px-4 py-2">
          THE PROBLEM
        </Badge>
        <h1 className="text-3xl md:text-4xl font-bold">
          Frame-based Vision Struggles
          <br />
          <span className="gradient-text">at Line Speed</span>
        </h1>
        <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
          High-speed lines + variable lighting break frame-based vision. Motion blur misses defects; data is heavy and expensive to move/store.
        </p>
      </div>

      {/* Problems Grid */}
      <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto mb-8">
        {problems.map((problem, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <Card className={`p-4 bg-card/50 backdrop-blur-sm border-2 ${problem.color} hover:scale-105 transition-all duration-300 h-full`}>
              <div className="space-y-3">
                <div className={`${problem.color} scale-75`}>
                  {problem.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{problem.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{problem.description}</p>
                  <Badge variant="secondary" className="text-xs px-2 py-1 font-mono">
                    {problem.impact}
                  </Badge>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Industry Impact */}
      <motion.div 
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <div className="p-6 bg-gradient-to-r from-muted/50 to-accent/10 rounded-xl border border-accent/20">
          <h3 className="text-2xl font-bold mb-4 text-center">Manufacturing Industry Impact</h3>
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-destructive mb-2">$2.5B</div>
              <p className="text-sm text-muted-foreground">Annual losses from quality defects</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-500 mb-2">60%</div>
              <p className="text-sm text-muted-foreground">Of manufacturers lack adequate vision systems</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-500 mb-2">18 months</div>
              <p className="text-sm text-muted-foreground">Average time to implement vision solutions</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProblemSlide;