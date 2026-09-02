import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { portfolio, type PortfolioProject } from "@/data/portfolio";
import { MediaPlaceholder } from "./MediaPlaceholder";
import { Reveal } from "./motion";

function ProjectShowcase({ project, index }: { project: PortfolioProject; index: number }) {
  const number = String(index + 1).padStart(2, "0");
  const href = project.projectUrl ?? project.caseStudyUrl ?? project.githubUrl ?? "#contact";
  return <article className={`project project-${project.layout}`} data-cursor-view>
    <motion.div className="project-image" whileHover={{ rotateX: 1.2, rotateY: -1.2 }} transition={{ duration: .7 }}><MediaPlaceholder label={`PROJECT IMAGE — ${project.title.toUpperCase()} — REPLACE LATER`} image={project.image} /></motion.div>
    <div className="project-info">
      <motion.span className="project-number" whileHover={{ x: 8 }}>{number}</motion.span>
      <div className="project-meta"><span>{project.category}</span><span>{project.year}</span></div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <ul>{project.technologies.map((tech) => <li key={tech}>{tech}</li>)}</ul>
      <Button asChild variant="editorial" size="lg"><a href={href}>View project <ArrowUpRight /></a></Button>
    </div>
  </article>;
}

export function SelectedWork() {
  return <section id="work" className="section work-section">
    <div className="section-rule"><span>03</span><span>Selected projects / 2024—2026</span></div>
    <div className="work-heading"><Reveal><h2 className="display-heading">Selected<br /><em>Work</em></h2></Reveal><p>A selection of projects across<br />development, data, and digital experiences.</p></div>
    <div className="projects">{portfolio.projects.map((project, index) => <ProjectShowcase key={project.title} project={project} index={index} />)}</div>
  </section>;
}