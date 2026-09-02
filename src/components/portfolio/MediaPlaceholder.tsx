import { motion } from "framer-motion";

export function MediaPlaceholder({ label, image, className = "" }: { label: string; image?: string; className?: string }) {
  return (
    <motion.div className={`media-frame group ${className}`} initial={{ clipPath: "inset(0 0 100% 0)" }} whileInView={{ clipPath: "inset(0 0 0% 0)" }} viewport={{ once: true, amount: .15 }} transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}>
      {image ? <img src={image} alt={label} className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.03]" /> : <div className="placeholder-art h-full w-full"><span className="placeholder-index">[ MEDIA ]</span><span className="placeholder-label">{label}</span><span className="placeholder-cross" aria-hidden="true" /></div>}
    </motion.div>
  );
}