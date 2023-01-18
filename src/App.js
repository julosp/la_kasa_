import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Logement from "./pages/Logement";
import AboutUs from "./pages/About";
import Error from "./components/Error";


/*APP ROUTE */
function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="logement/:id" element={<Logement />} />
      <Route path="aboutus" element={<AboutUs />} />
      <Route path="*" element={<Error />} />
      <Route path="/error" element={<Error />} />
    </Routes>
  );
}

export default App;
