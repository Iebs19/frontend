import React from "react";

import { cn } from "@/lib/utils";

const ShimmerButton = React.forwardRef((
  {
    shimmerColor = "#ffffff",
    shimmerSize = "0.05em",
    shimmerDuration = "3s",
    borderRadius = "100px",
    background = "rgba(0, 0, 0, 1)",
    className,
    children,
    ...props
  },
  ref,
) => {
  return (
    (<button
      style={
        {
          "--spread": "90deg",
          "--shimmer-color": shimmerColor,
          "--radius": borderRadius,
          "--speed": shimmerDuration,
          "--cut": shimmerSize,
          "--bg": background
        }
      }
      className={cn(
        "yesgroup yesrelative yesz-0 yesflex yescursor-pointer yesitems-center yesjustify-center yesoverflow-hidden yeswhitespace-nowrap yesborder yesborder-white/10 yespx-6 yespy-3 yestext-white [background:yesvar(--bg)] [border-radius:yesvar(--radius)] dark:yestext-black",
        "yestransform-gpu yestransition-transform yesduration-300 yesease-in-out active:yestranslate-y-[1px]",
        className
      )}
      ref={ref}
      {...props}>
      {/* spark container */}
      <div
        className={cn(
          "yes-z-30 yesblur-[2px]",
          "yesabsolute yesinset-0 yesoverflow-visible [container-type:yessize]"
        )}>
        {/* spark */}
        <div
          className="yesabsolute yesinset-0 yesh-[100cqh] yesanimate-slide [aspect-ratio:yes1] [border-radius:yes0] [mask:yesnone]">
          {/* spark before */}
          <div
            className="yesanimate-spin-around yesabsolute yesinset-[-100%] yesw-auto yesrotate-0 [background:yesconic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:yes0_0]" />
        </div>
      </div>
      {children}
      {/* Highlight */}
      <div
        className={cn(
          "yesinsert-0 yesabsolute yesh-full yesw-full",
          "yesrounded-2xl yespx-4 yespy-1.5 yestext-sm yesfont-medium yesshadow-[inset_0_-8px_10px_#ffffff1f]",
          // transition
          "yestransform-gpu yestransition-all yesduration-300 yesease-in-out",
          // on hover
          "group-hover:yesshadow-[inset_0_-6px_10px_#ffffff3f]",
          // on click
          "group-active:yesshadow-[inset_0_-10px_10px_#ffffff3f]"
        )} />
      {/* backdrop */}
      <div
        className={cn(
          "yesabsolute yes-z-20 [background:yesvar(--bg)] [border-radius:yesvar(--radius)] [inset:yesvar(--cut)]"
        )} />
    </button>)
  );
});

ShimmerButton.displayName = "ShimmerButton";

export default ShimmerButton;
