import { useState } from "react";
import { IProducts } from "../../api/ProductsModel";
import Compare from "../../assets/icons/cardIcons/Compare";
import Like from "../../assets/icons/cardIcons/Like";
import Share from "../../assets/icons/cardIcons/Share";

type productsCardType = {
  products: IProducts[];
  range: number;
};

type cardsType = {
  products: IProducts;
};

const Cards = ({ products }: cardsType) => {
    const [hover,setHover] = useState<boolean>(false);
    const MouseEnter = () =>{
       setHover(true)
    }

    const mouseDown = () =>{
        setHover(false)
    }
    
    
    
  return (
    <div onMouseEnter={MouseEnter} onMouseLeave={mouseDown}>
            {hover?( <div className="relative flex-auto w-72 flex bg-cor-3A3A3A flex-col gap-4 p-2 rounded-md shadow-lg">
          <div className="absolute inset-0 bg-black opacity-30 rounded-md"></div>
          <div className="w-full relative z-10">
            <div className="absolute top-32 left-6 flex flex-col mx-auto z-20">
              <button className="font-Poppins font-semibold text-base text-cor-E89F71 py-3 px-14 bg-white">
                Add to cart
              </button>
              <div className="flex gap-2">
                <button className="flex items-center gap-1 font-Poppins font-semibold text-base text-white">
                  <Share /> {"Share"}
                </button>
                <button className="flex items-center gap-1 font-Poppins font-semibold text-base text-white">
                  <Compare /> {"Compare"}
                </button>
                <button className="flex items-center gap-1 font-Poppins font-semibold text-base text-white">
                  <Like /> {"Like"}
                </button>
              </div>
            </div>
            <img
              src={products.images.mainImage}
              className="object-contain w-full opacity-10"
              alt={products.title}
            />
          </div>
          <div className="flex flex-col gap-2 opacity-100 z-10">
            <h3 className="font-Poppins font-semibold text-2xl text-cor-3A3A3A">
              {products.title}
            </h3>
            <p className="font-Poppins font-medium text-base text-cor-898989">
              {products.description.short}
            </p>
            <div className="flex justify-between">
              <p className="font-Poppins font-semibold text-xl text-cor-3A3A3A">
                Rp {products.normalPrice}
              </p>
              {!products.new && (
                <p className="font-Poppins font-normal text-base text-cor-B0B0B0 line-through">
                  Rp {products.salePrice}
                </p>
              )}
            </div>
          </div>
        </div>):
            (<div className="flex-auto w-72 flex flex-col gap-4 bg-cor-F4F5F7 p-2 rounded-md">
      <div className="relative w-full">
        <p className="absolute right-6 top-6">
          {products.new ? (
            <div className="w-12 rounded-full m-2 bg-cor-2EC1AC flex justify-center">
              <div className="">
                <p
                  className="py-3 px-3 
        font-Poppins font-medium text-base text-white"
                >
                  new
                </p>
              </div>
            </div>
          ) : (
            <div className="w-12 rounded-full m-2 bg-cor-E97171 flex justify-center">
              <p
                className="py-3 px-3 
        font-Poppins font-medium text-base
         text-white"
              >
                -{products.discountPercentage * 100}%
              </p>
            </div>
          )}
        </p>
        <img
          src={products.images.mainImage}
          className="object-contain w-full"
          alt={products.title}
        />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="font-Poppins font-semibold text-2xl text-cor-3A3A3A">
          {products.title}
        </h3>
        <p className="font-Poppins font-medium text-base text-cor-898989">
          {products.description.short}
        </p>
        <div className="flex justify-between ">
          <p className="font-Poppins font-semibold text-xl text-cor-3A3A3A">
            Rp {products.normalPrice}
          </p>
          {!products.new && (
            <p className="font-Poppins font-normal text-base text-cor-B0B0B0 line-through">
              Rp {products.salePrice}
            </p>
          )}
        </div>
      </div>
    </div>)}
        </div>
    
  );
};



const ProductsCard = ({ products, range }: productsCardType) => {
    
  return (
    <div  className="flex flex-row flex-wrap gap-8 max-w-screen-xl">
      {products.slice(0, range).map((prod) => (
        <Cards products={prod} key={prod.id} />
      ))}
    </div>
  );
};

export default ProductsCard;
