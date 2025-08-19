import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef, ReactNode, useEffect, useState } from 'react';

interface CinematicSectionProps {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
}

export const CinematicSection = ({ 
  children, 
  className = "", 
  direction = 'up',
  delay = 0 
}: CinematicSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
        x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
        scale: 0.8,
        rotateX: direction === 'up' ? 25 : direction === 'down' ? -25 : 0,
      }}
      animate={isInView ? {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        rotateX: 0,
      } : {}}
      transition={{
        duration: 1.2,
        delay,
        ease: "easeOut"
      }}
      className={`perspective-1000 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export const ParallaxContainer = ({ 
  children, 
  offset = 50,
  className = "" 
}: { 
  children: ReactNode; 
  offset?: number;
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, offset]);

  return (
    <motion.div style={{ y }} className={className}>
      {children}
    </motion.div>
  );
};

export const ZoomReveal = ({ 
  children, 
  className = "",
  scale = 1.5 
}: { 
  children: ReactNode; 
  className?: string;
  scale?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ scale, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale, opacity: 0 }}
      transition={{ 
        duration: 1.5, 
        ease: "easeOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const SlideReveal = ({ 
  children, 
  className = "",
  direction = 'left' 
}: { 
  children: ReactNode; 
  className?: string;
  direction?: 'left' | 'right' | 'up' | 'down';
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
        y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
      }}
      animate={isInView ? {
        opacity: 1,
        x: 0,
        y: 0,
      } : {}}
      transition={{
        duration: 0.8,
        ease: "easeOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerContainer = ({ 
  children, 
  className = "",
  stagger = 0.1 
}: { 
  children: ReactNode; 
  className?: string;
  stagger?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{
        staggerChildren: stagger,
        delayChildren: 0.1
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({ 
  children, 
  className = "" 
}: { 
  children: ReactNode; 
  className?: string;
}) => {
  return (
    <motion.div 
      initial={{ 
        opacity: 0, 
        y: 50,
        scale: 0.8
      }}
      animate={{ 
        opacity: 1, 
        y: 0,
        scale: 1
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const CountingNumber = ({ 
  from = 0, 
  to, 
  duration = 2,
  className = "",
  prefix = "",
  suffix = "",
  decimals = 0
}: {
  from?: number;
  to: number;
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(from);

  useEffect(() => {
    if (isInView) {
      const startTime = Date.now();
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / (duration * 1000), 1);
        const currentValue = from + (to - from) * progress;
        
        if (decimals > 0) {
          setDisplayValue(parseFloat(currentValue.toFixed(decimals)));
        } else {
          setDisplayValue(Math.round(currentValue));
        }
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      animate();
    }
  }, [isInView, from, to, duration, decimals]);

  const formatValue = (value: number) => {
    if (decimals > 0) {
      return value.toFixed(decimals);
    }
    return Math.round(value).toString();
  };

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
    >
      {prefix}{formatValue(displayValue)}{suffix}
    </motion.span>
  );
};

export const GlitchText = ({ 
  children, 
  className = "" 
}: { 
  children: ReactNode; 
  className?: string;
}) => {
  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{
        textShadow: [
          "0 0 0 transparent",
          "2px 0 0 #ff0000, -2px 0 0 #00ffff",
          "0 0 0 transparent"
        ]
      }}
      transition={{ duration: 0.3, repeat: 3 }}
    >
      {children}
    </motion.div>
  );
};

export const TypewriterText = ({ 
  text, 
  className = "",
  speed = 50 
}: { 
  text: string; 
  className?: string;
  speed?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div ref={ref} className={className}>
      {isInView && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1 }}
        >
          {text.split('').map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ 
                delay: index * (speed / 1000),
                duration: 0.1 
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.span>
      )}
    </motion.div>
  );
};