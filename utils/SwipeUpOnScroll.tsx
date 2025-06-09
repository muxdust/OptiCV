"use client";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function SwipeUpOnScroll({ children, className }: Props) {
  return (
    <motion.div
      className={className}
      initial={{ y: 100 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
