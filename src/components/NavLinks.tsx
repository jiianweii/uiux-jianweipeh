import NavLink from "./NavLink";

export default function NavLinks() {
  return (
    <div className="flex gap-18">
      <NavLink to="/about">About Us</NavLink>
      <NavLink to="/classes">Classes</NavLink>
      <NavLink to="/arts">Arts</NavLink>
      <NavLink to="/faq">FAQ</NavLink>
      <NavLink to="/contact">Contact Us</NavLink>
    </div>
  );
}
