import Footing from "../../components/shared/Footing/Footing";
import CartComponent from "../../components/Cart/CartComponent";
import CartTotals from "../../components/Cart/CartTotals";

const Cart = () => {
  
  return (
    <div className="flex flex-col max-w-screen-xl gap-14 mx-auto ">
      <div className="flex gap-14 ">
      <div className=" max-w-[900px] ">
      <div className="grid  grid-cols-4  w-full bg-cor-F9F1E7 py-6  px-32 ">
        <h1 className="font-Poppins font-medium text-base text-black col-span-1">
          Product
        </h1>
        <h1 className="font-Poppins font-medium text-base text-black col-span-1">Price</h1>
        <h1 className="font-Poppins font-medium text-base text-black col-span-1">
          Quantity
        </h1>
        <h1 className="font-Poppins font-medium text-base text-black col-span-1">
          Subtotal
        </h1>
      </div>
      <CartComponent/>
      </div>

        <div><CartTotals/></div>
      </div>
      <Footing />
    </div>
  );
};

export default Cart;
