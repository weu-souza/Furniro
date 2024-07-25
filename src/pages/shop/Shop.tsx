
import { useEffect, useState } from "react"
import ProductsCard from "../../components/shared/Card/ProductsCard"
import Filter from "../../components/shared/Filter/Filter"
import Footing from "../../components/shared/Footing/Footing"
import Heading from "../../components/shared/Heading/Heading"
import Paginator from "../../components/Shop/Paginator/Paginator"
import { IProducts } from "../../api/ProductsModel"


const Shop = () => {
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
    <div className="flex flex-col gap-10 max-w-screen-xl mx-auto">
      <div>
      <Heading />
      <Filter />
      </div>
      <div>
        <ProductsCard products={products} range={8}/>
      <div className="flex justify-center ">
      <Paginator/>
      </div>
      </div>
     <Footing />
    </div>
  )
}

export default Shop
