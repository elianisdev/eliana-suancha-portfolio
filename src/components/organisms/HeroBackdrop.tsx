"use client";

import { motion, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { useDotGrid } from "@/hooks/useDotGrid";
import { usePointerGlow } from "@/hooks/usePointerGlow";

export function HeroBackdrop() {
  const reducedMotion = useReducedMotion() ?? false;
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const glow = usePointerGlow(containerRef, reducedMotion);

  useDotGrid(canvasRef, reducedMotion);

  return (
    <div ref={containerRef} aria-hidden="true" className="pointer-events-none absolute inset-0">
      <canvas ref={canvasRef} className="absolute inset-0 size-full opacity-55" />
      <motion.div
        style={{ left: glow.x, top: glow.y, opacity: glow.opacity }}
        className="absolute size-130 -translate-1/2 rounded-full bg-radial from-accent/16 to-transparent to-65%"
      />
    </div>
  );
}
