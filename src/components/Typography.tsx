export default function Typography({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <h1
      className={
        "font-bold cormorant-garamond text-[var(--charcoal)] text-[16rem] " +
        className
      }
    >
      {children}
    </h1>
  );
}
