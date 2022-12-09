import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "normalize.css";
import "./index.css";
import "./assets/fonts/Montserrat-VariableFont_wght.ttf";

import Home from "./pages/Home";
import Teste from "./pages/Teste";
import Error from "./components/Error";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Error />} />
        <Route index element={<Home />} />
        <Route path="teste" element={<Teste />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
