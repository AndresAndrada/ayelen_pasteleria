import { ButtonSecondary } from "../module/core/ui/button/ButtonSecondary";
import { useProductStore } from "../store";

export default function ShowCart() {
  const { Carrito } = useProductStore((store) => store);
  return (
    <section className="h-screen bg-gradient-section p-6 scroll-smooth">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-secondary mb-8 drop-shadow-text">
        Carrito 🛒
      </h2>
      {Carrito.length > 0 ? (
        Carrito.map(
          (
            item: Record<string, string | number | undefined>,
            index: number
          ) => {
            return (
              <div key={index}>
                <p>{item.details}</p>
                <p>{item.counter}</p>
              </div>
            );
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
    </section>
  );
}
