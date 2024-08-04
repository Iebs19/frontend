"use client";;
import React, { useRef } from "react";
import { cva } from "class-variance-authority";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

import { cn } from "@/lib/utils";

const DEFAULT_MAGNIFICATION = 60;
const DEFAULT_DISTANCE = 140;

const dockVariants = cva(
  "yesmx-auto yesw-max yesmt-8 yesh-[58px] yesp-2 yesflex yesgap-2 yesrounded-2xl yesborder supports-backdrop-blur:yesbg-white/10 supports-backdrop-blur:dark:yesbg-black/10 yesbackdrop-blur-md"
);

const Dock = React.forwardRef((
  {
    className,
    children,
    magnification = DEFAULT_MAGNIFICATION,
    distance = DEFAULT_DISTANCE,
    direction = "bottom",
    ...props
  },
  ref,
) => {
  const mouseX = useMotionValue(Infinity);

  const renderChildren = () => {
    return React.Children.map(children, (child) => {
      return React.cloneElement(child, {
        mouseX: mouseX,
        magnification: magnification,
        distance: distance,
      });
    });
  };

  return (
    (<motion.div
      ref={ref}
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      {...props}
      className={cn(dockVariants({ className }), {
        "items-start": direction === "top",
        "items-center": direction === "middle",
        "items-end": direction === "bottom",
      })}>
      {renderChildren()}
    </motion.div>)
  );
});

Dock.displayName = "Dock";

const DockIcon = ({
  size,
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  mouseX,
  className,
  children,
  ...props
}) => {
  const ref = useRef(null);

  const distanceCalc = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  let widthSync = useTransform(distanceCalc, [-distance, 0, distance], [40, magnification, 40]);

  let width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    (<motion.div
      ref={ref}
      style={{ width }}
      className={cn(
        "yesflex yesaspect-square yescursor-pointer yesitems-center yesjustify-center yesrounded-full",
        className
      )}
      {...props}>
      {children}
    </motion.div>)
  );
};

DockIcon.displayName = "DockIcon";

export { Dock, DockIcon, dockVariants };
