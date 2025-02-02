/**
 * @file App component
 *
 * This file contains configuration for the following:
 * - Routing: React Router 6
 * - Icon library: Phosphor context provider with global default icon style
 * - UI library: HeroUI context provider configured with React Router hooks
 *
 * @see https://www.heroui.com/docs/guide/routing#react-router
 */
import { HeroUIProvider } from "@heroui/system";
import { IconContext, IconProps } from "@phosphor-icons/react";
import { memo } from "react";
import {
  NavigateOptions,
  Route,
  Routes,
  useHref,
  useNavigate,
} from "react-router-dom";
import Layout from "./layout.tsx";
import Home from "./pages/home.tsx";
import NotFound from "./pages/not-found.tsx";

declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NavigateOptions;
  }
}

const App = () => {
  const navigate = useNavigate();
  const defaultIconProps: IconProps = {
    color: "black",
    size: "2rem",
    weight: "regular",
    mirrored: false,
  };

  return (
    <IconContext.Provider value={defaultIconProps}>
      <HeroUIProvider navigate={navigate} useHref={useHref}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </HeroUIProvider>
    </IconContext.Provider>
  );
};

export default memo(App);
