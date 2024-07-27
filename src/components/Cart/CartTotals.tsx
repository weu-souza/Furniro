type cartType = {
  total:number
  handleCheckout:() => void
}

const CartTotals = ({total,handleCheckout}:cartType) => {
    return (
    <div className="  ">
        <div className="bg-cor-F9F1E7 py-4 w-[369px] flex flex-col gap-7">
      <h1 className="font-Poppins font-semibold text-3xl text-black mx-auto">Cart Totals</h1>
      <p className="font-Poppins font-medium text-base text-black mx-auto "> <span className="mr-[62px]">Subtotal</span> <span className="font-Poppins font-normal text-base text-cor-9F9F9F">{total}</span></p>
      <p className="mx-auto font-Poppins font-medium text-base text-black"><span className="mr-[52px]">Total</span>  <span className="font-Poppins font-normal text-xl text-cor-B88E2F ">{total}</span></p>
      <button className="font-Poppins font-normal text-xl text-black border border-black rounded-xl py-3 px-12 mx-auto" onClick={handleCheckout}>Check Out</button>
    </div>
    </div>
  )
}

export default CartTotals
