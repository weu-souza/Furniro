// @ts-expect-error: Ignoring TS error due to type definitions mismatch
import { Splide, SplideSlide } from '@splidejs/react-splide';
import{ useRef, useEffect } from 'react';
import '@splidejs/react-splide/css';
import { IProducts } from '../../../Service/api/model/ProductsModel';
import Seta from '../../../assets/icons/carrosselicon/seta';

type CarrosselType = {
  products: IProducts[];
};



interface SplideOptions {
  type: 'slide' | 'loop' | 'fade';
  rewind: boolean;
  width: string;
  drag: boolean;
  arrows: boolean;
  pagination: boolean;
  paginationKeyboard: boolean;
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

const ProductSlider = ({ products }:CarrosselType) => {
  const uniqueProducts = getUniqueProductsByCategory(products);
  const splideRef = useRef<Splide>(null);

  useEffect(() => {
    const splideInstance = splideRef.current?.splide;

    const adjustHeight = () => {
      if (!splideInstance) return;

      const slides = document.querySelectorAll<HTMLImageElement>('.splide__slide .image-carrossel');
      slides.forEach((slide, index) => {
        slide.style.height = index === splideInstance.index ? '582px' : '380px';
      });

      const retangle = document.querySelectorAll<HTMLImageElement>('.ShowFSlide');
      retangle.forEach((ret, index) => {
        ret.style.opacity = index === splideInstance.index ? '1' : '0';
      });
    };

    const hidePrevButton = () => {
      const prevButton = document.querySelector('.splide__arrow--prev');
      if (prevButton) {
        (prevButton as HTMLElement).style.display = 'none';
      }
    };

    if (splideInstance) {
      splideInstance.on('mounted', () => {
        hidePrevButton();
        adjustHeight();
      });
      splideInstance.on('moved', adjustHeight);
    }

    return () => {
      if (splideInstance) {
        splideInstance.off('moved', adjustHeight);
        splideInstance.off('mounted', hidePrevButton);
      }
    };
  }, []);

  const options: SplideOptions = {
    type: 'slide',
    rewind: true,
    drag: false,
    width: '800px',
    arrows: true,
    pagination: false,
    paginationKeyboard: true,
    gap: '20px',
    start: 0,
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
        {uniqueProducts.map((prod, index) => (
          <SplideSlide key={prod.id}>
            <div className="relative">
              <div className="ShowFSlide flex absolute bottom-6 left-6">
                <div className="flex flex-col gap-2 shadow-md bg-white p-8">
                  <h3 className="font-Poppins font-medium text-base text-cor-616161">0{index + 1} -- {prod.category}</h3>
                  <p className="font-Poppins font-semibold text-3xl text-cor-3A3A3A">Inner Peace</p>
                </div>
                <div className="self-end">
                  <button className="flex items-center p-5 h-14 bg-cor-B88E2F">
                    <Seta/>
                  </button>
                </div>
              </div>
              <img
                src={prod.images.mainImage}
                className="image-carrossel w-full h-full object-cover rounded-sm mx-auto"
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
