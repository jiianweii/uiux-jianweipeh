import { Link } from "@tanstack/react-router";
import React from "react";

export default function NavLink({
  to,
  children,
  className,
}: {
  to: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      to={to}
      className={
        "text-[var(--charcoal)] [&.active]:text-[var(--black)] [&.active]:font-medium" +
        " " +
        className
      }
    >
      {children}
    </Link>
  );
}
