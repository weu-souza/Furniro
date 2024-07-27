import Footing from "../../components/shared/Footing/Footing";
import CartComponent from "../../components/Cart/CartComponent";
import CartTotals from "../../components/Cart/CartTotals";
import Heading from "../../components/shared/Heading/Heading";
import { useCallback, useEffect, useState } from "react";
import { AddCart, DeleteCart, GetCart } from "../../Service/Cart/Cart";
import { ICarrinho } from "../../Service/api/model/CartModel";
import { Addqtd, useAppDispatchCartQtd } from "../../Service/store/store";

const Cart = () => {
  const dispatch = useAppDispatchCartQtd();
  const [itensCarrinho, setItensCarrinho] = useState<ICarrinho[]>([]);
  const [totalCart, setTotalCart] = useState(0);

const exibeCart = () =>{
 
const itens = GetCart();
setItensCarrinho(itens);
}

  useEffect(() => {
    exibeCart()
  }, []);

  const calculaTotal = useCallback(() => {
    return Number(itensCarrinho.reduce((prev, curr) => prev + (curr.normalPrice * curr.quantidade), 0).toFixed(2));
  }, [itensCarrinho]);

  useEffect(() => {
    const total = calculaTotal();
    setTotalCart(total);
  }, [itensCarrinho, calculaTotal]);

  const deleteCart = (id:number,e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
    e.stopPropagation()
    DeleteCart(id)
    exibeCart()
    calculaTotal()
    const i = Number(JSON.parse(localStorage.getItem("carrinho") || "[]").length) ;
    dispatch(Addqtd(i));
  }

  
  
  return (
    <div className="flex flex-col max-w-screen-xl gap-14 mx-auto ">
        <Heading/>
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
      {itensCarrinho&& itensCarrinho.map((carrinho)=>(
        <CartComponent key={carrinho.id} cart={carrinho} deleteCart={deleteCart} />
      ))}
      </div>

        <div><CartTotals total={totalCart}/></div>
      </div>
      <Footing />
    </div>
  );
};

export default Cart;
