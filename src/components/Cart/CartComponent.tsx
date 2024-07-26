import { useState } from "react";
import CartDell from "../../assets/icons/Cart/CartDell";

const CartComponent = () => {
    const [count, setCount] = useState<number>(0);
  return (
    <div className="grid grid-cols-6 w-ful gap-8 py-4  items-center justify-between">
        <div className="w-[105px] h-[105px] col-span-1">
        <img src="" alt="img" className=" w-full rounded-xl object-cover " />
        </div>
        <h1 className="font-Poppins font-normal text-base text-cor-9F9F9F col-span-1 ">title</h1>
        <p className="font-Poppins font-normal text-base text-cor-9F9F9F col-span-1">dinheiro</p>
        <div className="flex border border-cor-9F9F9F px-1 py-1 h-12 rounded-xl gap-4 items-center col-span-1">
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
          <p className="font-Poppins font-normal text-base text-black">
            {count}
          </p>
          <button
            onClick={() => setCount(count + 1)}
            className="font-Poppins font-normal text-base text-black p-2"
          >
            +
          </button>
        </div>
        <p className="font-Poppins font-normal text-base text-black col-span-1">subtotal</p>
        <button className="col-span-1"><CartDell/></button>
      </div>
  );
};

export default CartComponent;
