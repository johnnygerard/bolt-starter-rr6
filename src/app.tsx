import { HeroUIProvider } from "@heroui/system";
import { memo } from "react";
import AppRouter from "./app-router.tsx";

const App = () => {
  return (
    <HeroUIProvider>
      <AppRouter />
    </HeroUIProvider>
  );
};

export default memo(App);
