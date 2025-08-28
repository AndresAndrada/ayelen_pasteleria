// import { CardProductAcordion } from "../module/core/components/cards/CardProductAcordion";
import { ButtonSecondary } from "../module/core/ui/button/ButtonSecondary";
import { useProductStore } from "../store";
import type { Product } from "../types";

export default function ShowCart() {
  const { Carrito } = useProductStore((store) => store);
  const totalPrice = Carrito.reduce((acc, item) => {
    return acc + (typeof item.totalPrice === "number" ? item.totalPrice : 0);
  }, 0);
  console.log("🚀 ~ ShowCart ~ Carrito:", Carrito);

  return (
    <section className="min-h-screen bg-gradient-section p-6 scroll-smooth">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-secondary mb-8 drop-shadow-text">
        Carrito 🛒
      </h2>
      {Carrito.length > 0 ? (
        Carrito.map(
          (item: Record<string, string | number | Product>, index) => {
            const product = item.product;
            if (
              product &&
              typeof product === "object" &&
              "name" in product &&
              "img" in product &&
              "description" in product
            ) {
              return (
                <div>
                  <div
                    key={
                      typeof product.id === "string" ||
                      typeof product.id === "number"
                        ? product.id
                        : index
                    }
                    className="flex items-center mb-4 p-4 rounded-lg bg-white/35 gap-4 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-transform duration-300"
                  >
                    <img
                      src={product.img as string}
                      alt={product.name as string}
                      className="w-20 h-20 object-cover rounded-full mb-4"
                    />
                    <div className="flex flex-col items-start">
                      <h4 className="text-secondary text-start">
                        {product.name as string}
                      </h4>
                      <p className="max-w-52 text-start text-white">
                        Cantidad: {item.counter as number}
                      </p>
                      <p className="text-white">
                        Total:{" "}
                        {typeof item.totalPrice === "number"
                          ? item.totalPrice
                          : ""}
                      </p>
                    </div>
                  </div>
                </div>
              );
            }
            return null;
          }
        )
      ) : (
        <div className="flex flex-col items-center gap-4 mt-16">
          <p className="text-center text-white/75">
            No hay productos en el carrito
          </p>
          <ButtonSecondary title="Ir a productos" navigate="/product" />
        </div>
      )}
      <div className="flex justify-end mb-4 p-4 rounded-lg bg-white/35 gap-4 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-transform duration-300">
        <h4 className="text-white text-end">
          Precio total: ${" "}
          <span className="text-secondary font-bold">{totalPrice}</span>
        </h4>
      </div>
    </section>
  );
}
