import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "../utils/cn";

export default function SectionLayout({ children, id, className, bgClassName }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });

  return (
    <section id={id} className={cn("relative py-20 overflow-hidden", bgClassName)}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={cn("max-w-7xl mx-auto px-6 lg:px-8", className)}
      >
        {children}
      </motion.div>
    </section>
  );
}
