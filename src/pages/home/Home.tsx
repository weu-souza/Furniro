import {products} from "../../../json/weuller.json"

const Home = () => {
 
  return (
    <div className="container max-w-[1200px] mx-auto">
      <h1>home</h1>
      {products.map((prod)=>(
        <div key={prod.id}>
           <h1>{prod.title}</h1>
           <p>{prod.description?.long}</p>
           <img src={prod.images?.mainImage} width={500} alt="" /> 
           <div className="flex flex-wrap mx-auto mb-10">
            {prod.images?.gallery.map((img)=>(
                <img key={img} src={img} width={200} alt="" /> 
            ))}
           </div>
        </div>
      ))}
    </div>
  )
}

export default Home
