import {products} from "../../../json/weuller.json"

const Home = () => {
 
  return (
    <div className="container max-w-[1200px] mx-auto">
      <h1>home</h1>
      {products.slice(0,20).map((prod)=>(
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
                <div key={1} className={'p-3 rounded-full w-4'} style={{background:`${cor.hex}`}}></div>
            ))}
            </div>
           </div>
        </div>
      ))}
    </div>
  )
}

export default Home
