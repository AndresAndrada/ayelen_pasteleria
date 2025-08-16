import { lazy, Suspense } from "react";
import { Loader } from "../module/core/Loader";
import { Route, Routes as RouterRoutes } from "react-router-dom";
import { NavBar } from "../module/core/ui/navBar/NavBar";

const Home = lazy(() => import("../screens/Home"));

export default function NavigatorRouter() {
  return (
    <Suspense
      fallback={
        <div className="h-screen w-screen grid place-content-center">
          <Loader className="h-[4rem] w-[4rem]" />
        </div>
      }
    >
      <NavBar />
      <RouterRoutes>
        <Route path={"/"} element={<Home />} />
      </RouterRoutes>
    </Suspense>
  );
}
