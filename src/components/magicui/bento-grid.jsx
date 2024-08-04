import { ArrowRightIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const BentoGrid = ({
  children,
  className
}) => {
  return (
    (<div
      className={cn(
        "yesgrid yesw-full yesauto-rows-[22rem] yesgrid-cols-3 yesgap-4",
        className
      )}>
      {children}
    </div>)
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta
}) => (
  <div
    key={name}
    className={cn(
      "yesgroup yesrelative yescol-span-3 yesflex yesflex-col yesjustify-between yesoverflow-hidden yesrounded-xl",
      // light styles
      "yesbg-white [box-shadow:yes0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      // dark styles
      "yestransform-gpu dark:yesbg-black dark:[border:yes1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:yes0_-20px_80px_-20px_#ffffff1f_inset]",
      className
    )}>
    <div>{background}</div>
    <div
      className="yespointer-events-none yesz-10 yesflex yestransform-gpu yesflex-col yesgap-1 yesp-6 yestransition-all yesduration-300 group-hover:yes-translate-y-10">
      <Icon
        className="yesh-12 yesw-12 yesorigin-left yestransform-gpu yestext-neutral-700 yestransition-all yesduration-300 yesease-in-out group-hover:yesscale-75" />
      <h3
        className="yestext-xl yesfont-semibold yestext-neutral-700 dark:yestext-neutral-300">
        {name}
      </h3>
      <p className="yesmax-w-lg yestext-neutral-400">{description}</p>
    </div>

    <div
      className={cn(
        "yespointer-events-none yesabsolute yesbottom-0 yesflex yesw-full yestranslate-y-10 yestransform-gpu yesflex-row yesitems-center yesp-4 yesopacity-0 yestransition-all yesduration-300 group-hover:yestranslate-y-0 group-hover:yesopacity-100"
      )}>
      <Button variant="ghost" asChild size="sm" className="yespointer-events-auto">
        <a href={href}>
          {cta}
          <ArrowRightIcon className="yesml-2 yesh-4 yesw-4" />
        </a>
      </Button>
    </div>
    <div
      className="yespointer-events-none yesabsolute yesinset-0 yestransform-gpu yestransition-all yesduration-300 group-hover:yesbg-black/[.03] group-hover:dark:yesbg-neutral-800/10" />
  </div>
);

export { BentoCard, BentoGrid };
