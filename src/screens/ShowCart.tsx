// import { CardProductAcordion } from "../module/core/components/cards/CardProductAcordion";
import { useEffect, useState } from "react";
import { ButtonSecondary } from "../module/core/ui/button/ButtonSecondary";
import { useProductStore } from "../store";
import type { CartItem } from "../types";
import { CardCart } from "../module/cart/CardCart";

export default function ShowCart() {
  const { Carrito, setCarrito } = useProductStore((store) => store);
  const [message, setMessage] = useState<string>("");
  const totalPrice = Carrito.reduce((acc, item) => {
    return acc + (typeof item.totalPrice === "number" ? item.totalPrice : 0);
  }, 0);
  useEffect(() => {}, [message]);

  const handleMessage = () => {
    const messageDetails = `Mi pedido es: ${Carrito.map((item: CartItem) => {
      const { productFind, counter, details } = item;
      return `\n\n • Cant: ${counter} de ${productFind.name.toUpperCase()} - ${
        details ? `Detalles: *${details}* ` : ""
      }Precio unitario: $${productFind.price.toLocaleString()}`;
    })} \n\nTOTAL A PAGAR: $${totalPrice.toLocaleString()}`;
    setMessage(encodeURIComponent(messageDetails));
  };

  const handleDelete = (id: string) => {
    setCarrito(Carrito.filter((item) => item.id !== id));
    setMessage("");
  };
  return (
    <section className="min-h-screen flex flex-col items-center bg-gradient-section p-6 scroll-smooth gap-4">
      <h2 className="text-2xl md:text-5xl font-extrabold text-center text-secondary drop-shadow-text">
        Carrito 🛒
      </h2>
      {Carrito.length > 0 ? (
        Carrito.map((item: CartItem) => {
          const product = item?.productFind;
          if (
            product &&
            typeof product === "object" &&
            "name" in product &&
            "img" in product &&
            "description" in product
          ) {
            return (
              <CardCart
                key={item.id}
                name={product.name}
                img={product.img}
                count={item.counter}
                totalPrice={item.totalPrice}
                handleDelete={() => handleDelete(item.id)}
              />
            );
          }
          return null;
        })
      ) : (
        <div className="flex flex-col items-center gap-4 my-8">
          <p className="text-center text-white/75">
            No hay productos en el carrito
          </p>
          <ButtonSecondary title="Ir a productos" navigate="/product" />
        </div>
      )}
      <div className="max-w-[24rem] flex justify-center items-center mb-4 p-4 rounded-lg gap-4">
        {message ? (
          <a
            href={`https://wa.me/+543517445402?text=${message}`}
            className="text-center bg-secondary hover:bg-secondary/80 text-white font-semibold px-4 py-3 rounded-full shadow-xl transition-colors duration-500"
            target="_blank"
            rel="noreferrer"
          >
            Enviar pedido
          </a>
        ) : (
          <button
            className={`bg-secondary ${
              Carrito.length !== 0
                ? "hover:bg-secondary/80"
                : "cursor-not-allowed"
            } text-white text-sm font-semibold px-4 py-3 rounded-full shadow-md transition-colors duration-500`}
            onClick={handleMessage}
            disabled={Carrito.length === 0}
          >
            Confirmar pedido
          </button>
        )}
        <h4 className="text-white text-end">
          Precio total: ${" "}
          <span className="text-secondary font-bold bg-white/35 p-1">
            {totalPrice}
          </span>
        </h4>
      </div>
    </section>
  );
}
