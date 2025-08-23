import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const GoToMarketSlide = () => {
  const icp = [
    { label: "Pharma packaging", detail: ">600 ppm lines, cap/closure/counting" },
    { label: "Beverage bottling", detail: "High-speed counting, closure QC" },
    { label: "Electronics", detail: "Surface defects at 60 m/s" }
  ];

  const motionItems = [
    { title: "Founders-led sales", sub: "Discovery → baseline → pilot SOW" },
    { title: "6–8 week pilot", sub: "Event+RGB retrofit, edge-first, KPI-based" },
    { title: "Rollout & expand", sub: "More lines, more sites, analytics seats" }
  ];

  const kpis = [
    { k: "Pilots/quarter", v: "2–3" },
    { k: "Pilot→Production", v: ">60%" },
    { k: "ACV/plant", v: "€40–120k" },
    { k: "Gross margin", v: "70–80%" }
  ];

  const partners = [
    { label: "DACH SIs", detail: "1–2 integration partners for on-site work" },
    { label: "Hardware", detail: "Pass-through EVKs (Prophesee/Sony), no margin" },
    { label: "Incubators", detail: "XPRENEURS access to enterprise intros" }
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
          Land 1 Pilot / Month, Expand by Lines & Sites
        </h1>
        <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
          ICP-focused selling in DACH + GCC with KPI-based pilots and SI partners for on-site delivery
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1">
        {/* ICP */}
        <Card className="p-6 glass-card">
          <h3 className="text-xl font-bold text-foreground mb-3">Ideal Customer Profile</h3>
          <div className="space-y-3 text-sm">
            {icp.map((i, idx) => (
              <div key={idx} className="flex items-start justify-between">
                <div className="font-semibold text-foreground">{i.label}</div>
                <div className="text-muted-foreground text-right w-1/2">{i.detail}</div>
              </div>
            ))}
          </div>
        </Card>

        {/* Sales Motion */}
        <Card className="p-6 glass-card">
          <h3 className="text-xl font-bold text-foreground mb-3">Sales Motion</h3>
          <div className="space-y-3 text-sm">
            {motionItems.map((m, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 * idx }}>
                <div className="font-semibold text-foreground">{m.title}</div>
                <div className="text-muted-foreground">{m.sub}</div>
              </motion.div>
            ))}
          </div>
        </Card>

        {/* KPIs & Partners */}
        <div className="space-y-6">
          <Card className="p-6 glass-card">
            <h3 className="text-xl font-bold text-foreground mb-3">KPIs</h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              {kpis.map((item, idx) => (
                <div key={idx} className="p-3 rounded-lg border border-border text-center">
                  <div className="text-xs text-muted-foreground">{item.k}</div>
                  <div className="text-lg font-bold text-foreground">{item.v}</div>
                </div>
              ))}
            </div>
          </Card>
          <Card className="p-6 glass-card">
            <h3 className="text-xl font-bold text-foreground mb-3">Channels & Partners</h3>
            <div className="space-y-2 text-sm">
              {partners.map((p, idx) => (
                <div key={idx} className="flex items-start justify-between">
                  <div className="font-semibold text-foreground">{p.label}</div>
                  <div className="text-muted-foreground text-right w-1/2">{p.detail}</div>
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