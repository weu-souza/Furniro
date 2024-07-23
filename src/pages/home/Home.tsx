import {products} from "../../../json/weuller.json"
import BgfComponent from "../../components/Home/FirstComponent/BgfComponent"
import '@splidejs/react-splide/css';
 

const Dados = () =>{
  return (
    <div>
      {products.map((prod)=>(
        <div key={prod.id}>
           {/* <h1>{prod.title}</h1>
           <p>{prod.description?.long}</p> */}
           <img src={prod.images?.mainImage} width={500} alt="" /> 
           <div className="flex flex-wrap mx-auto mb-10">
            {prod.images?.gallery.map((img)=>(
                <img key={img} src={img} width={200} alt="" /> 
            ))}
           </div>
           <div>
             <div className="flex flex-wrap gap-2" >
            {prod.colors.map((cor)=>(
                <div key={cor.name} className={'p-3 rounded-full w-4'} style={{background:`${cor.hex}`}}></div>
            ))}
            </div>
           </div>
        </div>
      ))}
    </div>
  )
}

const Home = () => {
 
  return (
    <div className="">
      {/* <Dados/> */}
      <div className="firstCard max-w-screen-2xl mx-auto" >
      <BgfComponent/>
    {/* <Dados/> */}
      </div>

    </div>
  )
}

export default Home
