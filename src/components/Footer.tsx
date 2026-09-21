import { ArrowUp, Instagram, Mail, MessageCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { BrandMark, BrandWordmark } from "./BrandLogo";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="relative border-t border-border/50 pt-20 pb-10 bg-gradient-to-b from-transparent to-[color:var(--rose)]/30">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3">
              <BrandMark size={44} />
              <BrandWordmark className="text-2xl" />
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">{t("footer.tagline")}</p>
          </div>
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-muted-foreground">Menu</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {["nav.home", "nav.portfolio", "nav.services", "nav.about", "nav.contact"].map((k) => (
                <li key={k}>
                  <a href={`#${k.split(".")[1]}`} className="hover:text-[color:var(--pink-primary)] transition">
                    {t(k)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-muted-foreground">Social</h4>
            <div className="mt-4 flex gap-3">
  <a
    href="https://instagram.com/ndigital.design.dev"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    className="glass rounded-full p-3 hover:shadow-glow transition"
  >
    <Instagram className="size-4" />
  </a>

  <a
    href="https://wa.me/+963995215170"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="WhatsApp"
    className="glass rounded-full p-3 hover:shadow-glow transition"
  >
    <MessageCircle className="size-4" />
  </a>

  <a
    href="mailto:nataliekhalaf212@gmail.com"
    aria-label="Email"
    className="glass rounded-full p-3 hover:shadow-glow transition"
  >
    <Mail className="size-4" />
  </a>
</div>
          </div>
        </div>
        <div className="mt-14 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-border/50 pt-6">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} N-Digital. {t("footer.rights")}</p>
          <a href="#home" className="inline-flex items-center gap-2 text-xs font-semibold rounded-full glass px-4 py-2 hover:shadow-glow transition">
            {t("footer.top")} <ArrowUp className="size-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
