import { Link } from "@tanstack/react-router";
import type { ComponentPropsWithoutRef } from "react";

interface ButtonProps {
  style?: "plain" | "default";
  to: string;
  className?: string;
  children: React.ReactNode;
}

export default function Button({
  style = "default",
  to,
  className,
  children,
  ...props
}: ButtonProps & ComponentPropsWithoutRef<typeof Link>) {
  const theme = {
    plain: "border-1 border-[var(--black)]",
    default: "bg-[var(--teal)] text-[var(--white)]",
  };
  return (
    <Link
      to={to}
      className={`${className} ${theme[style]} px-6 py-4 rounded-full w-fit`}
      {...props}
    >
      {children}
    </Link>
  );
}
