import { Outlet } from "react-router-dom";
import Header from "./components/shared/header/Header";
import Footer from "./components/shared/footer/Footer";
import '@splidejs/react-splide/css';
function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
