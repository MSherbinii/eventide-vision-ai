import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Clock, TrendingUp, Zap, CheckCircle, Target, Building2 } from 'lucide-react';

const WhyNowSlide = () => {
  const timingFactors = [
    {
      icon: Clock,
      title: "Event Sensor Maturity",
      description: "Sony & Prophesee production-ready sensors",
      status: "Now Available",
      color: "bg-primary"
    },
    {
      icon: TrendingUp,
      title: "Industry 4.0 Budgets",
      description: "Automation investments rising post-pandemic",
      status: "Peak Timing",
      color: "bg-accent"
    },
    {
      icon: Zap,
      title: "AI Stack Convergence",
      description: "Edge AI + cloud infrastructure mature",
      status: "Production Ready",
      color: "bg-warning"
    },
    {
      icon: CheckCircle,
      title: "Market Validation",
      description: "Quality escapes drive vision upgrade cycles",
      status: "Proven Demand",
      color: "bg-primary"
    }
  ];

  const marketDrivers = [
    {
      title: "Technology Readiness",
      percentage: "95%",
      description: "Event sensors + edge compute stack ready for production deployment"
    },
    {
      title: "Market Demand", 
      percentage: "87%",
      description: "Quality leaders report gaps in high-speed vision capabilities"
    },
    {
      title: "Investment Climate",
      percentage: "92%",
      description: "Manufacturing capex for automation at multi-year highs"
    }
  ];

  return (
    <div className="w-full h-full flex flex-col px-8 py-6 bg-gradient-to-br from-background via-[hsl(220_34%_8%)] to-[hsl(142_69%_8%)]">
      {/* Dynamic Chromatic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/8 via-transparent to-accent/12"></div>
        <div className="absolute top-1/4 left-1/5 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-2/3 left-3/4 w-72 h-72 bg-warning/6 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2.2s' }}></div>
      </div>

      {/* Header */}
      <div className="relative z-10 text-center mb-8">
        <Badge variant="outline" className="mb-4 text-sm border-primary text-primary bg-transparent">
          MARKET TIMING
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-3 text-white tracking-[-0.01em]">
          <span className="text-primary">Why Now?</span> The Perfect Storm
        </h1>
        <p className="text-lg text-muted max-w-3xl mx-auto">
          Event sensor maturity + Industry 4.0 budgets + AI stack convergence = first-mover opportunity
        </p>
      </div>

      <div className="relative z-10 flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Timing Factors */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-white">Convergence Factors</h2>
          <div className="space-y-4">
            {timingFactors.map((factor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
              >
                <Card className="p-6 hover:scale-105 transition-all duration-300 bg-card/80 backdrop-blur-sm border border-border rounded-2xl shadow-lg">
                  <div className="flex items-start space-x-4">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${factor.color}`}>
                      <factor.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold text-lg text-white">
                          {factor.title}
                        </h3>
                        <Badge className="bg-primary/20 text-primary border-primary/30 text-xs">
                          {factor.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted">
                        {factor.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column - Market Readiness */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-white">Market Readiness Indicators</h2>
          <div className="space-y-6">
            {marketDrivers.map((driver, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
              >
                <Card className="p-6 bg-card/80 backdrop-blur-sm border border-border rounded-2xl shadow-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-white">{driver.title}</h3>
                    <div className="text-2xl font-bold text-primary">{driver.percentage}</div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="mb-3">
                    <div className="h-2 bg-muted/20 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                        initial={{ width: "0%" }}
                        animate={{ width: driver.percentage }}
                        transition={{ duration: 1.5, delay: 1 + index * 0.2 }}
                      />
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted">
                    {driver.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* First Mover Advantage */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="mt-6"
          >
            <Card className="p-6 bg-card/80 backdrop-blur-sm border border-primary/20 rounded-2xl shadow-lg">
              <div className="flex items-start gap-4">
                <Target className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-2 text-white">First Mover Advantage</h3>
                  <p className="text-sm text-muted mb-3">
                    Event-based vision creates a 2-3 year technical moat vs frame-based competitors in high-speed QA applications.
                  </p>
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-primary" />
                    <span className="text-xs text-primary font-medium">
                      MENA + DACH market entry via investor/accelerator networks
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Bottom Statistics */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="relative z-10 mt-8"
      >
        <div className="grid grid-cols-3 gap-6">
          <Card className="p-4 bg-card/80 backdrop-blur-sm border border-primary/20 rounded-2xl shadow-lg text-center">
            <div className="text-xl font-bold text-primary mb-1">42%</div>
            <div className="text-xs text-muted">of startup success factors = timing (Bill Gross, Idealab)</div>
          </Card>
          
          <Card className="p-4 bg-card/80 backdrop-blur-sm border border-accent/20 rounded-2xl shadow-lg text-center">
            <div className="text-xl font-bold text-accent mb-1">2024-2026</div>
            <div className="text-xs text-muted">Event sensor commercial adoption window</div>
          </Card>
          
          <Card className="p-4 bg-card/80 backdrop-blur-sm border border-warning/20 rounded-2xl shadow-lg text-center">
            <div className="text-xl font-bold text-warning mb-1">$41.7B</div>
            <div className="text-xs text-muted">Machine vision market by 2030 (13% CAGR)</div>
          </Card>
        </div>
      </motion.div>
    </div>
  );
};

export default WhyNowSlide;