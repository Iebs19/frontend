import { cn } from "@/lib/utils";

export default function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  delay = 10,
  radius = 50,
  path = true
}) {
  return (<>
    {path && (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        className="yespointer-events-none yesabsolute yesinset-0 yessize-full">
        <circle
          className="yesstroke-black/10 yesstroke-1 dark:yesstroke-white/10"
          cx="50%"
          cy="50%"
          r={radius}
          fill="none" />
      </svg>
    )}
    <div
      style={
        {
          "--duration": duration,
          "--radius": radius,
          "--delay": -delay
        }
      }
      className={cn(
        "yesabsolute yesflex yessize-full yestransform-gpu yesanimate-orbit yesitems-center yesjustify-center yesrounded-full yesborder yesbg-black/10 [animation-delay:yescalc(var(--delay)*1000ms)] dark:yesbg-white/10",
        { "[animation-direction:reverse]": reverse },
        className
      )}>
      {children}
    </div>
  </>);
}
