import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from "framer-motion";
import { useEffect, useState, type MouseEvent, type ReactNode } from "react";

export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return <motion.div className={`reveal-mask ${className}`} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.18 }}><motion.div variants={{ hidden: { y: "110%" }, show: { y: 0, transition: { duration: .9, delay, ease: [0.22, 1, 0.36, 1] } } }}>{children}</motion.div></motion.div>;
}

export function Magnetic({ children, className = "" }: { children: ReactNode; className?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 18 });
  const sy = useSpring(y, { stiffness: 180, damping: 18 });
  const move = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * .18);
    y.set((event.clientY - rect.top - rect.height / 2) * .18);
  };
  return <motion.div className={className} style={{ x: sx, y: sy }} onMouseMove={move} onMouseLeave={() => { x.set(0); y.set(0); }}>{children}</motion.div>;
}

export function CountMetric({ value }: { value: string }) {
  const target = Number.parseFloat(value.replace(/[^0-9.]/g, ""));
  const suffix = value.replace(/[0-9.]/g, "");
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => `${target % 1 ? latest.toFixed(1) : Math.round(latest)}${suffix}`);
  return <motion.span viewport={{ once: true }} onViewportEnter={() => count.set(target)}><AnimatedValue value={rounded} /></motion.span>;
}

function AnimatedValue({ value }: { value: MotionValue<string> }) {
  const [text, setText] = useState(value.get());
  useEffect(() => value.on("change", setText), [value]);
  return <>{text}</>;
}