import Footing from "../../components/shared/Footing/Footing";
import CartComponent from "../../components/Cart/CartComponent";
import CartTotals from "../../components/Cart/CartTotals";
import Heading from "../../components/shared/Heading/Heading";
import { useCallback, useEffect, useState } from "react";
import { DeleteCart, GetCart } from "../../Service/Cart/Cart";
import { ICarrinho } from "../../Service/api/model/CartModel";
import { Addqtd, useAppDispatchCartQtd } from "../../Service/store/store";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatchCartQtd();

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

  const handleIncrease = (id: number) => {
    const updatedItems = itensCarrinho.map((item) =>
      item.id === id ? { ...item, quantidade: item.quantidade + 1 } : item
    );
    setItensCarrinho(updatedItems);
    localStorage.setItem("carrinho", JSON.stringify(updatedItems));
    dispatch(Addqtd(updatedItems.length));
  };

  const handleDecrease = (id: number) => {
    const updatedItems = itensCarrinho.map((item) =>
      item.id === id && item.quantidade > 0
        ? { ...item, quantidade: item.quantidade - 1 }
        : item
    );
    setItensCarrinho(updatedItems);
    localStorage.setItem("carrinho", JSON.stringify(updatedItems));
    dispatch(Addqtd(updatedItems.length));
  };
  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="flex flex-col max-w-screen-xl gap-14 mx-auto ">
      <Heading />
      <div className="flex flex-wrap gap-11 ">
        <table className=" md:w-[800px]">
          <thead className=" bg-cor-F9F1E7 h-20 ">
            <tr>
              <th className="font-Poppins font-medium text-base text-black">
                
              </th>
              <th className="font-Poppins font-medium text-base text-black">
                Product
              </th>
              <th className="font-Poppins font-medium text-base text-black">
                Price
              </th>
              <th className="font-Poppins font-medium text-base text-black">
                Quantity
              </th>
              <th className="font-Poppins font-medium text-base text-black">
                Subtotal
              </th>
              <th className="font-Poppins font-medium text-base text-black">
              </th>
            </tr>
          </thead>
          <tbody>
            {itensCarrinho &&
              itensCarrinho.map((carrinho) => (
                <CartComponent
                  key={carrinho.id}
                  cart={carrinho}
                  deleteCart={deleteCart}
                  quantidade={carrinho.quantidade}
                  onIncrease={handleIncrease}
                  onDecrease={handleDecrease}
                />
              ))}
          </tbody>
        </table>
        <div className="bg-black flex ">
          <CartTotals total={totalCart} handleCheckout={handleCheckout} />
        </div>
      </div>
      <Footing />
    </div>
  );
};

export default Cart;
