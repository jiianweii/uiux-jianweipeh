import { useEffect } from "react";
import NavLink from "../components/NavLink";
import { useNavBarContext } from "../providers/NavBarProvider";

export default function Main({ children }: { children: React.ReactNode }) {
  const { isNavBarOpen, setIsNavBarOpen } = useNavBarContext();

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth >= 769) setIsNavBarOpen(false);
    };

    window.addEventListener("resize", checkScreenSize);

    checkScreenSize();

    // clean up
    return () => window.removeEventListener("resize", checkScreenSize);
  }, [window.innerWidth]);

  function setClose() {
    setIsNavBarOpen(false);
  }

  return (
    <div className="relative">
      {isNavBarOpen && (
        <div
          className="flex flex-col absolute top-0 left-0 !text-[2rem] bg-[var(--white)] w-full border-t-1 border-[#00000025] z-10"
          onClick={setClose}
        >
          <NavLink
            to="/about"
            className="py-6 px-8 border-b-1 border-[#00000025] [&.active]:max-[769px]:bg-[var(--teal)] [&.active]:max-[769px]:text-[var(--white)]"
          >
            About Us
          </NavLink>
          <NavLink
            to="/classes"
            className="py-6 px-8 border-b-1 border-[#00000025] [&.active]:max-[769px]:bg-[var(--teal)] [&.active]:max-[769px]:text-[var(--white)]"
          >
            Classes
          </NavLink>
          <NavLink
            to="/arts"
            className="py-6 px-8 border-b-1 border-[#00000025] [&.active]:max-[769px]:bg-[var(--teal)] [&.active]:max-[769px]:text-[var(--white)]"
          >
            Arts
          </NavLink>
          <NavLink
            to="/faq"
            className="py-6 px-8 border-b-1 border-[#00000025] [&.active]:max-[769px]:bg-[var(--teal)] [&.active]:max-[769px]:text-[var(--white)]"
          >
            FAQ
          </NavLink>
          <NavLink
            to="/contact"
            className="py-6 px-8 border-b-1 border-[#00000025] [&.active]:max-[769px]:bg-[var(--teal)] [&.active]:max-[769px]:text-[var(--white)]"
          >
            Contact Us
          </NavLink>
        </div>
      )}
      {children}
    </div>
  );
}
