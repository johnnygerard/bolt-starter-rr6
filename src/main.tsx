import { HeroUIProvider } from "@heroui/system";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "./app-router.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HeroUIProvider>
      <AppRouter />
    </HeroUIProvider>
  </StrictMode>,
);
