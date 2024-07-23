import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='flex gap-2'>
      <NavLink to={"/"} className={"text-cor-B88E2F"}>Home</NavLink>
      <NavLink to={"/about"}>About</NavLink>
      <NavLink to={"/contact"}>Contact</NavLink>
      <NavLink to={"/shop"}>Shop</NavLink>
    </header>
  )
}

export default Header
