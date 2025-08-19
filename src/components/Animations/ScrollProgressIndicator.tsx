import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

const ScrollProgressIndicator = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [currentSection, setCurrentSection] = useState('Hero');
  const [completedSections, setCompletedSections] = useState<string[]>([]);

  const sections = [
    { id: 'hero', name: 'Hero', emoji: '🚀' },
    { id: 'problem', name: 'Problem', emoji: '⚠️' },
    { id: 'market', name: 'Market', emoji: '📈' },
    { id: 'solution', name: 'Solution', emoji: '💡' },
    { id: 'business', name: 'Business', emoji: '💰' },
    { id: 'team', name: 'Team', emoji: '👥' },
    { id: 'funding', name: 'Funding', emoji: '🎯' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Calculate which section we're in
      const progress = scrollPosition / (documentHeight - windowHeight);
      const sectionIndex = Math.floor(progress * sections.length);
      const currentSectionData = sections[sectionIndex] || sections[0];
      
      setCurrentSection(currentSectionData.name);
      
      // Mark previous sections as completed
      const completed = sections.slice(0, sectionIndex).map(s => s.name);
      setCompletedSections(completed);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Floating progress indicator */}
      <motion.div
        className="fixed top-20 right-6 z-40"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
      >
        <div className="bg-card/90 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-border/50 min-w-[200px]">
          <div className="flex items-center justify-between mb-3">
            <Badge variant="outline" className="text-xs">
              Pitch Progress
            </Badge>
            <motion.div
              className="text-sm font-mono gradient-text"
              key={currentSection}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              {Math.round(scrollYProgress.get() * 100)}%
            </motion.div>
          </div>
          
          <div className="space-y-2">
            {sections.map((section) => {
              const isCompleted = completedSections.includes(section.name);
              const isCurrent = currentSection === section.name;
              
              return (
                <motion.div
                  key={section.id}
                  className={`flex items-center gap-2 p-2 rounded-lg transition-all duration-300 ${
                    isCurrent 
                      ? 'bg-primary/10 border border-primary/20' 
                      : isCompleted 
                        ? 'bg-green-500/10 border border-green-500/20' 
                        : 'opacity-50'
                  }`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: section.id === 'hero' ? 0 : 0.1 }}
                >
                  <motion.div
                    className="text-lg"
                    animate={isCurrent ? { 
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, -10, 0]
                    } : {}}
                    transition={{ 
                      duration: 0.5,
                      repeat: isCurrent ? Infinity : 0,
                      repeatDelay: 2
                    }}
                  >
                    {section.emoji}
                  </motion.div>
                  <div className="flex-1">
                    <div className={`text-sm font-medium ${
                      isCurrent ? 'text-primary' : isCompleted ? 'text-green-500' : 'text-muted-foreground'
                    }`}>
                      {section.name}
                    </div>
                  </div>
                  {isCompleted && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="text-green-500 text-sm"
                    >
                      ✓
                    </motion.div>
                  )}
                  {isCurrent && (
                    <motion.div
                      className="w-2 h-2 bg-primary rounded-full"
                      animate={{ 
                        scale: [1, 1.5, 1],
                        opacity: [1, 0.5, 1]
                      }}
                      transition={{ 
                        duration: 1,
                        repeat: Infinity
                      }}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Completion celebration */}
          {scrollYProgress.get() > 0.95 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-4 p-3 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg border border-green-500/30"
            >
              <div className="text-center">
                <motion.div
                  className="text-2xl mb-2"
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 1,
                    repeat: Infinity,
                    repeatDelay: 2
                  }}
                >
                  🎉
                </motion.div>
                <div className="text-sm font-bold text-green-600">
                  Pitch Complete!
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Ready to transform vision tech?
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default ScrollProgressIndicator;