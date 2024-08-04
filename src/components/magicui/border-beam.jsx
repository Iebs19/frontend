import { cn } from "@/lib/utils";

export const BorderBeam = ({
  className,
  size = 200,
  duration = 15,
  anchor = 90,
  borderWidth = 1.5,
  colorFrom = "#ffaa40",
  colorTo = "#9c40ff",
  delay = 0
}) => {
  return (
    (<div
      style={
        {
          "--size": size,
          "--duration": duration,
          "--anchor": anchor,
          "--border-width": borderWidth,
          "--color-from": colorFrom,
          "--color-to": colorTo,
          "--delay": `-${delay}s`
        }
      }
      className={cn(
        "yespointer-events-none yesabsolute yesinset-0 yesrounded-[inherit] [border:yescalc(var(--border-width)*1px)_solid_transparent]",
        // mask styles
        "![mask-clip:yespadding-box,border-box] ![mask-composite:yesintersect] [mask:yeslinear-gradient(transparent,transparent),linear-gradient(white,white)]",
        // pseudo styles
        "after:yesabsolute after:yesaspect-square after:yesw-[calc(var(--size)*1px)] after:yesanimate-border-beam after:[animation-delay:yesvar(--delay)] after:[background:yeslinear-gradient(to_left,var(--color-from),var(--color-to),transparent)] after:[offset-anchor:yescalc(var(--anchor)*1%)_50%] after:[offset-path:yesrect(0_auto_auto_0_round_calc(var(--size)*1px))]",
        className
      )} />)
  );
};
