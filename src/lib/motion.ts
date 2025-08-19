import { Variants } from "framer-motion";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: .26, ease: [0.22,1,0.36,1] } }
};

export const stagger = (staggerChildren = .06): Variants => ({
  visible: { transition: { staggerChildren } }
});

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: .26, ease: [0.22,1,0.36,1] } }
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: .26, ease: [0.22,1,0.36,1] } }
};