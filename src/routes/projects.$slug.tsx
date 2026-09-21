import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CursorGlow } from "@/components/CursorGlow";
import { ScrollProgress } from "@/components/ScrollProgress";
import { getProject, projects, type Project } from "@/lib/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Project not found — N-Digital" }, { name: "robots", content: "noindex" }] };
    }
    const p = loaderData.project;
    const title = `${p.title.en} — N-Digital`;
    return {
      meta: [
        { title },
        { name: "description", content: p.description.en },
        { property: "og:title", content: title },
        { property: "og:description", content: p.description.en },
        { property: "og:image", content: p.cover },
        { name: "twitter:image", content: p.cover },
      ],
    };
  },
  component: ProjectPage,
  notFoundComponent: NotFound,
});

function NotFound() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen grid place-items-center px-4 pt-32 pb-20 text-center">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--pink-primary)] font-semibold">404</p>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-semibold">Project not found</h1>
          <Link
            to="/"
            hash="portfolio"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-pink px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow"
          >
            <ArrowLeft className="size-4" /> Back to gallery
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

function ProjectPage() {
  const { project } = Route.useLoaderData();
  return (
    <>
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <main>
        <ProjectContent project={project} />
      </main>
      <Footer />
    </>
  );
}

function ProjectContent({ project }: { project: Project }) {
  const { t, lang } = useI18n();
  const idx = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <article className="relative pt-32 md:pt-36 pb-24">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <Link
          to="/"
          hash="portfolio"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition"
        >
          <ArrowLeft className="size-4" />
          {lang === "ar" ? "العودة إلى الأعمال" : "Back to gallery"}
        </Link>

        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 md:mt-12"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--pink-primary)] font-semibold">
            {project.cat[lang]}
          </p>
          <h1
  dir={lang === "ar" ? "rtl" : "ltr"}
  className="mt-4 font-display text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight max-w-4xl"
>
  {project.title[lang]}
</h1>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 md:mt-14 overflow-hidden rounded-3xl glass"
        >
          <img
            src={project.cover}
            alt={project.title[lang]}
            className="w-full h-[52vh] md:h-[70vh] object-cover"
          />
        </motion.div>

        <div className="mt-16 md:mt-24 grid md:grid-cols-3 gap-10 md:gap-16">
          <div className="md:col-span-2">
            <h2 className="font-display text-2xl md:text-3xl font-semibold">
              {lang === "ar" ? "عن المشروع" : "About the project"}
            </h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              {project.description[lang]}
            </p>
          </div>
          <aside className="glass rounded-3xl p-6 h-fit">
            <h3 className="text-xs uppercase tracking-[0.25em] text-[color:var(--pink-primary)] font-semibold">
              {lang === "ar" ? "الأدوات" : "Tools used"}
            </h3>
            <ul className="mt-4 space-y-2">
              {project.tools.map((tool) => (
                <li key={tool} className="text-sm font-medium">
                  {tool}
                </li>
              ))}
            </ul>
            <h3 className="mt-6 text-xs uppercase tracking-[0.25em] text-[color:var(--pink-primary)] font-semibold">
              {lang === "ar" ? "التصنيف" : "Category"}
            </h3>
            <p className="mt-2 text-sm">{project.cat[lang]}</p>
          </aside>
        </div>

        <section className="mt-20 md:mt-28">
          <h2 className="font-display text-2xl md:text-3xl font-semibold">
            {lang === "ar" ? "عملية التصميم" : "Design process"}
          </h2>
          <div className="mt-8 grid md:grid-cols-3 gap-5">
            {project.process.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="glass rounded-3xl p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="grid place-items-center size-8 rounded-full bg-gradient-pink text-primary-foreground text-xs font-semibold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-lg font-semibold">{step.title[lang]}</h3>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {step.body[lang]}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mt-20 md:mt-28">
          <h2 className="font-display text-2xl md:text-3xl font-semibold">
            {lang === "ar" ? "صور إضافية" : "Project gallery"}
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            {project.gallery.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.05, duration: 0.7 }}
                className={`overflow-hidden rounded-3xl glass ${i === 0 ? "md:col-span-2" : ""}`}
              >
                <img
                  src={src}
                  alt={`${project.title[lang]} — ${i + 1}`}
                  loading="lazy"
                  className="w-full h-[38vh] md:h-[52vh] object-cover"
                />
              </motion.div>
            ))}
          </div>
        </section>

        <div className="mt-20 md:mt-28 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-t border-border/50 pt-10">
          <Link
            to="/"
            hash="portfolio"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition"
          >
            <ArrowLeft className="size-4" />
            {lang === "ar" ? "كل المشاريع" : "All projects"}
          </Link>
          <Link
            to="/projects/$slug"
            params={{ slug: next.slug }}
            className="group inline-flex items-center gap-3 rounded-full bg-gradient-pink px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-[1.02] transition"
          >
            <span className="opacity-80">{lang === "ar" ? "التالي" : "Next project"}</span>
            <span className="font-display">{next.title[lang]}</span>
            <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
