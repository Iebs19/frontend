"use client";;
import React from "react";

import { cn } from "@/lib/utils";

const AvatarCircles = ({
  numPeople,
  className,
  avatarUrls
}) => {
  return (
    (<div
      className={cn("yesz-10 yesflex yes-space-x-4 rtl:yesspace-x-reverse", className)}>
      {avatarUrls.map((url, index) => (
        <img
          key={index}
          className="yesh-10 yesw-10 yesrounded-full yesborder-2 yesborder-white dark:yesborder-gray-800"
          src={url}
          width={40}
          height={40}
          alt={`Avatar ${index + 1}`} />
      ))}
      <a
        className="yesflex yesh-10 yesw-10 yesitems-center yesjustify-center yesrounded-full yesborder-2 yesborder-white yesbg-black yestext-center yestext-xs yesfont-medium yestext-white hover:yesbg-gray-600 dark:yesborder-gray-800 dark:yesbg-white dark:yestext-black"
        href="">
        +{numPeople}
      </a>
    </div>)
  );
};

export default AvatarCircles;
