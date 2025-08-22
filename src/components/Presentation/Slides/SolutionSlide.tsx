import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
          {/* Event-Based Demo 1 */}
          <Card className="p-3 bg-card/80 backdrop-blur-sm border border-primary/20 rounded-xl shadow-lg">
            <div className="aspect-[16/9] rounded-lg overflow-hidden mb-2">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/AuUijt8D2tU?autoplay=1&mute=1&controls=1&showinfo=0&modestbranding=1"
                title="Event-Based Vision Demo"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="text-center">
              <h4 className="text-sm font-bold text-white mb-1">Event-Based Vision</h4>
              <p className="text-xs text-muted mb-2">Real-time motion detection</p>
              <div className="flex gap-1 justify-center">
                <Badge variant="secondary" className="bg-primary text-white border-0 text-xs px-2 py-1">Real-time</Badge>
                <Badge variant="secondary" className="bg-accent text-white border-0 text-xs px-2 py-1">High-speed</Badge>
              </div>
            </div>
          </Card>

          {/* Event-Based Demo 2 */}
          <Card className="p-3 bg-card/80 backdrop-blur-sm border border-accent/20 rounded-xl shadow-lg">
            <div className="aspect-[16/9] rounded-lg overflow-hidden mb-2">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/5plQO__oeL4?start=25&autoplay=1&mute=1&controls=1&showinfo=0&modestbranding=1"
                title="Event Camera Applications"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="text-center">
              <h4 className="text-sm font-bold text-white mb-1">Industrial Applications</h4>
              <p className="text-xs text-muted mb-2">Manufacturing use cases</p>
              <div className="flex gap-1 justify-center">
                <Badge variant="secondary" className="bg-accent text-white border-0 text-xs px-2 py-1">Industrial</Badge>
                <Badge variant="secondary" className="bg-warning text-white border-0 text-xs px-2 py-1">Precision</Badge>
              </div>
            </div>
          </Card>

          {/* Event-Based Demo 3 */}
          <Card className="p-3 bg-card/80 backdrop-blur-sm border border-warning/20 rounded-xl shadow-lg">
            <div className="aspect-[16/9] rounded-lg overflow-hidden mb-2">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/PbSVm4fix0c?start=5&autoplay=1&mute=1&controls=1&showinfo=0&modestbranding=1"
                title="Event Vision Technology"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="text-center">
              <h4 className="text-sm font-bold text-white mb-1">Technology Demo</h4>
              <p className="text-xs text-muted mb-2">Event camera capabilities</p>
              <div className="flex gap-1 justify-center">
                <Badge variant="secondary" className="bg-warning text-white border-0 text-xs px-2 py-1">Advanced</Badge>
                <Badge variant="secondary" className="bg-primary text-white border-0 text-xs px-2 py-1">μs latency</Badge>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Factory Applications Map (button only) */}
      <div className="relative z-10 text-center mb-6">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-white">
              <Maximize2 className="w-4 h-4 mr-2" />
              View Factory Applications Map
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-6xl p-0 overflow-hidden">
            <div className="bg-card">
              <div className="aspect-[16/9]">
                <img
                  src="/lovable-uploads/8b333b2b-5ac1-4248-8c5d-43dfce05c0f7.png"
                  alt="Factory-wide event-based vision applications map"
                  className="w-full h-full object-contain bg-background"
                />
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Bottom Section: Other Applications + Comparison */}
      <div className="relative z-10 flex-1 grid grid-cols-2 gap-6 min-h-0">
        {/* Left: Other Market Applications */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">Beyond Manufacturing</h2>
          
          {/* Other Industries */}
          <Card className="p-4 bg-card/80 backdrop-blur-sm border border-accent/20 rounded-xl shadow-lg">
            <h4 className="text-lg font-bold mb-3 text-white text-center">Market Expansion</h4>
            <div className="grid grid-cols-2 gap-3 text-sm text-center">
              <div className="p-3 bg-accent/10 rounded-lg text-accent font-medium">
                <div className="text-base mb-1">🛡️ Defense</div>
                <div className="text-xs text-muted">Surveillance & Tracking</div>
              </div>
              <div className="p-3 bg-primary/10 rounded-lg text-primary font-medium">
                <div className="text-base mb-1">🚀 Space</div>
                <div className="text-xs text-muted">Orbital Debris Monitoring</div>
              </div>
              <div className="p-3 bg-warning/10 rounded-lg text-warning font-medium">
                <div className="text-base mb-1">🏥 Medical</div>
                <div className="text-xs text-muted">Surgical Precision</div>
              </div>
              <div className="p-3 bg-accent/10 rounded-lg text-accent font-medium">
                <div className="text-base mb-1">🚗 Automotive</div>
                <div className="text-xs text-muted">ADAS & Robotics</div>
              </div>
            </div>
          </Card>

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

        {/* Right: Technology Comparison */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">Technology Comparison</h2>
          
          {/* Comparison Table */}
          <div className="h-fit">
            <TechComparisonTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionSlide;