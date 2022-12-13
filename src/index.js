import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "normalize.css";
import "./index.css";
import "./assets/fonts/Montserrat-VariableFont_wght.ttf";

import Home from "./pages/Home";
import Logement from "./pages/Logement";
import AboutUs from "./pages/About";
import Error from "./components/Error";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="logement" element={<Logement />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
