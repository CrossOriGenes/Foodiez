import { useNavigate } from "react-router-dom";
import MenuLists from "../components/orders/MenuLists";

function FoodMenu() {
  const navigate = useNavigate();
  return (
    <>
      <header className="absolute top-0 left-0 w-full py-3 px-6 z-10 bg-transparent">
        <div
          className="w-full flex items-center text-2xl cursor-pointer"
          onClick={() => navigate("..")}
        >
          <i className="fa-solid fa-angle-left text-orange-500" />
          <span className="text-gray-800 font-bold">Back</span>
        </div>
      </header>
      <main>
        <MenuLists />
      </main>
    </>
  );
}

export default FoodMenu;
