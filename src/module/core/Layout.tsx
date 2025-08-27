import { Outlet } from "react-router-dom";
// import { useUserStore } from "../../../stores";
// import { useEffect } from "react";
import { NavBar } from "./ui/navBar/NavBar";
import { Footer } from "./ui/footer/Footer";

export function Layout() {
  //   const { Authenticated } = useUserStore();
  //   // const Authenticated = true
  //   const navigate = useNavigate();

  //   useEffect(() => {
  //     if (!Authenticated) {
  //       navigate("/sign-in", { replace: true });
  //     }
  //   }, [Authenticated, navigate]);

  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}
