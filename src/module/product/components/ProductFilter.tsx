import { CardProduct } from "../../core/components/cards/CardProduct";

interface ProductFilterProps {
  products: Array<{
    id: number;
    img: string;
    name: string;
    description: string;
    price: number;
    type: string;
  }>;
}

export const ProductFilter = ({ products }: ProductFilterProps) => {
  //   console.log("🚀 ~ ProductFilter ~ products:", products);
  return (
    <div className="w-full grid md:grid-cols-2 lg:grid-cols-4 gap-4">
      {products.map((card) => {
        return (
          <CardProduct
            key={card.id}
            id={card.id}
            img={card.img}
            name={card.name}
            description={card.description}
            price={card.price}
          />
        );
      })}
    </div>
  );
};
