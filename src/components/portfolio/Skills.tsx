import { portfolio } from "@/data/portfolio";
import { Marquee } from "./Marquee";
import { Reveal } from "./motion";

export function Skills() {
  return <section id="skills" className="section skills-section">
    <div className="section-rule"><span>05</span><span>Capabilities / Toolkit</span></div>
    <Reveal><h2 className="display-heading">Things I<br /><em>work with.</em></h2></Reveal>
    <div className="skills-grid">{Object.entries(portfolio.skills).map(([category, skills], index) => <div className={`skill-group skill-group-${index + 1}`} key={category}><h3>{category}</h3><div>{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div>)}</div>
    <Marquee small items={["Figma", "Laravel", "Power BI", "PostgreSQL", "JavaScript", "UI/UX", "Python", "Data"]} />
  </section>;
}