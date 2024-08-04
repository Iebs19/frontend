"use client";;
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

export const Meteors = ({
  number = 20
}) => {
  const [meteorStyles, setMeteorStyles] = useState([]);

  useEffect(() => {
    const styles = [...new Array(number)].map(() => ({
      top: -5,
      left: Math.floor(Math.random() * window.innerWidth) + "px",
      animationDelay: Math.random() * 1 + 0.2 + "s",
      animationDuration: Math.floor(Math.random() * 8 + 2) + "s",
    }));
    setMeteorStyles(styles);
  }, [number]);

  return (<>
    {[...meteorStyles].map((style, idx) => (
      // Meteor Head
      (<span
        key={idx}
        className={cn(
          "yespointer-events-none yesabsolute yesleft-1/2 yestop-1/2 yessize-0.5 yesrotate-[215deg] yesanimate-meteor yesrounded-full yesbg-slate-500 yesshadow-[0_0_0_1px_#ffffff10]"
        )}
        style={style}>
        {/* Meteor Tail */}
        <div
          className="yespointer-events-none yesabsolute yestop-1/2 yes-z-10 yesh-px yesw-[50px] yes-translate-y-1/2 yesbg-gradient-to-r yesfrom-slate-500 yesto-transparent" />
      </span>)
    ))}
  </>);
};

export default Meteors;
