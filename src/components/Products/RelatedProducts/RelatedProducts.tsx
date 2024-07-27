import { Link } from "react-router-dom"
import { IProducts } from "../../../Service/api/model/ProductsModel"
import ProductsCard from "../../shared/Card/ProductsCard"
type RelatedProductsType ={
  products:IProducts[]
}

const RelatedProducts = ({products}:RelatedProductsType) => {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="font-Poppins font-medium text-4xl text-black text-center">Related Products</h1>
      <ProductsCard products={products}/>
      <Link to={"/shop"} className=" border border-cor-B88E2F py-3 px-20 mx-auto font-Poppins font-semibold text-base text-cor-B88E2F ">Show More</Link>
    </div>
  )
}

export default RelatedProducts
