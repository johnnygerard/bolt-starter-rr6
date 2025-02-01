import { memo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout.tsx";
import Home from "./pages/home.tsx";
import NotFound from "./pages/not-found.tsx";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default memo(AppRouter);
