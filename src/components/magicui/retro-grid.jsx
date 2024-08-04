import { cn } from "@/lib/utils";

export default function RetroGrid({
  className
}) {
  return (
    (<div
      className={cn(
        "yespointer-events-none yesabsolute yesh-full yesw-full yesoverflow-hidden yesopacity-50 [perspective:yes200px]",
        className
      )}>
      {/* Grid */}
      <div className="yesabsolute yesinset-0 [transform:yesrotateX(35deg)]">
        <div
          className={cn(
            "yesanimate-grid",
            "[background-repeat:yesrepeat] [background-size:yes60px_60px] [height:yes300vh] [inset:yes0%_0px] [margin-left:yes-50%] [transform-origin:yes100%_0_0] [width:yes600vw]",
            // Light Styles
            "[background-image:yeslinear-gradient(to_right,rgba(0,0,0,0.3)_1px,transparent_0),linear-gradient(to_bottom,rgba(0,0,0,0.3)_1px,transparent_0)]",
            // Dark styles
            "dark:[background-image:yeslinear-gradient(to_right,rgba(255,255,255,0.2)_1px,transparent_0),linear-gradient(to_bottom,rgba(255,255,255,0.2)_1px,transparent_0)]"
          )} />
      </div>
      {/* Background Gradient */}
      <div
        className="yesabsolute yesinset-0 yesbg-gradient-to-t yesfrom-white yesto-transparent yesto-90% dark:yesfrom-black" />
    </div>)
  );
}
