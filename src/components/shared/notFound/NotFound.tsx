import { Link } from "react-router-dom"
import notFound from  "../../../assets/undraw_page_not_found_re_e9o6.svg"
const NotFound = () => {
  return (
    <div className="flex h-screen">
        <div style={{backgroundImage:`url(${notFound})`}} className="md:bg-contain bg-no-repeat bg-center w-full h-full  flex">
        <h1 className=" font-Poppins font-bold mx-auto pt-20 text-sm md:text-2xl ">PAGE NOT FOUND BACK TO <Link to={"/"} className="text-[#6C63FF]">HOME</Link></h1>
        </div>
    </div>
  )
}

export default NotFound
