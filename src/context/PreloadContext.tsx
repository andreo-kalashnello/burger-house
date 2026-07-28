"use client";

import { createContext, useCallback, useContext, useState, type ReactNode } from "react";

interface PreloadContextValue {
  isReady: boolean;
  markReady: () => void;
}

const PreloadContext = createContext<PreloadContextValue | null>(null);

export function PreloadProvider({ children }: { children: ReactNode }) {
  const [isReady, setIsReady] = useState(false);
  const markReady = useCallback(() => setIsReady(true), []);

  return <PreloadContext.Provider value={{ isReady, markReady }}>{children}</PreloadContext.Provider>;
}

export function usePreload() {
  const context = useContext(PreloadContext);

  if (!context) {
    throw new Error("usePreload must be used inside PreloadProvider");
  }

  return context;
}
