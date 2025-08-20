import { motion } from 'framer-motion';

interface AnimatedBackgroundProps {
  variant?: 'default' | 'problem' | 'solution' | 'market';
  children?: React.ReactNode;
}

export const AnimatedBackground = ({ variant = 'default', children }: AnimatedBackgroundProps) => {
  const getOrbColors = () => {
    switch (variant) {
      case 'problem':
        return {
          orb1: 'hsl(var(--destructive) / 0.3)',
          orb2: 'hsl(var(--warning) / 0.25)',
          orb3: 'hsl(var(--primary) / 0.2)'
        };
      case 'solution':
        return {
          orb1: 'hsl(var(--primary) / 0.35)',
          orb2: 'hsl(var(--accent) / 0.3)',
          orb3: 'hsl(var(--secondary) / 0.25)'
        };
      case 'market':
        return {
          orb1: 'hsl(var(--accent) / 0.3)',
          orb2: 'hsl(var(--primary) / 0.35)',
          orb3: 'hsl(var(--warning) / 0.2)'
        };
      default:
        return {
          orb1: 'hsl(var(--primary) / 0.3)',
          orb2: 'hsl(var(--accent) / 0.25)',
          orb3: 'hsl(var(--warning) / 0.2)'
        };
    }
  };

  const orbColors = getOrbColors();

  return (
    <>
      {/* Animated Gradient Orbs */}
      <div className="animated-bg">
        <motion.div
          className="floating-orb"
          style={{
            width: '600px',
            height: '600px',
            background: `radial-gradient(circle, ${orbColors.orb1}, transparent)`,
            top: '-200px',
            left: '-200px',
          }}
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -50, 100, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="floating-orb"
          style={{
            width: '400px',
            height: '400px',
            background: `radial-gradient(circle, ${orbColors.orb2}, transparent)`,
            bottom: '-150px',
            right: '-150px',
          }}
          animate={{
            x: [0, -100, 50, 0],
            y: [0, 50, -100, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: -5
          }}
        />
        <motion.div
          className="floating-orb"
          style={{
            width: '300px',
            height: '300px',
            background: `radial-gradient(circle, ${orbColors.orb3}, transparent)`,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            x: [-150, 150, -150],
            y: [-100, 100, -100],
            scale: [1, 1.05, 0.95, 1],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "easeInOut",
            delay: -10
          }}
        />
      </div>

      {/* Geometric Pattern Overlay */}
      <div className="geometric-pattern" />

      {/* Particle Effect Layer */}
      <div className="particle-bg">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Additional Mesh Gradient */}
      <div 
        className="absolute inset-0 opacity-50"
        style={{
          background: 'var(--gradient-mesh)',
          mixBlendMode: 'soft-light',
        }}
      />

      {/* Content */}
      {children}
    </>
  );
};
