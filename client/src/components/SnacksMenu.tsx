import { menuData } from "../utils/helpers";

const SnacksMenu = () => {
  const fries = menuData
    .filter((food) => food.category === "fries")
    .slice(0, 5);
  const wraps = menuData
    .filter((food) => food.category === "wraps")
    .slice(0, 5);
  const snacks = menuData
    .filter((food) => food.category === "snacks")
    .slice(0, 5);
  const burgers = menuData
    .filter((food) => food.category === "burgers")
    .slice(0, 5);
  const pizza = menuData
    .filter((food) => food.category === "pizza")
    .slice(0, 5);
  const drinks = menuData
    .filter((food) => food.category === "drinks")
    .slice(0, 5);
  const desserts = menuData
    .filter((food) => food.category === "desserts")
    .slice(0, 5);
  const beverages = menuData.filter((food) => food.category === "beverages");

  return (
    <section id="menu" className="relative overflow-hidden min-h-screen">
      <div className="relative sm:p-25 p-15">
        <div className="relative flex flex-col items-center justify-center">
          <img
            src="/images/vegan.png"
            alt=""
            className="w-22 h-18 object-cover"
          />
          <h2 className="text-5xl text-center praise-font capitalize tracking-wide relative my-3">
            Our&nbsp; Menu
            <div className="absolute -bottom-5 left-16 w-15 h-1 bg-orange-600" />
          </h2>
          <p
            className="text-[#917b5a] text-lg mt-12 mx-auto text-center font-medium leading-6 lg:w-[50%] w-[85%]"
            data-aos="fade-up"
          >
            Explore our menu - crafted to satisfy every craving and idle
            evenings.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 sm:p-6 p-0 mt-18">
          <div className="relative sm:px-6 px-0">
            <h2 className="font-extrabold sm:text-5xl text-4xl vibes-font capitalize">
              fries
            </h2>
            <ul className="w-full flex flex-col">
              {fries.map((item, k) => (
                <li
                  key={k}
                  className="flex items-center justify-between border-b border-gray-300 mt-3 py-1"
                  data-aos="fade-up"
                  data-aos-delay={`${k * 10}`}
                >
                  <div className="flex items-center">
                    <figure className="relative w-20 h-12 overflow-clip rounded-lg mr-3">
                      <img
                        src={item.image}
                        className="absolute inset-0 object-cover"
                        alt=""
                      />
                    </figure>
                    <div className="flex flex-col">
                      <h3 className="sm:text-lg font-extrabold leading-3">
                        {item.title}
                      </h3>
                      <p className="sm:text-sm text-xs text-gray-400 mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="sm:text-3xl text-2xl praise-font text-amber-700">
                    ₹{item.price}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative sm:px-6 px-0">
            <h2 className="font-extrabold sm:text-5xl text-4xl vibes-font capitalize">
              wraps
            </h2>
            <ul className="w-full flex flex-col">
              {wraps.map((item, k) => (
                <li
                  key={k}
                  className="flex items-center justify-between border-b border-gray-300 mt-3 py-1"
                  data-aos="fade-up"
                  data-aos-delay={`${k * 10}`}
                >
                  <div className="flex items-center">
                    <figure className="relative w-20 h-12 overflow-clip rounded-lg mr-3">
                      <img
                        src={item.image}
                        className="absolute inset-0 object-cover"
                        alt=""
                      />
                    </figure>
                    <div className="flex flex-col">
                      <h3 className="sm:text-lg font-extrabold leading-3">
                        {item.title}
                      </h3>
                      <p className="sm:text-sm text-xs text-gray-400 mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="sm:text-3xl text-2xl praise-font text-amber-700">
                    ₹{item.price}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 sm:p-6 p-0 mt-9">
          <div className="relative sm:px-6 px-0">
            <h2 className="font-extrabold sm:text-5xl text-4xl vibes-font capitalize">
              snacks
            </h2>
            <ul className="w-full flex flex-col">
              {snacks.map((item, k) => (
                <li
                  key={k}
                  className="flex items-center justify-between border-b border-gray-300 mt-3 py-1"
                  data-aos="fade-up"
                  data-aos-delay={`${k * 10}`}
                >
                  <div className="flex items-center">
                    <figure className="relative w-20 h-12 overflow-clip rounded-lg mr-3">
                      <img
                        src={item.image}
                        className="absolute inset-0 object-cover"
                        alt=""
                      />
                    </figure>
                    <div className="flex flex-col">
                      <h3 className="sm:text-lg font-extrabold leading-3">
                        {item.title}
                      </h3>
                      <p className="sm:text-sm text-xs text-gray-400 mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="sm:text-3xl text-2xl praise-font text-amber-700">
                    ₹{item.price}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative sm:px-6 px-0">
            <h2 className="font-extrabold sm:text-5xl text-4xl vibes-font capitalize">
              burgers
            </h2>
            <ul className="w-full flex flex-col">
              {burgers.map((item, k) => (
                <li
                  key={k}
                  className="flex items-center justify-between border-b border-gray-300 mt-3 py-1"
                  data-aos="fade-up"
                  data-aos-delay={`${k * 10}`}
                >
                  <div className="flex items-center">
                    <figure className="relative w-20 h-12 overflow-clip rounded-lg mr-3">
                      <img
                        src={item.image}
                        className="absolute inset-0 object-cover"
                        alt=""
                      />
                    </figure>
                    <div className="flex flex-col">
                      <h3 className="sm:text-lg font-extrabold leading-3">
                        {item.title}
                      </h3>
                      <p className="sm:text-sm text-xs text-gray-400 mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="sm:text-3xl text-2xl praise-font text-amber-700">
                    ₹{item.price}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 sm:p-6 p-0 mt-9">
          <div className="relative sm:px-6 px-0">
            <h2 className="font-extrabold sm:text-5xl text-4xl vibes-font capitalize">
              pizza
            </h2>
            <ul className="w-full flex flex-col">
              {pizza.map((item, k) => (
                <li
                  key={k}
                  className="flex items-center justify-between border-b border-gray-300 mt-3 py-1"
                  data-aos="fade-up"
                  data-aos-delay={`${k * 10}`}
                >
                  <div className="flex items-center">
                    <figure className="relative w-20 h-12 overflow-clip rounded-lg mr-3">
                      <img
                        src={item.image}
                        className="absolute inset-0 object-cover"
                        alt=""
                      />
                    </figure>
                    <div className="flex flex-col">
                      <h3 className="sm:text-lg font-extrabold leading-3">
                        {item.title}
                      </h3>
                      <p className="sm:text-sm text-xs text-gray-400 mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="sm:text-3xl text-2xl praise-font text-amber-700">
                    ₹{item.price}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative sm:px-6 px-0">
            <h2 className="font-extrabold sm:text-5xl text-4xl vibes-font capitalize">
              drinks
            </h2>
            <ul className="w-full flex flex-col">
              {drinks.map((item, k) => (
                <li
                  key={k}
                  className="flex items-center justify-between border-b border-gray-300 mt-3 py-1"
                  data-aos="fade-up"
                  data-aos-delay={`${k * 10}`}
                >
                  <div className="flex items-center">
                    <figure className="relative w-20 h-12 overflow-clip rounded-lg mr-3">
                      <img
                        src={item.image}
                        className="absolute inset-0 object-cover"
                        alt=""
                      />
                    </figure>
                    <div className="flex flex-col">
                      <h3 className="sm:text-lg font-extrabold leading-3">
                        {item.title}
                      </h3>
                      <p className="sm:text-sm text-xs text-gray-400 mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="sm:text-3xl text-2xl praise-font text-amber-700">
                    ₹{item.price}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 sm:p-6 p-0 mt-9">
          <div className="relative sm:px-6 px-0">
            <h2 className="font-extrabold sm:text-5xl text-4xl vibes-font capitalize">
              desserts
            </h2>
            <ul className="w-full flex flex-col">
              {desserts.map((item, k) => (
                <li
                  key={k}
                  className="flex items-center justify-between border-b border-gray-300 mt-3 py-1"
                  data-aos="fade-up"
                  data-aos-delay={`${k * 10}`}
                >
                  <div className="flex items-center">
                    <figure className="relative w-20 h-12 overflow-clip rounded-lg mr-3">
                      <img
                        src={item.image}
                        className="absolute inset-0 object-cover"
                        alt=""
                      />
                    </figure>
                    <div className="flex flex-col">
                      <h3 className="sm:text-lg font-extrabold leading-3">
                        {item.title}
                      </h3>
                      <p className="sm:text-sm text-xs text-gray-400 mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="sm:text-3xl text-2xl praise-font text-amber-700">
                    ₹{item.price}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative sm:px-6 px-0">
            <h2 className="font-extrabold sm:text-5xl text-4xl vibes-font capitalize">
              beverages
            </h2>
            <ul className="w-full flex flex-col">
              {beverages.map((item, k) => (
                <li
                  key={k}
                  className="flex items-center justify-between border-b border-gray-300 mt-3 py-1"
                  data-aos="fade-up"
                  data-aos-delay={`${k * 10}`}
                >
                  <div className="flex items-center">
                    <figure className="relative w-20 h-12 overflow-clip rounded-lg mr-3">
                      <img
                        src={item.image}
                        className="absolute inset-0 object-cover"
                        alt=""
                      />
                    </figure>
                    <div className="flex flex-col">
                      <h3 className="sm:text-lg font-extrabold leading-3">
                        {item.title}
                      </h3>
                      <p className="sm:text-sm text-xs text-gray-400 mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="sm:text-3xl text-2xl praise-font text-amber-700">
                    ₹{item.price}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full flex justify-center my-12">
          <button type="button" className="btn btn-outline group" data-aos="fade-up">
            <span className="text-sm font-bold text-orange-500 group-hover:text-white tracking-wide uppercase mr-1">
              More Food Menu
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SnacksMenu;
