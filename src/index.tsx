import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Website } from "./screens/Website/Website";
import Taguatinga from "./taguatinga/page";


createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Website />} />
        <Route path="/taguatinga" element={<Taguatinga />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
