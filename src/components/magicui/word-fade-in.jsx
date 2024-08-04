"use client";;
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

export default function WordFadeIn({
  words,
  delay = 0.15,

  variants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * delay },
    }),
  },

  className
}) {
  const _words = words.split(" ");

  return (
    (<motion.h1
      variants={variants}
      initial="hidden"
      animate="visible"
      className={cn(
        "yesfont-display yestext-center yestext-4xl yesfont-bold yestracking-[-0.02em] yestext-black yesdrop-shadow-sm dark:yestext-white md:yestext-7xl md:yesleading-[5rem]",
        className
      )}>
      {_words.map((word, i) => (
        <motion.span key={word} variants={variants} custom={i}>
          {word}{" "}
        </motion.span>
      ))}
    </motion.h1>)
  );
}
