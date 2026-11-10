import { useMotionValue, useSpring } from "motion/react";
import { type RefObject, useEffect } from "react";

const INITIAL_POSITION = { x: 0.7, y: 0.4 };
const SPRING_CONFIG = { stiffness: 120, damping: 20 };

export function usePointerGlow(
  anchorRef: RefObject<HTMLElement | null>,
  reducedMotion: boolean,
) {
  const x = useSpring(0, SPRING_CONFIG);
  const y = useSpring(0, SPRING_CONFIG);
  const opacity = useMotionValue(0);

  useEffect(() => {
    const area = anchorRef.current?.parentElement;
    if (!area) return;

    const { width, height } = area.getBoundingClientRect();
    x.jump(width * INITIAL_POSITION.x);
    y.jump(height * INITIAL_POSITION.y);
    opacity.set(1);

    if (reducedMotion) return;

    const followPointer = (event: PointerEvent) => {
      const bounds = area.getBoundingClientRect();
      x.set(event.clientX - bounds.left);
      y.set(event.clientY - bounds.top);
    };

    area.addEventListener("pointermove", followPointer);
    return () => area.removeEventListener("pointermove", followPointer);
  }, [anchorRef, reducedMotion, x, y, opacity]);

  return { x, y, opacity };
}
