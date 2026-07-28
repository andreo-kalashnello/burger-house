"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect } from "react";
import { usePreload } from "@/context/PreloadContext";

const FALLBACK_TIMEOUT = 6000;

export function Preloader() {
  const { isReady, markReady } = usePreload();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const timer = window.setTimeout(markReady, FALLBACK_TIMEOUT);
    return () => window.clearTimeout(timer);
  }, [markReady]);

  useEffect(() => {
    document.documentElement.style.overflow = isReady ? "" : "hidden";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [isReady]);

  return (
    <AnimatePresence>
      {!isReady ? (
        <motion.div
          className="preloader"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          role="status"
          aria-live="polite"
        >
          <motion.img
            src="/images/brand/logo-mark.png"
            alt=""
            className="preloader__mark"
            animate={reduceMotion ? undefined : { y: [0, -14, 0], rotate: [-6, 6, -6] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <p className="preloader__text">Firing up the grill…</p>
          <div className="preloader__dots">
            <motion.span
              animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut", delay: 0 }}
            />
            <motion.span
              animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut", delay: 0.15 }}
            />
            <motion.span
              animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            />
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
