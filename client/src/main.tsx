import { createRoot } from "react-dom/client";
import { ToastContainer, Bounce } from "react-toastify";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <>
    <ToastContainer
      position="bottom-left"
      theme="dark"
      closeOnClick
      pauseOnFocusLoss={false}
      pauseOnHover
      autoClose={9000}
      draggable
      transition={Bounce}
    />
    <App />
  </>
);
