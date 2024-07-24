import ProductsCard from "../../Card/ProductsCard"
import { IProducts } from "../../../api/ProductsModel"

import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

const ContainerTComponent = () => {
  const [products,setProducts] = useState<IProducts[]>([])
    useEffect(()=>{

        const prod =  async  () => {
            const response = await fetch('http://localhost:3000/products')
            const data = await response.json()
            setProducts(data)
            
        }
        prod()

    },[])
  return (
    <div className="flex flex-col gap-8 mx-auto">
      <h3 className="font-Poppins font-bold text-4xl text-center">Our Products</h3>
      <ProductsCard range={8} products={products}/>
      <Link to={"/shop"} className=" border border-cor-B88E2F py-3 px-20 mx-auto font-Poppins font-semibold text-base text-cor-B88E2F ">Show More</Link>
    </div>
  )
}

export default ContainerTComponent
