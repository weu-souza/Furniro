import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import CloseCartModal from "../../../assets/icons/Cart/CloseCartModal"
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons"

const  CartItems = () =>{
return(
  <div className=" flex flex-row pt-4 pl-9 gap-[30px] items-center">
    <img src="" alt="img" className="w-[111px] h-[90px] rounded-lg object-cover" />
    <div className="flex flex-row gap-[60px]">
    <div className="flex flex-col">
    <h1 className="font-Poppins font-normal text-base text-black">{"asgard sofa"}</h1>
    <p className="font-Poppins font-medium text-xs text-black flex gap-[15px]
    "> <span>1</span> <span>x</span>  <span className="text-cor-B88E2F">rs. {"250"}</span></p>
    </div>
      <button className="text-cor-9F9F9F "><FontAwesomeIcon icon={faCircleXmark} /></button>
    </div>
  </div>
)
}


const CartModal = () => {
  
  return (
    <div className="flex flex-col w-[417px] shadow-xl shadow-cor-shadow rounded-sm bg-white">
      <div className="flex justify-between px-8 py-7">
      <h1 className="font-Poppins font-semibold text-2xl text-black">Shopping Cart</h1>
      <button><CloseCartModal/></button>
      </div>
      <div className="border border-cor-D9D9D9 max-w-[287px] ml-8"></div>
      <div className="flex flex-col justify-between">
      <CartItems />
      <div className="px-8 ">
      <div className="flex gap-[101px] pb-7">
        <h1 className="font-Poppins font-normal text-base text-black ">subtotal</h1>
        <p className="font-Poppins font-semibold text-base text-cor-B88E2F">rs. {"subtotal"}</p>
      </div>
      </div>
      </div>
      <div className="border border-cor-D9D9D9"></div>

      <div className="p-2 flex justify-around pt-7">
        <button className="py-1  px-7 border border-black rounded-xl font-Poppins font-normal text-xs text-black">cart</button>
        <button className="py-1  px-7 border border-black rounded-xl font-Poppins font-normal text-xs text-black">Checkout</button>
        <button className="py-1  px-7 border border-black rounded-xl font-Poppins font-normal text-xs text-black">Comparison</button>
      </div>

    </div>
  )
}

export default CartModal


