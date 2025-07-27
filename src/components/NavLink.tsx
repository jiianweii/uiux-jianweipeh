import { Link } from "@tanstack/react-router";
import React from "react";

export default function NavLink({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      to={to}
      className="text-[var(--charcoal)] [&.active]:text-[var(--black)] [&.active]:font-medium"
    >
      {children}
    </Link>
  );
}
