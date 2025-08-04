export default function Text({
  size,
  className,
  children,
}: {
  size: "xxs" | "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
  children: React.ReactNode;
}) {
  const textSize = {
    xxs: "text-[1rem]",
    xs: "text-[1.3rem]",
    sm: "text-[1.5rem]",
    md: "text-[2rem]",
    lg: "text-[2.5rem]",
    xl: "text-[3rem]",
  };
  return (
    <p className={`${textSize[size]} ${className} text-[var(--charcoal)]`}>
      {children}
    </p>
  );
}
