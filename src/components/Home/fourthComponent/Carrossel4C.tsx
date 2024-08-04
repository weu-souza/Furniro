// @ts-expect-error: Ignoring TS error due to type definitions mismatch
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { IProducts } from "../../../Service/api/model/ProductsModel";
import { useEffect, useRef } from "react";

type CarrosselType = {
  products:IProducts[]
}
interface SplideOptions {
  type: 'slide' | 'loop' | 'fade';
  // direction: 'ltr' | 'rtl' | 'ttb' | 'btt';
  rewind: boolean;
  width: string;
  drag:boolean
  arrows: boolean;
  pagination: boolean;
  paginationKeyboard:boolean;
  gap: string;
  start: number;
  perPage: number;
  perMove: number;
  breakpoints: {
    [key: number]: {
      width: string;
      perPage: number;
    };
  };
}


const getUniqueProductsByCategory = (products: IProducts[]) => {
  const uniqueCategories: { [key: string]: boolean } = {};

  return products.filter((prod) => {
    if (!uniqueCategories[prod.category]) {
      uniqueCategories[prod.category] = true;
      return true;
    }
    return false;
  });
};

const ProductSlider: React.FC<CarrosselType> = ({ products }) => {
  const uniqueProducts = getUniqueProductsByCategory(products);
  const splideRef = useRef<Splide>(null);


  useEffect(() => {
    const adjustHeight = () => {
      const splideInstance = splideRef.current?.splide;
      if (splideInstance) {
        const slides = document.querySelectorAll<HTMLImageElement>('.splide__slide .image-carrossel');
        slides.forEach((slide, index) => {
          if (index === splideInstance.index) {
            slide.style.height = '582px';
          } else {
            slide.style.height = '380px';
          }
        });

        const retangle = document.querySelectorAll<HTMLImageElement>('.ShowFSlide')
        retangle.forEach((ret,index)=>{
          if (index === splideInstance.index) {
            ret.style.opacity = "1"
          } else {
            ret.style.opacity = '0';
          }
        })
      }
     

    
    
    if (splideInstance) {
      splideInstance?.on('mounted', () =>{
        hidePrevButton();
      });

      splideInstance.on('mounted', () => {
        adjustHeight();
        
      });
      splideInstance.on('moved', adjustHeight);
    }
    };
    const hidePrevButton = () => {
      const prevButton = document.querySelector('.splide__arrow--prev');
      if (prevButton) {
        (prevButton as HTMLElement).style.display = 'none';
      }
    };
    hidePrevButton();   
    

    const splideInstance = splideRef.current?.splide;
    adjustHeight()
    splideInstance?.on('moved', adjustHeight);
    

    return () => {
      splideInstance?.off('moved', adjustHeight);
      splideInstance?.off('mounted', hidePrevButton);
    };
  }, []);

  const options: SplideOptions = {
    type: 'slide',
    rewind: true,
    drag:false,
    width: '800px',
    arrows: true,
    pagination: false,
    paginationKeyboard:true,
    gap: '20px',
    start:0,
    perPage: 2,
    perMove: 1,
    breakpoints: {
      550: { width: '350px', perPage: 1 },
      768: { width: '500px', perPage: 1 },
      1024: { width: '900px', perPage: 2 },
      1440: { width: '1180px', perPage: 3 },
    },
  };

  return (
    <section className="splide">
      <Splide options={options} ref={splideRef}>
        {uniqueProducts.map((prod,index) => (
          <SplideSlide key={prod.id}>
            <div className="relative">
              <div className=" ShowFSlide flex absolute bottom-6 left-6">
                <div className="flex  flex-col gap-2 shadow-md bg-white p-8 ">
                <h3 className="font-Poppins font-medium text-base text-cor-616161">0{index+1} -- {prod.category}</h3>
                <p className="font-Poppins font-semibold text-3xl text-cor-3A3A3A">Inner Peace</p>
                </div>
                <div className="self-end">
                  <button className="flex  items-center p-5 h-14 bg-cor-B88E2F "><div style={{backgroundImage:"url(https://imgs-furniro.s3.us-east-2.amazonaws.com/json-mages/project-icons/carrosselicon/seta.svg)"}} className=" bg-no-repeat w-8 h-8 bg-center">
                  </div></button>
                </div>
              </div>
              <img
                src={prod.images.mainImage}
                className=" image-carrossel w-full h-full object-cover rounded-sm mx-auto"
                alt={prod.category}
              />
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
};

export default ProductSlider;
