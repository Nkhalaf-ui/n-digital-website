import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { Compass, Search, Pencil, Layers, Repeat, PackageCheck } from "lucide-react";

const steps = [
  { icon: Compass, k: "process.1" },
  { icon: Search, k: "process.2" },
  { icon: Pencil, k: "process.3" },
  { icon: Layers, k: "process.4" },
  { icon: Repeat, k: "process.5" },
  { icon: PackageCheck, k: "process.6" },
];

export function Process() {
  const { t } = useI18n();
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-transparent via-[color:var(--rose)]/25 to-transparent">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <h2 className="text-center font-display text-4xl md:text-5xl font-semibold tracking-tight">
          {t("process.title")}
        </h2>
        <div className="mt-16 relative">
          <div className="absolute inset-x-6 top-8 h-px bg-gradient-to-r from-transparent via-[color:var(--pink-primary)]/50 to-transparent hidden md:block" />
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.08 }}
                  className="text-center flex flex-col items-center"
                >
                  <div className="glass-strong size-16 rounded-full flex items-center justify-center shadow-glow">
                    <Icon className="size-6 text-[color:var(--pink-primary)]" />
                  </div>
                  <div className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">0{i + 1}</div>
                  <div className="mt-1 font-semibold">{t(s.k)}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
