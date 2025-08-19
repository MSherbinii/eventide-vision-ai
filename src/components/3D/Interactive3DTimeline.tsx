import { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text, Html, OrbitControls, Sparkles, Trail } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';

interface TimelineNode {
  id: string;
  title: string;
  description: string;
  date: string;
  position: [number, number, number];
  color: string;
  completed: boolean;
}

const timelineData: TimelineNode[] = [
  {
    id: '1',
    title: 'GMBH Formation',
    description: 'Company incorporation in Germany',
    date: 'Month 0-3',
    position: [-6, 2, 0],
    color: '#3b82f6',
    completed: true
  },
  {
    id: '2', 
    title: 'MVP Development',
    description: 'Core technology development',
    date: 'Month 3-6',
    position: [-3, 1, 1],
    color: '#8b5cf6',
    completed: true
  },
  {
    id: '3',
    title: 'First Pilot',
    description: 'Industrial deployment testing',
    date: 'Month 6-9',
    position: [0, 0, 0],
    color: '#06b6d4',
    completed: false
  },
  {
    id: '4',
    title: 'Seed Funding',
    description: '$1.5M funding round',
    date: 'Month 12-18',
    position: [3, -1, -1],
    color: '#10b981',
    completed: false
  },
  {
    id: '5',
    title: 'Scale & Expand',
    description: 'International market entry',  
    date: 'Month 18-24',
    position: [6, -2, 0],
    color: '#f59e0b',
    completed: false
  }
];

const TimelineNode3D = ({ node, isHovered, onHover }: { 
  node: TimelineNode; 
  isHovered: boolean;
  onHover: (id: string | null) => void;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      if (isHovered) {
        meshRef.current.scale.setScalar(1.3);
        meshRef.current.rotation.y = state.clock.elapsedTime * 2;
      } else {
        meshRef.current.scale.setScalar(1);
        meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      }
    }

    if (ringRef.current) {
      ringRef.current.rotation.z += 0.01;
      if (node.completed) {
        ringRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 3) * 0.1);
      }
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.3}>
      <group position={node.position}>
        {/* Main node sphere */}
        <mesh
          ref={meshRef}
          onPointerEnter={() => onHover(node.id)}
          onPointerLeave={() => onHover(null)}
        >
          <sphereGeometry args={[0.3]} />
          <meshStandardMaterial 
            color={node.color}
            metalness={0.8}
            roughness={0.2}
            emissive={node.color}
            emissiveIntensity={node.completed ? 0.3 : 0.1}
          />
        </mesh>

        {/* Outer ring for completed milestones */}
        {node.completed && (
          <mesh ref={ringRef}>
            <torusGeometry args={[0.5, 0.02, 8, 32]} />
            <meshBasicMaterial color={node.color} transparent opacity={0.6} />
          </mesh>
        )}

        {/* Connection line to next node */}
        {node.id !== '5' && (
          <Trail
            width={0.1}
            color={node.color}
            length={10}
            decay={1}
            interval={1}
            local={false}
            stride={0}
            target={undefined}
          >
            <mesh position={[1.5, -0.5, 0]}>
              <cylinderGeometry args={[0.02, 0.02, 3]} />
              <meshBasicMaterial color={node.color} transparent opacity={0.4} />
            </mesh>
          </Trail>
        )}

        {/* Floating text label */}
        <Html position={[0, 0.8, 0]} center>
          <motion.div
            className="bg-card/90 backdrop-blur-sm rounded-lg p-3 shadow-xl border border-border/50 min-w-[200px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: isHovered ? 1 : 0.8, 
              scale: isHovered ? 1.1 : 1 
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-sm font-bold text-foreground">{node.title}</div>
            <div className="text-xs text-muted-foreground mt-1">{node.description}</div>
            <div className="text-xs text-primary mt-2 font-mono">{node.date}</div>
            {node.completed && (
              <div className="text-xs text-green-500 mt-1 flex items-center gap-1">
                ✓ Completed
              </div>
            )}
          </motion.div>
        </Html>

        {/* Progress particles */}
        {node.completed && (
          <Sparkles 
            count={20} 
            scale={2} 
            size={2} 
            speed={0.3} 
            color={node.color} 
          />
        )}
      </group>
    </Float>
  );
};

const Interactive3DTimeline = ({ className = "" }: { className?: string }) => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  return (
    <div className={`w-full h-[600px] ${className}`}>
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, 0, 5]} intensity={0.5} color="#8b5cf6" />
        
        {timelineData.map((node) => (
          <TimelineNode3D 
            key={node.id}
            node={node}
            isHovered={hoveredNode === node.id}
            onHover={setHoveredNode}
          />
        ))}

        {/* Background particles */}
        <Sparkles 
          count={100} 
          scale={15} 
          size={1} 
          speed={0.2} 
          color="#374151" 
          opacity={0.3}
        />

        <OrbitControls 
          enableZoom={true} 
          enablePan={true}
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={0.5}
        />
      </Canvas>
      
      {/* Timeline legend */}
      <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm rounded-lg p-4 shadow-xl border border-border/50">
        <h4 className="font-bold text-sm mb-2">Timeline Legend</h4>
        <div className="space-y-2 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span>Completed</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span>In Progress</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gray-400"></div>
            <span>Planned</span>
          </div>
        </div>
        <div className="mt-3 text-xs text-muted-foreground">
          💡 Click and drag to rotate • Scroll to zoom
        </div>
      </div>
    </div>
  );
};

export default Interactive3DTimeline;