import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import portrait from "@/assets/designer-portrait.jpg";

const tools = [
  { name: "Photoshop", val: 96 },
  { name: "Illustrator", val: 93 },
  { name: "InDesign", val: 88 },
  { name: "After Effects", val: 82 },
  { name: "Figma", val: 90 },
  { name: "Lightroom", val: 85 },
];

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  useEffect(() => {
    if (!inView) return;
    const dur = 1500;
    const start = performance.now();
    let raf = 0;
    const step = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return <span ref={ref}>{n}{suffix}</span>;
}

function SkillRing({ label, value, delay }: { label: string; value: number; delay: number }) {
  const R = 40;
  const C = 2 * Math.PI * R;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay, duration: 0.6 }}
      className="flex flex-col items-center gap-2"
    >
      <div className="relative size-24">
        <svg viewBox="0 0 100 100" className="size-full -rotate-90">
          <circle cx="50" cy="50" r={R} fill="none" stroke="color-mix(in oklab, var(--pink-primary) 15%, transparent)" strokeWidth="6" />
          <motion.circle
            cx="50" cy="50" r={R} fill="none"
            stroke="url(#ringGrad)" strokeWidth="6" strokeLinecap="round"
            strokeDasharray={C}
            initial={{ strokeDashoffset: C }}
            whileInView={{ strokeDashoffset: C - (C * value) / 100 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: delay + 0.1, ease: [0.22, 1, 0.36, 1] }}
          />
          <defs>
            <linearGradient id="ringGrad" x1="0" x2="1">
              <stop offset="0%" stopColor="var(--pink-primary)" />
              <stop offset="100%" stopColor="var(--pink-secondary)" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center font-display font-semibold">
          {value}%
        </div>
      </div>
      <span className="text-sm font-medium">{label}</span>
    </motion.div>
  );
}

export function About() {
  const { t, lang } = useI18n();
  const stats = [
    { k: "stats.years", v: 7, s: "+" },
    { k: "stats.projects", v: 180, s: "+" },
    { k: "stats.clients", v: 92, s: "" },
    { k: "stats.coffee", v: 1240, s: "" },
  ];

  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="relative">
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-pink opacity-15 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] glass-strong">
                <img src={portrait} alt="N-Digital designer portrait" loading="lazy" className="w-full aspect-[4/5] object-cover" />
              </div>
            </div>
          </motion.div>
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--pink-primary)] font-semibold">
              {t("about.eyebrow")}
            </p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
              {t("about.title")}
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{t("about.body")}</p>

            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {[
                { t: "about.mission", b: "about.missionBody" },
                { t: "about.vision", b: "about.visionBody" },
                { t: "about.philosophy", b: "about.philosophyBody" },
              ].map((c) => (
                <div key={c.t} className="glass rounded-2xl p-5">
                  <h3 className="font-display text-lg font-semibold">{t(c.t)}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{t(c.b)}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((s) => (
                <div key={s.k} className="glass rounded-2xl p-5 text-center">
                  <div className="font-display text-3xl md:text-4xl font-semibold text-gradient-pink">
                    <Counter to={s.v} suffix={s.s} />
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">{t(s.k)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24">
          <h3 className="text-center font-display text-3xl md:text-4xl font-semibold tracking-tight">
            {t("skills.title")}
          </h3>
          <div className="mt-10 grid grid-cols-3 md:grid-cols-6 gap-6 justify-items-center">
            {tools.map((s, i) => (
              <SkillRing key={s.name} label={lang === "ar" ? s.name : s.name} value={s.val} delay={i * 0.05} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
