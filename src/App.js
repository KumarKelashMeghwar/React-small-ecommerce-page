import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "./Navbar";
import MainSection from "./MainSection";
import SixProductsSection from "./SixProductsSection";
import MainProductsSection from "./MainProductsSection";
import Footer from "./Footer";
import "./pagecss.css";

function App() {
  return (
    <>
      <Navbar />
      <MainSection />
      <SixProductsSection />
      <MainProductsSection />
      <Footer />
    </>
  );
}

export default App;
