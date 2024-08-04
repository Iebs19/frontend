"use client";;
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

const animationProps = {
  initial: { "--x": "100%", scale: 0.8 },
  animate: { "--x": "-100%", scale: 1 },
  whileTap: { scale: 0.95 },

  transition: {
    repeat: Infinity,
    repeatType: "loop",
    repeatDelay: 1,
    type: "spring",
    stiffness: 20,
    damping: 15,
    mass: 2,
    scale: {
      type: "spring",
      stiffness: 200,
      damping: 5,
      mass: 0.5,
    },
  }
};
const ShinyButton = ({
  text = "shiny-button",
  className
}) => {
  return (
    (<motion.button
      {...animationProps}
      className={cn(
        "yesrelative yesrounded-lg yespx-6 yespy-2 yesfont-medium yesbackdrop-blur-xl yestransition-[box-shadow] yesduration-300 yesease-in-out hover:yesshadow dark:yesbg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/10%)_0%,transparent_60%)] dark:hover:yesshadow-[0_0_20px_hsl(var(--primary)/10%)]",
        className
      )}>
      <span
        className="yesrelative yesblock yesh-full yesw-full yestext-sm yesuppercase yestracking-wide yestext-[rgb(0,0,0,65%)] dark:yesfont-light dark:yestext-[rgb(255,255,255,90%)]"
        style={{
          maskImage:
            "linear-gradient(-75deg,hsl(var(--primary)) calc(var(--x) + 20%),transparent calc(var(--x) + 30%),hsl(var(--primary)) calc(var(--x) + 100%))",
        }}>
        {text}
      </span>
      <span
        style={{
          mask: "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box,linear-gradient(rgb(0,0,0), rgb(0,0,0))",
          maskComposite: "exclude",
        }}
        className="yesabsolute yesinset-0 yesz-10 yesblock yesrounded-[inherit] yesbg-[linear-gradient(-75deg,hsl(var(--primary)/10%)_calc(var(--x)+20%),hsl(var(--primary) yesp-px"></span>
    </motion.button>)
  );
};

export default ShinyButton;
