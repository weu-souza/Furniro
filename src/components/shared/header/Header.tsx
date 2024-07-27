import {Link } from 'react-router-dom'
import User from '../../../assets/icons/UserIcon'
import CartIcon from '../../../assets/icons/CartIcon'
import LogoIcon from '../../../assets/icons/LogoIcon'
import CartModal from '../../Cart/CartModal/CartModal'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../../Service/firebase/firebaseConfig'

const Header = () => {
  const [open,setOpen] = useState<boolean>(false)
  const [user] = useAuthState(auth);
  const OpenCart = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
    e.stopPropagation();
    setOpen(true)
  }

  const closeCart = () =>{
    setOpen(false)
  }

  const handleLogout = async () =>{
    await auth.signOut();
  }
  return (
    <header className=' flex flex-wrap md:justify-between py-7 max-w-screen-xl mx-auto items-center' onClick={closeCart}>
      <div className='mx-auto md:mx-0 mb-4 md:mb-0'>
        <LogoIcon/>
      </div>
     <div className='flex flex-wrap md:gap-20 gap-10 mx-auto '>
      <Link to={"/"} className="navigation">Home</Link>
      <Link to={"/shop"} className="navigation">Shop</Link>
      <Link to={"/about"} className="navigation">About</Link>
      <Link to={"/contact"} className="navigation">Contact</Link>
     </div>
     <div className='flex gap-5 items-center self-end'>
      {user?<button onClick={handleLogout} className='flex items-center gap-3 py-2 px-8 rounded-xl bg-cor-B88E2F text-white font-Poppins font-bold text-base'>Sair<FontAwesomeIcon icon={faRightFromBracket} /></button>:<Link to={'/login'}><User /></Link>}
      
      <button onClick={(e)=> OpenCart(e)}><CartIcon/></button>
     </div>

     {open &&
     <div className='absolute top-0 right-10'>
     <CartModal />
     </div>
     }
    </header>
  )
}

export default Header
