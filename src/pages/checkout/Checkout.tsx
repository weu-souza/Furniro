import CheckoutForm from "../../components/Checkout/CheckoutForm"
import PlaceOrder from "../../components/Checkout/PlaceOrder"
import Footing from "../../components/shared/Footing/Footing"
import Heading from "../../components/shared/Heading/Heading"

const Checkout = () => {
  return (
    <div className="flex flex-col gap-5 mx-auto max-w-screen-xl">
      <Heading />
      <div className="flex">
    <CheckoutForm />
    <PlaceOrder/>
      </div>
    <Footing/>
    </div>
  )
}

export default Checkout
