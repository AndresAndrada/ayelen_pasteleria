import img from "../../../../assets/img/AyelénPasteleria.jpeg";
import { ItemsNavBar } from "./ItemsNavBar";
import { IoHomeOutline } from "react-icons/io5";
import { MdInfoOutline, MdOutlineShoppingCart } from "react-icons/md";
import { CiViewList } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { useProductStore } from "../../../../store";
import { ItemsNavBarHamburger } from "./ItemsNavBarHamburger";
export const NavBar = () => {
  const navigate = useNavigate();
  const { Carrito } = useProductStore((store) => store);
  return (
    <>
      <header className="hidden md:flex justify-between items-center bg-gradient-section shadow-md py-2 px-8  gap-4">
        <img
          src={img}
          alt="Torta de chocolate"
          className="w-8 object-cover rounded-full cursor-pointer"
          onClick={() => navigate("/")}
        />
        <nav className="space-x-4 md:space-x-6">
          <ItemsNavBar href="#productos">
            <span className="text-white/65">Producto</span>
          </ItemsNavBar>
          <ItemsNavBar href="#nosotros">
            <span className="text-white/65">Nosotros</span>
          </ItemsNavBar>
          <ItemsNavBar href="#contacto">
            <span className="text-white/65">Contacto</span>
          </ItemsNavBar>
        </nav>
      </header>
      <ul className="menu fixed bottom-4 right-4 w-16 shadow-4xl flex md:hidden justify-between items-center z-50 bg-secondary rounded-box">
        <li className="flex">
          <ItemsNavBar href={"#home"}>
            <IoHomeOutline size={"18px"} color="white" />
          </ItemsNavBar>
        </li>
        <li>
          <ItemsNavBar href={"#productos"}>
            <CiViewList size={"18px"} color="white" />
          </ItemsNavBar>
        </li>
        <li>
          <ItemsNavBar href={"#nosotros"}>
            <MdInfoOutline size={"18px"} color="white" />
          </ItemsNavBar>
        </li>
        <li>
          <ItemsNavBarHamburger className="indicator" navigate="/cart">
            {Carrito?.length > 0 && (
              <span className="indicator-item badge badge-secondary w-4 right-2">
                {Carrito.length}
              </span>
            )}
            <MdOutlineShoppingCart size={"18px"} color="white" />
          </ItemsNavBarHamburger>
        </li>
      </ul>
    </>
  );
};
