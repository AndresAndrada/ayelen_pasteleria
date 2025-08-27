import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SampleNextArrow from "../../core/ui/carousel/SampleNextArrow";
import SamplePrevArrow from "../../core/ui/carousel/SamplePrevArrow";
import product from "../../../utils/products.json";
import { useRef } from "react";
import type { Slider as SliderType } from "react-slick";
import { CardProduct } from "../../core/components/cards/CardProduct";
import { ButtonSecondary } from "../../core/ui/button/ButtonSecondary";

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
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
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
      className="w-full flex flex-col justify-center items-center py-16 bg-white/70 gap-12"
    >
      <div className="flex flex-col gap-4">
        <h3 className="w-full text-2xl font-bold text-secondary drop-shadow-text">
          Nuestros Productos
        </h3>
        <p className="text-gray-500">
          Estos son algunos de nuestros productos más destacados 👌
        </p>
      </div>
      <div className="slider-container min-h-96 max-w-60 sm:w-full sm:max-w-96 md:max-w-2xl lg:max-w-4xl md:pl-0">
        <Slider {...settings} ref={sliderRef}>
          {product.map((item) => {
            return (
              <CardProduct
                key={item.id}
                id={item.id}
                img={item.img}
                name={item.name}
                description={item.description}
                price={item.price}
              />
            );
          })}
        </Slider>
      </div>
      <ButtonSecondary title="Ir a productos" navigate="/product" />
    </section>
  );
};
