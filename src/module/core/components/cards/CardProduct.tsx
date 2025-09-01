import { useNavigate } from "react-router-dom";
import type { Product } from "../../../../types";

export const CardProduct = ({ id, img, name, description, price }: Product) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/product/${id}`);
  };
  return (
    <div
      key={id}
      className="min-h-80 max-w-80 bg-white shadow sm:mx-1 flex flex-col hover:-translate-y-1 hover:shadow-2xl rounded-xl transition duration-500 cursor-pointer"
      onClick={handleClick}
    >
      <div className="w-full h-56 overflow-hidden rounded-t-xl">
        <img
          src={img}
          alt="Torta de chocolate"
          className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="flex flex-col items-start min-h-40 p-4">
        <h4 className="font-semibold text-sm sm:text-lg text-secondary mb-2">
          {name}
        </h4>
        <p className="text-gray-600 text-start text-md">{description}</p>
        <p className="w-full font-semibold text-gray-600 mt-auto text-right">
          Precio: ${price}
        </p>
      </div>
    </div>
  );
};
