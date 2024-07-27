import { useParams } from "react-router-dom";
import Description from "../../components/Products/Description/Description"
import Product from "../../components/Products/Product/Product"
import RelatedProducts from "../../components/Products/RelatedProducts/RelatedProducts"
import { useAppSelector } from "../../Service/store/store";
import { useEffect, useState } from "react";
import { IProducts } from "../../Service/api/model/ProductsModel";


const Products = () => {
    const params = useParams()
    const products = useAppSelector((state) => state.product.products);
    const selectedSku = params.sku
    const filteredProducts = products.filter(product => product.sku === selectedSku);
    const [mapProd,setMapProd] = useState<IProducts>()
    const category =  products.filter(product => product.category === mapProd?.category);

useEffect(()=>{
    if (filteredProducts.length > 0) {
        setMapProd(filteredProducts[0]);
      }
},[filteredProducts,mapProd])
   
  return (
    <div className="max-w-screen-xl mx-auto flex flex-col gap-20">
    {mapProd && <Product product={mapProd}/>}
      {mapProd && <Description product={mapProd}/>}
      <RelatedProducts products={category.slice(0,4)}/>
    </div>
  )
}
export default Products
