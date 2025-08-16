import img from "../../../../assets/img/AyelénPasteleria.jpeg";
import { ItemsNavBar } from "./ItemsNavBar";
export const NavBar = () => {
  return (
    <header className="bg-white shadow-md py-4 px-8 flex justify-between items-center gap-4">
      <img
        src={img}
        alt="Torta de chocolate"
        className="w-8 object-cover rounded-full"
      />
      <nav className="space-x-4 md:space-x-6">
        <ItemsNavBar href="#productos" title="Productos" />
        <ItemsNavBar href="#nosotros" title="Nosotros" />
        <ItemsNavBar href="#contacto" title="Contacto" />
      </nav>
    </header>
  );
};
