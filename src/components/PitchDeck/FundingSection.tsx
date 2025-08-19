import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";  
import { Button } from "@/components/ui/button";
import { DollarSign, TrendingUp, Target, Rocket, Building, Users, Zap, Globe } from "lucide-react";

const FundingSection = () => {
  const fundingRounds = [
    {
      round: "Pre-Seed",
      amount: "$250K",
      timeline: "Month 6-9",
      valuation: "$2M",
      use: "MVP development, first hires",
      investors: "Angel investors, incubators"
    },
    {
      round: "Seed",
      amount: "$1.5M", 
      timeline: "Month 12-18",
      valuation: "$8M",
      use: "Market validation, team scaling",
      investors: "Seed VCs, strategic partners",
      current: true
    },
    {
      round: "Series A",
      amount: "$6M",
      timeline: "Month 24-30", 
      valuation: "$25M",
      use: "International expansion",
      investors: "Growth VCs, corporates"
    }
  ];

  const useOfFunds = [
    {
      category: "R&D & Product Development",
      percentage: "45%",
      amount: "$675K",
      details: [
        "AI model development & optimization",
        "Hardware integration & testing", 
        "Platform scalability improvements",
        "Edge computing solutions"
      ],
      icon: <Zap className="w-6 h-6" />
    },
    {
      category: "Team Expansion",
      percentage: "30%",
      amount: "$450K", 
      details: [
        "Hire 5 Class-A engineers",
        "CTO/Lead Engineer (15% equity)",
        "Sales & customer success team",
        "Technical support specialists"
      ],
      icon: <Users className="w-6 h-6" />
    },
    {
      category: "Market Development",
      percentage: "15%",
      amount: "$225K",
      details: [
        "Customer acquisition & pilots",
        "Trade shows & conferences",
        "Partnership development",
        "Marketing & brand building"
      ],
      icon: <Target className="w-6 h-6" />
    },
    {
      category: "Operations & Infrastructure",
      percentage: "10%",
      amount: "$150K",
      details: [
        "Office setup (Egypt & Germany)",
        "Hardware procurement", 
        "Cloud infrastructure",
        "Legal & compliance"
      ],
      icon: <Building className="w-6 h-6" />
    }
  ];

  const projections = [
    {
      year: "Year 1",
      revenue: "$150K",
      customers: "3-5",
      team: "8",
      milestone: "MVP + First Customers"
    },
    {
      year: "Year 2", 
      revenue: "$800K",
      customers: "15-20",
      team: "15",
      milestone: "Market Validation"
    },
    {
      year: "Year 3",
      revenue: "$3.2M",
      customers: "40-50", 
      team: "25",
      milestone: "Market Leadership"
    },
    {
      year: "Year 4",
      revenue: "$8.5M",
      customers: "80-100",
      team: "40",
      milestone: "International Expansion"
    }
  ];

  const exitStrategy = [
    {
      path: "Strategic Acquisition",
      timeline: "5-7 years",
      valuation: "$100M-500M",
      acquirers: "Siemens, ABB, Cognex, Keyence",
      probability: "High"
    },
    {
      path: "IPO",
      timeline: "7-10 years", 
      valuation: "$1B+",
      requirements: "$50M+ ARR",
      probability: "Medium"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-6xl mx-auto">
        {/* Funding Hero */}
        <div className="text-center space-y-6 mb-16">
          <Badge variant="outline" className="text-sm px-4 py-2">
            FUNDING ASK
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold">
            <span className="gradient-text">$1.5M Seed Round</span>
            <br />
            to Scale Global Vision
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Strategic funding to establish market leadership in event-based vision technology and capture the $20B+ opportunity.
          </p>
        </div>

        {/* Current Ask - Featured */}
        <div className="mb-20">
          <Card className="p-8 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-primary/30 shadow-2xl">
            <div className="text-center space-y-6">
              <h3 className="text-3xl font-bold">💎 Current Funding Round</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                  <div className="text-4xl font-bold gradient-text mb-2">$1.5M</div>
                  <p className="text-sm text-muted-foreground">Seed Round</p>
                </div>
                <div>
                  <div className="text-4xl font-bold gradient-text mb-2">$8M</div>
                  <p className="text-sm text-muted-foreground">Pre-money Valuation</p>
                </div>
                <div>
                  <div className="text-4xl font-bold gradient-text mb-2">18.75%</div>
                  <p className="text-sm text-muted-foreground">Equity Offered</p>
                </div>
                <div>
                  <div className="text-4xl font-bold gradient-text mb-2">18 months</div>
                  <p className="text-sm text-muted-foreground">Runway</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Use of Funds */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">Use of Funds</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useOfFunds.map((category, index) => (
              <Card key={index} className="p-6 hover:scale-105 transition-all duration-300 glow-effect">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="text-primary">
                        {category.icon}
                      </div>
                      <h4 className="font-bold">{category.category}</h4>
                    </div>
                    <Badge variant="secondary" className="font-mono">
                      {category.percentage}
                    </Badge>
                  </div>
                  <div className="text-2xl font-bold gradient-text">{category.amount}</div>
                  <ul className="space-y-2">
                    {category.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-2 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Financial Projections */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">Financial Projections</h3>
          <Card className="p-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4 font-semibold">Year</th>
                    <th className="text-left p-4 font-semibold">Revenue</th>
                    <th className="text-left p-4 font-semibold">Customers</th>
                    <th className="text-left p-4 font-semibold">Team Size</th>
                    <th className="text-left p-4 font-semibold">Key Milestone</th>
                  </tr>
                </thead>
                <tbody>
                  {projections.map((projection, index) => (
                    <tr key={index} className="border-b hover:bg-muted/20">
                      <td className="p-4 font-semibold">{projection.year}</td>
                      <td className="p-4 font-mono text-primary">{projection.revenue}</td>
                      <td className="p-4">{projection.customers}</td>
                      <td className="p-4">{projection.team}</td>
                      <td className="p-4 text-sm">{projection.milestone}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        {/* Full Funding Roadmap */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">Complete Funding Roadmap</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {fundingRounds.map((round, index) => (
              <Card key={index} className={`p-6 ${round.current ? 'border-primary/50 bg-primary/5 scale-105' : ''} hover:scale-110 transition-all duration-300`}>
                {round.current && (
                  <Badge className="mb-4 bg-gradient-to-r from-primary to-secondary">
                    Current Round
                  </Badge>
                )}
                <div className="space-y-4">
                  <h4 className="text-xl font-bold">{round.round}</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Amount:</span>
                      <span className="font-bold">{round.amount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Timeline:</span>
                      <span>{round.timeline}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Valuation:</span>
                      <Badge variant="outline">{round.valuation}</Badge>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">Primary Use:</p>
                    <p className="text-xs text-muted-foreground">{round.use}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">Target Investors:</p>
                    <p className="text-xs text-muted-foreground">{round.investors}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Exit Strategy */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">Exit Strategy</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {exitStrategy.map((exit, index) => (
              <Card key={index} className="p-8 hover:scale-105 transition-all duration-300 glow-effect">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xl font-bold">{exit.path}</h4>
                    <Badge variant={exit.probability === 'High' ? 'default' : 'secondary'}>
                      {exit.probability}
                    </Badge>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Timeline:</span>
                      <span>{exit.timeline}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Valuation:</span>
                      <span className="font-bold gradient-text">{exit.valuation}</span>
                    </div>
                  </div>
                  {exit.acquirers && (
                    <div>
                      <p className="text-sm font-medium mb-2">Potential Acquirers:</p>
                      <p className="text-xs text-muted-foreground">{exit.acquirers}</p>
                    </div>
                  )}
                  {exit.requirements && (
                    <div>
                      <p className="text-sm font-medium mb-2">Requirements:</p>
                      <p className="text-xs text-muted-foreground">{exit.requirements}</p>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="p-12 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 border-primary/20">
            <h3 className="text-3xl font-bold mb-6">Ready to Transform Industrial Vision?</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join us in building the future of manufacturing with event-based perception technology. 
              First-mover advantage in a $20B+ market opportunity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" className="group">
                <DollarSign className="w-5 h-5 mr-2" />
                Invest Now
                <Rocket className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl">
                <Globe className="w-5 h-5 mr-2" />
                Schedule Due Diligence
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FundingSection;