import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Start from "./pages/Start";
import Navbar from "./pages/Navbar.jsx";
import Produkte from "./pages/Produkte.jsx";
import Ort from "./pages/Ort.jsx";
import "./styles/App.css";


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
    <Navbar />
    <Start />
    <Produkte />
    <Ort />


     <Routes>
       
     </Routes>
   </>
  )
}

export default App;
