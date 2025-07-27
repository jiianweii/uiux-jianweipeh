import Logo from "../components/Logo";
import NavLinks from "../components/NavLinks";

export default function Navigation() {
  return (
    <div className="py-12 px-16 w-full flex justify-between">
      <Logo />
      <NavLinks />
    </div>
  );
}
