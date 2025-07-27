import { createRootRoute, Outlet, useLocation } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Navigation from "../ui/Navigation";
import Footer from "../ui/Footer";
import { useEffect } from "react";

export const Route = createRootRoute({
  component: Layout,
});

export function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-svh w-full">
      <Navigation />

      <Outlet />

      <Footer />
      <TanStackRouterDevtools />
    </div>
  );
}
