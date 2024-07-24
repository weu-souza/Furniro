import { Splide, SplideSlide } from "@splidejs/react-splide";

interface Product {
  id: string;
  category: string;
  images: {
    mainImage: string;
  };
}

interface ProductSliderProps {
  products: Product[];
}

const getUniqueProductsByCategory = (products: Product[]) => {
  const uniqueCategories: { [key: string]: boolean } = {};

  return products.filter((prod) => {
    if (!uniqueCategories[prod.category]) {
      uniqueCategories[prod.category] = true;
      return true;
    }
    return false;
  });
};

const ProductSlider: React.FC<ProductSliderProps> = ({ products }) => {
  const uniqueProducts = getUniqueProductsByCategory(products);

  return (
    <Splide
      tag="section"
      options={{
        type: "slide",
        direction: "ltr",
        rewind: true,
        width: "1180px",
        rewindByDrag: true,
        arrows: false,
        pagination: false,
        // autoplay: true,
        gap: "20px",
        perPage: 3,
        breakpoints: {
          550:{width: "350px", perPage: 1 },
          768: { width: "500px", perPage: 1},
          1024: { width: "900px", perPage: 2 },
          1440: { width: "1180px", perPage: 3 },
        },
      }}
    >
      {uniqueProducts.map((prod) => (
        <SplideSlide key={prod.id}>
          <div>
            <img
              src={prod.images.mainImage}
              className=" max-w-[381px] object-cover h-[480px] rounded-sm mx-auto"
              alt={prod.category}
            />
            <h1 className="font-Poppins font-semibold text-2xl text-center text-cor-333333 pt-11">
              {prod.category}
            </h1>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default ProductSlider;
