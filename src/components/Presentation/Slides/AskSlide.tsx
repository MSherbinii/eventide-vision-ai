import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { CountingNumber } from '@/components/Animations/CinematicTransitions';
import { DollarSign, Target, Calendar, TrendingUp, Users, Settings, Lightbulb, ArrowRight } from 'lucide-react';

const AskSlide = () => {
  const useOfFunds = [
    { category: "Hardware & Equipment", amount: 150, percentage: 30, icon: Settings, description: "3× EVK4 kits, edge compute, testing setup" },
    { category: "Engineering Team", amount: 200, percentage: 40, icon: Users, description: "Eng Lead + 2 developers (Egypt)" },
    { category: "Pilot Programs", amount: 75, percentage: 15, icon: Lightbulb, description: "Customer pilots, integration costs" },
    { category: "Operations & Legal", amount: 75, percentage: 15, icon: TrendingUp, description: "GmbH setup, XPRENEURS fees, legal" },
  ];

  const milestones = [
    { timeline: "Months 0-6", milestone: "MVP + First Pilot", metrics: "Working prototype, 1 paying pilot" },
    { timeline: "Months 6-12", milestone: "Market Validation", metrics: "3 paid deployments, proven ROI" },
    { timeline: "Months 12-18", milestone: "Seed Ready", metrics: "10+ customers, €100K+ ARR" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background p-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <Badge variant="outline" className="mb-4 font-heading text-sm border-accent text-accent">
          FUNDING REQUEST
        </Badge>
        <h1 className="font-heading font-bold text-5xl mb-4 text-foreground">
          Pre-Seed Ask
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          €500K to fund MVP development, pilot programs, and team building 
          to achieve seed-ready traction by mid-2027.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Use of Funds */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center mb-8">
            <DollarSign className="w-8 h-8 text-accent mr-3" />
            <h2 className="font-heading font-bold text-3xl text-foreground">
              Use of Funds
            </h2>
          </div>

          {/* Total Amount */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-8 p-6 bg-gradient-to-r from-accent/10 to-warning/10 border border-accent/20 rounded-lg"
          >
            <div className="text-4xl font-heading font-bold text-foreground mb-2">
              €<CountingNumber from={0} to={500} duration={2} />K
            </div>
            <p className="text-muted-foreground">Pre-Seed Round</p>
          </motion.div>

          {/* Breakdown */}
          <div className="space-y-4">
            {useOfFunds.map((item, index) => (
              <motion.div
                key={item.category}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <Card className="p-4 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary">
                        <item.icon className="w-4 h-4 text-primary-foreground" />
                      </div>
                      <h3 className="font-heading font-semibold text-lg text-foreground">
                        {item.category}
                      </h3>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-lg text-foreground">
                        €{item.amount}K
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {item.percentage}%
                      </Badge>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground ml-11">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Milestones & Timeline */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex items-center mb-8">
            <Target className="w-8 h-8 text-accent mr-3" />
            <h2 className="font-heading font-bold text-3xl text-foreground">
              Key Milestones
            </h2>
          </div>

          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
              >
                <Card className="p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-l-accent">
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="outline" className="text-sm">
                      {milestone.timeline}
                    </Badge>
                    <Calendar className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-2 text-foreground">
                    {milestone.milestone}
                  </h3>
                  <p className="text-muted-foreground">
                    {milestone.metrics}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Target Outcome */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-lg"
          >
            <h3 className="font-heading font-bold text-xl mb-3 text-foreground flex items-center">
              <TrendingUp className="w-6 h-6 mr-2 text-accent" />
              Target Outcome
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-foreground mb-1">
                  <CountingNumber from={0} to={3} duration={2} />
                </div>
                <p className="text-sm text-muted-foreground">Paid Deployments</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground mb-1">
                  €<CountingNumber from={0} to={100} duration={2} />K+ ARR
                </div>
                <p className="text-sm text-muted-foreground">Annual Recurring Revenue</p>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="mt-8 text-center p-6 bg-accent/10 border border-accent/30 rounded-lg"
          >
            <h3 className="font-heading font-bold text-2xl mb-3 text-foreground">
              Next Steps
            </h3>
            <p className="text-muted-foreground mb-4">
              Let's schedule a technical deep-dive and discuss partnership opportunities
            </p>
            <div className="flex items-center justify-center space-x-2 text-accent font-semibold">
              <span>Ready to revolutionize industrial vision</span>
              <ArrowRight className="w-5 h-5" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AskSlide;