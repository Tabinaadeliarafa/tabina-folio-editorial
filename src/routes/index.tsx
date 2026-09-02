import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/portfolio/About";
import { Contact, Footer } from "@/components/portfolio/Contact";
import { CustomCursor } from "@/components/portfolio/CustomCursor";
import { Experience } from "@/components/portfolio/Experience";
import { Hero } from "@/components/portfolio/Hero";
import { Leadership } from "@/components/portfolio/Leadership";
import { Marquee } from "@/components/portfolio/Marquee";
import { Navbar } from "@/components/portfolio/Navbar";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { SelectedWork } from "@/components/portfolio/SelectedWork";
import { Skills } from "@/components/portfolio/Skills";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({ meta: [
    { title: "Tabina Adelia Rafa — Design, Technology & Data" },
    { name: "description", content: "Portfolio of Tabina Adelia Rafa, an Informatics Engineering student creating across UI/UX, development, and data analytics." },
    { property: "og:title", content: "Tabina Adelia Rafa — Portfolio" },
    { property: "og:description", content: "Design, technology, development, and data—an interdisciplinary portfolio by Tabina Adelia Rafa." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
});

function Index() {
  return (
    <main>
      <Navbar /><ScrollProgress /><CustomCursor /><Hero />
      <div className="marquee-band"><Marquee items={["UI/UX Design", "Backend Development", "Data Analytics", "Web Development", "Creative Technology"]} /><Marquee reverse small items={["Design systems", "APIs", "Visualization", "Digital products", "Data stories"]} /></div>
      <About /><SelectedWork /><Experience /><Skills /><Leadership /><Contact /><Footer />
    </main>
  );
}
