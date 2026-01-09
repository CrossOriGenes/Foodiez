import { lazy, Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import AppLoader from "./AppLoader";
import Reservation from "./Reservation";
import TableReservationSuccess from "./TableReservationSuccess";
import FoodMenu from "./FoodMenu";

const Home = lazy(() => import("./Home"));

function AppRouter() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // useEffect(() => {
  //   console.log("API BASE: ", import.meta.env.VITE_API_URL)
  // })

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<AppLoader />}>
            <Home />
          </Suspense>
        }
      />
      <Route path="/reservation" element={<Reservation />} />
      <Route path="/reservation/success" element={<TableReservationSuccess />} />
      <Route path="/our-menu" element={<FoodMenu />} />
    </Routes>
  );
}

export default AppRouter;
