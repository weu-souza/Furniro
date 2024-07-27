import { Outlet } from "react-router-dom";
import Header from "./components/shared/header/Header";
import Footer from "./components/shared/footer/Footer";
import '@splidejs/react-splide/css';

import { getProducts, useAppDispatch } from "./Service/store/store";
import fetchProducts from "./Service/api/GetProducts";
import { useEffect} from "react";



function App() {
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    const prod = async () => {
      try {
        const data = await fetchProducts();
        dispatch(getProducts(data));
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    prod();
  }, [dispatch]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
