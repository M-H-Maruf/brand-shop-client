import { HelmetProvider } from "react-helmet-async";
import { Outlet } from "react-router-dom";


const App = () => {
  return (
    <div>
      <HelmetProvider>
      <Outlet></Outlet>
      </HelmetProvider>
      
    </div>
  );
};

export default App;