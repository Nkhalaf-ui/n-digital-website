import { useState } from "react";
import { Instagram, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function Contact() {
  const { t } = useI18n();
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData as any).toString(),
      });

      setSent(true);
      form.reset();
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--pink-primary)] font-semibold">
              {t("contact.eyebrow")}
            </p>

            <h2 className="mt-3 font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
              {t("contact.title")}
            </h2>

            <div className="mt-10 space-y-3">
              {[
                {
                  icon: Instagram,
                  label: "@n.digital",
                  href: "https://instagram.com",
                },
                {
                  icon: MessageCircle,
                  label: "WhatsApp",
                  href: "https://wa.me/",
                },
                {
                  icon: Mail,
                  label: "hello@n-digital.com",
                  href: "mailto:hello@n-digital.com",
                },
                {
                  icon: MapPin,
                  label: "Available worldwide",
                  href: "#",
                },
              ].map((c) => {
                const I = c.icon;

                return (
                  <a
                    key={c.label}
                    href={c.href}
                    className="group flex items-center gap-4 rounded-2xl glass p-4 hover:shadow-glow transition"
                  >
                    <span className="grid place-items-center size-11 rounded-xl bg-gradient-pink text-primary-foreground">
                      <I className="size-5" />
                    </span>

                    <span className="font-medium">{c.label}</span>
                  </a>
                );
              })}
            </div>
          </div>

          <form
            name="contact"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
            className="glass-strong rounded-3xl p-6 md:p-10 space-y-4"
          >
            <input type="hidden" name="form-name" value="contact" />

            {sent ? (
              <div className="py-16 text-center">
                <div className="mx-auto size-14 rounded-full bg-gradient-pink text-primary-foreground grid place-items-center shadow-glow">
                  <Send className="size-6" />
                </div>

                <p className="mt-5 font-display text-xl">
                  {t("contact.sent")}
                </p>
              </div>
            ) : (
              <>
                <Field
                  label={t("contact.name")}
                  name="name"
                />

                <Field
                  label={t("contact.email")}
                  name="email"
                  type="email"
                />

                <Field
                  label={t("contact.phone")}
                  name="phone"
                  type="tel"
                />

                <Field
                  label={t("contact.message")}
                  name="message"
                  textarea
                />

                <button
                  type="submit"
                  className="w-full rounded-full bg-gradient-pink px-6 py-4 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-[1.01] transition"
                >
                  {t("contact.send")}
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  textarea = false,
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
}) {
  const cls =
    "w-full rounded-2xl bg-white/50 dark:bg-white/5 border border-border/60 px-4 py-3.5 text-sm outline-none focus:border-[color:var(--pink-primary)] focus:ring-2 focus:ring-[color:var(--pink-primary)]/20 transition";

  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </span>

      {textarea ? (
        <textarea
          name={name}
          rows={5}
          className={cls}
          required
        />
      ) : (
        <input
          name={name}
          type={type}
          className={cls}
          required
        />
      )}
    </label>
  );
}