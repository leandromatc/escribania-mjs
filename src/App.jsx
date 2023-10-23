import { useEffect } from "react";
import NavBar from "./components/NavBar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer";

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
        <Route path="propiedades" element={<Home />} />
        <Route path="sobre-nosotros" element={<Home />} />
        <Route path="servicios" element={<Home />} />
        <Route path="contacto" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}
