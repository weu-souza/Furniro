import ProductsCard from "../../shared/Card/ProductsCard"
import { Link } from "react-router-dom"
import { useAppSelector } from "../../../Service/store/Products/Products.store"

const ContainerTComponent = () => {
  const products = useAppSelector((state) => state.product.products);
  return (
    <div className="flex flex-col gap-8 mx-auto">
      <h3 className="font-Poppins font-bold text-4xl text-center">Our Products</h3>
      <ProductsCard products={products.slice(0,8)}/>
      <Link to={"/shop"} className=" border border-cor-B88E2F py-3 px-20 mx-auto font-Poppins font-semibold text-base text-cor-B88E2F ">Show More</Link>
    </div>
  )
}

export default ContainerTComponent
