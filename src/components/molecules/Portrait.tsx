import Image, { type StaticImageData } from "next/image";

type PortraitProps = {
  image: StaticImageData;
  alt: string;
  caption: string;
};

export function Portrait({ image, alt, caption }: PortraitProps) {
  return (
    <figure className="relative w-full max-w-80 justify-self-center lg:max-w-100">
      <div
        aria-hidden="true"
        className="absolute inset-0 translate-4.5 rounded-3xl bg-accent opacity-85"
      />
      <Image
        src={image}
        alt={alt}
        placeholder="blur"
        sizes="(min-width: 1024px) 400px, 320px"
        className="relative aspect-4/5 w-full rounded-3xl border border-line object-cover"
      />
      <figcaption className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-line bg-ink/80 px-3 py-1.5 font-mono text-xs backdrop-blur-sm">
        <span aria-hidden="true" className="size-2 rounded-full bg-accent" />
        {caption}
      </figcaption>
    </figure>
  );
}
