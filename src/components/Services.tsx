import { motion } from "framer-motion";
import {
  PenTool,
  Palette,
  Instagram,
  BookOpen,
  FileText,
  Package,
  CreditCard,
  Heart,
  DoorOpen,
  Smartphone,
  Megaphone,
  Presentation,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";

const services = [
  {
    icon: PenTool,
    en: "Logo Design",
    ar: "تصميم شعارات",
    descEn:
      "A distinctive logo designed to capture your brand’s essence with clarity and elegance.",
    descAr: "شعار مميز يجسّد روح علامتك بأسلوب واضح وأنيق.",
  },
  {
    icon: Palette,
    en: "Brand Identity",
    ar: "هوية بصرية",
    descEn:
      "A cohesive visual identity that gives your brand a memorable and refined presence.",
    descAr: "هوية بصرية متكاملة تمنح علامتك حضورًا متناسقًا وراقيًا.",
  },
  {
    icon: Instagram,
    en: "Social Media",
    ar: "سوشيال ميديا",
    descEn:
      "Elegant social media designs that communicate your message and strengthen your presence.",
    descAr: "تصاميم أنيقة للسوشيال ميديا توصل رسالتك وتعزز حضور علامتك.",
  },
  {
    icon: BookOpen,
    en: "Brochures",
    ar: "بروشورات",
    descEn:
      "Well-structured brochures that present your information in a clear and engaging way.",
    descAr: "بروشورات مرتبة تعرض معلوماتك بأسلوب واضح وجذاب.",
  },
  {
    icon: FileText,
    en: "Flyers",
    ar: "فلايرز",
    descEn:
      "Eye-catching flyers designed to highlight your message and leave a lasting impression.",
    descAr: "فلايرز لافتة للنظر تبرز رسالتك وتترك انطباعًا مميزًا.",
  },
  {
    icon: Package,
    en: "Packaging",
    ar: "تغليف",
    descEn:
      "Thoughtful packaging designs that make your product feel distinctive from the first glance.",
    descAr: "تصاميم تغليف مدروسة تمنح منتجك تميزًا من النظرة الأولى.",
  },
  {
    icon: CreditCard,
    en: "Business Cards",
    ar: "بطاقات أعمال",
    descEn:
      "Professional business cards that reflect your identity with a polished and memorable look.",
    descAr: "بطاقات أعمال احترافية تعكس هويتك بمظهر أنيق ولافت.",
  },
  {
    icon: Heart,
    en: "Wedding Invitations",
    ar: "دعوات زفاف",
    descEn:
      "Elegant invitations crafted to make your special occasion feel personal and unforgettable.",
    descAr: "دعوات أنيقة تضيف لمسة شخصية ومميزة إلى مناسبتك الخاصة.",
  },
  {
    icon: DoorOpen,
    en: "Opening Invitations",
    ar: "دعوات افتتاح",
    descEn:
      "Refined opening invitations designed to create a strong first impression for your event.",
    descAr: "دعوات افتتاح راقية تمنح مناسبتك انطباعًا أوليًا قويًا.",
  },
  {
    icon: Smartphone,
    en: "Digital Invitations",
    ar: "دعوات رقمية",
    descEn:
      "Modern digital invitations designed for a seamless and elegant sharing experience.",
    descAr: "دعوات رقمية عصرية مصممة للمشاركة بسهولة وأناقة.",
  },
  {
    icon: Megaphone,
    en: "Marketing Materials",
    ar: "مواد تسويقية",
    descEn:
      "Strategic visual materials that help your campaigns communicate clearly and effectively.",
    descAr: "مواد بصرية تسويقية تساعد حملاتك على إيصال رسالتها بوضوح وفعالية.",
  },
  {
    icon: Presentation,
    en: "Presentation Design",
    ar: "تصميم عروض",
    descEn:
      "Clean and engaging presentations that turn information into a compelling visual story.",
    descAr: "عروض تقديمية مرتبة وجذابة تحوّل المعلومات إلى قصة بصرية مؤثرة.",
  },
];

export function Services() {
  const { t, lang } = useI18n();

  return (
    <section
      id="services"
      className="relative py-24 md:py-32 bg-gradient-to-b from-transparent via-[color:var(--lavender)]/30 to-transparent"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--pink-primary)] font-semibold">
            {t("services.eyebrow")}
          </p>

          <h2 className="mt-3 font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
            {t("services.title")}
          </h2>

          <p className="mt-5 text-muted-foreground">
            {t("services.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  delay: (i % 3) * 0.05,
                  duration: 0.6,
                }}
                className="group relative overflow-hidden rounded-3xl glass p-7 hover:-translate-y-1.5 hover:shadow-glow transition-all duration-500"
              >
                <div className="absolute -top-16 -right-16 size-40 rounded-full bg-gradient-pink opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-700" />

                <div className="relative">
                  <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-gradient-pink text-primary-foreground shadow-glow">
                    <Icon className="size-5" />
                  </div>

                  <h3 className="mt-5 font-display text-xl font-semibold">
                    {lang === "ar" ? s.ar : s.en}
                  </h3>

                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {lang === "ar" ? s.descAr : s.descEn}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}