import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { useRef } from "react";
import { portfolio } from "@/data/portfolio";
import { MediaPlaceholder } from "./MediaPlaceholder";
import { Reveal } from "./motion";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  return <section ref={ref} id="top" className="hero">
    <motion.div className="hero-word" style={{ y: titleY }} initial={{ clipPath: "inset(100% 0 0 0)" }} animate={{ clipPath: "inset(0% 0 0 0)" }} transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}>PORTFOLIO</motion.div>
    <motion.div className="hero-portrait" style={{ y: portraitY }} initial={{ opacity: 0, scale: 1.06 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, delay: .25 }}><MediaPlaceholder label="PORTRAIT — REPLACE LATER" image={portfolio.heroPortrait} /></motion.div>
    <div className="hero-kicker"><Reveal delay={.25}>Informatics Engineering<br />Student</Reveal></div>
    <div className="hero-disciplines"><Reveal delay={.35}>UI/UX<br />Development<br />Data</Reveal></div>
    <div className="hero-statement"><Reveal delay={.45}><p>{portfolio.statement}</p></Reveal></div>
    <div className="hero-location"><Reveal delay={.55}>{portfolio.location}<br />Open to opportunities</Reveal></div>
    <a className="hero-explore" href="#work">Explore my work <ArrowDownRight /></a>
    <div className="scroll-cue"><span>Scroll</span><i /></div>
  </section>;
}