import { IProducts } from "../../../Service/api/model/ProductsModel";
import {Compare} from "../../../assets/icons/cardIcons/Compare";
import {Like} from "../../../assets/icons/cardIcons/Like";
import Share from "../../../assets/icons/cardIcons/Share";
import { useNavigate } from "react-router-dom";
import { ICarrinho } from "../../../Service/api/model/CartModel";
import { AddCart } from "../../../Service/Cart/Cart";
import { useAppDispatchCartQtd, Addqtd } from "../../../Service/store/store";
type productsCardType = {
  products: IProducts[];
};

type cardsType = {
  products: IProducts;
};
const CardItems = ({ products }: cardsType) => {
  const dispatch = useAppDispatchCartQtd();

  const handleAddCArd = (
    products: IProducts,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    const produto: ICarrinho = {
      ...products,
      quantidade: 1,
    };
    AddCart(produto);
    const i = Number(
      JSON.parse(localStorage.getItem("carrinho") || "[]").length
    );
    dispatch(Addqtd(i));
  };

  return (
    <div className="   flex-auto w-72 cardChildren flex flex-col gap-4  rounded-md">
      <div className="card-bg-opacity ">
      <div className="relative w-full">
      <div className="absolute card-hover   top-32 left-6  flex-col mx-auto z-20">
          <button
            onClick={(e) => handleAddCArd(products, e)}
            className="font-Poppins font-semibold text-base text-cor-E89F71 py-3 px-14 bg-white"
          >
            Add to cart
          </button>
          <div className="flex gap-2">
            <button className="flex items-center gap-1 font-Poppins font-semibold text-base text-white">
            <img src="https://imgs-furniro.s3.us-east-2.amazonaws.com/json-mages/project-icons/cardIcons/Share.svg" alt="" /> {"Share"}
            </button>
            <button className="flex items-center gap-1 font-Poppins font-semibold text-base text-white">
            <img src="https://imgs-furniro.s3.us-east-2.amazonaws.com/json-mages/project-icons/cardIcons/Compare.svg" alt="" /> {"Compare"}
            </button>
            <button className="flex items-center gap-1 font-Poppins font-semibold text-base text-white">
            <img src="https://imgs-furniro.s3.us-east-2.amazonaws.com/json-mages/project-icons/cardIcons/Like.svg" alt="" /> {"Like"}
            </button>
          </div>
        </div>
        <div className="absolute right-6 top-6 card-no-hover">
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
                -{(products.discountPercentage * 100).toFixed(0)}%
              </p>
            </div>
          )}
        </div>
        <img
          src={products.images.mainImage}
          className="object-contain w-full card-opacity"
          alt={products.title}
        />
      </div>
      <div className="flex flex-col gap-2 px-2 pb-2 bg-cor-F4F5F7 card-opacity">
        <h3 className="font-Poppins font-semibold text-2xl text-cor-3A3A3A">
          {products.title}
        </h3>
        <p className="font-Poppins font-medium text-base text-cor-898989">
          {products.description.short}
        </p>
        <div className="flex justify-between ">
          <p className="font-Poppins font-semibold text-xl text-cor-3A3A3A">
            Rp {products.salePrice}
          </p>
          {!products.new && (
            <p className="font-Poppins font-normal text-base text-cor-B0B0B0 line-through">
              Rp {products.normalPrice}
            </p>
          )}
        </div>
      </div>
      </div>
    </div>
  );
};

const Cards = ({ products }: cardsType) => {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate(`/products/${products.sku}`);
  };

  return (
    <div
      onClick={handleRedirect}
      className="card-father cursor-pointer"
    >
    <CardItems products={products} />
      </div>
    
  );
};

const ProductsCard = ({ products }: productsCardType) => {
  return (
    <div className="flex flex-row flex-wrap gap-8 max-w-screen-xl justify-center">
      {products.map((prod) => (
        <Cards products={prod} key={prod.id} />
      ))}
    </div>
  );
};

export default ProductsCard;
