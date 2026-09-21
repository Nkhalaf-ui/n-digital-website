import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const items = [
  {
    name: "Layla Al-Sabah",
    role: { en: "Founder, Rosé Blanc", ar: "مؤسسة روزيه بلان" },
    text: {
      en: "N-Digital gave our brand a soul. Every touch feels intentional and premium.",
      ar: "منحت N-Digital علامتنا روحاً. كل تفصيل يبدو مقصوداً وفاخراً.",
    },
    initial: "L",
  },
  {
    name: "Omar Haddad",
    role: { en: "Creative Director", ar: "مدير إبداعي" },
    text: {
      en: "The most refined design partner I've worked with. Delivery was flawless.",
      ar: "أكثر شريك تصميم راقٍ عملت معه. التسليم كان بلا عيوب.",
    },
    initial: "O",
  },
  {
    name: "Nour Fahmy",
    role: { en: "Marketing Lead, Amara", ar: "قائدة التسويق، أمارا" },
    text: {
      en: "Elegant, on time, and beyond the brief. Our launch felt magical.",
      ar: "أنيقة ومنضبطة وأبعد من المطلوب. انطلاقتنا شعرت وكأنها سحرية.",
    },
    initial: "N",
  },
];

export function Testimonials() {
  const { t, lang } = useI18n();
  const [i, setI] = useState(0);
  const it = items[i];
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-4 md:px-8 text-center">
        <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight">
          {t("testimonials.title")}
        </h2>
        <div className="mt-12 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="glass-strong rounded-3xl p-8 md:p-12"
            >
              <div className="flex justify-center gap-1 text-[color:var(--pink-primary)]">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="size-4 fill-current" />
                ))}
              </div>
              <p className="mt-6 text-xl md:text-2xl font-display leading-relaxed">
                “{it.text[lang]}”
              </p>
              <div className="mt-8 flex flex-col items-center gap-3">
                <div className="size-14 rounded-full bg-gradient-pink text-primary-foreground flex items-center justify-center font-display text-xl font-semibold shadow-glow">
                  {it.initial}
                </div>
                <div>
                  <div className="font-semibold">{it.name}</div>
                  <div className="text-sm text-muted-foreground">{it.role[lang]}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              onClick={() => setI((i - 1 + items.length) % items.length)}
              className="glass rounded-full p-3 hover:shadow-glow transition"
              aria-label="Previous"
            >
              <ChevronLeft className="size-4 rtl:rotate-180" />
            </button>
            <div className="flex gap-1.5">
              {items.map((_, k) => (
                <button
                  key={k}
                  onClick={() => setI(k)}
                  aria-label={`Go to ${k + 1}`}
                  className={`h-1.5 rounded-full transition-all ${k === i ? "w-8 bg-gradient-pink" : "w-1.5 bg-muted-foreground/40"}`}
                />
              ))}
            </div>
            <button
              onClick={() => setI((i + 1) % items.length)}
              className="glass rounded-full p-3 hover:shadow-glow transition"
              aria-label="Next"
            >
              <ChevronRight className="size-4 rtl:rotate-180" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
