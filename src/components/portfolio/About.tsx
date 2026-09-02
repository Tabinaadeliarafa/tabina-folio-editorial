import { portfolio } from "@/data/portfolio";
import { MediaPlaceholder } from "./MediaPlaceholder";
import { Reveal } from "./motion";

export function About() {
  return <section id="about" className="section about-section">
    <div className="section-rule"><span>02</span><span>Profile / Introduction</span></div>
    <Reveal><h2 className="display-heading">About<br /><em>Tabina.</em></h2></Reveal>
    <div className="about-grid">
      <div className="about-media"><MediaPlaceholder label="ABOUT PHOTO — REPLACE LATER" image={portfolio.aboutPortrait} /></div>
      <div className="about-copy">
        {portfolio.biography.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        <dl className="about-details">
          <div><dt>Based in</dt><dd>{portfolio.location}</dd></div>
          <div><dt>Education</dt><dd>Padjadjaran University<br />Bachelor of Informatics Engineering<br />2022 — Present</dd></div>
          <div><dt>Current focus</dt><dd>UI/UX · Development · Data Analytics</dd></div>
        </dl>
      </div>
    </div>
  </section>;
}