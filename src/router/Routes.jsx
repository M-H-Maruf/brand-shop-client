import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/home/Home";
import MyCart from "../components/myCart/MyCart";
import Products from "../components/products/Products";
import Auth from './../components/auth/Auth';
import AddProduct from './../components/products/AddProduct';
import UpdateProduct from "../components/products/UpdateProduct";
import ProductDetails from "../components/products/ProductDetails";
import ErrorPage from "../components/shared/ErrorPage";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/my-cart",
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
        loader:  ()=> fetch("https://brand-shop-server-m9sqkj6uc-m-h-marufs-projects.vercel.app/my-cart"),
      },
      {
        path: "/products/:brand",
        element: <Products></Products>,
        loader:  ({params})=> fetch(`https://brand-shop-server-m9sqkj6uc-m-h-marufs-projects.vercel.app/products/${params.brand}`),
      },
      {
        path: "/add-product",
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
      },
      {
        path: "/update-product/:_id",
        element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
        loader:  ({params})=> fetch(`https://brand-shop-server-m9sqkj6uc-m-h-marufs-projects.vercel.app/product-details/${params._id}`),
      },
      {
        path: "/product-details/:_id",
        element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
      },
      {
        path: "/auth",
        element: <Auth></Auth>,
      },
    ],
  },
]);

export default routes;
