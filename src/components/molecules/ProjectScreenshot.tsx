import Image, { type StaticImageData } from "next/image";
import type { ProjectSize } from "@/types/project";

type ProjectScreenshotProps = {
  image: StaticImageData;
  alt: string;
  size: ProjectSize;
};

const SCREENSHOT_QUALITY = 90;

const sizesByProjectSize: Record<ProjectSize, string> = {
  featured: "(min-width: 1024px) 540px, 100vw",
  regular: "(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw",
};

export function ProjectScreenshot({ image, alt, size }: ProjectScreenshotProps) {
  return (
    <Image
      src={image}
      alt={alt}
      fill
      placeholder="blur"
      quality={SCREENSHOT_QUALITY}
      sizes={sizesByProjectSize[size]}
      className="object-cover object-top-left"
    />
  );
}
