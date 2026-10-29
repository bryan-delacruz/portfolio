import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Captura del demo. El zoom responde al `group` del contenedor (la tarjeta o la fila), no solo a la imagen.
 * El link queda fuera del teclado y de los lectores de pantalla: el link "Demo" de texto ya lleva al mismo sitio.
 */
export function Thumbnail({
  src,
  alt,
  href,
  sizes,
  className,
}: {
  src: string;
  alt: string;
  href?: string;
  sizes: string;
  className?: string;
}) {
  const image = (
    <div className={cn("relative aspect-[16/10] overflow-hidden bg-muted", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none"
      />
    </div>
  );
  if (!href) return image;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" tabIndex={-1} aria-hidden className="block">
      {image}
    </a>
  );
}
