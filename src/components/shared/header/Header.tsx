import {Link } from 'react-router-dom'
import User from '../../../assets/icons/UserIcon'
import CartIcon from '../../../assets/icons/CartIcon'
import LogoIcon from '../../../assets/icons/LogoIcon'

const Header = () => {
  return (
    <header className=' flex flex-wrap md:justify-between py-7 max-w-screen-xl mx-auto items-center'>
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
      <Link to={'/login'}><User /></Link>
      <button><CartIcon/></button>
     </div>
    </header>
  )
}

export default Header
