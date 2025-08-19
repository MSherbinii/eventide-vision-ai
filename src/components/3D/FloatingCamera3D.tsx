import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, Environment, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

const Camera3D = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);
  
  // Generate particle positions for data flow effect
  const particlePositions = useMemo(() => {
    const positions = new Float32Array(200 * 3);
    for (let i = 0; i < 200 * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 8;
      positions[i + 1] = (Math.random() - 0.5) * 8;
      positions[i + 2] = (Math.random() - 0.5) * 8;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
    }
    
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.002;
    }
  });

  return (
    <>
      {/* Main Camera Body */}
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
        <mesh ref={meshRef} position={[0, 0, 0]}>
          {/* Camera body */}
          <boxGeometry args={[2, 1.2, 0.8]} />
          <meshStandardMaterial 
            color="#1e40af" 
            metalness={0.8} 
            roughness={0.2}
            emissive="#0f172a"
            emissiveIntensity={0.1}
          />
          
          {/* Camera lens */}
          <mesh position={[0, 0, 0.5]}>
            <cylinderGeometry args={[0.4, 0.35, 0.3, 32]} />
            <meshStandardMaterial 
              color="#000000" 
              metalness={0.9} 
              roughness={0.1}
              emissive="#1e40af"
              emissiveIntensity={0.3}
            />
          </mesh>
          
          {/* LED indicator */}
          <mesh position={[-0.7, 0.3, 0.3]}>
            <sphereGeometry args={[0.08]} />
            <meshBasicMaterial color="#00ff00" />
          </mesh>
        </mesh>
      </Float>

      {/* Data stream particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={200}
            array={particlePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial 
          size={0.05} 
          color="#60a5fa"
          transparent
          opacity={0.6}
          sizeAttenuation={true}
        />
      </points>

      {/* Sparkles for magic effect */}
      <Sparkles 
        count={50} 
        scale={5} 
        size={3} 
        speed={0.5} 
        color="#a855f7" 
      />
    </>
  );
};

const FloatingCamera3D = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`w-full h-96 ${className}`}>
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 6]} />
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color="#a855f7" />
        
        <Camera3D />
        
        {/* <Environment preset="city" /> */}
      </Canvas>
    </div>
  );
};

export default FloatingCamera3D;