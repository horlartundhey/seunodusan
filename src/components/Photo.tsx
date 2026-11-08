import Image from "next/image";
import type { CSSProperties } from "react";
import { IMAGES } from "@/lib/images";

type Props = {
  name: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  style?: CSSProperties;
};

/** Site photo. Dimensions come from src/lib/images.ts so next/image can optimise and avoid layout shift. */
export default function Photo({ name, alt, priority, sizes = "(max-width: 900px) 100vw, 640px", className, style }: Props) {
  const meta = IMAGES[name];
  if (!meta) throw new Error(`Unknown image "${name}". Add it to public/images and src/lib/images.ts`);
  return (
    <Image
      src={`/images/${name}.${meta.ext}`}
      width={meta.w}
      height={meta.h}
      alt={alt}
      priority={priority}
      sizes={sizes}
      className={className}
      style={style}
    />
  );
}
