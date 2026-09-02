import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { portfolio } from "@/data/portfolio";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => { const update = () => setScrolled(window.scrollY > 32); update(); window.addEventListener("scroll", update, { passive: true }); return () => window.removeEventListener("scroll", update); }, []);
  return <header className={`site-nav ${scrolled ? "site-nav-scrolled" : ""}`}>
    <a href="#top" className="nav-name">{portfolio.name}</a>
    <nav className={`nav-links ${open ? "nav-links-open" : ""}`} aria-label="Main navigation">
      {portfolio.nav.map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)} className="nav-link"><span>{item}</span></a>)}
    </nav>
    <div className="availability"><motion.span className="availability-dot" animate={{ opacity: [1, .35, 1] }} transition={{ duration: 2.2, repeat: Infinity }} />{portfolio.availability}</div>
    <Button variant="ghost" size="icon" className="nav-toggle" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
  </header>;
}