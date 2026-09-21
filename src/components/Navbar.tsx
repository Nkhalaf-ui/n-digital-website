import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Languages, Menu, X } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { BrandMark, BrandWordmark } from "./BrandLogo";

const links = [
  { key: "nav.home", hash: "home" },
  { key: "nav.portfolio", hash: "portfolio" },
  { key: "nav.services", hash: "services" },
  { key: "nav.about", hash: "about" },
  { key: "nav.contact", hash: "contact" },
];

export function Navbar() {
  const { t, toggle: toggleLang, lang } = useI18n();
  
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div
          className={`flex items-center justify-between rounded-full border border-white/20 px-4 md:px-6 backdrop-blur-xl backdrop-saturate-150 transition-all duration-500 ${
            scrolled
              ? "glass-strong py-2.5"
              : "bg-black/15 py-3 shadow-[0_10px_40px_-20px_rgba(46,27,29,0.6)]"
          }`}
        >
          <Link to="/" hash="home" className="flex items-center gap-1.5">
            <BrandMark ring={false} size={scrolled ? 40 : 48} />
            <BrandWordmark className={scrolled ? "text-base" : "text-lg"} />
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.key}
                to="/"
                hash={l.hash}
                className={`relative px-3.5 py-2 text-sm font-medium transition-colors group ${
                  scrolled
                    ? "text-muted-foreground hover:text-foreground"
                    : "text-white/85 hover:text-white"
                }`}
              >
                {t(l.key)}
                <span className="absolute inset-x-3 -bottom-0.5 h-px scale-x-0 bg-gradient-pink transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1.5">
            <button
              onClick={toggleLang}
              aria-label="Switch language"
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-xs font-semibold text-foreground/80 hover:text-foreground hover:bg-white/40 dark:hover:bg-white/5 transition"
            >
              <Languages className="size-4" />
              <span>{lang === "en" ? "AR" : "EN"}</span>
            </button>
            
            <Link
              to="/"
              hash="contact"
              className="hidden md:inline-flex items-center rounded-full bg-gradient-pink px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-[1.03] transition"
            >
              {t("nav.cta")}
            </Link>
            <button
              onClick={() => setOpen((o) => !o)}
              className="md:hidden rounded-full p-2 hover:bg-white/40 dark:hover:bg-white/5"
              aria-label="Menu"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden mt-2 glass rounded-3xl p-4 flex flex-col">
            {links.map((l) => (
              <Link
                key={l.key}
                to="/"
                hash={l.hash}
                onClick={() => setOpen(false)}
                className="px-3 py-3 text-base font-medium border-b border-border/40 last:border-0"
              >
                {t(l.key)}
              </Link>
            ))}
            <Link
              to="/"
              hash="contact"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full bg-gradient-pink px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              {t("nav.cta")}
            </Link>
          </div>
        )}
      </div>
    </motion.header>
  );
}
