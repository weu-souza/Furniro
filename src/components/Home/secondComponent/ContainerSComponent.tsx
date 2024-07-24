import { useEffect, useState } from "react"
import ProductSlider from "./CarrosselS"
import { IProducts } from "../../../api/ProductsModel"

const ContainerSComponent = () => {
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
    <div className="flex flex-col gap-12">
      <h1 className="font-Poppins font-bold text-3xl text-cor-333333 text-center">Browse The Range</h1>
      <p className="font-Poppins font-normal text-xl text-center text-cor-666666">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="flex justify-center ">
      <ProductSlider products={products}/>
      </div>
    </div>
  )
}

export default ContainerSComponent
