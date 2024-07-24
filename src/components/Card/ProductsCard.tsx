import { IProducts } from "../../api/ProductsModel";

type productsCardType = {
  products: IProducts[];
  range: number;
};

type cardsType = {
  products: IProducts;
};


const Cards = ({ products }: cardsType) => {
  return (
    <div className="flex-auto w-72 flex flex-col gap-4 bg-cor-F4F5F7 p-2 rounded-md">
      <div className="relative w-full">
        <p className="absolute right-6 top-6">{products.new?<div className="w-12 rounded-full m-2 bg-cor-2EC1AC flex justify-center"><div className=""><p className="py-3 px-3 
        font-Poppins font-medium text-base text-white">new</p></div></div>:<div className="w-12 rounded-full m-2 bg-cor-E97171 flex justify-center"><p className="py-3 px-3 
        font-Poppins font-medium text-base
         text-white">-{products.discountPercentage*100}%</p></div> }</p> 
      <img src={products.images.mainImage} className="object-contain w-full" alt={products.title} />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="font-Poppins font-semibold text-2xl text-cor-3A3A3A">{products.title}</h3>
        <p className="font-Poppins font-medium text-base text-cor-898989">{products.description.short}</p>
        <div className="flex justify-between ">
        <p className="font-Poppins font-semibold text-xl text-cor-3A3A3A">Rp {products.normalPrice}</p>
        {!products.new && <p className="font-Poppins font-normal text-base text-cor-B0B0B0 line-through">Rp {products.salePrice}</p>}
        </div>
      </div>
    </div>
  );
};

const ProductsCard = ({ products, range }: productsCardType) => {
  return (
    <div className="flex flex-row flex-wrap gap-8 max-w-screen-xl">
      {products.slice(0,8).map((prod) => (
        <Cards products={prod} key={prod.id} />
      ))}
    </div>
  );
};

export default ProductsCard;
