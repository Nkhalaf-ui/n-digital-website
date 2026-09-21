import { createFileRoute } from "@tanstack/react-router";
import { Loader } from "@/components/Loader";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Ticker } from "@/components/Ticker";
import { Portfolio } from "@/components/Portfolio";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { Process } from "@/components/Process";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CursorGlow } from "@/components/CursorGlow";
import { ScrollProgress } from "@/components/ScrollProgress";
import { PetalDivider } from "@/components/Divider";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "N-Digital — Luxury Graphic Design Studio" },
      { name: "description", content: "N-Digital is a bilingual (EN/AR) luxury graphic design studio crafting refined brand identities, packaging, invitations and editorial design." },
      { property: "og:title", content: "N-Digital — Luxury Graphic Design Studio" },
      { property: "og:description", content: "Refined brand identities, packaging & editorial design — bilingual EN/AR." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "N-Digital",
        description: "Luxury bilingual graphic design studio.",
        url: "/",
      }),
    }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Loader />
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <PetalDivider />
        <Portfolio />
        <PetalDivider />
        <Services />
        <About />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
