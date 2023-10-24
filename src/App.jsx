import { useEffect } from "react";
import NavBar from "./components/NavBar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer";
import Propiedad from "./pages/Propiedad";
import PropiedadesPage from "./pages/PropiedadesPage";
import Nosotros from "./pages/Nosotros";
import ServiciosPage from "./pages/ServiciosPage";
import Contacto from "./pages/Contacto";

export default function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <>
      <NavBar />
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="propiedades" element={<PropiedadesPage />} />
        <Route path="sobre-nosotros" element={<Nosotros />} />
        <Route path="servicios" element={<ServiciosPage />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="propiedad" element={<Propiedad />} />
      </Routes>
      <Footer />
    </>
  );
}
