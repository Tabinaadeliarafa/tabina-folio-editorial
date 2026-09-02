import { motion, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const x = useSpring(-40, { stiffness: 500, damping: 38 });
  const y = useSpring(-40, { stiffness: 500, damping: 38 });
  const [view, setView] = useState(false);
  useEffect(() => {
    const move = (event: PointerEvent) => { x.set(event.clientX); y.set(event.clientY); const node = document.elementFromPoint(event.clientX, event.clientY); setView(Boolean(node?.closest("[data-cursor-view]"))); };
    window.addEventListener("pointermove", move); return () => window.removeEventListener("pointermove", move);
  }, [x, y]);
  return <motion.div className={`custom-cursor ${view ? "cursor-view" : ""}`} style={{ x, y }}>{view ? "VIEW" : ""}</motion.div>;
}