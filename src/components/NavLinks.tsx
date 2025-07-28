import NavLink from "./NavLink";

export default function NavLinks({ className }: { className: string }) {
  return (
    <div className={className}>
      <NavLink to="/about">About Us</NavLink>
      <NavLink to="/classes">Classes</NavLink>
      <NavLink to="/arts">Arts</NavLink>
      <NavLink to="/faq">FAQ</NavLink>
      <NavLink to="/contact">Contact Us</NavLink>
    </div>
  );
}
