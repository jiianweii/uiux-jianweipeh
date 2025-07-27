import React, { type ComponentPropsWithoutRef } from "react";

interface SectionProps {
  layout?: "row" | "col";
  className?: string;
  children: React.ReactNode;
}

export default function Section({
  layout = "row",
  className,
  children,
  ...rest
}: SectionProps & ComponentPropsWithoutRef<"div">) {
  const styles = {
    row: "flex flex-row",
    col: "flex flex-col",
  };
  return (
    <div className={styles[layout] + " " + className} {...rest}>
      {children}
    </div>
  );
}
