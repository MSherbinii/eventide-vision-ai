import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, DollarSign, Clock, TrendingDown } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Processing Latency",
      description: "Traditional RGB cameras process entire frames, creating bottlenecks in high-speed applications",
      impact: "40-100ms delays",
      color: "border-destructive/20 text-destructive"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "High Data Costs",
      description: "Massive data streams require expensive cloud processing and storage infrastructure",
      impact: "$50K-200K annually",
      color: "border-orange-500/20 text-orange-500"
    },
    {
      icon: <TrendingDown className="w-8 h-8" />,
      title: "Limited Performance",
      description: "Motion blur and lighting issues cause 15-25% error rates in quality inspection",
      impact: "25% error rate",
      color: "border-yellow-500/20 text-yellow-500"
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Complex Integration",
      description: "Current solutions require extensive in-house engineering teams and custom development",
      impact: "6-12 months setup",
      color: "border-blue-500/20 text-blue-500"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-6 mb-16">
          <Badge variant="outline" className="text-sm px-4 py-2">
            THE PROBLEM
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold">
            Current Vision Systems Are
            <br />
            <span className="gradient-text">Fundamentally Limited</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Manufacturing companies lose millions annually due to inefficient traditional camera systems that can't keep up with modern industrial demands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <Card key={index} className={`p-8 bg-card/50 backdrop-blur-sm border ${problem.color} hover:scale-105 transition-all duration-300`}>
              <div className="space-y-4">
                <div className={`${problem.color}`}>
                  {problem.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{problem.title}</h3>
                  <p className="text-muted-foreground mb-4">{problem.description}</p>
                  <Badge variant="secondary" className="font-mono">
                    {problem.impact}
                  </Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Industry Pain Points */}
        <div className="mt-16 p-8 bg-gradient-to-r from-muted/50 to-accent/5 rounded-2xl border border-accent/20">
          <h3 className="text-2xl font-bold mb-6 text-center">Manufacturing Industry Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
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
      </div>
    </section>
  );
};

export default ProblemSection;