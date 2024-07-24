interface Product {
  id: string;
  category: string;
  images: {
    mainImage: string;
  };
}

interface ProductSliderProps {
  products: Product[];
}

const getUniqueProductsByCategory = (products: Product[]) => {
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

  return (
    <div className="flex gap-5 flex-wrap">
    {uniqueProducts.slice(0,3).map((prod) => (
      
        <div key={prod.id}>
          <img
            src={prod.images.mainImage}
            className=" md:max-w-[381px] object-cover h-[480px] rounded-sm mx-auto"
            alt={prod.category}
          />
          <h1 className="font-Poppins font-semibold text-2xl text-center text-cor-333333 pt-11">
            {prod.category}
          </h1>
        
      </div>
    ))}
    </div>
  );

};

export default ProductSlider;
