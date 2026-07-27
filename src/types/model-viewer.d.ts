import type { ModelViewerElement } from "@google/model-viewer";
import type { DetailedHTMLProps, HTMLAttributes } from "react";

type ModelViewerAttributes = DetailedHTMLProps<
  HTMLAttributes<ModelViewerElement>,
  ModelViewerElement
> & {
  src?: string;
  alt?: string;
  loading?: "auto" | "lazy" | "eager";
  reveal?: "auto" | "manual";
  "auto-rotate"?: string;
  "camera-controls"?: string;
  "disable-zoom"?: string;
  "disable-pan"?: string;
  "interaction-prompt"?: "auto" | "none";
  "camera-orbit"?: string;
  "field-of-view"?: string;
  "shadow-intensity"?: string;
  "shadow-softness"?: string;
  exposure?: string;
};

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": ModelViewerAttributes;
    }
  }
}

export {};
