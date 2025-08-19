import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring, animate } from 'framer-motion';
import { useRef, ReactNode, useEffect } from 'react';

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

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
      x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
      scale: 0.8,
      rotateX: direction === 'up' ? 25 : direction === 'down' ? -25 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 1.2,
        delay,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={`perspective-1000 ${className}`}
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
  suffix = "" 
}: {
  from?: number;
  to: number;
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(from);
  const rounded = useSpring(count, { duration: duration * 1000 });

  useEffect(() => {
    if (isInView) {
      animate(count, to, { duration });
    }
  }, [isInView, count, to, duration]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
    >
      {prefix}
      <motion.span>{Math.round(rounded.get())}</motion.span>
      {suffix}
    </motion.span>
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
        ease: [0.25, 0.46, 0.45, 0.94]
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

  const variants = {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
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

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: 0.1
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={container}
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
  const item = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <motion.div variants={item} className={className}>
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
  suffix = "" 
}: {
  from?: number;
  to: number;
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      {prefix}
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration }}
      >
        {isInView && (
          <motion.span
            initial={from}
            animate={to}
            transition={{ duration, ease: "easeOut" }}
          >
            {({ value }: { value: number }) => Math.round(value)}
          </motion.span>
        )}
      </motion.span>
      {suffix}
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