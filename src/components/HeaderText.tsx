export default function HeaderText({
  size,
  className,
  children,
}: {
  size: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
  children: string;
}) {
  const textSize = {
    xs: "text-[3rem]",
    sm: "text-[4rem]",
    md: "text-[6rem]",
    lg: "text-[8rem]",
    xl: "text-[10rem]",
  };
  return (
    <h1
      className={`cormorant-garamond ${textSize[size]} font-bold ${className}`}
    >
      {children}
    </h1>
  );
}
