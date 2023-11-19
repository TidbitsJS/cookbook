"use client";

import { motion } from "framer-motion";

const variants = {
  hidden: { x: "100%" },
  enter: { x: 0 },
  exit: { x: "-100%" },
};

const transition = { duration: 0.6, ease: "easeInOut" };

function Template({ children }) {
  return (
    <motion.main
      variants={variants}
      initial='hidden'
      animate='enter'
      exit='exit'
      transition={transition}
    >
      {children}
    </motion.main>
  );
}

export default Template;
