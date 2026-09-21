import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BrandMark } from "./BrandLogo";

export function Loader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 2600);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[300] flex flex-col items-center justify-center bg-background"
        >
          <div
            className="absolute inset-0 opacity-60"
            style={{
              background:
                "radial-gradient(circle at 50% 40%, color-mix(in oklab, var(--pink-primary) 20%, transparent), transparent 60%)",
            }}
          />
          <div className="relative">
            <BrandMark size={140} animated />
          </div>
          <div className="relative mt-8 overflow-hidden">
            <motion.h1
              dir="ltr"
              className="text-3xl md:text-4xl font-display font-semibold tracking-tight"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.06, delayChildren: 1.4 } },
              }}
            >
              {"N-Digital".split("").map((c, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { y: 40, opacity: 0 },
                    visible: { y: 0, opacity: 1 },
                  }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block"
                >
                  {c === "N" ? <span className="text-gradient-pink">{c}</span> : c}
                </motion.span>
              ))}
            </motion.h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
