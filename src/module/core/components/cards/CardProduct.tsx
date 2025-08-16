import type { Product } from "../../../../types";

export const CardProduct = ({ id, img, name, description }: Product) => {
  return (
    <div
      key={id}
      className="min-h-80 bg-white rounded-xl shadow p-6 mx-2 mt-6 flex flex-col items-center hover:shadow-2xl"
    >
      <img
        src={img}
        alt="Torta de chocolate"
        className="w-32 h-32 object-cover rounded-full mb-4"
      />
      <h4 className="font-semibold text-lg text-pink-700 mb-2">{name}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};
