import { ButtonPrimary } from "../module/core/ui/button/ButtonPrimary";
import { SectionAboutUs } from "../module/Home/components/SectionAboutUs";
// import { SectionContact } from "../module/Home/components/SectionContact";
import { SectionProduct } from "../module/Home/components/SectionProduct";
import img1 from "../assets/img/Ayelén1.jpeg";
import img2 from "../assets/img/Ayelén2.jpeg";
import { useEffect } from "react";
import { scrollToTop } from "../utils/scrollToTop";

export default function Home() {
  useEffect(() => {
    scrollToTop({ smooth: true });
  }, []);
  return (
    // <div className="min-h-screen bg-gradient-section flex flex-col">
    <main
      id="home"
      className="w-screen flex flex-col items-center justify-center text-center bg-gradient-section min-h-screen"
    >
      <div className="w-full px-4 flex flex-col lg:flex-row items-center mb-16 min-h-screen">
        <div className="w-full flex flex-col items-center">
          {/* <div className=""> */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-secondary mb-4 mt-12 drop-shadow-text">
            ¡Bienvenido a Ayelén Pastelería!
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl">
            Descubre los pasteles y postres más deliciosos, hechos con amor y
            los mejores ingredientes. ¡Haz tu día más dulce con nosotros!
          </p>
          {/* </div> */}
        </div>
        <div className="w-full flex flex-col items-center">
          <img
            src={img2}
            alt="Pastel decorado"
            className="rounded-2xl shadow-4xl w-[80%] lg:w-full max-w-sm mb-10 border-4 border-pink-200 rotate-6 hover:scale-105 hover:z-10 transition-transform duration-500"
          />
          <img
            src={img1}
            alt="Pastel decorado"
            className="rounded-2xl shadow-4xl w-[80%] lg:w-full max-w-sm mb-10 border-4 border-pink-200 -rotate-12 -m-40 hover:scale-105 transition-transform duration-500"
          />
          <ButtonPrimary href={"#product"}>Ver productos</ButtonPrimary>
        </div>
      </div>
      <div className="w-full">
        <SectionProduct />
        <SectionAboutUs />
        {/* <SectionContact /> */}
      </div>
    </main>
    // </div>
  );
}
