import { IProducts } from "../../../Service/api/model/ProductsModel";

type descriptionType = {
  product: IProducts;
};
const Description = ({ product }: descriptionType) => {
  return (
    <div className="max-w-screen-xl flex flex-col gap-9">
      <div className="flex flex-wrap mx-auto justify-between max-w-[800px] gap-3  w-full">
        <h1 className="font-Poppins font-medium text-2xl text-black">DescriptionDescription</h1>
        <h1 className="font-Poppins font-normal text-2xl text-cor-9F9F9F">Additional Information</h1>
      </div>
      <p className="font-Poppins font-normal text-base text-justify text-cor-9F9F9F max-w-[1026px] mx-auto">{product.description.long}</p>

      <div className="flex flex-wrap mx-auto">
        {product.images.gallery.slice(0, 2).map((imgs, index) => (
          <img className=" mx-auto md:mx-0 gap-4 md:w-[605px] h-[348px] rounded-xl object-cover" src={imgs} key={index} alt={product.title} />
        ))}
      </div>
    </div>
  );
};

export default Description;
