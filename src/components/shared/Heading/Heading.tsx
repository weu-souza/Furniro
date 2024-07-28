import { useLocation } from "react-router-dom"
import MaiorQ from "../../../assets/icons/MaiorQ"
const Heading = () => {
  const location = useLocation()
  return (
    <div className=" w-full h-[316px] bg-cover bg-center  shadow-xl flex justify-center" style={{backgroundImage:`url(https://imgs-furniro.s3.us-east-2.amazonaws.com/json-mages/project-images/imgHeading.jpeg)`}}>
      <div className="w-full" style={{backgroundColor: 'rgba(255, 255, 255, 0.5)'}}>

      
    <div className="w-full h-full flex flex-col justify-center items-center gap-2">
      <div>
      <img src="https://imgs-furniro.s3.us-east-2.amazonaws.com/json-mages/project-images/iconLogo.png" alt="logo" className="w-28 mx-auto" />
      <p className="font-Poppins font-medium text-5xl">{location.pathname.replace('/','')}</p>
      </div>
      <div className="flex items-center">
        <h2 className="font-Poppins font-medium text-base text-black">Home</h2>
        
        <MaiorQ/>
        <h2 className="font-Poppins font-light text-base text-black">{location.pathname.replace('/','')}</h2>
      </div>
    </div>
    </div>
  </div>
  )
}

export default Heading
