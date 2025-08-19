import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { roadmapTimeline } from "@/data/timeline";

const TimelineGantt = () => {
  // Calculate timeline dimensions
  const startDate = new Date("2025-08-19");
  const endDate = new Date("2027-12-31");
  const totalDays = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
  
  const getPositionPercent = (date: string) => {
    const targetDate = new Date(date);
    const daysFromStart = Math.ceil((targetDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    return (daysFromStart / totalDays) * 100;
  };
  
  const getWidthPercent = (start: string, end: string) => {
    const startPos = getPositionPercent(start);
    const endPos = getPositionPercent(end);
    return endPos - startPos;
  };

  const colors = [
    "bg-gradient-to-r from-gold/20 to-gold/40 border-gold/30",
    "bg-gradient-to-r from-warning/20 to-warning/40 border-warning/30", 
    "bg-gradient-to-r from-accent/20 to-accent/40 border-accent/30",
    "bg-gradient-to-r from-primary/20 to-primary/40 border-primary/30",
    "bg-gradient-to-r from-secondary/20 to-secondary/40 border-secondary/30",
    "bg-gradient-to-r from-gold/30 to-warning/30 border-gold/40"
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="w-full"
    >
      <Card className="p-6">
        <h3 className="text-2xl font-bold mb-6 text-center">24-Month Roadmap</h3>
        
        {/* Timeline Header */}
        <div className="flex justify-between items-center mb-6 text-xs text-muted">
          <div>Q3 2025</div>
          <div>Q4 2025</div>
          <div>Q1 2026</div>
          <div>Q2 2026</div>
          <div>Q3 2026</div>
          <div>Q4 2026</div>
          <div>Q1 2027</div>
          <div>Q2 2027</div>
          <div>Q3 2027</div>
          <div>Q4 2027</div>
        </div>
        
        {/* Timeline Bars */}
        <div className="space-y-6">
          {roadmapTimeline.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative"
            >
              {/* Phase Label */}
              <div className="text-sm font-semibold mb-2 text-paper">
                {phase.phase}
              </div>
              
              {/* Timeline Bar Container */}
              <div className="relative h-12 bg-graphite/30 rounded-lg border border-graphite/50">
                {/* Phase Bar */}
                <div
                  className={`absolute top-0 h-full rounded-lg border ${colors[index]} transition-all duration-300 hover:scale-y-110`}
                  style={{
                    left: `${getPositionPercent(phase.start)}%`,
                    width: `${getWidthPercent(phase.start, phase.end)}%`
                  }}
                />
                
                {/* Milestones */}
                {phase.milestones.map((milestone, mIndex) => (
                  <div
                    key={mIndex}
                    className="absolute top-0 h-full flex items-center"
                    style={{ left: `${getPositionPercent(milestone.date)}%` }}
                  >
                    <div className="relative group">
                      <div className="w-3 h-3 bg-gold border-2 border-navy rounded-full transform rotate-45 shadow-sm" />
                      
                      {/* Milestone Tooltip */}
                      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                        <div className="bg-navy border border-graphite rounded-lg p-2 shadow-card whitespace-nowrap">
                          <div className="text-xs text-paper font-medium">
                            {milestone.label}
                          </div>
                          <div className="text-xs text-muted">
                            {new Date(milestone.date).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Key Milestones Summary */}
              <div className="mt-2 flex flex-wrap gap-1">
                {phase.milestones.slice(0, 2).map((milestone, mIndex) => (
                  <Badge key={mIndex} variant="outline" className="text-xs">
                    {milestone.label.split(':')[0]}
                  </Badge>
                ))}
                {phase.milestones.length > 2 && (
                  <Badge variant="secondary" className="text-xs">
                    +{phase.milestones.length - 2} more
                  </Badge>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-6 text-xs text-muted text-center">
          XPRENEURS Batch #19 dates verified from program schedule
        </div>
      </Card>
    </motion.div>
  );
};

export default TimelineGantt;