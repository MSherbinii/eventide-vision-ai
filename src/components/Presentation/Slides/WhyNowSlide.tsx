import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Clock, TrendingUp, AlertTriangle, CheckCircle, Target, Building2, Cpu, DollarSign } from 'lucide-react';

const WhyNowSlide = () => {
  const timingFactors = [
    {
      icon: Cpu,
      title: "Sony IMX636 Launch",
      description: "Production-ready sensors shipping Oct 2024.",
      status: "Shipping Now",
      color: "bg-primary"
    },
    {
      icon: TrendingUp,
      title: "Industrial Capex Surge",
      description: "Global industrial equipment spend ~$0.84 trillion in 2025 (~3-4% YoY).",
      status: "Capex Surge",
      color: "bg-accent"
    },
    {
      icon: AlertTriangle,
      title: "Quality Crisis Peak",
      description: "Global product recalls hit six-year high in 2024 (2,450+ campaigns).",
      status: "Quality Pain",
      color: "bg-warning"
    }
  ];

  const marketDrivers = [
    {
      title: "Commercial Availability",
      value: "Oct 2024",
      description: "IMX636 in production cameras (LUCID, FRAMOS) – Oct 2024."
    },
    {
      title: "QC Pressure", 
      value: "Rising",
      description: "QC/drift detection spend accelerating automation."
    },
    {
      title: "Capex Cycle",
      value: "Record",
      description: "Industrial capex in 2025 at near-record levels."
    },
    {
      title: "Market Window",
      value: "2-3 yr",
      description: "2–3 yr technical moat: sensors ready + QC urgency. MEA + DACH first mover."
    }
  ];

  return (
    <div className="w-full h-full flex flex-col px-8 py-6 bg-gradient-to-br from-background via-[hsl(220_34%_8%)] to-[hsl(142_69%_8%)]">
      {/* Dynamic Chromatic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/8 via-transparent to-accent/12 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/5 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '3s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
        <div className="absolute top-2/3 left-3/4 w-72 h-72 bg-warning/6 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2.2s', animationDuration: '5s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-destructive/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s', animationDuration: '3.5s' }}></div>
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
          Commercial event sensors + $841.7B industrial investment + quality crisis = market breakthrough moment
        </p>
      </div>

      <div className="relative z-10 flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Timing Factors */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-white">Market Catalysts</h2>
          <div className="space-y-4">
            {timingFactors.map((factor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
              >
                 <Card className="p-6 hover:scale-105 transition-all duration-300 bg-card/80 backdrop-blur-sm border border-border rounded-2xl shadow-lg hover:shadow-2xl hover:border-primary/30">
                  <div className="flex items-start space-x-4">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${factor.color} hover:scale-110 transition-transform duration-200`}>
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
          <h2 className="text-2xl font-bold mb-6 text-white">Market Momentum Indicators</h2>
          <div className="space-y-6">
            {marketDrivers.map((driver, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
              >
                <Card className="p-6 bg-card/80 backdrop-blur-sm border border-border rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl hover:border-accent/30 transition-all duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-white">{driver.title}</h3>
                    <div className="text-2xl font-bold text-primary hover:scale-110 transition-transform duration-200">{driver.value}</div>
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
            <Card className="p-6 bg-card/80 backdrop-blur-sm border border-primary/20 rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl hover:border-primary/40 transition-all duration-300">
              <div className="flex items-start gap-4">
                <Target className="w-8 h-8 text-primary flex-shrink-0 mt-1 hover:rotate-12 transition-transform duration-300" />
                <div>
                  <h3 className="text-lg font-bold mb-2 text-white">Market Window Opening</h3>
                  <p className="text-sm text-muted mb-3">
                    Commercial event cameras launched Oct 2024 while quality crisis hits 6-year high. 2-3 year technical moat before competitors catch up.
                  </p>
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-primary" />
                   <span className="text-xs text-primary font-medium">
                     MEA + DACH first-mover advantage.
                   </span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Bottom Banner */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="relative z-10 mt-8"
      >
        <Card className="p-8 bg-primary/10 backdrop-blur-sm border border-primary/30 rounded-2xl shadow-lg">
          <p className="text-lg font-bold text-primary text-center max-w-6xl mx-auto">
            When sensor readiness, automation budgets, and quality urgency align, we enter a rare opportunity window for event-based vision leadership.
          </p>
          <div className="text-xs text-muted text-center mt-4 space-y-1">
            <div>Recalls: Global product recall trends, 2024 • Capex: Industrial Capex projections, 2025 (estimate)</div>
            <div>Sensor launch: LUCID/Prophesee announcement</div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default WhyNowSlide;