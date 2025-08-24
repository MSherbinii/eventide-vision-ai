import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Target, Users, Rocket, TrendingUp, CheckCircle, Calendar, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

const AskSlideV2 = () => {
  const fundingAllocation = [
    {
      category: "Product Development",
      amount: "€200K",
      percentage: "40%",
      details: [
        "MVP completion & testing",
        "Prophesee evaluation kits (3x)",
        "Cloud infrastructure setup",
        "IP & patent filing"
      ]
    },
    {
      category: "Team Building",
      amount: "€175K",
      percentage: "35%",
      details: [
        "3-5 Class A engineers (0–9 mo)",
        "Lead Brand & Visual Designer (0–3 mo)",
        "Social Media Manager (0–3 mo)",
        "ESOP pool setup (10–15%)",
        "Advisory board compensation"
      ]
    },
    {
      category: "Market Entry",
      amount: "€75K",
      percentage: "15%",
      details: [
        "Pilot projects (3-5 customers)",
        "Industry trade shows",
        "GCC market exploration",
        "XPRENEURS program"
      ]
    },
    {
      category: "Operations",
      amount: "€50K",
      percentage: "10%",
      details: [
        "GmbH establishment",
        "Legal & compliance",
        "Office setup (Egypt/Germany)",
        "Working capital"
      ]
    }
  ];

  const roundTerms = {
    raise: "€500K",
    round: "Priced equity (Pre‑Seed)",
    preMoney: "€3.0M",
    postMoney: "€3.5M",
    investorOwnership: "~14.3% at close",
    liquidationPref: "1× non‑participating (standard)",
    proRata: "Pro‑rata rights (pre‑seed/seed)",
    board: "No board seat; advisory seat optional",
    runway: "15–18 months",
    nextRound: "Seed in 12–18 mo @ €10–12M pre",
    safeNote: "Alt: SAFE (post‑money) cap €6.0M, 20% discount"
  };

  const milestoneTargets = [
    { timeline: "Month 3", target: "MVP Alpha", metric: "Core counting + dashboard" },
    { timeline: "Month 6", target: "First Pilot Signed", metric: "LOI + SOW" },
    { timeline: "Month 9", target: "First Paid Pilot", metric: "€25–50K pilot" },
    { timeline: "Month 12", target: "3 Paying Pilots", metric: "€150–300K ARR run-rate" },
    { timeline: "Month 18", target: "Seed Ready", metric: "5–8 customers, €300–600K ARR" }
  ];

  const whyNow = [
    "Event-based vision market inflection point",
    "First-mover advantage in MENA/DACH",
    "Proven founding team with domain expertise",
    "Path to €1M ARR in 24 months"
  ];

  return (
    <div className="w-full min-h-screen flex flex-col px-8 py-6 bg-gradient-to-br from-background via-background to-primary/5">
      {/* Clean Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/6 rounded-full blur-3xl"></div>
      </div>
      
      {/* Header */}
      <div className="relative z-10 text-center space-y-3 mb-6">
        <Badge variant="outline" className="text-sm px-4 py-2 border-primary text-primary">
          PRE-SEED INVESTMENT
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
          €500K Pre‑Seed to Build the <span className="text-primary">Future of Industrial Vision</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          15–18‑month runway — standard pre‑seed equity terms (SAFE alternative available)
        </p>
      </div>

      <div className="relative z-10 flex-1 grid grid-cols-12 gap-6">
        {/* Left: Use of Funds */}
        <div className="col-span-7 space-y-4">
          <h3 className="text-2xl font-bold text-foreground">Strategic Use of Funds</h3>
          <div className="grid grid-cols-2 gap-3">
            {fundingAllocation.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-4 h-full hover:shadow-lg transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-bold text-foreground">{item.category}</h4>
                    <div className="text-right">
                      <div className="text-lg font-bold text-primary">{item.amount}</div>
                      <div className="text-xs text-muted-foreground">{item.percentage}</div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    {item.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs">
                        <CheckCircle className="w-3 h-3 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{detail}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Milestone Timeline */}
          <Card className="p-5 bg-gradient-to-r from-primary/5 to-accent/5">
            <h4 className="font-bold text-foreground mb-3">Clear Execution Milestones</h4>
            <div className="space-y-2">
              {milestoneTargets.map((milestone, index) => (
                <div key={index} className="flex items-center justify-between p-2 rounded hover:bg-white/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">{milestone.timeline}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-foreground">{milestone.target}</div>
                    <div className="text-xs text-muted-foreground">{milestone.metric}</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Right: Investor Returns & CTA */}
        <div className="col-span-5 space-y-4">
          {/* Round Terms & Ownership Path */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="p-6 bg-gradient-to-br from-primary/20 to-accent/20 border-primary/30">
              <h4 className="text-xl font-bold text-foreground mb-4">Round Terms & Ownership Path</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Raise</span>
                  <span className="text-lg font-bold text-foreground">{roundTerms.raise}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Round</span>
                  <span className="text-lg font-bold text-primary">{roundTerms.round}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Pre‑money Valuation</span>
                  <span className="text-lg font-bold text-foreground">{roundTerms.preMoney}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Post‑money Valuation</span>
                  <span className="text-lg font-bold text-foreground">{roundTerms.postMoney}</span>
                </div>
                <div className="border-t border-border/50 pt-3 mt-3 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Investor Ownership @ Close</span>
                    <span className="text-lg font-bold text-accent">{roundTerms.investorOwnership}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Liquidation Preference</span>
                    <span className="text-lg font-bold text-primary">{roundTerms.liquidationPref}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Pro‑rata Rights</span>
                    <span className="text-lg font-bold text-foreground">{roundTerms.proRata}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Board</span>
                    <span className="text-lg font-bold text-foreground">{roundTerms.board}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Runway</span>
                    <span className="text-lg font-bold text-primary">{roundTerms.runway}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Next Round</span>
                    <span className="text-lg font-bold text-foreground">{roundTerms.nextRound}</span>
                  </div>
                </div>
                <div className="text-[11px] text-muted-foreground/90 pt-2">
                  {roundTerms.safeNote}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Why Now Card */}
          <Card className="p-5">
            <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
              <Rocket className="w-5 h-5 text-primary" />
              Why This Opportunity Now
            </h4>
            <div className="space-y-2">
              {whyNow.map((reason, index) => (
                <div key={index} className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{reason}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Compelling Motto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-3"
          >
            <Card className="p-6 bg-primary text-white text-center">
              <h4 className="text-xl font-bold mb-3">Transforming Industrial Vision</h4>
              <div className="space-y-2 text-sm opacity-95">
                <p>• <strong>96% cost reduction</strong> in data infrastructure</p>
                <p>• <strong>10x lower power</strong> consumption</p>
                <p>• <strong>Microsecond latency</strong> for real-time decisions</p>
                <p className="text-base font-semibold pt-2 border-t border-white/20">
                  Tech startups scale <span className="text-accent">10-50x faster</span> with event-based vision
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="relative z-10 mt-6"
      >
        <div className="flex items-center justify-center p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl border border-primary/20">
          <div className="text-center">
            <p className="text-2xl font-bold text-primary mb-2">The Event Vision Revolution</p>
            <p className="text-base text-muted-foreground">Join the transformation that's enabling next-gen manufacturing at scale</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AskSlideV2;