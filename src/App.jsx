import { Outlet } from "react-router-dom";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Navbar from "./components/shared/Navbar";
import { HelmetProvider } from "react-helmet-async";
import Footer from './components/shared/Footer';

const App = () => {
  // initializing aos
  useEffect(() => {
    Aos.init({
      easing: "ease-out-quart",
      delay: 0,
      duration: 750,
    });
  }, []);

  return (
    <div className="font-mukta tracking-widest relative bg-black/10">
      {/* navbar */}
      <Navbar></Navbar>

      {/* outlet with dynamic title */}
      <HelmetProvider>
        <Outlet></Outlet>
      </HelmetProvider>

      {/* footer */}
      <Footer></Footer>
    </div>
  );
};

export default App;
