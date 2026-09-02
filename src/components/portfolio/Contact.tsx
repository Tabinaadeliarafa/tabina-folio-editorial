import { ArrowUp, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { portfolio } from "@/data/portfolio";
import { Magnetic, Reveal } from "./motion";

export function Contact() {
  return <section id="contact" className="contact-section">
    <div className="contact-backdrop" aria-hidden="true">CONNECT</div>
    <div className="contact-inner">
      <span className="contact-kicker">Have a project, opportunity, collaboration,<br />or just want to connect?</span>
      <Reveal><h2>Let's create<br /><em>something</em><br />meaningful.</h2></Reveal>
      <Magnetic className="contact-cta"><Button asChild variant="editorial" size="lg"><a href={`mailto:${portfolio.contact.email}`}>Get in touch <ArrowUpRight /></a></Button></Magnetic>
      <div className="contact-details"><a href={`mailto:${portfolio.contact.email}`}>{portfolio.contact.email}</a><span>{portfolio.location}</span></div>
      <div className="social-links"><a href={portfolio.contact.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight /></a><a href={portfolio.contact.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight /></a><a href={`mailto:${portfolio.contact.email}`}>Email <ArrowUpRight /></a></div>
    </div>
  </section>;
}

export function Footer() {
  return <footer><a href="#top">{portfolio.name}</a><span>Designed & developed with intention</span><a href="#top">Back to top <ArrowUp /></a><small>© 2026 {portfolio.name}</small></footer>;
}