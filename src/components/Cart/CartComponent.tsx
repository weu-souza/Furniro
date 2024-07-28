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
    <div className="grid grid-cols-6 w-ful gap-8 py-4  items-center justify-between">
        <div className="w-[105px] h-[105px] col-span-1">
        <img src={cart.images.mainImage} alt="img" className=" w-full rounded-xl object-cover " />
        </div>
        <h1 className="font-Poppins font-normal text-base text-cor-9F9F9F col-span-1 ">{cart.title}</h1>
        <p className="font-Poppins font-normal text-base text-cor-9F9F9F col-span-1">{cart.normalPrice}</p>
        <div className="flex border border-cor-9F9F9F px-1 py-1 h-12 rounded-xl gap-4 items-center col-span-1">
          <button
            onClick={() => onDecrease(cart.id)}
            className="font-Poppins font-normal text-base text-black p-2"
          >
            -
          </button>
          <p className="font-Poppins font-normal text-base text-black p-2">
            {quantidade}
          </p>
          <button
            onClick={() => onIncrease(cart.id) }
            className="font-Poppins font-normal text-base text-black p-2"
          >
            +
          </button>
        </div>
        <p className="font-Poppins font-normal text-base text-black col-span-1">Rp. {(cart.normalPrice * cart.quantidade).toFixed(2)}</p>
        <button className="col-span-1" onClick={(e) => deleteCart(cart.id,e)}><CartDell/></button>
      </div>
  );
};

export default CartComponent;
