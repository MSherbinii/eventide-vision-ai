import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Html, OrbitControls, Float } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';

interface ChartData {
  year: number;
  value: number;
  label: string;
  color: string;
}

const chartData: ChartData[] = [
  { year: 2024, value: 20.3, label: "$20.3B", color: "#3b82f6" },
  { year: 2025, value: 23.1, label: "$23.1B", color: "#6366f1" },
  { year: 2026, value: 26.8, label: "$26.8B", color: "#8b5cf6" },
  { year: 2027, value: 31.2, label: "$31.2B", color: "#a855f7" },
  { year: 2028, value: 36.5, label: "$36.5B", color: "#c084fc" },
  { year: 2029, value: 42.8, label: "$42.8B", color: "#d8b4fe" },
  { year: 2030, value: 50.2, label: "$50.2B", color: "#06b6d4" },
];

const ChartBar = ({ data, index, isHovered, onHover }: {
  data: ChartData;
  index: number;
  isHovered: boolean;
  onHover: (index: number | null) => void;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const height = (data.value / 60) * 5; // Scale to max height of 5

  useFrame((state) => {
    if (meshRef.current) {
      if (isHovered) {
        meshRef.current.scale.y = height * 1.2;
        meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 4) * 0.1;
      } else {
        meshRef.current.scale.y = height;
        meshRef.current.rotation.y = 0;
      }
    }
  });

  return (
    <Float speed={1 + index * 0.2} rotationIntensity={0.1} floatIntensity={0.1}>
      <group position={[index * 1.5 - 4.5, 0, 0]}>
        {/* Bar */}
        <mesh
          ref={meshRef}
          position={[0, height / 2, 0]}
          onPointerEnter={() => onHover(index)}
          onPointerLeave={() => onHover(null)}
        >
          <boxGeometry args={[0.8, 1, 0.8]} />
          <meshStandardMaterial 
            color={data.color}
            metalness={0.3}
            roughness={0.4}
            emissive={data.color}
            emissiveIntensity={isHovered ? 0.3 : 0.1}
          />
        </mesh>

        {/* Base platform */}
        <mesh position={[0, -0.1, 0]}>
          <cylinderGeometry args={[0.6, 0.6, 0.1]} />
          <meshStandardMaterial color="#374151" metalness={0.8} roughness={0.2} />
        </mesh>

        {/* Year label */}
        <Text
          position={[0, -0.5, 0]}
          fontSize={0.3}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          font="/fonts/Inter-Bold.woff"
        >
          {data.year}
        </Text>

        {/* Floating info card */}
        <Html position={[0, height + 1, 0]} center>
          <motion.div
            className="bg-card/95 backdrop-blur-sm rounded-lg p-3 shadow-xl border border-border/50 min-w-[120px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: isHovered ? 1 : 0.7, 
              scale: isHovered ? 1.1 : 1,
              y: isHovered ? -10 : 0
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center">
              <div className="text-lg font-bold gradient-text">{data.label}</div>
              <div className="text-xs text-muted-foreground">Market Size</div>
              <div className="text-xs text-primary mt-1">{data.year}</div>
            </div>
          </motion.div>
        </Html>

        {/* Particle effects for growth */}
        {isHovered && (
          <group>
            {[...Array(10)].map((_, i) => (
              <Float key={i} speed={2} rotationIntensity={0.5}>
                <mesh position={[
                  (Math.random() - 0.5) * 2,
                  height + Math.random() * 2,
                  (Math.random() - 0.5) * 2
                ]}>
                  <sphereGeometry args={[0.02]} />
                  <meshBasicMaterial color={data.color} />
                </mesh>
              </Float>
            ))}
          </group>
        )}
      </group>
    </Float>
  );
};

const Interactive3DChart = ({ className = "" }: { className?: string }) => {
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);

  return (
    <div className={`w-full h-[500px] relative ${className}`}>
      <Canvas camera={{ position: [0, 3, 8], fov: 60 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, 5, 5]} intensity={0.5} color="#8b5cf6" />
        
        {/* Chart title */}
        <Text
          position={[0, 4, 0]}
          fontSize={0.5}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          font="/fonts/Inter-Bold.woff"
        >
          Machine Vision Market Growth
        </Text>

        {/* Chart bars */}
        {chartData.map((data, index) => (
          <ChartBar
            key={data.year}
            data={data}
            index={index}
            isHovered={hoveredBar === index}
            onHover={setHoveredBar}
          />
        ))}

        {/* Grid lines */}
        {[1, 2, 3, 4, 5].map((line) => (
          <group key={line}>
            <mesh position={[0, line, 0]}>
              <planeGeometry args={[12, 0.01]} />
              <meshBasicMaterial color="#374151" transparent opacity={0.3} />
            </mesh>
          </group>
        ))}

        <OrbitControls 
          enableZoom={true}
          enablePan={false}
          enableRotate={true}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
        />
      </Canvas>

      {/* Chart legend */}
      <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm rounded-lg p-4 shadow-xl border border-border/50">
        <h4 className="font-bold text-sm mb-3">Market Insights</h4>
        <div className="space-y-2 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-gradient-to-r from-blue-500 to-purple-500"></div>
            <span>13.04% CAGR Growth</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-gradient-to-r from-purple-500 to-pink-500"></div>
            <span>Industrial Automation</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-gradient-to-r from-teal-500 to-blue-500"></div>
            <span>AI-Driven Vision</span>
          </div>
        </div>
        <div className="mt-3 text-xs text-muted-foreground">
          💡 Hover bars for details • Drag to rotate
        </div>
      </div>

      {/* Key stats overlay */}
      <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm rounded-lg p-4 shadow-xl border border-border/50">
        <div className="text-center space-y-2">
          <div className="text-2xl font-bold gradient-text">$69.49B</div>
          <div className="text-xs text-muted-foreground">By 2034</div>
          <div className="text-xs text-primary">2.4x Growth</div>
        </div>
      </div>
    </div>
  );
};

export default Interactive3DChart;