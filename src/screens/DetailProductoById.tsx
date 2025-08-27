import { useParams } from "react-router-dom";
import img from "../assets/img/Ayelén1.jpeg";
import { useState, useEffect } from "react";
import { ButtonSecondary } from "../module/core/ui/button/ButtonSecondary";
import { useProductStore } from "../store";

export default function DetailProductoById() {
  const { id } = useParams();
  const { setCarrito, Carrito } = useProductStore((store) => store);
  const [counter, setCounter] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [details, setDetails] = useState<string>("");

  useEffect(() => {
    setTotalPrice(12000 * counter);
  }, [counter]);

  useEffect(() => {
    console.log("🚀 ~ handelClick ~ Carrito:", Carrito);
  }, [Carrito]);

  const handleConunterPlus = () => {
    setCounter((prev) => prev + 1);
  };
  const handleConunterSubtract = () => {
    setCounter((prev) => (prev === 0 ? 0 : prev - 1));
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Aquí puedes manejar el cambio del input si es necesario
    setDetails(e.target.value);
  };
  const handelClick = () => {
    if (counter > 0)
      setCarrito([...Carrito, { id, details, counter, totalPrice }]);
    return;
  };

  return (
    <section className="flex flex-col items-center p-6 min-h-screen gap-8 sm:gap-16 bg-gradient-section">
      <h1 className="text-4xl font-bold text-secondary drop-shadow-text text-center">
        Deatalle del Producto
      </h1>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl">
        <div className="flex-1 flex justify-center max-h-96">
          <img
            src={img}
            alt={"img"}
            className="sm:w-4/5 sm:h-2/5 md:w-2/3 md:h-2/3 lg:w-2/3 lg:h-2/3 object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col pr-4 gap-8">
          <h2 className="text-2xl font-bold text-white">Torta</h2>
          <p className="text-white/65">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            quasi incidunt tempora debitis quam mollitia, ratione temporibus
            dignissimos eius at eaque aliquid nobis qui eum dicta voluptates
            explicabo. Expedita, doloremque.
          </p>
          <div className="flex flex-col gap-2 text-white/65">
            <p>Adicional:</p>
            <input
              type="text"
              placeholder="Ingresar detalle. . ."
              className="bg-white/70 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-secondary w-full text-gray-700 placeholder-gray-400 shadow-lg transition-shadow duration-300 hover:shadow-2xl"
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-between">
            <div className="">
              <h6 className="text-white font-bold">Cantidad:</h6>
              <div className="join flex justify-center items-center">
                <button
                  className="join-item btn bg-secondary w-8 sm:w-10 border-none shadow-2xl"
                  onClick={handleConunterSubtract}
                >
                  {/* <CiCirclePlus color="#F6D8C6" size="30px" /> */}
                  <span className="text-2xl">-</span>
                </button>
                <div className="w-10 h-12 bg-white flex justify-center items-center">
                  <p className="text-center text-lg text-secondary font-bold">
                    {counter}
                  </p>
                </div>
                <button
                  className="join-item btn bg-secondary w-8 sm:w-10 border-none shadow-2xl"
                  onClick={handleConunterPlus}
                >
                  {/* <GrSubtractCircle color="#F6D8C6" size="30px" /> */}
                  <span className="text-2xl">+</span>
                </button>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <p className="font-semibold text-white/65 text-right mt-auto">
                Precio: $12000
              </p>
              <p className="font-semibold text-white/65 text-right mt-auto">
                Total: {totalPrice}
              </p>
            </div>
          </div>
          <div className="w-full flex justify-end">
            <ButtonSecondary
              title="Agregar al carrito"
              onClick={handelClick}
              disabled={counter === 0}
            ></ButtonSecondary>
          </div>
        </div>
      </div>
    </section>
  );
}
