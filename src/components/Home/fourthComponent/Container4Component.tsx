import Carrossel4C from "./Carrossel4C";
import { useAppSelector } from "../../../Service/store/Products/Products.store";

const Container4Component = () => {
  const products = useAppSelector((state) => state.product.products);
  return (
    <div className="flex flex-wrap gap-10 max-w-screen-xl justify-between mx-auto">
      <div className="flex flex-col gap-4 self-center w-[422px]">
        <h2 className="font-Poppins font-bold text-4xl text-cor-3A3A3A">
          50+ Beautiful rooms inspiration
        </h2>
        <p className="font-Poppins font-medium text-base text-cor-616161">
          Our designer already made a lot of beautiful prototipe of rooms that
          inspire you
        </p>
        <button className="font-Poppins font-semibold text-base text-white bg-cor-B88E2F py-3 px-9 self-start">
          Explore More
        </button>
      </div>

      <div className="">
        <Carrossel4C products={products} />
      </div>
    </div>
  );
};

export default Container4Component;
