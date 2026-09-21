import { motion, useScroll } from "framer-motion";
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed left-0 right-0 top-0 z-[60] h-[3px] origin-left bg-gradient-pink"
    />
  );
}
