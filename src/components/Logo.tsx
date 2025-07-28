import { Link } from "@tanstack/react-router";

export default function Logo() {
  return (
    <Link to="/">
      <img src="/ancourage-logo.png" className="max-[426px]:w-60" />
    </Link>
  );
}
