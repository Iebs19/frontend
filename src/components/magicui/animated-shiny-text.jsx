import { cn } from "@/lib/utils";

const AnimatedShinyText = ({
  children,
  className,
  shimmerWidth = 100,
}) => {
  return (
    (<p
      style={
        {
          "--shimmer-width": `${shimmerWidth}px`
        }
      }
      className={cn(
        "yesmx-auto yesmax-w-md yestext-neutral-600/70 dark:yestext-neutral-400/70",
        // Shimmer effect
        "yesanimate-shimmer yesbg-clip-text yesbg-no-repeat [background-position:yes0_0] [background-size:yesvar(--shimmer-width)_100%] [transition:yesbackground-position_1s_cubic-bezier(.6,.6,0,1)_infinite]",
        // Shimmer gradient
        "yesbg-gradient-to-r yesfrom-transparent yesvia-black/80 yesvia-50% yesto-transparent yes dark:yesvia-white/80",
        className
      )}>
      {children}
    </p>)
  );
};

export default AnimatedShinyText;
