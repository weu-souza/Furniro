import ProductsCard from "../../Card/ProductsCard"
import { IProducts } from "../../../api/ProductsModel"
import {products}  from "../../../../json/json-api-products-w12/_database.json"
import { Link } from "react-router-dom"

const ContainerTComponent = () => {
  const Products:IProducts[] = products 
  return (
    <div className="flex flex-col gap-8 mx-auto">
      <h3 className="font-Poppins font-bold text-4xl text-center">Our Products</h3>
      <ProductsCard range={8} products={Products}/>
      <Link to={"/shop"} className=" border border-cor-B88E2F py-3 px-20 mx-auto font-Poppins font-semibold text-base text-cor-B88E2F ">Show More</Link>
    </div>
  )
}

export default ContainerTComponent
