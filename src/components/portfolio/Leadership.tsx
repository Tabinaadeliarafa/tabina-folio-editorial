import { portfolio } from "@/data/portfolio";
import { CountMetric, Reveal } from "./motion";

export function Leadership() {
  return <section className="section leadership-section">
    <div className="section-rule"><span>06</span><span>Leadership / Impact</span></div>
    <div className="leadership-intro"><Reveal><h2 className="display-heading">Beyond<br /><em>the screen.</em></h2></Reveal><p>Impact from leading Informatics Festival as Project Supervisor—bringing technology, industry, and community into one shared experience.</p></div>
    <div className="metrics">{portfolio.metrics.map(([value, label]) => <div className="metric" key={label}><strong><CountMetric value={value} /></strong><span>{label}</span></div>)}</div>
  </section>;
}