import { Sparkle } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function Ticker() {
  const { t } = useI18n();
  const items = t("ticker.items").split(",");
  const list = [...items, ...items];
  return (
    <section aria-label="services ticker" className="relative border-y border-border/50 py-6 overflow-hidden bg-gradient-to-r from-[color:var(--rose)]/30 via-background to-[color:var(--lavender)]/30">
      <div className="ticker-track flex gap-6 whitespace-nowrap w-max">
        {list.map((it, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 rounded-full glass px-5 py-2.5 text-sm font-medium"
          >
            <Sparkle className="size-3.5 text-[color:var(--pink-primary)]" />
            {it.trim()}
          </span>
        ))}
      </div>
    </section>
  );
}
