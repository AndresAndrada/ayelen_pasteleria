// import LOGO from '../../../assets/svg/negativo.svg'
import { RiInstagramFill } from "react-icons/ri";
import { SiWhatsapp, SiLinkedin } from "react-icons/si";
import { useUiStore } from "../../../../store";

export const Footer = () => {
  const { DarkMode } = useUiStore();

  return (
    <footer
      className={`${
        !DarkMode
          ? "bg-gradient-dark text-gray-400"
          : "bg-gradient-section text-black/65"
      }`}
    >
      <div
        className={`footer p-10 justify-around text-center transition-bg shadow-[0_-8px_24px_-4px_rgba(0,0,0,0.2)]`}
      >
        <h1 className={`text-[20px] font-normal text-center transition-bg`}>
          Effort&Habit
        </h1>
        {/* <img src={LOGO} alt="Logo" className="w-48" /> */}
        <nav className="flex flex-col items-center">
          <h6 className={`text-[20px] font-black text-center transition-bg`}>
            Sobre nosotros
          </h6>
          <p className={`w-52 transition-bg`}>
            {" "}
            Somos una pastelería familiar dedicada a endulzar los momentos
            especiales. Nuestro objetivo es ofrecer postres artesanales de alta
            calidad, elaborados con amor, para crear experiencias únicas que
            deleiten el paladar y fortalezcan los lazos en cada celebración.
          </p>
        </nav>
        <nav className="flex flex-col items-center">
          <h6 className={`text-[20px] font-black text-center transition-bg`}>
            Mantente Conectado
          </h6>
          <div className="grid gap-4 mt-2">
            <a
              href="https://www.instagram.com/ayelen.pasteleria/?hl=es-la"
              className={`flex gap-3 transition-bg`}
              target="_blank"
              rel="noreferrer"
            >
              <RiInstagramFill className="text-2xl" /> Instagram
            </a>
            <a
              href={`https://wa.me/+543517445402?text=${"<mensaje>"}`}
              className={`flex gap-3 transition-bg`}
              target="_blank"
              rel="noreferrer"
            >
              <SiWhatsapp className="text-2xl" /> WhatsApp
            </a>
          </div>
        </nav>
        <nav className="flex flex-col items-center w-44 gap-y-3">
          <h6 className={`text-[20px] font-black text-center transition-bg`}>
            Agradecimientos
          </h6>
          <p className={`text-center transition-bg`}>
            Por favor contáctenos si tiene alguna idea o solicitud específica.
          </p>
          <a
            href="https://www.linkedin.com/in/andres-alfredo-andrada/"
            className={`flex gap-3 transition-bg min-w-52`}
            target="_blank"
            rel="noreferrer"
          >
            <SiLinkedin className="text-2xl" /> Andrada Andres Alfredo
          </a>
        </nav>
      </div>
      <div className={`text-center pb-2 transition-bg`}>
        © {new Date().getFullYear()} Ayelén Pastelería. Todos los derechos
        reservados.
      </div>
    </footer>
  );
};
