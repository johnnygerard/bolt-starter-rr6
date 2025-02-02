import { HeroUIProvider } from "@heroui/system";
import { IconContext, IconProps } from "@phosphor-icons/react";
import { memo } from "react";
import AppRouter from "./app-router.tsx";

const App = () => {
  const defaultIconProps: IconProps = {
    color: "black",
    size: "2rem",
    weight: "regular",
    mirrored: false,
  };

  return (
    <HeroUIProvider>
      <IconContext.Provider value={defaultIconProps}>
        <AppRouter />
      </IconContext.Provider>
    </HeroUIProvider>
  );
};

export default memo(App);
