import w1 from "@/assets/work-1.jpg";
import w2 from "@/assets/work-2.jpg";
import w3 from "@/assets/work-3.jpg";
import w4 from "@/assets/work-4.jpg";
import w5 from "@/assets/work-5.jpg";
import w6 from "@/assets/work-6.jpg";

type Bi = { en: string; ar: string };

export interface Project {
  slug: string;
  title: Bi;
  cat: Bi;
  cover: string;
  gallery: string[];
  span?: string;
  description: Bi;
  process: { title: Bi; body: Bi }[];
  tools: string[];
}

export const projects: Project[] = [
  {
    slug: "rose-blanc",
    title: { en: "Rosé Blanc", ar: "روزيه بلان" },
    cat: { en: "Brand Identity", ar: "هوية بصرية" },
    cover: w1,
    gallery: [w1, w3, w5, w2],
    span: "row-span-2",
    description: {
      en: "A refined brand identity for a boutique florist that blends soft botanical shapes with confident typography. Every touchpoint — from the wordmark to packaging — was crafted to feel like a fresh bloom.",
      ar: "هوية بصرية راقية لمحل زهور بوتيك تمزج بين الأشكال النباتية الناعمة والتايبوغرافي الواثق. كل تفصيلة صُممت لتشعر كأنها زهرة متفتحة.",
    },
    process: [
      { title: { en: "Discovery", ar: "الاكتشاف" }, body: { en: "Workshops to define voice, audience and mood.", ar: "ورش لتحديد الصوت والجمهور والمزاج." } },
      { title: { en: "Sketch", ar: "الرسم" }, body: { en: "Petal-inspired monogram exploration.", ar: "استكشاف مونوغرام مستوحى من البتلات." } },
      { title: { en: "System", ar: "النظام" }, body: { en: "Full identity system with type, color and print.", ar: "نظام هوية كامل بالخطوط والألوان والمطبوعات." } },
    ],
    tools: ["Illustrator", "Photoshop", "InDesign"],
  },
  {
    slug: "amara-weddings",
    title: { en: "Amara Weddings", ar: "أمارا للأفراح" },
    cat: { en: "Invitations", ar: "دعوات" },
    cover: w3,
    gallery: [w3, w1, w6, w4],
    description: {
      en: "A wedding invitation suite balancing timeless calligraphy with modern layout. Bilingual typesetting keeps English and Arabic in perfect harmony.",
      ar: "طقم دعوات زفاف يوازن بين الخط الكلاسيكي والتخطيط الحديث مع تنسيق ثنائي اللغة.",
    },
    process: [
      { title: { en: "Concept", ar: "الفكرة" }, body: { en: "Botanical motifs pulled from the venue.", ar: "زخارف نباتية مستوحاة من المكان." } },
      { title: { en: "Typography", ar: "التايبوغرافي" }, body: { en: "Custom pairing across Latin and Arabic scripts.", ar: "تزاوج مخصص بين الحروف اللاتينية والعربية." } },
      { title: { en: "Print", ar: "الطباعة" }, body: { en: "Blush foil on soft cotton stock.", ar: "طباعة فويل وردي على ورق قطني ناعم." } },
    ],
    tools: ["Illustrator", "InDesign"],
  },
  {
    slug: "luniere-skincare",
    title: { en: "Lunière Skincare", ar: "لونيير للعناية" },
    cat: { en: "Packaging", ar: "تغليف" },
    cover: w2,
    gallery: [w2, w4, w1, w5],
    description: {
      en: "Packaging for a luminous skincare line. Frosted glass, soft embossing and rose-gold accents create a tactile, premium unboxing.",
      ar: "تغليف لخط عناية بشرة مضيء بلمسات زجاج مصنفر وطباعة بارزة ولمسات ذهب وردي.",
    },
    process: [
      { title: { en: "Material", ar: "الخامات" }, body: { en: "Frosted glass and matte lamination.", ar: "زجاج مصنفر وتلميع مطفي." } },
      { title: { en: "Label", ar: "الملصق" }, body: { en: "Minimal typographic hierarchy.", ar: "تسلسل تايبوغرافي بسيط." } },
      { title: { en: "Unboxing", ar: "الفتح" }, body: { en: "Choreographed reveal in every carton.", ar: "تجربة فتح مصممة بعناية." } },
    ],
    tools: ["Illustrator", "Photoshop", "Dimension"],
  },
  {
    slug: "petal-journal",
    title: { en: "Petal Journal", ar: "مجلة بتلة" },
    cat: { en: "Editorial", ar: "تحريري" },
    cover: w5,
    gallery: [w5, w6, w2, w3],
    span: "row-span-2",
    description: {
      en: "An editorial magazine celebrating floristry and slow design. A modular grid keeps long-form articles airy while galleries breathe.",
      ar: "مجلة تحريرية تحتفي بفن الأزهار والتصميم البطيء بشبكة معيارية تمنح المقالات مساحة تنفس.",
    },
    process: [
      { title: { en: "Grid", ar: "الشبكة" }, body: { en: "Twelve-column modular baseline.", ar: "شبكة معيارية من اثني عشر عموداً." } },
      { title: { en: "Type", ar: "الخطوط" }, body: { en: "Serif display with humanist body.", ar: "خط عرض سيريف مع نص إنساني." } },
      { title: { en: "Print", ar: "الطباعة" }, body: { en: "Uncoated stock, soft-touch cover.", ar: "ورق غير مطلي مع غلاف بملمس ناعم." } },
    ],
    tools: ["InDesign", "Photoshop"],
  },
  {
    slug: "bloom-studio",
    title: { en: "Bloom Studio", ar: "بلوم ستوديو" },
    cat: { en: "Logo Design", ar: "شعار" },
    cover: w4,
    gallery: [w4, w1, w5, w6],
    description: {
      en: "A mark for a creative studio, built on a single petal geometry that scales from favicon to signage without losing personality.",
      ar: "شعار لاستوديو إبداعي مبني على هندسة بتلة واحدة تتدرج من الأيقونة إلى اللافتة دون فقدان الشخصية.",
    },
    process: [
      { title: { en: "Geometry", ar: "الهندسة" }, body: { en: "Golden-ratio petal construction.", ar: "بناء بتلة بالنسبة الذهبية." } },
      { title: { en: "Type Lockup", ar: "التركيبة" }, body: { en: "Custom wordmark spacing.", ar: "تباعد حروف مخصص." } },
      { title: { en: "System", ar: "النظام" }, body: { en: "Full guidelines and asset library.", ar: "دليل كامل ومكتبة أصول." } },
    ],
    tools: ["Illustrator", "Figma"],
  },
  {
    slug: "maison-rose",
    title: { en: "Maison Rose", ar: "ميزون روز" },
    cat: { en: "Menu Design", ar: "قوائم" },
    cover: w6,
    gallery: [w6, w2, w4, w3],
    description: {
      en: "A menu program for a Parisian bistro. Warm serif typography sits over a rose-tinted paper for a candlelit reading experience.",
      ar: "برنامج قوائم لبيسترو باريسي بخط سيريف دافئ فوق ورق وردي يمنح تجربة قراءة على ضوء الشموع.",
    },
    process: [
      { title: { en: "Voice", ar: "الصوت" }, body: { en: "Menu copy tuned to the chef's palate.", ar: "صياغة قوائم منسجمة مع ذوق الشيف." } },
      { title: { en: "Layout", ar: "التخطيط" }, body: { en: "Two-column classical structure.", ar: "بنية كلاسيكية بعمودين." } },
      { title: { en: "Finish", ar: "اللمسة" }, body: { en: "Deboss on rose paper stock.", ar: "طباعة غائرة على ورق وردي." } },
    ],
    tools: ["InDesign", "Illustrator"],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
