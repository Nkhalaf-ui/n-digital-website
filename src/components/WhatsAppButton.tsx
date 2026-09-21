import { MessageCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function WhatsAppButton() {
  const { t, dir } = useI18n();
  const msg = encodeURIComponent(t("wa.default"));
  return (
    <a
      href={`https://wa.me/?text=${msg}`}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      className={`fixed bottom-6 ${dir === "rtl" ? "left-6" : "right-6"} z-40 grid place-items-center size-14 rounded-full bg-gradient-pink text-primary-foreground shadow-glow animate-pulse-glow hover:scale-110 transition`}
    >
      <MessageCircle className="size-6" />
    </a>
  );
}
