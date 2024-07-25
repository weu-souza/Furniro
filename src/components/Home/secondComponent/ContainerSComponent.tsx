import ProductSlider from "./CarrosselS"
import { useAppSelector } from "../../../Service/store/Products/Products.store";

const ContainerSComponent = () => {
  const products = useAppSelector((state) => state.product.products);
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
