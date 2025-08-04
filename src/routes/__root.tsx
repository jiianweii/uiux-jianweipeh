import { createRootRoute, Outlet, useLocation } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Navigation from "../ui/Navigation";
import Footer from "../ui/Footer";
import { useEffect } from "react";
import NavBarProvider from "../providers/NavBarProvider";
import Main from "../ui/Main";
import NotFound from "./notFound";

export const Route = createRootRoute({
  component: Layout,
  notFoundComponent: NotFound,
});

export function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <NavBarProvider>
      <div className="min-h-svh w-full">
        <Navigation />
        <Main>
          <Outlet />
        </Main>
        <Footer />
        <TanStackRouterDevtools />
      </div>
    </NavBarProvider>
  );
}
