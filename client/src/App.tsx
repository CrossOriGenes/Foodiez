import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import AppRouter from "./pages/AppRouter";

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
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
