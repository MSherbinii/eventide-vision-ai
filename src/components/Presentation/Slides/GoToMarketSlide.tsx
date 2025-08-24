import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const GoToMarketSlide = () => {
  const pilotExample = {
    customer: "Mid-size Pharma Manufacturer",
    challenge: "High-speed pill counting quality control (800 pills/minute)",
    solution: "2 production lines, 8-week pilot",
    timeline: "Week 1-2: Setup • Week 3-6: Training & Testing • Week 7-8: Validation",
    costs: {
      setup: "€55,000 one-time",
      monthly: "€2,400/month (€1,200/line)",
      annual: "€28,800/year"
    },
    roi: {
      defectReduction: "€65K/year (2% waste reduction)",
      downtimeReduction: "€35K/year (5% improvement)",
      totalSavings: "€100K/year",
      customerROI: "62% first year",
      payback: "7.8 months"
    }
  };

  const icp = [
    { label: "Pharma packaging", detail: "High-speed counting, cap/closure inspection, 600-1000 ppm" },
    { label: "F&B bottling", detail: "High-speed counting, closure QC, packaging validation" },
    { label: "Wire & cable manufacturing", detail: "Velocity monitoring, slipping detection, 200-500m/min" }
  ];

  const salesProcess = [
    { title: "Discovery call", sub: "Identify pain points, baseline metrics" },
    { title: "8-week pilot SOW", sub: "Fixed scope, clear success criteria" },
    { title: "Production rollout", sub: "Scale to additional lines & facilities" }
  ];

  const kpis = [
    { k: "Pilots/quarter", v: "3-4" },
    { k: "Pilot→Production", v: "75%" },
    { k: "ARPU", v: "€29K" },
    { k: "Payback period", v: "5.2 mo" }
  ];

  return (
    <div className="w-full min-h-screen flex flex-col px-8 py-6 bg-background relative">
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
          GO-TO-MARKET
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
          Validated <span className="text-primary">Pilot-to-Scale</span> Model
        </h1>
        <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
          Multi-industry approach: pharma, F&B, wire & cable. €55K pilot generates 62% ROI.
        </p>
      </div>

      <div className="relative z-10 flex-1 space-y-8">
        {/* Featured Pilot Example */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-4">Real Customer Success Story</h3>
          <Card className="p-6 glass-card border-2 border-primary/30">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Customer & Challenge */}
              <div>
                <h4 className="font-bold text-primary mb-2">{pilotExample.customer}</h4>
                <p className="text-sm text-muted-foreground mb-3">{pilotExample.challenge}</p>
                <div className="text-sm">
                  <div className="font-semibold">Solution:</div>
                  <div className="text-muted-foreground">{pilotExample.solution}</div>
                </div>
                <div className="text-xs text-muted-foreground mt-2">{pilotExample.timeline}</div>
              </div>
              
              {/* Costs */}
              <div>
                <h4 className="font-bold text-accent mb-2">Investment</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Setup:</span>
                    <span className="font-semibold">{pilotExample.costs.setup}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Monthly:</span>
                    <span className="font-semibold">{pilotExample.costs.monthly}</span>
                  </div>
                  <div className="flex justify-between border-t pt-2">
                    <span>Annual:</span>
                    <span className="font-bold text-primary">{pilotExample.costs.annual}</span>
                  </div>
                </div>
              </div>
              
              {/* ROI */}
              <div>
                <h4 className="font-bold text-green-400 mb-2">Customer Returns</h4>
                <div className="space-y-2 text-sm">
                  <div className="text-muted-foreground">{pilotExample.roi.defectReduction}</div>
                  <div className="text-muted-foreground">{pilotExample.roi.downtimeReduction}</div>
                  <div className="border-t pt-2">
                    <div className="font-bold text-green-400">{pilotExample.roi.totalSavings}</div>
                    <div className="text-2xl font-bold text-primary">{pilotExample.roi.customerROI}</div>
                    <div className="text-xs text-muted-foreground">Payback: {pilotExample.roi.payback}</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Supporting Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* ICP */}
          <Card className="p-6 glass-card">
            <h3 className="text-xl font-bold text-foreground mb-3">Target Markets</h3>
            <div className="space-y-3 text-sm">
              {icp.map((i, idx) => (
                <div key={idx}>
                  <div className="font-semibold text-foreground">{i.label}</div>
                  <div className="text-muted-foreground text-xs">{i.detail}</div>
                </div>
              ))}
            </div>
          </Card>

          {/* Sales Process */}
          <Card className="p-6 glass-card">
            <h3 className="text-xl font-bold text-foreground mb-3">Sales Process</h3>
            <div className="space-y-3 text-sm">
              {salesProcess.map((m, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 * idx }}>
                  <div className="font-semibold text-foreground">{m.title}</div>
                  <div className="text-muted-foreground text-xs">{m.sub}</div>
                </motion.div>
              ))}
            </div>
          </Card>

          {/* Validated KPIs */}
          <Card className="p-6 glass-card">
            <h3 className="text-xl font-bold text-foreground mb-3">Validated Metrics</h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              {kpis.map((item, idx) => (
                <div key={idx} className="p-3 rounded-lg border border-border text-center">
                  <div className="text-xs text-muted-foreground">{item.k}</div>
                  <div className="text-lg font-bold text-foreground">{item.v}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GoToMarketSlide;