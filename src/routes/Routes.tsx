import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Shop from "../pages/shop/Shop";
import App from "../App";
import Login from "../pages/login/Login";
import Products from "../pages/Products/Products";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/checkout/Checkout";
import ProtectedRoutes from "./ProtectedRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path:"products/:sku",
        element:<Products />

      }
      ,{
        path:"cart",
        element:<ProtectedRoutes  />,
        children:[{path:"",element:<Cart />}]
      }
      ,{
        path:"checkout",
        element:<ProtectedRoutes />,
        children:[{path:"",element:<Checkout />}]
      }
    ],
   
  }, {
    path: "/login",
    element: <Login />,
  }
]);
