import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SampleNextArrow from "../../core/ui/carousel/SampleNextArrow";
import SamplePrevArrow from "../../core/ui/carousel/SamplePrevArrow";
import product from "../../../utils/products.json";
import { useRef } from "react";
import type { Slider as SliderType } from "react-slick";
import { CardProduct } from "../../core/components/cards/CardProduct";

interface SliderInstance extends SliderType {
  slickNext: () => void;
  slickPrev: () => void;
}

export const SectionProduct = () => {
  const sliderRef = useRef<SliderInstance>(null);
  const next = () => {
    sliderRef.current?.slickNext();
  };
  const previous = () => {
    sliderRef.current?.slickPrev();
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow onClick={next} />,
    prevArrow: <SamplePrevArrow onClick={previous} />,
    responsive: [
      {
        breakpoint: 710,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      id="productos"
      className="w-full flex flex-col justify-center items-center py-16 bg-white/70"
    >
      <h3 className="text-2xl font-bold text-pink-700 mb-8">
        Nuestros Productos
      </h3>
      <div className="max-w-60 sm:w-full sm:max-w-6xl">
        <div className="slider-container min-h-96">
          <Slider {...settings} ref={sliderRef}>
            {product.map((item) => {
              return (
                <CardProduct
                  key={item.id}
                  id={item.id}
                  img={item.img}
                  name={item.name}
                  description={item.description}
                />
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};
