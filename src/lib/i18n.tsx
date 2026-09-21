import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "ar";

type Dict = Record<string, string>;

const en: Dict = {
  "nav.home": "Home",
  "nav.portfolio": "Portfolio",
  "nav.services": "Services",
  "nav.about": "About",
  "nav.contact": "Contact",
  "nav.cta": "Let's Talk",

  "hero.name": "N-Digital",
  "hero.role": "Graphic Designer and Developer",
  "hero.tagline": "Where ideas bloom, and brands come to life.",
  "hero.cta1": "View Portfolio",
  "hero.cta2": "Let's Work Together",

  "ticker.items": "Logo Design,Brand Identity,Packaging,Social Media,Print Design,Business Cards,Brochures,Flyers,Menus,Wedding Invitations,Motion Graphics,UI Design,Brand Guidelines,Creative Direction",

  "portfolio.eyebrow": "Selected Work",
  "portfolio.title": "A gallery of quiet luxury",
  "portfolio.subtitle": "Curated projects across identity, packaging and editorial design.",
  "portfolio.view": "View Project",

  "services.eyebrow": "What I do",
  "services.title": "Let your ideas bloom",
  "services.subtitle": "Thoughtful design that gives your ideas a presence worth remembering.",

  "about.eyebrow": "About",
  "about.title": "Design that feels like a bloom",
  "about.body": "I'm a graphic designer crafting refined visual identities for brands that value elegance, softness and quiet confidence. My work is a conversation between structure and softness — geometry meets petal.",
  "about.mission": "Mission",
  "about.missionBody": "To give small ideas the presence of great brands.",
  "about.vision": "Vision",
  "about.visionBody": "A world where every brand feels handcrafted.",
  "about.philosophy": "Philosophy",
  "about.philosophyBody": "Less, softer, more precise.",

  "skills.title": "Craft & Tools",

  "stats.years": "Years of craft",
  "stats.projects": "Projects delivered",
  "stats.clients": "Happy clients",
  "stats.coffee": "Cups of coffee",

  "testimonials.title": "Kind words",

  "process.title": "How we work together",
  "process.1": "Discovery",
  "process.2": "Research",
  "process.3": "Sketch",
  "process.4": "Design",
  "process.5": "Revision",
  "process.6": "Delivery",

  "contact.eyebrow": "Contact",
  "contact.title": "Let's build something beautiful",
  "contact.name": "Your name",
  "contact.email": "Email",
  "contact.phone": "Phone",
  "contact.message": "Tell me about your project",
  "contact.send": "Send message",
  "contact.sent": "Thank you — I'll be in touch soon.",

  "footer.rights": "All rights reserved.",
  "footer.tagline": "Crafted with care in every petal.",
  "footer.top": "Back to top",

  "wa.default": "Hello, I'd like to ask about your design services.",
};

const ar: Dict = {
  "nav.home": "الرئيسية",
  "nav.portfolio": "الأعمال",
  "nav.services": "الخدمات",
  "nav.about": "من أنا",
  "nav.contact": "تواصل",
  "nav.cta": "لنتحدث",

  "hero.name": "N-Digital",
  "hero.role": "مصممة جرافيك ومطورة مواقع",
  "hero.tagline": "حيث تتفتح الأفكار، وتنبض العلامات بالحياة.",
  "hero.cta1": "شاهد الأعمال",
  "hero.cta2": "لنعمل معاً",

  "ticker.items": "تصميم شعارات,هوية بصرية,تغليف,سوشيال ميديا,طباعة,بطاقات أعمال,بروشورات,فلايرز,قوائم مطاعم,دعوات زفاف,موشن جرافيك,واجهات UI,دليل هوية,توجيه إبداعي",

  "portfolio.eyebrow": "أعمال مختارة",
  "portfolio.title": "معرض من الفخامة الهادئة",
  "portfolio.subtitle": "مشاريع منتقاة في الهوية والتغليف والتصميم التحريري.",
  "portfolio.view": "عرض المشروع",

  "services.eyebrow": "ماذا أقدم",
  "services.title": "دع أفكارك تتفتح",
  "services.subtitle": "تصميم بصري مصمم ليمنح فكرتك حضورًا يستحق أن يُرى.",

  "about.eyebrow": "عني",
  "about.title": "تصميم يشبه تفتح الزهر",
  "about.body": "أنا مصممة جرافيك أصنع هويات بصرية راقية لعلامات تُقدّر الأناقة والنعومة والثقة الهادئة. عملي حوار بين البنية والليونة — هندسة تلتقي بالبتلة.",
  "about.mission": "الرسالة",
  "about.missionBody": "منح الأفكار الصغيرة حضور العلامات الكبيرة.",
  "about.vision": "الرؤية",
  "about.visionBody": "عالم تشعر فيه كل علامة أنها مصنوعة يدوياً.",
  "about.philosophy": "الفلسفة",
  "about.philosophyBody": "أقل، أنعم، أدق.",

  "skills.title": "المهارات والأدوات",

  "stats.years": "سنوات من الإبداع",
  "stats.projects": "مشروع منجز",
  "stats.clients": "عميل سعيد",
  "stats.coffee": "فنجان قهوة",

  "testimonials.title": "كلمات لطيفة",

  "process.title": "كيف نعمل معاً",
  "process.1": "الاكتشاف",
  "process.2": "البحث",
  "process.3": "الرسم",
  "process.4": "التصميم",
  "process.5": "المراجعة",
  "process.6": "التسليم",

  "contact.eyebrow": "تواصل",
  "contact.title": "لنصنع شيئاً جميلاً معاً",
  "contact.name": "اسمك",
  "contact.email": "البريد الإلكتروني",
  "contact.phone": "الهاتف",
  "contact.message": "أخبريني عن مشروعك",
  "contact.send": "إرسال",
  "contact.sent": "شكراً — سأتواصل معك قريباً.",

  "footer.rights": "جميع الحقوق محفوظة.",
  "footer.tagline": "مصنوع بعناية في كل بتلة.",
  "footer.top": "للأعلى",

  "wa.default": "مرحباً، أود الاستفسار عن خدمات التصميم.",
};

const dicts: Record<Lang, Dict> = { en, ar };

interface Ctx {
  lang: Lang;
  dir: "ltr" | "rtl";
  t: (k: string) => string;
  setLang: (l: Lang) => void;
  toggle: () => void;
}

const I18nCtx = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = (typeof window !== "undefined" && localStorage.getItem("lang")) as Lang | null;
    if (stored === "en" || stored === "ar") setLangState(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try { localStorage.setItem("lang", l); } catch {}
  };

  const value: Ctx = {
    lang,
    dir: lang === "ar" ? "rtl" : "ltr",
    t: (k) => dicts[lang][k] ?? k,
    setLang,
    toggle: () => setLang(lang === "en" ? "ar" : "en"),
  };
  return <I18nCtx.Provider value={value}>{children}</I18nCtx.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nCtx);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
