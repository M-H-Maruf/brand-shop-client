import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/home/Home";
import MyCart from "../components/myCart/MyCart";
import Products from "../components/products/Products";
import Auth from './../components/auth/Auth';
import AddProduct from './../components/products/AddProduct';
import UpdateProduct from "../components/products/UpdateProduct";
import ProductDetails from "../components/products/ProductDetails";

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
        loader:  ({params})=> fetch(`http://localhost:5000/products/${params.brand}`),
      },
      {
        path: "/add-product",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/update-product/:_id",
        element: <UpdateProduct></UpdateProduct>,
        loader:  ({params})=> fetch(`http://localhost:5000/product-details/${params._id}`),
      },
      {
        path: "/product-details/:_id",
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "/auth",
        element: <Auth></Auth>,
      },
    ],
  },
]);

export default routes;
