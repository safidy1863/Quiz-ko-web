import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes } from "react-router-dom";
import { renderRoutes, ROUTES } from "./routes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>{renderRoutes(ROUTES)}</Routes>
    </BrowserRouter>
  </StrictMode>
);
