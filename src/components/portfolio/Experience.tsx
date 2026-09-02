import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";
import { Reveal } from "./motion";

export function Experience() {
  return <section id="experience" className="section experience-section">
    <div className="section-rule"><span>04</span><span>Professional / Organizational</span></div>
    <Reveal><h2 className="display-heading">Experience<br /><em>& Journey</em></h2></Reveal>
    <div className="experience-list">{portfolio.experience.map(([year, role, company, description], index) => <motion.article key={`${role}-${company}`} className="experience-row" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .5 }} transition={{ duration: .75, delay: index * .05 }}>
      <span className="experience-year">{year}</span><div><h3>{role}</h3><h4>{company}</h4></div><p>{description}</p><span className="experience-index">0{index + 1}</span>
    </motion.article>)}</div>
  </section>;
}