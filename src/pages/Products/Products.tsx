import Description from "../../components/Products/Description/Description"
import Product from "../../components/Products/Product/Product"
import RelatedProducts from "../../components/Products/RelatedProducts"

const Products = () => {
    
  return (
    <div className="max-w-screen-xl mx-auto flex flex-col gap-10
    ">
      <Product/>

      <Description />
      <RelatedProducts />
    </div>
  )
}
export default Products
