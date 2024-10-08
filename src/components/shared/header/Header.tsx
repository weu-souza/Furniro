import { Link } from "react-router-dom";

import CartModal from "../../Cart/CartModal/CartModal";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../Service/firebase/firebaseConfig";
import { useAppSelector } from "../../../Service/store/store";
import User from "../../../assets/icons/UserIcon";
import LogoIcon from "../../../assets/icons/LogoIcon";
import CartIcon from "../../../assets/icons/CartIcon";

const Header = () => {
  const storage = useAppSelector((state) => state.cartQtd.cartQtd);
  const [open, setOpen] = useState<boolean>(false);

  const [user] = useAuthState(auth);

  const OpenCart = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    setOpen(true);
  };
  const closeCart = () => {
    setOpen(false);
  };

  const handleLogout = async () => {
    await auth.signOut();
  };

  return (
    <header
      className=" flex flex-wrap md:justify-between py-7 max-w-screen-xl mx-auto items-center gap-3"
      onClick={closeCart}
    >
      <div className="mx-auto md:mx-0 mb-4 md:mb-0">
      <LogoIcon/>
      </div>
      <div className="flex flex-wrap md:gap-20 gap-10 mx-auto ">
        <Link to={"/"} className="navigation">
          Home
        </Link>
        <Link to={"/shop"} className="navigation">
          Shop
        </Link>
        <Link to={"/about"} className="navigation">
          About
        </Link>
        <Link to={"/contact"} className="navigation">
          Contact
        </Link>
      </div>

      <div className="flex flex-row mx-auto md:mx-0 gap-5 items-center ">
        {user ? (
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 py-2 px-8 rounded-xl bg-cor-B88E2F text-white font-Poppins font-bold text-base"
          >
            Sair
            <FontAwesomeIcon icon={faRightFromBracket} />
          </button>
        ) : (
          <Link to={"/login"} aria-label="user">
            <User/>
          </Link>
        )}
        <div>
          <button
            className="relative py-3 px-5 rounded-full"
            onClick={(e) => OpenCart(e)}
            aria-label="carticon"
          >
           <CartIcon/>
            {storage > 0 && (
              <p className="absolute font-Poppins font-bold text-sm text-cor-D9D9D9 bg-cor-B88E2F  px-2 rounded-full top-0 right-0">
                {storage}
              </p>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="absolute top-0 right-0" data-testId="cartModal">
          <CartModal />
        </div>
      )}
    </header>
  );
};

export default Header;
