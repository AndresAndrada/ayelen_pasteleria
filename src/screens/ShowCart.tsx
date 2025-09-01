// import { CardProductAcordion } from "../module/core/components/cards/CardProductAcordion";
import { useEffect, useState } from "react";
import { ButtonSecondary } from "../module/core/ui/button/ButtonSecondary";
import { useProductStore } from "../store";
import type { Product } from "../types";

export default function ShowCart() {
  const { Carrito } = useProductStore((store) => store);
  const [message, setMessage] = useState<string>("");
  const totalPrice = Carrito.reduce((acc, item) => {
    return acc + (typeof item.totalPrice === "number" ? item.totalPrice : 0);
  }, 0);
  // console.log("🚀 ~ ShowCart ~ Carrito:", Carrito);
  useEffect(() => {}, [message]);

  const handleMessage = () => {
    const messageDetails = `Mi pedido es: ${Carrito.map(
      (item: Record<string, string | number | Product>) => {
        const product = item.product;
        if (
          product &&
          typeof product === "object" &&
          "name" in product &&
          "img" in product &&
          "description" in product
        ) {
          return ` | Cant: ${item.counter} de ${
            product.name.toUpperCase() as string
          } - ${
            item.details ? "Detalles: *" + item.details + "* " : ""
          } Precio unitario: $ ${product.price as number}`;
        }
        return "";
      }
    )}  | TOTAL A PAGAR: $ *${totalPrice}*`;
    setMessage(messageDetails);
  };

  return (
    <section className="min-h-screen flex flex-col items-center bg-gradient-section p-6 scroll-smooth gap-4">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-secondary drop-shadow-text">
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
                <div
                  key={index}
                  className="w-full flex items-center mb-4 p-4 rounded-lg bg-white/35 gap-4 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-transform duration-300"
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
              );
            }
            return null;
          }
        )
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
