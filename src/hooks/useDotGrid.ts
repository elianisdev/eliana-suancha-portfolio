import { type RefObject, useEffect } from "react";

type Dot = {
  x: number;
  y: number;
  phase: number;
};

const DOT_SPACING = 34;
const DOT_OFFSET = 20;
const DOT_SIZE = 1.6;
const STATIC_OPACITY = 0.25;

const createDots = (width: number, height: number): Dot[] => {
  const dots: Dot[] = [];
  for (let x = DOT_OFFSET; x < width; x += DOT_SPACING) {
    for (let y = DOT_OFFSET; y < height; y += DOT_SPACING) {
      dots.push({ x, y, phase: Math.random() * Math.PI * 2 });
    }
  }
  return dots;
};

const getDotOpacity = (dot: Dot, time: number) =>
  0.12 + (0.18 * (1 + Math.sin(time / 1400 + dot.phase + dot.x / 180))) / 2;

export function useDotGrid(
  canvasRef: RefObject<HTMLCanvasElement | null>,
  reducedMotion: boolean,
) {
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const color = getComputedStyle(canvas).getPropertyValue("--color-accent").trim();
    let dots: Dot[] = [];
    let width = 0;
    let height = 0;
    let frameId = 0;

    const paint = (time: number) => {
      context.clearRect(0, 0, width, height);
      context.fillStyle = color;
      for (const dot of dots) {
        context.globalAlpha = reducedMotion ? STATIC_OPACITY : getDotOpacity(dot, time);
        context.fillRect(dot.x, dot.y, DOT_SIZE, DOT_SIZE);
      }
    };

    const resize = () => {
      const pixelRatio = window.devicePixelRatio || 1;
      ({ width, height } = canvas.getBoundingClientRect());
      canvas.width = width * pixelRatio;
      canvas.height = height * pixelRatio;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      dots = createDots(width, height);
      paint(performance.now());
    };

    const animate = (time: number) => {
      paint(time);
      frameId = requestAnimationFrame(animate);
    };

    const resizeObserver = new ResizeObserver(resize);
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      cancelAnimationFrame(frameId);
      if (entry.isIntersecting && !reducedMotion) frameId = requestAnimationFrame(animate);
    });

    resizeObserver.observe(canvas);
    visibilityObserver.observe(canvas);

    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
    };
  }, [canvasRef, reducedMotion]);
}
