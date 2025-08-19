import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Zap, Database, Cpu, Shield, CheckCircle, ArrowRight } from "lucide-react";

const SolutionSection = () => {
  const advantages = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "1000x Faster Processing",
      description: "Event-based sensors only capture changes, reducing data by 99%+",
      metric: "< 1ms latency",
      color: "text-primary border-primary/20"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Massive Data Reduction",
      description: "Only meaningful pixel changes are processed, not entire frames",
      metric: "90% less storage",
      color: "text-secondary border-secondary/20"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Edge Processing Ready", 
      description: "Optimized algorithms work on low-power embedded hardware",
      metric: "10x power efficiency",
      color: "text-accent border-accent/20"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Superior Accuracy",
      description: "No motion blur, high dynamic range, microsecond precision",
      metric: "> 99% accuracy",
      color: "text-green-500 border-green-500/20"
    }
  ];

  const solutionComponents = [
    {
      title: "Hardware Integration",
      description: "Prophesee EVK4 HD, Sony IMX636 sensors",
      features: ["1280x720 resolution", "Microsecond latency", "High dynamic range"]
    },
    {
      title: "AI Processing Engine",
      description: "Custom deep learning models for event data",
      features: ["Real-time inference", "Edge optimization", "Continuous learning"]
    },
    {
      title: "Management Portal",
      description: "Complete software platform for monitoring",
      features: ["Live analytics", "Historical reporting", "ROI tracking"]
    }
  ];

  const industryApplications = [
    { name: "Quality Assurance & Inspection", icon: "🔍", market: "Pharma, F&B" },
    { name: "Positioning & Guidance", icon: "🎯", market: "Automotive" },
    { name: "Predictive Maintenance", icon: "⚙️", market: "Manufacturing" },
    { name: "Measurement", icon: "📏", market: "Electronics" },
    { name: "Identification", icon: "🏷️", market: "Logistics" },
    { name: "Vibration Monitoring", icon: "📊", market: "Heavy Industry" },
    { name: "Particle Size Monitoring", icon: "🔬", market: "Chemical" },
    { name: "Fluid Dynamics Analysis", icon: "💧", market: "Aerospace" }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Solution Hero */}
        <div className="text-center space-y-6 mb-16">
          <Badge variant="outline" className="text-sm px-4 py-2">
            OUR SOLUTION
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold">
            <span className="gradient-text">Event-Based Vision</span>
            <br />
            Complete Platform
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The world's first end-to-end Perception-as-a-Service platform using neuromorphic vision sensors, providing plug-and-play industrial automation solutions.
          </p>
        </div>

        {/* Key Advantages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {advantages.map((advantage, index) => (
            <Card key={index} className={`p-6 hover:scale-105 transition-all duration-300 ${advantage.color} glow-effect`}>
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  {advantage.icon}
                </div>
                <div>
                  <h3 className="font-bold mb-2">{advantage.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{advantage.description}</p>
                  <Badge variant="secondary" className="text-xs font-mono">
                    {advantage.metric}
                  </Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Solution Components */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">Complete Solution Stack</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutionComponents.map((component, index) => (
              <Card key={index} className="p-8 bg-gradient-to-br from-card to-muted/5 hover:shadow-xl transition-all duration-300">
                <h4 className="text-xl font-bold mb-4">{component.title}</h4>
                <p className="text-muted-foreground mb-6">{component.description}</p>
                <ul className="space-y-2">
                  {component.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>

        {/* Event-Based vs Traditional Comparison */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">Event-Based vs Traditional RGB</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 bg-gradient-to-br from-destructive/5 to-orange-500/5 border-destructive/20">
              <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                <div className="w-4 h-4 bg-destructive rounded-full"></div>
                Traditional RGB Cameras
              </h4>
              <ul className="space-y-3 text-sm">
                <li>• Fixed frame rate (30-60 FPS)</li>
                <li>• Process entire image frames</li>
                <li>• Motion blur at high speeds</li>
                <li>• Limited dynamic range</li>
                <li>• High bandwidth requirements</li>
                <li>• 40-100ms processing latency</li>
                <li>• Expensive cloud processing</li>
              </ul>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
              <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                <div className="w-4 h-4 bg-primary rounded-full"></div>
                Event-Based Cameras
              </h4>
              <ul className="space-y-3 text-sm">
                <li>• Microsecond response time</li>
                <li>• Only process pixel changes</li>
                <li>• No motion blur ever</li>
                <li>• 120dB dynamic range</li>
                <li>• 1000x less data bandwidth</li>
                <li>• Sub-millisecond latency</li>
                <li>• Edge processing capable</li>
              </ul>
            </Card>
          </div>
        </div>

        {/* Industry Applications */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">Industrial Applications</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {industryApplications.map((app, index) => (
              <Card key={index} className="p-4 text-center hover:scale-105 transition-all duration-300 glow-effect">
                <div className="text-2xl mb-2">{app.icon}</div>
                <div className="font-semibold text-sm mb-1">{app.name}</div>
                <Badge variant="outline" className="text-xs">
                  {app.market}
                </Badge>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button variant="gradient" size="lg" className="group">
              View Technical Demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;