import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./pages/Header";
import Inicio from "./pages/Inicio";
import Footer from "./pages/Footer";
import Miembros from "./pages/Miembros";
import Discografia from "./pages/Discografia";
import Error404 from "./pages/Error404";

function App() {
  return (
    <div className="text-light bg-dark vh-100">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/miembros" element={<Miembros />} />
          <Route path="/discografia" element={<Discografia />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
