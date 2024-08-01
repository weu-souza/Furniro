import { useEffect, useState } from "react";
import { IProducts } from "../../../Service/api/model/ProductsModel";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import { ICarrinho } from "../../../Service/api/model/CartModel";
import { AddCart } from "../../../Service/Cart/Cart";
import { Addqtd, useAppDispatchCartQtd } from "../../../Service/store/store";

type productType = {
  product: IProducts;
};

type ratingType = {
  rating: number;
};

const Image = ({ product }: productType) => {
  const [image, setImage] = useState<string | null>(null);
  useEffect(() => {
    setImage(product.images.mainImage);
  }, [product.images.mainImage]);
  const handleclick = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    const { src } = e.target as HTMLImageElement;
    setImage(src);
  };
  return (
    <div className="flex flex-col md:flex-row  gap-8 mx-auto lg:mx-0 ">
      <div className="flex flex-row md:flex-col gap-12 w-20 h-14">
        {product.images.gallery.map((img, index) => (
          <img
            onClick={handleclick}
            src={img}
            key={index}
            alt="img1"
            className="w-full object-cover rounded-lg cursor-pointer"
          />
        ))}
      </div>
      <div>
        {image && (
          <img
            src={image}
            alt="img principal"
            className="object-cover w-[450px] md:w-full  md:h-[500px] rounded-lg"
          />
        )}
      </div>
    </div>
  );
};

const Rating = ({ rating }: ratingType) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, index) => (
        <span key={index}>
         <img src="https://imgs-furniro.s3.us-east-2.amazonaws.com/json-mages/project-icons/ProductsIcon/FullStar.svg" alt="" />
        </span>
      ))}
      {hasHalfStar && (
        <span>
          <span>
          <img
        src="https://imgs-furniro.s3.us-east-2.amazonaws.com/json-mages/project-icons/ProductsIcon/HalfStar.svg"
        alt=""
      />
          </span>
        </span>
      )}
    </div>
  );
};

type SizeType = {
  size: string;
  isActive: boolean;
  onClick: () => void;
};

const Size = ({ size, isActive, onClick }: SizeType) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={
          isActive
            ? "cursor-pointer py-3 px-5 rounded-lg bg-cor-B88E2F text-white font-Poppins font-normal text-sm"
            : "cursor-pointer py-3 px-5 rounded-lg bg-cor-F9F1E7 text-black font-Poppins font-normal text-sm"
        }
      >
        {size}
      </button>
    </div>
  );
};

const CardProd = ({ product }: productType) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [count, setCount] = useState<number>(0);
  const dispatch = useAppDispatchCartQtd();

  const handleAddToCart = () => {
    const produto: ICarrinho = {
      ...product,
      quantidade: count,
    };
    if (count > 0) {
      AddCart(produto);
    }
    const i = Number(JSON.parse(localStorage.getItem("carrinho") || "[]").length) ;
    dispatch(Addqtd(i));
  };

  return (
    <div className="flex flex-col max-w-[606px] mx-auto gap-10 pl-10 lg:pl-0:">
      <h1 className="font-Poppins font-normal text-4xl text-black ">
        {product.title}
      </h1>
      <p className="font-Poppins font-medium text-2xl text-cor-9F9F9F">
        Rp. {product.normalPrice}
      </p>
      <div className="flex gap-5 items-center">
        <p>
          <Rating rating={product.rating} />
        </p>
        <p className="text-cor-9F9F9F">|</p>
        <p className="font-Poppins font-normal text-sm text-cor-9F9F9F">
          5 Customer Review
        </p>
      </div>
      <p className=" font-Poppins font-normal text-sm text-black  md:w-[400px]  lg:w-[500px]">
        {product.description.long}
      </p>

      <div className="flex flex-col gap-5">
        <h2 className="font-Poppins font-normal text-sm text-cor-9F9F9F">
          Size
        </h2>
        <div className="flex gap-4">
          {product.sizes.map((size, index) => (
            <Size
              size={size}
              key={index}
              isActive={activeIndex === index}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="font-Poppins font-normal text-sm text-cor-9F9F9F">
          Color
        </h2>
        <div className="flex gap-4">
          {product.colors.map((cor, index) => (
            <div
              key={index}
              className="w-3 h-3 p-4 rounded-full"
              style={{ backgroundColor: `${cor.hex}` }}
            ></div>
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-5  mx-auto ">

        <div className="flex w-40  border border-cor-9F9F9F py-4 px-4 rounded-xl gap-6 items-center">
          <button
            onClick={() => {
              if (count > 0) {
                setCount(count - 1);
              }
            }}
            className="font-Poppins font-normal text-base text-black p-2"
          >
            -
          </button>
          <p className="font-Poppins font-normal text-base text-black p-2">
            {count}
          </p>
          <button
            onClick={() => setCount(count + 1)}
            className="font-Poppins font-normal text-base text-black p-2"
          >
            +
          </button>
        </div>

        <button
          onClick={handleAddToCart}
          className="border border-black py-5 px-10 rounded-xl font-Poppins font-normal text-xl text-black"
        >
          add to cart
        </button>
      </div>

      <div className="border border-cor-D9D9D9 max-w-[605px]"></div>

      <div className="flex flex-col gap-3">
        <p className="font-Poppins font-normal text-base text-cor-9F9F9F flex">
          <span className="mr-[61px]">Sku</span> <span>:{product.sku}</span>
        </p>
        <p className="font-Poppins font-normal text-base text-cor-9F9F9F flex ">
          <span className="mr-[16px]">Category</span>{" "}
          <span>: {product.category}</span>
        </p>
        <div className="flex font-Poppins font-normal text-base text-cor-9F9F9F">
          <span className="mr-[52px]">Tags</span>
          <div className="flex gap-2 ">
            <p>:</p>
            {product.tags.map((tags, index) => (
              <p key={index}>{tags}</p>
            ))}
          </div>
        </div>

        <div className="flex items-center">
          <p className="font-Poppins font-normal text-base text-cor-9F9F9F mr-[44px]">
            Share
          </p>
          <div className="flex flex-wrap gap-1">
            <p className="font-Poppins font-normal text-base text-cor-9F9F9F">
              :
            </p>
            <div className="flex flex-wrap gap-6">
              <Link to={"https://www.facebook.com/"} className="">
                <FontAwesomeIcon icon={faFacebookF} />
              </Link>
              <Link to={"https://x.com/?lang=pt-br"} className="">
                <FontAwesomeIcon icon={faTwitter} />
              </Link>
              <Link to={"https://br.linkedin.com/"} className="">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const Product = ({ product }: productType) => {
  return (
    <div className="max-w-screen-xl flex flex-wrap gap-10 md:gap-5">
      <Image product={product} />
      <CardProd product={product} />
    </div>
  );
};

export default Product;
