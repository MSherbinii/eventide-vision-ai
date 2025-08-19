import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StatTile } from "@/components/ui/stat-tile";
import { CheckCircle, TrendingUp, Users, DollarSign, Clock, Target } from "lucide-react";
import { motion } from "framer-motion";

const MarketReadinessSlide = () => {
  const readinessIndicators = [
    {
      category: "Hardware Maturity",
      status: "Commercial Ready",
      evidence: [
        "Sony IMX636 commercially available (2024)",
        "IDS industrial cameras with Prophesee (Mar 2025)", 
        "FRAMOS distribution network active",
        "EVK4 development kits in production"
      ],
      confidence: "High",
      icon: <CheckCircle className="w-8 h-8 text-green-500" />
    },
    {
      category: "Market Demand",
      status: "Strong Growth",
      evidence: [
        "95% of manufacturers investing in AI (Rockwell 2025)",
        "Machine vision 8.3% CAGR (MarketsandMarkets)",
        "$15.83B→$23.63B market growth 2025-2030",
        "Quality control priority in Manufacturing 4.0"
      ],
      confidence: "Validated",
      icon: <TrendingUp className="w-8 h-8 text-primary" />
    },
    {
      category: "Technical Validation", 
      status: "Proven Benefits",
      evidence: [
        "96% data reduction vs RGB (Prophesee studies)",
        "<100μs latency validated (Sony specs)",
        "Industrial pilots showing ROI",
        "Edge processing capabilities confirmed"
      ],
      confidence: "High",
      icon: <Target className="w-8 h-8 text-accent" />
    },
    {
      category: "Competitive Landscape",
      status: "Early Opportunity", 
      evidence: [
        "Limited full-stack event-based solutions",
        "Traditional players focus on RGB/3D",
        "No dominant event-based PaaS provider",
        "Integration complexity creates barrier"
      ],
      confidence: "Opportunity",
      icon: <Users className="w-8 h-8 text-warning" />
    }
  ];

  const marketValidation = [
    {
      metric: "$15.83B→$23.63B",
      description: "Machine Vision Market 2025-2030",
      source: "MarketsandMarkets™ (May 2025)",
      confidence: "Established research firm, recent data"
    },
    {
      metric: "95%",
      description: "Manufacturers investing in AI", 
      source: "Rockwell Automation (Jun 2025)",
      confidence: "600+ executive survey, annual report"
    },
    {
      metric: "8.3%",
      description: "Machine Vision CAGR",
      source: "Multiple analyst consensus",
      confidence: "Consistent across research firms"
    },
    {
      metric: "Commercial",
      description: "Sony IMX636 availability",
      source: "Sony Semiconductor, Prophesee",
      confidence: "Direct from hardware manufacturers"
    }
  ];

  const riskFactors = [
    {
      risk: "Early Technology Adoption",
      mitigation: "Proven hardware + established vision market",
      severity: "Medium"
    },
    {
      risk: "Customer Education Required", 
      mitigation: "Clear ROI demonstrations + pilot programs",
      severity: "Medium"
    },
    {
      risk: "Integration Complexity",
      mitigation: "Full-stack solution approach",
      severity: "Low"
    },
    {
      risk: "Market Size Uncertainty",
      mitigation: "Conservative projections + adjacent markets",
      severity: "Low"
    }
  ];

  const adoptionDrivers = [
    "Manufacturing 4.0 digital transformation push",
    "Quality control requirements increasing", 
    "Edge computing infrastructure maturing",
    "AI/ML adoption accelerating in manufacturing",
    "Cost pressure for automation efficiency"
  ];

  return (
    <div className="w-full h-full flex flex-col px-8 py-6 bg-gradient-to-br from-background via-[hsl(220_34%_8%)] to-[hsl(142_69%_8%)]">
      {/* Chromatic Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-accent/10"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* Header */}
      <div className="relative z-10 text-center space-y-4 mb-8">
        <Badge variant="outline" className="text-sm px-4 py-2 border-primary text-primary bg-transparent">
          MARKET READINESS VALIDATION
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-[-0.01em]">
          <span className="text-primary">Market Timing</span> is Right
        </h1>
        <p className="text-lg text-muted max-w-4xl mx-auto">
          Hardware maturity, proven demand, and competitive gaps create first-mover opportunity
        </p>
      </div>

      <div className="relative z-10 flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Readiness Indicators */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white">Readiness Assessment</h3>
          
          <div className="space-y-4">
            {readinessIndicators.map((indicator, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="p-6 bg-card/80 backdrop-blur-sm border border-border rounded-2xl shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="mt-1">
                      {indicator.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-lg font-bold text-white">{indicator.category}</h4>
                        <Badge 
                          variant={indicator.confidence === 'High' ? 'default' : 
                                 indicator.confidence === 'Validated' ? 'secondary' : 'outline'}
                          className="text-xs"
                        >
                          {indicator.status}
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        {indicator.evidence.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-muted">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                      <p className="text-xs text-primary mt-3 font-medium">
                        Confidence: {indicator.confidence}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column - Market Validation & Risk Analysis */}
        <div className="space-y-6">
          {/* Data Validation */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Data Source Validation</h3>
            <Card className="p-6 bg-card/80 backdrop-blur-sm border border-border rounded-2xl shadow-lg">
              <div className="space-y-4">
                {marketValidation.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    className="border-b border-border/30 pb-3 last:border-b-0 last:pb-0"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-lg font-bold text-primary">{item.metric}</div>
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </div>
                    <div className="text-sm text-white font-medium mb-1">{item.description}</div>
                    <div className="text-xs text-muted mb-1">Source: {item.source}</div>
                    <div className="text-xs text-accent">{item.confidence}</div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </div>

          {/* Adoption Drivers */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Key Adoption Drivers</h3>
            <Card className="p-5 bg-card/80 backdrop-blur-sm border border-border rounded-2xl shadow-lg">
              <div className="space-y-3">
                {adoptionDrivers.map((driver, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    className="flex items-center gap-3"
                  >
                    <TrendingUp className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-white">{driver}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
          </div>

          {/* Risk Assessment */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Risk Assessment</h3>
            <Card className="p-5 bg-card/80 backdrop-blur-sm border border-border rounded-2xl shadow-lg">
              <div className="space-y-3">
                {riskFactors.map((risk, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                    className="border-b border-border/30 pb-2 last:border-b-0 last:pb-0"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-white">{risk.risk}</span>
                      <Badge 
                        variant={risk.severity === 'Low' ? 'secondary' : 'outline'}
                        className="text-xs"
                      >
                        {risk.severity}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted">{risk.mitigation}</p>
                  </motion.div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Bottom Summary */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="relative z-10 mt-8"
      >
        <Card className="p-8 bg-card/80 backdrop-blur-sm border border-primary/20 rounded-2xl shadow-lg text-center">
          <h4 className="text-xl font-bold mb-4 text-white">Market Readiness Score</h4>
          <div className="grid grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold text-green-500">9/10</div>
              <div className="text-sm text-muted">Hardware Ready</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">8/10</div>
              <div className="text-sm text-muted">Market Demand</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent">7/10</div>
              <div className="text-sm text-muted">Competition Gap</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-warning">6/10</div>
              <div className="text-sm text-muted">Customer Education</div>
            </div>
          </div>
          <p className="text-sm text-primary mt-4">
            <strong>Overall Assessment:</strong> Strong market timing with validated hardware and proven demand
          </p>
        </Card>
      </motion.div>
    </div>
  );
};

export default MarketReadinessSlide;