"use client";;
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const AnimatedSubscribeButton = ({
  buttonColor,
  subscribeStatus,
  buttonTextColor,
  changeText,
  initialText,
}) => {
  const [isSubscribed, setIsSubscribed] = useState(subscribeStatus);

  return (
    (<AnimatePresence mode="wait">
      {isSubscribed ? (
        <motion.button
          className="yesrelative yesflex yesw-[200px] yesitems-center yesjustify-center yesoverflow-hidden yesrounded-md yesbg-white yesp-[10px] yesoutline yesoutline-1 yesoutline-black"
          onClick={() => setIsSubscribed(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}>
          <motion.span
            key="action"
            className="yesrelative yesblock yesh-full yesw-full yesfont-semibold"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            style={{ color: buttonColor }}>
            {changeText}
          </motion.span>
        </motion.button>
      ) : (
        <motion.button
          className="yesrelative yesflex yesw-[200px] yescursor-pointer yesitems-center yesjustify-center yesrounded-md yesborder-none yesp-[10px]"
          style={{ backgroundColor: buttonColor, color: buttonTextColor }}
          onClick={() => setIsSubscribed(true)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}>
          <motion.span
            key="reaction"
            className="yesrelative yesblock yesfont-semibold"
            initial={{ x: 0 }}
            exit={{ x: 50, transition: { duration: 0.1 } }}>
            {initialText}
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>)
  );
};
