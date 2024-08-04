"use client";;
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

const NeonGradientCard = ({
  className,
  children,
  borderSize = 2,
  borderRadius = 20,
  neonColors = {
    firstColor: "#ff00aa",
    secondColor: "#00FFF1",
  },
  ...props
}) => {
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { offsetWidth, offsetHeight } = containerRef.current;
        setDimensions({ width: offsetWidth, height: offsetHeight });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      const { offsetWidth, offsetHeight } = containerRef.current;
      setDimensions({ width: offsetWidth, height: offsetHeight });
    }
  }, [children]);

  return (
    (<div
      ref={containerRef}
      style={
        {
          "--border-size": `${borderSize}px`,
          "--border-radius": `${borderRadius}px`,
          "--neon-first-color": neonColors.firstColor,
          "--neon-second-color": neonColors.secondColor,
          "--card-width": `${dimensions.width}px`,
          "--card-height": `${dimensions.height}px`,
          "--card-content-radius": `${borderRadius - borderSize}px`,
          "--pseudo-element-background-image": `linear-gradient(0deg, ${neonColors.firstColor}, ${neonColors.secondColor})`,
          "--pseudo-element-width": `${dimensions.width + borderSize * 2}px`,
          "--pseudo-element-height": `${dimensions.height + borderSize * 2}px`,
          "--after-blur": `${dimensions.width / 3}px`
        }
      }
      className={cn(
        "yesrelative yesz-10 yesh-full yesw-full yesrounded-[var(--border-radius)]",
        className
      )}
      {...props}>
      <div
        className={cn(
          "yesrelative yesh-full yesmin-h-[inherit] yesw-full yesrounded-[var(--card-content-radius)] yesbg-gray-100 yesp-6",
          "before:yesabsolute before:yes-left-[var(--border-size)] before:yes-top-[var(--border-size)] before:yes-z-10 before:yesblock",
          "before:yesh-[var(--pseudo-element-height)] before:yesw-[var(--pseudo-element-width)] before:yesrounded-[var(--border-radius)] before:yescontent-['']",
          "before:yesbg-[linear-gradient(0deg,var(--neon-first-color),var(--neon-second-color))] before:bg-[length:yes100%_200%]",
          "before:yesanimate-backgroundPositionSpin",
          "after:yesabsolute after:yes-left-[var(--border-size)] after:yes-top-[var(--border-size)] after:yes-z-10 after:yesblock",
          "after:yesh-[var(--pseudo-element-height)] after:yesw-[var(--pseudo-element-width)] after:yesrounded-[var(--border-radius)] after:yesblur-[var(--after-blur)] after:yescontent-['']",
          "after:yesbg-[linear-gradient(0deg,var(--neon-first-color),var(--neon-second-color))] after:bg-[length:yes100%_200%] after:yesopacity-80",
          "after:yesanimate-backgroundPositionSpin",
          "dark:yesbg-neutral-900"
        )}>
        {children}
      </div>
    </div>)
  );
};

export { NeonGradientCard };
