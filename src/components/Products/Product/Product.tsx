import { useState } from "react"
import { IProducts } from "../../../Service/api/model/ProductsModel"

type productType={
    product?:IProducts
}

const Image = () =>{
  const [image,setImage] = useState<string>()
 const handleclick =(e:React.MouseEvent<HTMLImageElement, MouseEvent>) =>{
  const {src} = e.target as HTMLImageElement 
  console.log(src)
  setImage(src)

  }
  return(
    <div className="flex gap-8">
      <div className="flex flex-col gap-12 w-20 h-14">
        <img onClick={handleclick} src="1" alt="img1" />
        <img onClick={handleclick} src="2" alt="img2" />
        <img onClick={handleclick} src="3" alt="img3" />
        <img onClick={handleclick} src="4" alt="img4" />
      </div>
      <div className="w-[423px] h-[500px]">
        <img src={image} alt="img principal" />
      </div>
    </div>
  )
}
const Product = ({product}:productType) => {
  return (
    <div>
      <div>
        
      <Image />
      </div>
    </div>
  )
}

export default Product
