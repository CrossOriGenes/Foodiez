import { lazy, useEffect, Suspense } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AppLoader from "./pages/AppLoader";

const Home = lazy(() => import("./pages/Home"));

function App() {
  useEffect(() => {
    AOS.init({
      easing: "ease-in-out",
      offset: 100,
      duration: 800,
      delay: 300,
      once: true,
      mirror: false,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <Suspense fallback={<AppLoader />}>
        <Home />
      </Suspense>
    </>
  );
}

export default App;
