import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/home/Home";
import MyCart from "../components/myCart/MyCart";
import Products from "../components/products/Products";
import Auth from './../components/auth/Auth';
import AddProduct from './../components/products/AddProduct';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/my-cart",
        element: <MyCart></MyCart>,
      },
      {
        path: "/products/:brand",
        element: <Products></Products>,
      },
      {
        path: "/add-product",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/auth",
        element: <Auth></Auth>,
      },
    ],
  },
]);

export default routes;
