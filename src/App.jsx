import { Outlet } from "react-router-dom";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Navbar from "./components/shared/Navbar";
import { HelmetProvider } from "react-helmet-async";

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
    <div className="font-mukta tracking-widest relative">
      {/* navbar */}
      <Navbar></Navbar>

      {/* outlet with dynamic title */}
      <HelmetProvider>
        <Outlet></Outlet>
      </HelmetProvider>
    </div>
  );
};

export default App;
