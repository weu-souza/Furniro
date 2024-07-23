import {Link } from 'react-router-dom'
import User from '../../../assets/icons/UserIcon'
import CartIcon from '../../../assets/icons/CartIcon'
import LogoIcon from '../../../assets/icons/LogoIcon'

const Header = () => {
  return (
    <header className='flex flex-wrap justify-between py-7 max-w-[1440px] mx-auto items-center'>
      <div>
        <LogoIcon/>
      </div>
     <div className='flex flex-wrap gap-20'>
     <Link to={"/"} className="navigation">Home</Link>
      <Link to={"/shop"} className="navigation">Shop</Link>
      <Link to={"/about"} className="navigation">About</Link>
      <Link to={"/contact"} className="navigation">Contact</Link>
     </div>
     <div className='flex gap-5'>
      <button><User /></button>
      <button><CartIcon/></button>
     </div>
    </header>
  )
}

export default Header
