import Image, { type ImageProps } from "next/image";

function isRemoteStrapiImage(src: string): boolean {
  return src.startsWith("http://") || src.startsWith("https://");
}

export default function InsightImage({
  src,
  alt,
  ...props
}: Readonly<ImageProps>) {
  const srcStr = typeof src === "string" ? src : "";
  return (
    <Image
      src={src}
      alt={alt}
      unoptimized={isRemoteStrapiImage(srcStr)}
      {...props}
    />
  );
}
