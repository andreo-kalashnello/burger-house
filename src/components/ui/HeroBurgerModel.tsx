"use client";

import type { ModelViewerElement } from "@google/model-viewer";
import { useEffect, useRef, useState } from "react";

type HeroBurgerModelProps = {
  autoRotate: boolean;
};

export function HeroBurgerModel({ autoRotate }: HeroBurgerModelProps) {
  const modelRef = useRef<ModelViewerElement>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const model = modelRef.current;
    const handleError = () => setHasError(true);

    model?.addEventListener("error", handleError);

    void import("@google/model-viewer").catch(() => {
      setHasError(true);
    });

    return () => {
      model?.removeEventListener("error", handleError);
    };
  }, []);

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
      >
        <div className="hero-model__poster" slot="poster" role="status">
          Loading 3D burger…
        </div>
      </model-viewer>
      {hasError ? (
        <p className="hero-model__error" role="alert">
          3D burger could not be loaded.
        </p>
      ) : null}
    </div>
  );
}
