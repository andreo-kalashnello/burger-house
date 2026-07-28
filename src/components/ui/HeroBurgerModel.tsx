"use client";

import type { ModelViewerElement } from "@google/model-viewer";
import { useEffect, useRef, useState } from "react";
import { usePreload } from "@/context/PreloadContext";

type HeroBurgerModelProps = {
  autoRotate: boolean;
};

export function HeroBurgerModel({ autoRotate }: HeroBurgerModelProps) {
  const modelRef = useRef<ModelViewerElement>(null);
  const [hasError, setHasError] = useState(false);
  const { markReady } = usePreload();

  useEffect(() => {
    const model = modelRef.current;
    const handleLoad = () => markReady();
    const handleError = () => {
      setHasError(true);
      markReady();
    };

    model?.addEventListener("load", handleLoad);
    model?.addEventListener("error", handleError);

    void import("@google/model-viewer").catch(() => {
      handleError();
    });

    return () => {
      model?.removeEventListener("load", handleLoad);
      model?.removeEventListener("error", handleError);
    };
  }, [markReady]);

  return (
    <div className="hero-model-shell">
      <model-viewer
        ref={modelRef}
        className="hero-model"
        src="/models/hero-burger.glb"
        alt="Interactive 3D model of a flaming bacon cheeseburger"
        loading="eager"
        reveal="auto"
        camera-controls=""
        disable-zoom=""
        disable-pan=""
        interaction-prompt="none"
        camera-orbit="18deg 72deg 105%"
        field-of-view="27deg"
        shadow-intensity="1.35"
        shadow-softness="0.85"
        exposure="1.08"
        {...(autoRotate ? { "auto-rotate": "" } : {})}
      />
      {hasError ? (
        <p className="hero-model__error" role="alert">
          3D burger could not be loaded.
        </p>
      ) : null}
    </div>
  );
}
