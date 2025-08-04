/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

interface NavContextType {
  isNavBarOpen: boolean;
  setIsNavBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavContext = createContext<NavContextType | null>(null);

export const useNavBarContext = () => {
  return useContext(NavContext);
};

export default function NavBarProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);

  return (
    <NavContext.Provider value={{ isNavBarOpen, setIsNavBarOpen }}>
      {children}
    </NavContext.Provider>
  );
}
