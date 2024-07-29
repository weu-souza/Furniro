import {CartDell} from "../../assets/icons/Cart/CartDell";
import { ICarrinho } from "../../Service/api/model/CartModel";

type cartType ={
  cart:ICarrinho
  deleteCart:(id:number,e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>void
  quantidade:number;
  onIncrease: (id: number) => void
  onDecrease:(id: number) => void
}

const CartComponent = ({cart,deleteCart,quantidade,onIncrease,onDecrease}:cartType) => {
  return (
    <tr className="text-center">
    <td className="w-[105px] h-[105px]">
      <img src={cart.images.mainImage} alt="img" className="w-full rounded-xl object-cover mx-auto" />
    </td>
    <td className="font-Poppins font-normal text-base text-cor-9F9F9F w-60">{cart.title}</td>
    <td className="font-Poppins font-normal text-base text-cor-9F9F9F">Rp. {cart.normalPrice}</td>
    <td className="w-[130px]">
      <div className="flex justify-center items-center border border-cor-9F9F9F px-1 py-1 h-12  rounded-xl gap-4">
      <button onClick={() => onDecrease(cart.id)} className="font-Poppins font-normal text-base text-black p-2">-</button>
      <p className="font-Poppins font-normal text-base text-black p-2">{quantidade}</p>
      <button onClick={() => onIncrease(cart.id)} className="font-Poppins font-normal text-base text-black p-2">+</button>
      </div>
     
    </td>
    <td className="font-Poppins font-normal text-base text-black">Rp. {(cart.normalPrice * cart.quantidade).toFixed(2)}</td>
    <td className="text-center">
      <button onClick={(e) => deleteCart(cart.id, e)}>
        <CartDell />
      </button>
    </td>
  </tr>
  );
};

export default CartComponent;
