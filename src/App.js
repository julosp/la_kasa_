import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Logement from "./pages/Logement";
import AboutUs from "./pages/About";
import Error from "./components/Error";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="logement/:id" element={<Logement />} />
      <Route path="aboutus" element={<AboutUs />} />
      <Route path="*" element={<Error />} />
      <Route path="/error" element={<Error />} />
      <Route path="/logement/*" element={<Error />} />
    </Routes>
  );
}

export default App;
