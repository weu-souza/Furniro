import CheckoutForm from "../../components/Checkout/CheckoutForm";
import PlaceOrder from "../../components/Checkout/PlaceOrder";
import Footing from "../../components/shared/Footing/Footing";
import Heading from "../../components/shared/Heading/Heading";
import { useForm, SubmitHandler} from "react-hook-form";
import { ICheckout } from "../../Service/api/model/CheckoutModel";
import { GetCart } from "../../Service/Cart/Cart";
import { useCallback, useEffect, useState } from "react";
import { ICarrinho } from "../../Service/api/model/CartModel";

const Checkout = () => {
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
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<ICheckout>();

      const onSubmit: SubmitHandler<ICheckout> = (data,e) => {
        e?.preventDefault()
        console.log(data);
        
      };
  return (
    <div className="flex flex-col gap-5 mx-auto max-w-screen-xl">
      <Heading />
      <form onSubmit={handleSubmit(onSubmit)} className="flex gap-x-32">
        <CheckoutForm  errors={errors} register={register}/>
        <PlaceOrder register={register} checkout={itensCarrinho} total={totalCart}/>
      </form>
      <Footing />
    </div>
  );
};

export default Checkout;
