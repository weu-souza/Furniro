import { useState } from "react";
import { ICheckout } from "../../Service/api/model/CheckoutModel";
import { UseFormRegister } from "react-hook-form";

type PlaceType = {
register: UseFormRegister<ICheckout>
}
const PlaceOrder = ({register}:PlaceType) => {

  const nomeProduto = "sofa";
  const quantidade = 2;
  const total = 1200;
  const [bank,setBank] = useState<boolean>(false)
  const [cash,setCash] = useState<boolean>(false)

  const handleChange = (e:React.BaseSyntheticEvent) =>{
    if(e.target.value === "cash"){
      setBank(false)
      setCash(true)
    }
    else{
      setBank(true)
      setCash(false)
    }
   
  }
  return (
    <div className="flex flex-col gap-9 max-w-[533px] px-[37px] w-full">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col gap-5">
          <p className="font-Poppins font-medium text-2xl text-black  ">
            Product
          </p>
          <p className=" font-Poppins font-normal text-base text-cor-9F9F9F">
            {nomeProduto}
            <span className="mx-auto font-Poppins font-medium text-base text-black">
              x {quantidade}
            </span>
          </p>
          <p className="font-Poppins font-normal text-base text-black  ">
            Subtotal
          </p>
          <p className="font-Poppins font-normal text-base text-black ">
            Total
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <p className="font-Poppins font-medium text-2xl text-black ">
            Subtotal
          </p>
          <p className="font-Poppins font-light text-base text-black ">
            Rp. {total}
          </p>
          <p className="font-Poppins font-light text-base text-black ">
            Rp. {total}
          </p>
          <p className="font-Poppins font-bold text-2xl text-cor-B88E2F ">
            Rp. {total}
          </p>
        </div>
      </div>
      <div className="border border-cor-D9D9D9"></div>
      
      
      <div className="flex flex-col gap-9">
        <p className="font-Poppins font-light text-base text-justify text-cor-9F9F9F">
          Make your payment directly into our bank account. Please use your
          Order ID as the payment reference. Your order will not be shipped
          until the funds have cleared in our account.
        </p>
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-x-3">
            <div className={!bank?" w-3 h-3 border border-cor-9F9F9F rounded-full":" bg-black w-3 h-3 rounded-full"}></div>
            <span>Direct Bank Transfer</span>
            <input type="radio" value="bank" className="opacity-0"  {...register("payment",{onChange:handleChange})}/>

          </label >
          <label className="flex items-center gap-x-3">
          <div className={!cash?"w-3 h-3 border border-cor-9F9F9F rounded-full":" bg-black w-3 h-3 rounded-full"}></div>
            Cash On Delivery
            <input type="radio" value="cash" className="opacity-0" {...register("payment",{onChange:handleChange})}/>
            
          </label>
        </div>
        <p className="font-Poppins font-light text-base text-justify text-black">
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account, and for other purposes
          described in our
          <span className="font-Poppins font-semibold text-base text-black">
            privacy policy.
          </span>
        </p>
        <button
          type="submit"
          className="border border-black px-28 py-4 rounded-xl font-Poppins font-normal text-xl mx-auto text-black"
        >
          place order
        </button>
      </div>
    </div>
  );
};

export default PlaceOrder;
