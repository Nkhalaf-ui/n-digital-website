import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import heroImage from "@/assets/hero-pink-lily-field.jpg";

export function Hero() {
  const { t } = useI18n();

  return (
    <section
      id="home"
      className="relative isolate min-h-[100svh] w-full overflow-hidden"
    >
      {/* Layer 1 — pink lily field, full bleed */}
      <img
        src={heroImage}
        alt="Field of pink lilies glowing at sunrise"
        width={1920}
        height={1088}
        className="absolute inset-0 -z-30 size-full scale-105 object-cover object-center"
        fetchPriority="high"
      />

      {/* Layer 2 — readability veil, brand-tinted */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20"
        style={{
          background:
            "linear-gradient(to bottom, color-mix(in oklab, var(--coffee, #2E1B1D) 50%, transparent) 0%, color-mix(in oklab, var(--coffee, #2E1B1D) 28%, transparent) 45%, color-mix(in oklab, var(--coffee, #2E1B1D) 62%, transparent) 100%)",
        }}
      />

      {/* Layer 2b — vignette for depth */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20"
        style={{
          background:
            "radial-gradient(ellipse at 50% 45%, transparent 35%, color-mix(in oklab, var(--coffee, #2E1B1D) 45%, transparent) 100%)",
        }}
      />

      {/* Layer 3 — soft petal glow behind the copy */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -z-10 h-[62vh] w-[62vw] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--petal, #F7D0DC) 26%, transparent) 0%, transparent 70%)",
        }}
      />


      {/* Layer 4 — bottom fade into the page background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40"
        style={{
          background:
            "linear-gradient(to bottom, transparent, var(--background))",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-5xl flex-col items-center justify-center px-6 py-32 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-white backdrop-blur-md"
        >
          <Sparkles className="size-3.5" />
          {t("hero.role")}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-7xl lg:text-8xl"
          style={{ textShadow: "0 6px 40px rgba(46,27,29,0.55)" }}
        >
          <span style={{ color: "var(--petal, #F7D0DC)" }}>N</span>
          <span>-Digital</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.32 }}
          className="mt-6 max-w-2xl text-lg text-white/90 md:text-xl"
          style={{ textShadow: "0 2px 20px rgba(46,27,29,0.5)" }}
        >
          {t("hero.tagline")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          <Link
            to="/"
            hash="portfolio"
            className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold shadow-glow transition hover:scale-[1.03]"
            style={{
              background: "var(--petal, #F7D0DC)",
              color: "var(--coffee, #2E1B1D)",
            }}
          >
            {t("hero.cta1")}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5" />
          </Link>
          <Link
            to="/"
            hash="contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition hover:scale-[1.03] hover:bg-white/20"
          >
            {t("hero.cta2")}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
