interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function Image({ src, alt, className, ...rest }: ImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={className + " object-center"}
      {...rest}
      draggable="false"
    />
  );
}
