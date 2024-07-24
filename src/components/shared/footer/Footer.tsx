import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import React from "react";
const Footer = () => {
  const [form, setForm] = React.useState<string>("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(form);
  };

  return (
    <footer className="flex flex-col pt-14">
      <section className="flex flex-wrap justify-between w-full max-w-screen-xl mx-auto">
        <div className="flex flex-col gap-[50px] ">
          <h1 className="font-Poppins font-bold text-2xl text-black">
            Funiro.
          </h1>
          <p className="font-Poppins font-normal text-base w-72 text-cor-9F9F9F">
            400 University Drive Suite 200 Coral Gables,
            <br /> FL 33134 USA
          </p>
          <div className="flex flex-wrap gap-8 p-5">
            <Link
              to={"https://www.facebook.com/"}
              className="shadow-md px-3 py-2 rounded-full"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </Link>
            <Link
              to={"https://www.instagram.com/"}
              className="shadow-md px-3 py-2 rounded-full"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link
              to={"https://x.com/?lang=pt-br"}
              className="shadow-md px-3 py-2 rounded-full"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
            <Link
              to={"https://br.linkedin.com/"}
              className="shadow-md px-3 py-2 rounded-full"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </Link>
          </div>
        </div>

        <div className="flex md:justify-between md:w-[352px] w-full">
          <div className="flex flex-col gap-[50px]">
            <h3 className="font-Poppins font-normal text-base text-cor-9F9F9F">
              Links
            </h3>
            <ul className="flex flex-col gap-[50px]">
              <li className="font-Poppins font-medium text-base text-black">
                Home
              </li>
              <li className="font-Poppins font-medium text-base text-black">
                Shop
              </li>
              <li className="font-Poppins font-medium text-base text-black">
                About
              </li>
              <li className="font-Poppins font-medium text-base text-black">
                Contact
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-[50px]">
            <h3 className="font-Poppins font-normal text-base text-cor-9F9F9F">
              Help
            </h3>
            <ul className="flex flex-col gap-[50px]">
              <li className="font-Poppins font-medium text-base text-black">
                Payment Options
              </li>
              <li className="font-Poppins font-medium text-base text-black">
                Returns
              </li>
              <li className="font-Poppins font-medium text-base text-black">
                Privacy Policies
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-[50px]">
          <h3 className="font-Poppins font-normal text-base text-cor-9F9F9F">
            Newsletter
          </h3>
          <form onSubmit={handleSubmit} className="flex flex-wrap gap-4">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              value={form}
              onChange={(e)=>setForm(e.target.value)}
              className=" py-1 outline-none border-b border-b-black border-opacity-25 font-Poppins font-normal text-sm"
            />
            <button
              type="submit"
              className="font-Poppins font-medium text-sm text-black border-b border-b-black"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </section>

      <div className=" max-w-screen-xl w-full mx-auto gap-9 p-6">
        <div className="border border-cor-D9D9D9 my-9"></div>
        <h3 className="text-start font-Poppins font-normal text-base">
          2023 furino. All rights reverved
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
