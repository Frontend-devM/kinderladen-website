import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Start from "./pages/Start";
import Navbar from "./pages/Navbar.jsx";
import Produkte from "./pages/Produkte.jsx";
import Ort from "./pages/Ort.jsx";
import Footer from "./pages/Footer.jsx";
import AppDownload from "./pages/AppDownload.jsx";
import "./styles/App.css";
import "leaflet/dist/leaflet.css";
import MainLayout from "./pages/MainLayout.jsx";

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/AppDownload" element={<AppDownload />} />
      </Routes>
    </>
  );
}

export default App;
