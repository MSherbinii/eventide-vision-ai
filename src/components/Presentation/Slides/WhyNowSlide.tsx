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
      color: "bg-accent"
    },
    {
      icon: TrendingUp,
      title: "Industry 4.0 Budgets",
      description: "Automation investments rising post-pandemic",
      status: "Peak Timing",
      color: "bg-warning"
    },
    {
      icon: Zap,
      title: "AI Stack Convergence",
      description: "Edge AI + cloud infrastructure mature",
      status: "Production Ready",
      color: "bg-primary"
    },
    {
      icon: CheckCircle,
      title: "Market Validation",
      description: "Quality automation demand proven",
      status: "Validated",
      color: "bg-secondary"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background p-8 flex flex-col">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <Badge variant="outline" className="mb-4 font-heading text-sm border-accent text-accent">
          MARKET TIMING
        </Badge>
        <h1 className="font-heading font-bold text-5xl mb-4 text-foreground">
          Timing Is Everything
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
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
          <div className="relative mb-12">
            <div className="flex justify-between items-center mb-8">
              <span className="text-muted-foreground">2020</span>
              <span className="text-2xl font-heading font-bold text-accent">NOW</span>
              <span className="text-muted-foreground">2025</span>
            </div>
            
            <div className="relative h-2 bg-muted rounded-full mb-8">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "75%" }}
                transition={{ duration: 2, delay: 0.5 }}
                className="absolute left-0 top-0 h-full bg-gradient-to-r from-accent to-warning rounded-full"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
                className="absolute left-3/4 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background shadow-lg"
              />
            </div>
          </div>

          {/* Factors Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {timingFactors.map((factor, index) => (
              <motion.div
                key={factor.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${factor.color} mb-4`}>
                  <factor.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                
                <h3 className="font-heading font-semibold text-lg mb-2 text-foreground">
                  {factor.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {factor.description}
                </p>
                <Badge variant="secondary" className="text-xs">
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
            className="mt-12 text-center bg-gradient-to-r from-accent/10 to-warning/10 border border-accent/20 rounded-lg p-8"
          >
            <h3 className="font-heading font-bold text-2xl mb-4 text-foreground">
              The Perfect Storm
            </h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Hardware maturity + software ecosystem + market demand + automation budgets = 
              <span className="text-accent font-semibold"> First-mover opportunity</span>
            </p>
            
            <div className="mt-6 text-sm text-muted-foreground">
              <span className="font-medium">Source:</span> Bill Gross TED Talk "The Single Biggest Reason Why Startups Succeed"
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyNowSlide;