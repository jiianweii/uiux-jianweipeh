import { Icon } from "@iconify/react/dist/iconify.js";
import Logo from "../components/Logo";
import NavLinks from "../components/NavLinks";
import { useNavBarContext } from "../providers/NavBarProvider";

export default function Navigation() {
  const { isNavBarOpen, setIsNavBarOpen } = useNavBarContext();
  return (
    <div className="py-12 px-16 w-full flex justify-between items-center">
      <Logo />
      <div>
        <NavLinks className="flex gap-18 max-[769px]:hidden" />
        <button onClick={() => setIsNavBarOpen((curr) => !curr)}>
          {isNavBarOpen ? (
            <Icon
              icon="charm:cross"
              className="text-[2.5rem] max-[769px]:block hidden"
            />
          ) : (
            <Icon
              icon="iconamoon:menu-burger-horizontal-bold"
              className="text-[2.2rem] max-[769px]:block hidden"
            />
          )}
        </button>
      </div>
    </div>
  );
}
