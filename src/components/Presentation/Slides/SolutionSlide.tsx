import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Pipeline } from "@/components/ui/pipeline";
import { Zap, Database, Cpu, Shield, CheckCircle, Play, Maximize2 } from "lucide-react";
import TechComparisonTable from "@/components/Charts/TechComparisonTable";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

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
    <div className="w-full h-screen flex flex-col px-8 py-6 bg-background relative overflow-hidden">
      {/* Unified Animated Background */}
      <div className="animated-bg">
        <div className="floating-orb orb-primary" />
        <div className="floating-orb orb-accent" />
        <div className="floating-orb orb-warning" />
      </div>
      <div className="geometric-pattern" />
      
      {/* Header */}
      <div className="relative z-10 text-center space-y-4 mb-6">
        <Badge variant="outline" className="text-sm px-4 py-2 border-primary text-primary bg-transparent">
          PROVEN INDUSTRIAL APPLICATIONS
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-[-0.01em]">
          <span className="text-primary">Event-Based Vision</span> in Action
        </h1>
        <p className="text-lg text-muted max-w-4xl mx-auto">
          Real deployments: 1,000+ objects/second counting, 60m/s defect detection, and 200K+ fps motion analysis with 96% less data.
        </p>
      </div>

      {/* Industrial Video Demos */}
      <div className="relative z-10 max-w-6xl mx-auto mb-6">
        <div className="grid grid-cols-3 gap-4">
          {/* High-Speed Counting */}
          <Card className="p-3 bg-card/80 backdrop-blur-sm border border-primary/20 rounded-xl shadow-lg">
            <div className="aspect-[16/9] rounded-lg overflow-hidden mb-2">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/iKTDXKHLgmE?autoplay=0&mute=1&controls=1&showinfo=0&modestbranding=1"
                title="High-Speed Counting Demo"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="text-center">
              <h4 className="text-sm font-bold text-white mb-1">High-Speed Counting</h4>
              <p className="text-xs text-muted mb-2">1K+ objects/second @ 99.5% accuracy</p>
              <div className="flex gap-1 justify-center">
                <Badge variant="secondary" className="bg-primary text-white border-0 text-xs px-2 py-1">1K+ obj/s</Badge>
                <Badge variant="secondary" className="bg-accent text-white border-0 text-xs px-2 py-1">99.5%</Badge>
              </div>
            </div>
          </Card>

          {/* Defect Detection */}
          <Card className="p-3 bg-card/80 backdrop-blur-sm border border-accent/20 rounded-xl shadow-lg">
            <div className="aspect-[16/9] rounded-lg overflow-hidden mb-2">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/XzrKlNk7mCs?autoplay=0&mute=1&controls=1&showinfo=0&modestbranding=1"
                title="Surface Defect Detection"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="text-center">
              <h4 className="text-sm font-bold text-white mb-1">Defect Detection</h4>
              <p className="text-xs text-muted mb-2">60m/s surface inspection</p>
              <div className="flex gap-1 justify-center">
                <Badge variant="secondary" className="bg-accent text-white border-0 text-xs px-2 py-1">60m/s</Badge>
                <Badge variant="secondary" className="bg-warning text-white border-0 text-xs px-2 py-1">Real-time</Badge>
              </div>
            </div>
          </Card>

          {/* Motion Analysis */}
          <Card className="p-3 bg-card/80 backdrop-blur-sm border border-warning/20 rounded-xl shadow-lg">
            <div className="aspect-[16/9] rounded-lg overflow-hidden mb-2">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/kPCZESVfHoQ?autoplay=0&mute=1&controls=1&showinfo=0&modestbranding=1"
                title="Motion Analysis Demo"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="text-center">
              <h4 className="text-sm font-bold text-white mb-1">Motion Analysis</h4>
              <p className="text-xs text-muted mb-2">200K+ fps equivalent tracking</p>
              <div className="flex gap-1 justify-center">
                <Badge variant="secondary" className="bg-warning text-white border-0 text-xs px-2 py-1">200K+ fps</Badge>
                <Badge variant="secondary" className="bg-primary text-white border-0 text-xs px-2 py-1">μs latency</Badge>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Bottom Section: Industrial Applications + Comparison */}
      <div className="relative z-10 flex-1 grid grid-cols-3 gap-6 min-h-0">
        {/* Left: Industrial Applications - Takes 2/3 width */}
        <div className="col-span-2 space-y-4">
          <h2 className="text-2xl font-bold text-white">Industrial Applications</h2>
          <div className="grid grid-cols-2 gap-3 h-fit">
            {realWorldApplications.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className={`p-4 hover:scale-105 transition-all duration-300 ${app.color} backdrop-blur-sm shadow-lg hover:shadow-xl hover:border-primary/30 h-full`}>
                  <div className="text-center space-y-2">
                    <div className="mx-auto w-fit hover:scale-110 transition-transform duration-200">
                      {app.icon}
                    </div>
                    <h3 className="font-bold text-sm text-white">
                      {app.title}
                    </h3>
                    <p className="text-xs text-muted leading-tight">
                      {app.description}
                    </p>
                    <div className="text-xs text-muted-foreground italic">
                      {app.industries}
                    </div>
                    <div className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full inline-block">
                      {app.metric}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
          
          {/* Deployed Industries */}
          <Card className="p-4 bg-card/80 backdrop-blur-sm border border-accent/20 rounded-xl shadow-lg">
            <h4 className="text-lg font-bold mb-3 text-white text-center">Deployed Industries</h4>
            <div className="grid grid-cols-4 gap-2 text-sm text-center">
              <div className="p-2 bg-accent/10 rounded text-accent font-medium">Pharmaceutical</div>
              <div className="p-2 bg-primary/10 rounded text-primary font-medium">Food & Beverage</div>
              <div className="p-2 bg-warning/10 rounded text-warning font-medium">Electronics</div>
              <div className="p-2 bg-accent/10 rounded text-accent font-medium">Manufacturing</div>
            </div>
          </Card>
        </div>

        {/* Right: Comparison Table + Advantages - Takes 1/3 width */}
        <div className="col-span-1 space-y-4">
          <h2 className="text-2xl font-bold text-white">Technology Comparison</h2>
          
          {/* Comparison Table */}
          <div className="h-fit">
            <TechComparisonTable />
          </div>

          {/* Key Benefits */}
          <Card className="p-4 bg-card/80 backdrop-blur-sm border border-primary/20 rounded-xl shadow-lg">
            <h4 className="text-lg font-bold mb-3 text-white">Event Vision Advantages</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-white font-medium">Microsecond latency</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-white font-medium">No motion blur</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-white font-medium">120dB dynamic range</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-white font-medium">96% data reduction</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-white font-medium">Edge processing ready</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-white font-medium">No complex lighting</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SolutionSlide;