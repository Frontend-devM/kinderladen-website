
import Navbar from "../pages/Navbar";
import Start from "../pages/Start";
import Produkte from "../pages/Produkte";
import Ort from "../pages/Ort";
import Footer from "../pages/Footer";

function MainLayout() {
  return (
    <>
      <Navbar />
      <Start />
      <Produkte />
      <Ort />
      <Footer />
    </>
  );
}

export default MainLayout;
