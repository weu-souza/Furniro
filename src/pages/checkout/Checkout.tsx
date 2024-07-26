import CheckoutForm from "../../components/Checkout/CheckoutForm";
import PlaceOrder from "../../components/Checkout/PlaceOrder";
import Footing from "../../components/shared/Footing/Footing";
import Heading from "../../components/shared/Heading/Heading";
import { useForm, SubmitHandler} from "react-hook-form";
import { ICheckout } from "../../Service/api/model/CheckoutModel";


const Checkout = () => {
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
        <PlaceOrder register={register}/>
      </form>
      <Footing />
    </div>
  );
};

export default Checkout;
