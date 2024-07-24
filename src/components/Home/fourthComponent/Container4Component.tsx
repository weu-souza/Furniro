import { useEffect, useState } from "react";
import Carrossel4C from "./Carrossel4C";
import { IProducts } from "../../../api/ProductsModel";

const Container4Component = () => {
  const [products, setProducts] = useState<IProducts[]>([]);
  useEffect(() => {
    const prod = async () => {
      const response = await fetch("http://localhost:3000/products");
      const data = await response.json();
      setProducts(data);
    };
    prod();
  }, []);
  return (
    <div className="flex flex-wrap gap-10 justify-between">
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
