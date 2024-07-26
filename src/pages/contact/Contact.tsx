import ContactUs from "../../components/Contact/ContactUs";
import Footing from "../../components/shared/Footing/Footing";
import Heading from "../../components/shared/Heading/Heading";
import ContactForm from "../../components/Contact/ContactForm";

const Contact = () => {
  return (
    <div className="flex flex-col gap-12 max-w-screen-xl mx-auto">
      <Heading />
      <div className="flex flex-col max-w-[1058px] mx-auto w-full gap-16">
        <h1 className="font-Poppins font-semibold text-4xl text-black text-center">Get In Touch With Us</h1>
        <p className="font-Poppins font-normal text-base text-center text-cor-9F9F9F">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
        <div className="flex flex-row w-full justify-between">
          <div className="flex-auto">
            <ContactUs />
          </div>
          <div className="flex-auto">
            <ContactForm />
          </div>
        </div>
      </div>
      <Footing />
    </div>
  );
};

export default Contact;
