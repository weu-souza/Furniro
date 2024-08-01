import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { ICarrinho } from "../../../Service/api/model/CartModel";
import { DeleteCart, GetCart } from "../../../Service/Cart/Cart";
import { Addqtd, useAppDispatchCartQtd } from "../../../Service/store/store";

type cartType = {
  itensCarrinho: ICarrinho;
  deleteCart: (
    n: number,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
};
const CartItems = ({ itensCarrinho, deleteCart }: cartType) => {
 
  return (
    <div className=" flex flex-row pt-4 pl-9 gap-[30px] items-center ">
      <img
        src={itensCarrinho.images.mainImage}
        alt="img"
        className="w-[111px] h-[90px] rounded-lg object-cover"
      />
      <div className="flex flex-row gap-[60px]">
        <div className="flex flex-col">
          <h1 className="font-Poppins font-normal text-base text-black">
            {itensCarrinho.title}
          </h1>
          <p
            className="font-Poppins font-medium text-xs text-black flex gap-[15px]
    "
          >
            <span>{itensCarrinho.quantidade}</span> <span>x</span>{" "}
            <span className="text-cor-B88E2F">
              Rp. {itensCarrinho.normalPrice}
            </span>
          </p>
        </div>
        <button
          onClick={(e) => deleteCart(itensCarrinho.id, e)}
          className="text-cor-9F9F9F "
        >
          <FontAwesomeIcon icon={faCircleXmark} />
        </button>
      </div>
    </div>
  );
};

const CartModal = () => {
  const dispatch = useAppDispatchCartQtd();
  const navigate = useNavigate();
  const [itensCarrinho, setItensCarrinho] = useState<ICarrinho[]>([]);
  const [totalCart, setTotalCart] = useState(0);

  const exibeCart = () => {
    const itens = GetCart();
    setItensCarrinho(itens);
  };

  useEffect(() => {
    exibeCart();
  }, []);

  const calculaTotal = useCallback(() => {
    return Number(
      itensCarrinho
        .reduce((prev, curr) => prev + curr.normalPrice * curr.quantidade, 0)
        .toFixed(2)
    );
  }, [itensCarrinho]);

  useEffect(() => {
    const total = calculaTotal();
    setTotalCart(total);
  }, [itensCarrinho, calculaTotal]);

  const deleteCart = (
    id: number,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    DeleteCart(id);
    exibeCart();
    calculaTotal();
    const i = Number(
      JSON.parse(localStorage.getItem("carrinho") || "[]").length
    );
    dispatch(Addqtd(i));
  };

  const redirectCart = () => {
    navigate("/cart");
  };

  const redirectCheckout = () => {
    navigate("/checkout");
  };

  

  return (
    <div className="flex flex-col w-[390px] md:w-[417px] shadow-xl px-2 py-4 shadow-cor-shadow rounded-sm  bg-white ">
      <div className="flex justify-between px-8 py-7">
        <h1 className="font-Poppins font-semibold text-2xl text-black">
          Shopping Cart
        </h1>
        <button>
        <img
        src="https://imgs-furniro.s3.us-east-2.amazonaws.com/json-mages/project-icons/Cart/CloseCartModal.svg"
        alt=""
      />
        </button>
      </div>
      <div className="border border-cor-D9D9D9 max-w-[287px] ml-8">

      </div>
      <div className="flex flex-col justify-between ">
        <div className=" cart-scrool  ">
        {itensCarrinho.length > 0 ?
          itensCarrinho.map((cart) => (
            <CartItems
              key={cart.id}
              itensCarrinho={cart}
              deleteCart={deleteCart}
            />
          )):( <div className="sem-tarefas">
            <div>
            <img src="https://imgs-furniro.s3.us-east-2.amazonaws.com/json-mages/project-images/NoItenCart.png" alt="cart vazio"/>
            </div>
          </div>)}


        </div>
        <div className="px-8 pt-10 pb-3">
          <div className="flex gap-[101px] ">
            <h1 className="font-Poppins font-normal text-base text-black ">
              subtotal
            </h1>
            <p className="font-Poppins font-semibold text-base text-cor-B88E2F">
              Rp. {totalCart}
            </p>
          </div>
        </div>
      </div>
      <div className="border border-cor-D9D9D9"></div>

      <div className="p-2 flex justify-around pt-7">
        <button
          className="py-1  px-7 border border-black rounded-xl font-Poppins font-normal text-xs text-black"
          onClick={redirectCart}
        >
          cart
        </button>
        <button
          className="py-1  px-7 border border-black rounded-xl font-Poppins font-normal text-xs text-black"
          onClick={redirectCheckout}
        >
          Checkout
        </button>
        <button className="py-1  px-7 border border-black rounded-xl font-Poppins font-normal text-xs text-black">
          Comparison
        </button>
      </div>
    </div>
  );
};

export default CartModal;
