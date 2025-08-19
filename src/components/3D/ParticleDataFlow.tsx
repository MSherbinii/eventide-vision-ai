import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Trail } from '@react-three/drei';
import * as THREE from 'three';

const DataFlowParticles = ({ count = 1000 }: { count?: number }) => {
  const pointsRef = useRef<THREE.Points>(null);
  const particlesRef = useRef<Float32Array>();

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      // Start from left side of screen
      positions[i3] = -8 + Math.random() * 2;
      positions[i3 + 1] = (Math.random() - 0.5) * 10;
      positions[i3 + 2] = (Math.random() - 0.5) * 6;
      
      // Flow rightward with slight randomness
      velocities[i3] = 0.02 + Math.random() * 0.03;
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.01;
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.01;
      
      // Event-based vision colors
      const colorType = Math.random();
      if (colorType < 0.4) {
        // Blue primary
        colors[i3] = 0.2;
        colors[i3 + 1] = 0.4;
        colors[i3 + 2] = 1;
      } else if (colorType < 0.7) {
        // Purple secondary  
        colors[i3] = 0.6;
        colors[i3 + 1] = 0.2;
        colors[i3 + 2] = 1;
      } else {
        // Teal accent
        colors[i3] = 0;
        colors[i3 + 1] = 0.8;
        colors[i3 + 2] = 0.8;
      }
    }
    
    particlesRef.current = positions;
    return { positions, velocities, colors };
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current || !particlesRef.current) return;
    
    const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      // Update positions
      positions[i3] += particles.velocities[i3];
      positions[i3 + 1] += particles.velocities[i3 + 1];
      positions[i3 + 2] += particles.velocities[i3 + 2];
      
      // Reset particles that go off screen
      if (positions[i3] > 8) {
        positions[i3] = -8;
        positions[i3 + 1] = (Math.random() - 0.5) * 10;
        positions[i3 + 2] = (Math.random() - 0.5) * 6;
      }
      
      // Add wave motion
      positions[i3 + 1] += Math.sin(state.clock.elapsedTime * 2 + positions[i3] * 0.5) * 0.001;
    }
    
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        transparent
        opacity={0.8}
        sizeAttenuation={true}
        vertexColors={true}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

const ParticleDataFlow = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`w-full h-64 relative ${className}`}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <DataFlowParticles count={800} />
      </Canvas>
      
      {/* Overlay text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center space-y-2 bg-background/10 backdrop-blur-sm rounded-lg p-6">
          <div className="text-2xl font-bold gradient-text">
            Event-Based Data Processing
          </div>
          <div className="text-sm text-muted-foreground">
            1000x less data • Real-time processing • Microsecond latency
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParticleDataFlow;