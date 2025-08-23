import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const TeamAskSlide = () => {
  const team = [
    { name: "Mohamed El Sherbini", role: "Founder & CEO", focus: "Event-based CV, industrial systems" },
    { name: "Aly Barakat", role: "Co-Founder & COO", focus: "Ops & biz dev, market access" },
    { name: "Peter Essam", role: "Co-Founder & CIO", focus: "Systems & IT architecture" }
  ];

  const funds = [
    { label: "Product Development", amount: "€200K" },
    { label: "Team Building", amount: "€150K" },
    { label: "Market Entry", amount: "€100K" },
    { label: "Operations", amount: "€50K" }
  ];

  return (
    <div className="w-full min-h-screen flex flex-col px-8 py-6 bg-background relative">
      {/* Unified Animated Background */}
      <div className="animated-bg">
        <div className="floating-orb" style={{ width: 600, height: 600, background: 'radial-gradient(circle, hsl(var(--primary) / 0.3), transparent)', top: -200, left: -200 }} />
        <div className="floating-orb" style={{ width: 400, height: 400, background: 'radial-gradient(circle, hsl(var(--accent) / 0.25), transparent)', bottom: -150, right: -150 }} />
        <div className="floating-orb" style={{ width: 300, height: 300, background: 'radial-gradient(circle, hsl(var(--warning) / 0.2), transparent)', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
      </div>
      <div className="geometric-pattern" />

      {/* Header */}
      <div className="relative z-10 text-center space-y-3 mb-6">
        <Badge variant="outline" className="text-sm px-4 py-2 border-primary text-primary bg-transparent">
          TEAM + PRE-SEED ASK
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
          <span className="text-gradient text-glow-animate">Execution-Ready Team</span> & Clear Use of Funds
        </h1>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1">
        {/* Team Column */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-foreground">Founding Team</h3>
          <div className="space-y-3">
            {team.map((member, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 * idx }}>
                <Card className="p-4 glass-card glow-border">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-foreground font-semibold">{member.name}</div>
                      <div className="text-primary text-sm">{member.role}</div>
                      <div className="text-muted-foreground text-xs mt-1">{member.focus}</div>
                    </div>
                    <Badge variant="secondary" className="text-xs">ESOP 10–15%</Badge>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <Card className="p-4 glass-card">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">3–5</div>
                <div className="text-xs text-muted-foreground">Class A Engineers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">Munich</div>
                <div className="text-xs text-muted-foreground">CTO / Lead</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-warning">Cairo</div>
                <div className="text-xs text-muted-foreground">R&D Hub</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Ask Column */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-foreground">€500K Pre-Seed Ask</h3>
          <Card className="p-4 glass-card">
            <div className="grid grid-cols-2 gap-3">
              {funds.map((f, idx) => (
                <div key={idx} className="p-3 rounded-lg border border-border hover:border-primary/30 transition-colors">
                  <div className="text-sm text-muted-foreground">{f.label}</div>
                  <div className="text-lg font-bold text-foreground">{f.amount}</div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-4 glass-card">
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Equity</span>
                <span className="font-semibold text-primary">15%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Use of Funds</span>
                <span className="font-semibold text-foreground">MVP • Hires • Pilots • GmbH</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Milestones</span>
                <span className="font-semibold text-accent">M6: 1 pilot • M12: 5 customers</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TeamAskSlide;
