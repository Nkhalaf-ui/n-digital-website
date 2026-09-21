import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { projects } from "@/lib/projects";

export function Portfolio() {
  const { t, lang } = useI18n();
  return (
    <section id="portfolio" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--pink-primary)] font-semibold">
              {t("portfolio.eyebrow")}
            </p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight max-w-2xl">
              {t("portfolio.title")}
            </h2>
          </div>
          <p className="text-muted-foreground md:max-w-sm">{t("portfolio.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[220px] md:auto-rows-[260px] gap-5">
          {projects.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.05, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className={p.span}
            >
              <Link
                to="/projects/$slug"
                params={{ slug: p.slug }}
                className="group relative block h-full w-full overflow-hidden rounded-3xl glass"
              >
                <img
                  src={p.cover}
                  alt={p.title[lang]}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-70 group-hover:opacity-90 transition" />
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 text-white">
                  <p className="text-[11px] uppercase tracking-[0.25em] opacity-80">{p.cat[lang]}</p>
                  <div className="mt-1.5 flex items-end justify-between gap-3">
                    <h3 className="font-display text-xl md:text-2xl font-semibold">{p.title[lang]}</h3>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold rounded-full bg-white/20 backdrop-blur-md px-3 py-1.5 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition">
                      {t("portfolio.view")}
                      <ArrowUpRight className="size-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
