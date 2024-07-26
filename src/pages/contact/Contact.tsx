import ContactUs from "../../components/Contact/ContactUs"
import Footing from "../../components/shared/Footing/Footing"
import Heading from "../../components/shared/Heading/Heading"
import ContactForm from "./ContactForm"


const Contact = () => {
  return (
    <div className="flex flex-col gap-12">
      <Heading />
      <div className="flex flex-col">
        <h1></h1>
        <p></p>
        <div className="flex flex-row">
        <ContactUs />
        <ContactForm />
        </div>
      </div>
      <Footing/>
    </div>
  )
}

export default Contact
