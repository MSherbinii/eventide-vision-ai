import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Pipeline } from "@/components/ui/pipeline";
import { Zap, Database, Cpu, Shield, CheckCircle, Play } from "lucide-react";
import TechComparisonTable from "@/components/Charts/TechComparisonTable";
import { motion } from "framer-motion";

const SolutionSlide = () => {
  const realWorldApplications = [
    {
      icon: <Zap className="w-10 h-10 text-primary" />,
      title: "High-Speed Counting",
      description: "Count 1,000+ objects/second with 99.5% accuracy at 10m/s linear speed",
      industries: "Pharmaceutical • F&B • Electronics",
      metric: "1K+ obj/s @ 99.5%",
      color: "bg-card/80 border-border"
    },
    {
      icon: <Database className="w-10 h-10 text-accent" />,
      title: "Surface Defect Detection", 
      description: "Detect holes, spots, scratches at 60m/s - no complex lighting needed",
      industries: "Glass • Film • Sheet Metal",
      metric: "60m/s detection speed",
      color: "bg-card/80 border-border"
    },
    {
      icon: <Cpu className="w-10 h-10 text-warning" />,
      title: "Particle Size Monitoring",
      description: "Real-time distribution analysis for perfect recipe mix composition",
      industries: "Milled Products • Plastics • Powders",
      metric: "Real-time closed-loop",
      color: "bg-card/80 border-border"
    },
    {
      icon: <Shield className="w-10 h-10 text-accent" />,
      title: "Predictive Maintenance",
      description: "XYT motion analysis with 200K+ fps time resolution equivalent",
      industries: "Equipment Health • Kinematic Monitoring",
      metric: "200K+ fps equivalent",
      color: "bg-card/80 border-border"
    }
  ];

  return (
    <div className="w-full h-full flex flex-col px-6 py-4 bg-gradient-to-br from-background via-[hsl(220_34%_8%)] to-[hsl(142_69%_8%)]">
      {/* Chromatic Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-accent/10"></div>
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary/8 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-warning/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s', animationDuration: '3.5s' }}></div>
      </div>
      
      {/* Header */}
      <div className="relative z-10 text-center space-y-3 mb-5">
        <Badge variant="outline" className="text-sm px-4 py-2 border-primary text-primary bg-transparent">
          PROVEN INDUSTRIAL APPLICATIONS
        </Badge>
        <h1 className="text-3xl md:text-4xl font-bold text-white tracking-[-0.01em]">
          <span className="text-primary">Event-Based Vision</span> in Action
        </h1>
        <p className="text-base text-muted max-w-4xl mx-auto">
          Real deployments across industries: 1,000+ objects/second counting, 60m/s defect detection, and 200K+ fps motion analysis with 96% less data.
        </p>
      </div>

      <div className="relative z-10 flex-1 grid grid-cols-1 lg:grid-cols-2 gap-5 min-h-0">
        {/* Left Column - Real Applications */}
        <div className="space-y-4 flex flex-col">
          <h2 className="text-xl font-bold text-white">Proven Industrial Applications</h2>
          <div className="grid grid-cols-1 gap-3 flex-1">
            {realWorldApplications.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
              >
                <Card className={`p-4 hover:scale-105 transition-all duration-300 ${app.color} backdrop-blur-sm shadow-lg hover:shadow-2xl hover:border-primary/30`}>
                  <div className="flex items-start space-x-3">
                    <div className="text-primary mt-1 hover:scale-110 transition-transform duration-200">
                      {app.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-base mb-1 text-white">
                        {app.title}
                      </h3>
                      <p className="text-xs text-muted mb-2">
                        {app.description}
                      </p>
                      <div className="text-xs text-muted-foreground mb-2 italic">
                        {app.industries}
                      </div>
                      <div className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full inline-block">
                        {app.metric}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Key Benefits */}
          <Card className="p-4 bg-card/80 backdrop-blur-sm border border-primary/20 rounded-2xl shadow-lg">
            <h4 className="text-base font-bold mb-2 text-white">Event Vision Advantages</h4>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 text-primary" />
                  <span className="text-white font-medium">Microsecond latency</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 text-primary" />
                  <span className="text-white font-medium">No motion blur</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 text-primary" />
                  <span className="text-white font-medium">120dB dynamic range</span>
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 text-primary" />
                  <span className="text-white font-medium">96% data reduction</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 text-primary" />
                  <span className="text-white font-medium">Edge processing ready</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 text-primary" />
                  <span className="text-white font-medium">No complex lighting</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Right Column - Demo & Comparison */}
        <div className="space-y-4 flex flex-col">
          <h2 className="text-xl font-bold text-white">Live Performance Demo</h2>
          
          <div className="flex-1 space-y-4">
            {/* Performance Demo */}
            <Card className="p-3 bg-card/80 backdrop-blur-sm border border-border rounded-xl shadow-lg">
              <div className="relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-accent/10 rounded-lg flex items-center justify-center border border-primary/30">
                  <Play className="w-12 h-12 text-primary opacity-80 hover:scale-110 transition-transform duration-200" />
                  <div className="absolute top-2 left-2">
                    <Badge variant="secondary" className="bg-primary text-white border-0 text-xs px-2 py-1">
                      Real-time • 1K+ obj/s
                    </Badge>
                  </div>
                  <div className="absolute bottom-2 right-2">
                    <Badge variant="secondary" className="bg-accent text-white border-0 text-xs px-2 py-1">
                      99.5% accuracy
                    </Badge>
                  </div>
                </div>
                <div className="mt-2 text-center">
                  <h4 className="text-sm font-bold text-white mb-1">Pellet Counting @ 10 Bar Air Pressure</h4>
                  <p className="text-xs text-muted">
                    2mm pellets counted at 1,000+/second with Prophesee Onboard system
                  </p>
                </div>
              </div>
            </Card>

            {/* Comparison Table */}
            <Card className="p-4 bg-card/80 backdrop-blur-sm border border-border rounded-xl shadow-lg">
              <h4 className="text-base font-bold mb-3 text-white">Event vs Frame Comparison</h4>
              <TechComparisonTable />
            </Card>

            {/* Solution Stack */}
            <Card className="p-4 bg-card/80 backdrop-blur-sm border border-border rounded-xl shadow-lg">
              <h4 className="text-base font-bold mb-2 text-white">Complete Solution Stack</h4>
              <Pipeline />
              <div className="text-xs text-muted mt-2 text-center space-y-1">
                <div>Edge processing: 15W vs 250W traditional (94% reduction)</div>
                <div>Mobile-grade computing platform • Continuous real-time processing</div>
              </div>
            </Card>

            {/* Industry Applications */}
            <Card className="p-4 bg-card/80 backdrop-blur-sm border border-accent/20 rounded-xl shadow-lg">
              <h4 className="text-base font-bold mb-2 text-white text-center">Deployed Industries</h4>
              <div className="grid grid-cols-2 gap-2 text-xs text-center">
                <div className="p-2 bg-accent/10 rounded text-accent font-medium">Pharmaceutical</div>
                <div className="p-2 bg-primary/10 rounded text-primary font-medium">Food & Beverage</div>
                <div className="p-2 bg-warning/10 rounded text-warning font-medium">Electronics</div>
                <div className="p-2 bg-accent/10 rounded text-accent font-medium">Manufacturing</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionSlide;