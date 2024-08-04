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
import Register from "../pages/Register/Register";
import Loading from "../components/shared/Loading/Loading";

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
        element:<Cart />
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
  , {
    path: "/register",
    element: <Register />,
  }
  , {
    path: "/loading",
    element: <Loading />,
  }
]);
