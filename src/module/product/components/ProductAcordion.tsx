import product from "../../../utils/products.json";
import { CardProductAcordion } from "../../core/components/cards/CardProductAcordion";
import Acordion from "../../core/ui/acordion/Acordion";

export const ProductAcordion = () => {
  const cakeProduct = product.filter((e) => e.type === "torta");
  const cookiesProduct = product.filter((e) => e.type === "cookies");
  const meriendaProduct = product.filter((e) => e.type === "merienda");
  const alfajorProduct = product.filter((e) => e.type === "Alfajor");
  return (
    <div className="w-full md:hidden flex flex-col items-center gap-4">
      <Acordion>
        {/* {" "} */}
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title font-semibold text-white bg-banner bg-cover">
          <h3 className="text-secondary">Torta</h3>
        </div>
        <div className="collapse-content text-sm flex flex-col gap-2">
          {cakeProduct.map((item) => {
            return (
              <CardProductAcordion
                key={item.id}
                id={item.id}
                name={item.name}
                img={item.img}
                description={item.description}
              />
            );
          })}
        </div>
      </Acordion>
      <Acordion>
        {" "}
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title font-semibold text-white bg-bannerGalletas bg-cover bg-[center_70px]">
          <h3 className="text-secondary">Galletas</h3>
        </div>
        <div className="collapse-content text-sm flex flex-col gap-2">
          {cookiesProduct.map((item) => {
            return (
              <CardProductAcordion
                key={item.id}
                id={item.id}
                name={item.name}
                img={item.img}
                description={item.description}
              />
            );
          })}
        </div>
      </Acordion>
      <Acordion>
        {" "}
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title font-semibold text-white bg-bannerMerienda bg-cover bg-[center_100px]">
          <h3 className="text-secondary">Meriendas</h3>
        </div>
        <div className="collapse-content text-sm flex flex-col gap-2">
          {meriendaProduct.map((item) => {
            return (
              <CardProductAcordion
                key={item.id}
                id={item.id}
                name={item.name}
                img={item.img}
                description={item.description}
              />
            );
          })}
        </div>
      </Acordion>
      <Acordion>
        {" "}
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title font-semibold text-white bg-bannerAlfajores bg-cover bg-[center_120px]">
          <h3 className="text-secondary">Alfajores</h3>
        </div>
        <div className="collapse-content text-sm flex flex-col gap-2">
          {alfajorProduct.map((item) => {
            return (
              <CardProductAcordion
                key={item.id}
                id={item.id}
                name={item.name}
                img={item.img}
                description={item.description}
              />
            );
          })}
        </div>
      </Acordion>
    </div>
  );
};
