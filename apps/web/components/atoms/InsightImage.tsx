import Image, { type ImageProps } from "next/image";

function isRemoteStrapiImage(src: string): boolean {
  return src.startsWith("http://") || src.startsWith("https://");
}

export default function InsightImage({ src, alt, ...props }: ImageProps) {
  return <Image src={src} alt={alt} unoptimized={isRemoteStrapiImage(String(src))} {...props} />;
}
