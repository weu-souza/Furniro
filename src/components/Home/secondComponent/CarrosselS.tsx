
import { useNavigate } from "react-router-dom";
import { IProducts } from "../../../Service/api/model/ProductsModel";
import { AddCategory, useAppDispatchCategory } from "../../../Service/store/store";

interface ProductSliderProps {
  products: IProducts[];
}

const getUniqueProductsByCategory = (products: IProducts[]) => {
  const uniqueCategories: { [key: string]: boolean } = {};
  

  return products.filter((prod) => {
    if (!uniqueCategories[prod.category]) {
      uniqueCategories[prod.category] = true;
      return true;
    }
    return false;
  });
};


const ProductSlider = ({ products }:ProductSliderProps) => {
  const uniqueProducts = getUniqueProductsByCategory(products);
  const redirect = useNavigate()
  const dispatch = useAppDispatchCategory();

  const handleRedirect = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
    const {textContent} = e.target as HTMLButtonElement
    console.log(textContent)
    dispatch(AddCategory(String(textContent)))
    redirect('/shop')
  }

  return (
    <div className="flex gap-5 flex-wrap">
    {uniqueProducts.slice(0,3).map((prod) => (
      
        <div key={prod.id}>
          <img
            src={prod.images.mainImage}
            className=" md:max-w-[381px] object-cover h-[480px] rounded-sm mx-auto"
            alt={prod.category}
          />
          <div className="flex justify-center">
          <button onClick={handleRedirect} className="font-Poppins font-semibold text-2xl  text-cor-333333 pt-11">
            {prod.category}
          </button>
          </div>
        
      </div>
    ))}
    </div>
  );

};

export default ProductSlider;
