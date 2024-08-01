
import { ICarrinho } from "../../Service/api/model/CartModel";

type cartType = {
  cart: ICarrinho;
  deleteCart: (
    id: number,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  quantidade: number;
  onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
};

const CartComponent = ({
  cart,
  deleteCart,
  quantidade,
  onIncrease,
  onDecrease,
}: cartType) => {
  return (
    <div className="flex w-ful gap-5  py-4  items-center ">
      <div className="w-[105px] h-[105px] col-span-1">
        <img
          src={cart.images.mainImage}
          alt="img"
          className=" w-full rounded-xl object-cover "
        />
      </div>
      <div className="grid grid-cols-3 md:grid-cols-5 w-full items-center gap-5">
      <h1 className="font-Poppins font-normal text-base text-cor-9F9F9F  col-span-3 md:col-span-1 ">
        {cart.title}
      </h1>
      <p className="font-Poppins font-normal text-base text-cor-9F9F9F col-span-1">
        Rp. {cart.normalPrice}
      </p>
      <div className="flex border border-cor-9F9F9F px-1 w-[120px] py-1 h-12 rounded-xl gap-4 items-center col-span-2 md:col-span-1">
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
          onClick={() => onIncrease(cart.id)}
          className="font-Poppins font-normal text-base text-black p-2"
        >
          +
        </button>
      </div>
      <p className="font-Poppins font-normal text-base text-black col-span-1">
        Rp. {(cart.normalPrice * cart.quantidade).toFixed(2)}
      </p>
      <button className="col-span-1" onClick={(e) => deleteCart(cart.id, e)}>
      <img src="https://imgs-furniro.s3.us-east-2.amazonaws.com/json-mages/project-icons/Cart/CartDell.svg" alt="" />
      </button>
      </div>
    </div>
  );
};

export default CartComponent;
