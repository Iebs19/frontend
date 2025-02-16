"use client";;
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

export default function TypingAnimation({
  text,
  duration = 200,
  className
}) {
  const [displayedText, setDisplayedText] = useState("");
  const [i, setI] = useState(0);

  useEffect(() => {
    const typingEffect = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
        setI(i + 1);
      } else {
        clearInterval(typingEffect);
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [duration, i]);

  return (
    (<h1
      className={cn(
        "yesfont-display yestext-center yestext-4xl yesfont-bold yesleading-[5rem] yestracking-[-0.02em] yesdrop-shadow-sm",
        className
      )}>
      {displayedText ? displayedText : text}
    </h1>)
  );
}
