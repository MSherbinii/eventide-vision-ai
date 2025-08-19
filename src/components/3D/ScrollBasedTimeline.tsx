import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text, Html, OrbitControls, Sparkles, Trail } from '@react-three/drei';
import * as THREE from 'three';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface TimelinePhase {
  id: string;
  title: string;
  description: string;
  timeframe: string;
  milestones: string[];
  funding: string;
  position: [number, number, number];
  color: string;
  completed: boolean;
  kpis: string[];
}

const timelinePhases: TimelinePhase[] = [
  {
    id: '1',
    title: 'Foundation & MVP',
    description: 'Company formation and core technology development',
    timeframe: 'Months 0-6',
    milestones: [
      'GMBH formation in Germany',
      'Egypt R&D office setup', 
      'Hire 3-5 Class A engineers ($700-1K/month)',
      'Purchase 3x Prophesee EVK4 HD ($15K)',
      'MVP development with event-based detection'
    ],
    funding: 'Pre-seed: $250K',
    position: [-8, 2, 0],
    color: '#3b82f6',
    completed: true,
    kpis: ['MVP functional', 'Team assembled', 'First detection model']
  },
  {
    id: '2', 
    title: 'Incubation & Pilot',
    description: 'Join accelerators and deploy first pilot project',
    timeframe: 'Months 6-12',
    milestones: [
      'XPRENEURS incubation program',
      'TUM Venture Labs partnership',
      'First pilot deployment (Egypt)',
      'Pharma/F&B industry validation',
      'PaaS platform v1.0 launch'
    ],
    funding: 'XPRENEURS support + grants',
    position: [-4, 1, 1],
    color: '#8b5cf6',
    completed: false,
    kpis: ['1 pilot customer', 'Platform deployed', 'ROI demonstrated']
  },
  {
    id: '3',
    title: 'Seed & Scale',
    description: 'Major funding round and team expansion',
    timeframe: 'Months 12-18',
    milestones: [
      'Y Combinator application',
      'Seed round: $1.5M (18.75% equity)',
      'Hire engineering lead (10-15% ESOP)',
      'Scale to 3-5 paying customers',
      'MENA market expansion'
    ],
    funding: 'Seed: $1.5M',
    position: [0, 0, 0],
    color: '#06b6d4',
    completed: false,
    kpis: ['$150K ARR', '5 customers', 'Break-even']
  },
  {
    id: '4',
    title: 'Market Expansion',
    description: 'International expansion and product scaling',
    timeframe: 'Months 18-30',
    milestones: [
      'European market entry',
      'Partnership with IDS GmbH',
      'London office setup',
      'Series A preparation',
      'Tier 2: Defense & Space pivot'
    ],
    funding: 'Series A: $8M target',
    position: [4, -1, -1],
    color: '#10b981',
    completed: false,
    kpis: ['$3.2M ARR', '40-50 customers', 'International presence']
  },
  {
    id: '5',
    title: 'Industry Leadership',
    description: 'Market dominance and strategic exit preparation',
    timeframe: 'Years 3-5',
    milestones: [
      'Category leadership in event-based vision',
      'Strategic partnerships with Sony/Prophesee',
      'Autonomous systems deployment',
      'IPO/acquisition readiness',
      'Global market presence'
    ],
    funding: 'Series B+ or Exit',
    position: [8, -2, 0],
    color: '#f59e0b',
    completed: false,
    kpis: ['$50M+ ARR', 'Market leader', 'Exit opportunity']
  }
];

const Timeline3DNode = ({ 
  phase, 
  isActive, 
  scrollProgress 
}: { 
  phase: TimelinePhase; 
  isActive: boolean;
  scrollProgress: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      if (isActive) {
        meshRef.current.scale.setScalar(1.5);
        meshRef.current.rotation.y = state.clock.elapsedTime * 1.5;
      } else {
        meshRef.current.scale.setScalar(1);
        meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      }
    }

    if (ringRef.current) {
      ringRef.current.rotation.z += 0.02;
      if (phase.completed || isActive) {
        ringRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2) * 0.2);
      }
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.4}>
      <group position={phase.position}>
        {/* Main node */}
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[0.4]} />
          <meshStandardMaterial 
            color={phase.color}
            metalness={0.9}
            roughness={0.1}
            emissive={phase.color}
            emissiveIntensity={isActive ? 0.5 : phase.completed ? 0.3 : 0.1}
          />
        </mesh>

        {/* Outer ring */}
        {(phase.completed || isActive) && (
          <mesh ref={ringRef}>
            <torusGeometry args={[0.7, 0.03, 8, 32]} />
            <meshBasicMaterial 
              color={phase.color} 
              transparent 
              opacity={isActive ? 0.8 : 0.5} 
            />
          </mesh>
        )}

        {/* Connection beam */}
        {phase.id !== '5' && (
          <Trail
            width={0.15}
            color={phase.color}
            length={12}
            decay={1}
            interval={1}
            local={false}
            stride={0}
            target={undefined}
          >
            <mesh position={[2, -0.5, 0]} rotation={[0, 0, -0.2]}>
              <cylinderGeometry args={[0.03, 0.03, 4]} />
              <meshStandardMaterial 
                color={phase.color} 
                transparent 
                opacity={0.6} 
                emissive={phase.color}
                emissiveIntensity={0.2}
                metalness={0.8}
                roughness={0.2}
              />
            </mesh>
          </Trail>
        )}

        {/* Active particles */}
        {isActive && (
          <Sparkles 
            count={30} 
            scale={3} 
            size={4} 
            speed={0.8} 
            color={phase.color} 
          />
        )}

        {/* Floating info card */}
        <Html position={[0, 1.2, 0]} center>
          <motion.div
            className="bg-card/95 backdrop-blur-sm rounded-xl p-4 shadow-2xl border border-border/50 min-w-[320px] max-w-[400px]"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ 
              opacity: isActive ? 1 : 0.9, 
              scale: isActive ? 1.1 : 1,
              y: isActive ? -10 : 0
            }}
            transition={{ duration: 0.4 }}
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Badge 
                  variant={phase.completed ? "default" : isActive ? "secondary" : "outline"}
                  className="text-xs"
                >
                  {phase.timeframe}
                </Badge>
                {phase.completed && (
                  <div className="text-green-500 text-sm font-bold">✓ Complete</div>
                )}
                {isActive && !phase.completed && (
                  <div className="text-blue-500 text-sm font-bold animate-pulse">● Active</div>
                )}
              </div>
              
              <div>
                <h4 className="font-bold text-lg gradient-text">{phase.title}</h4>
                <p className="text-sm text-muted-foreground mt-1">{phase.description}</p>
              </div>

              <div>
                <div className="font-semibold text-sm mb-2">Key Milestones:</div>
                <ul className="text-xs space-y-1">
                  {phase.milestones.slice(0, 3).map((milestone, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                      <span>{milestone}</span>
                    </li>
                  ))}
                  {phase.milestones.length > 3 && (
                    <li className="text-muted-foreground">+{phase.milestones.length - 3} more...</li>
                  )}
                </ul>
              </div>

              <div className="pt-2 border-t border-border/30">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">Target KPIs:</span>
                  <span className="text-xs font-mono font-bold" style={{ color: phase.color }}>
                    {phase.funding}
                  </span>
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {phase.kpis.join(' • ')}
                </div>
              </div>
            </div>
          </motion.div>
        </Html>
      </group>
    </Float>
  );
};

const ScrollBasedTimeline = ({ className = "" }: { className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activePhase, setActivePhase] = useState<string>('1');
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const cameraX = useTransform(scrollYProgress, [0, 1], [0, 16]);
  const cameraY = useTransform(scrollYProgress, [0, 1], [0, -4]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((progress) => {
      const phaseIndex = Math.floor(progress * timelinePhases.length);
      const currentPhase = timelinePhases[phaseIndex];
      if (currentPhase) {
        setActivePhase(currentPhase.id);
      }
    });

    return unsubscribe;
  }, [scrollYProgress]);

  return (
    <div ref={containerRef} className={`w-full h-[800px] relative ${className}`}>
      <Canvas camera={{ position: [0, 2, 12], fov: 75 }}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={1.2} />
        <pointLight position={[-10, 5, 10]} intensity={0.8} color="#8b5cf6" />
        <pointLight position={[10, -5, -10]} intensity={0.6} color="#06b6d4" />
        
        {/* Timeline nodes */}
        {timelinePhases.map((phase) => (
          <Timeline3DNode 
            key={phase.id}
            phase={phase}
            isActive={activePhase === phase.id}
            scrollProgress={scrollYProgress.get()}
          />
        ))}

        {/* Background environment */}
        <Sparkles 
          count={200} 
          scale={20} 
          size={1.5} 
          speed={0.3} 
          color="#374151" 
          opacity={0.4}
        />

        <OrbitControls 
          enableZoom={true} 
          enablePan={false}
          enableRotate={true}
          autoRotate={false}
          maxPolarAngle={Math.PI * 0.6}
          minPolarAngle={Math.PI * 0.2}
        />
      </Canvas>
      
      {/* Timeline progress indicator */}
      <div className="absolute bottom-6 left-6 bg-card/90 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-border/50">
        <h4 className="font-bold text-sm mb-3 gradient-text">Startup Timeline</h4>
        <div className="space-y-2">
          {timelinePhases.map((phase, index) => (
            <div 
              key={phase.id}
              className={`flex items-center gap-3 p-2 rounded-lg transition-all ${
                activePhase === phase.id 
                  ? 'bg-primary/20 border border-primary/30' 
                  : phase.completed
                    ? 'bg-green-500/10 border border-green-500/20'
                    : 'opacity-60'
              }`}
            >
              <div 
                className={`w-3 h-3 rounded-full ${
                  activePhase === phase.id 
                    ? 'bg-primary animate-pulse' 
                    : phase.completed
                      ? 'bg-green-500'
                      : 'bg-muted-foreground'
                }`}
              ></div>
              <div className="flex-1">
                <div className={`text-xs font-medium ${
                  activePhase === phase.id ? 'text-primary' : 
                  phase.completed ? 'text-green-500' : 'text-muted-foreground'
                }`}>
                  {phase.title}
                </div>
                <div className="text-xs text-muted-foreground">
                  {phase.timeframe}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 text-xs text-muted-foreground">
          💡 Scroll to navigate timeline • Drag to rotate view
        </div>
      </div>

      {/* Current phase details */}
      <div className="absolute top-6 right-6 bg-card/90 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-border/50 max-w-sm">
        {(() => {
          const current = timelinePhases.find(p => p.id === activePhase);
          return current ? (
            <div>
              <Badge variant="outline" className="mb-2">
                Currently Viewing
              </Badge>
              <h4 className="font-bold gradient-text mb-2">{current.title}</h4>
              <p className="text-sm text-muted-foreground mb-3">{current.description}</p>
              <div className="text-xs">
                <div className="font-semibold mb-1">Funding Target:</div>
                <div className="text-primary font-mono">{current.funding}</div>
              </div>
            </div>
          ) : null;
        })()}
      </div>
    </div>
  );
};

export default ScrollBasedTimeline;