import { motion, type Variants } from "framer-motion";
import { featuredSnacks } from "../utils/helpers";

const FeaturedDishes = () => {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
  };
  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 600,
        damping: 15,
      },
    },
  };

  return (
    <section id="features" className="relative overflow-hidden min-h-screen">
      <div className="w-full h-full xl:p-25 md:p-20 p-15 bg-[url(/images/wood_1.png)] object-cover">
        <div className="relative flex flex-col items-center">
          <img
            src="/images/served-plate.png"
            alt=""
            className="w-18 h-18 object-cover"
          />
          <h2 className="text-white text-5xl text-center praise-font capitalize tracking-wide relative my-3">
            Featured&nbsp; Dishes
            <div className="absolute -bottom-5 left-27 w-15 h-1 bg-orange-600" />
          </h2>
          <p className="text-[#917b5a] text-lg mt-12 mx-auto text-center font-medium leading-6 lg:w-[50%] w-[85%]">
            Handpicked favorites made to steal the spotlight — from crispy bites
            to bold, cheesy indulgences. Every dish here is a crowd-pleaser,
            crafted to satisfy your cravings and keep you coming back for more.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative grid lg:grid-cols-2 grid-cols-1 mt-32 lg:px-10 px-0"
        >
          <motion.div
            variants={itemVariants}
            className="w-full h-140 flex flex-row border-r border-black"
          >
            <div className="relative w-1/2 h-full overflow-clip">
              <img
                src={featuredSnacks[0].image}
                alt=""
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
              <i className="fa-solid fa-caret-left absolute -right-5 top-8 text-5xl text-amber-100" />
            </div>
            <div className="relative lg:w-1/2 w-full h-full bg-amber-100 p-6 flex flex-col items-center">
              <h2 className="font-extrabold text-2xl text-gray-900 leading-6 py-4 relative text-center">
                {featuredSnacks[0].name}
                <div className="absolute bottom-0 left-18 w-16 h-1 bg-orange-500" />
              </h2>
              <span className="font-semibold text-amber-900 text-5xl my-4 praise-font">
                ₹{featuredSnacks[0].price}
              </span>
              <p className="font-medium leading-4 text-sm text-gray-500 text-center">
                {featuredSnacks[0].description}
              </p>
            </div>
          </motion.div>
          <div className="w-full h-140 flex flex-col">
            <motion.div variants={itemVariants} className="w-full h-1/2 flex">
              <div className="relative w-1/2 h-full overflow-clip">
                <img
                  src={featuredSnacks[1].image}
                  alt=""
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
                <i className="fa-solid fa-caret-left absolute -right-5 top-8 text-5xl text-gray-50" />
              </div>
              <div className="relative lg:w-1/2 w-full h-full bg-gray-50 p-6 flex flex-col items-center">
                <h2 className="font-extrabold text-2xl text-gray-900 leading-6 py-4 relative text-center">
                  {featuredSnacks[1].name}
                  <div className="absolute bottom-0 left-23 w-16 h-1 bg-orange-500" />
                </h2>
                <span className="font-semibold text-amber-900 text-5xl my-4 praise-font">
                  ₹{featuredSnacks[1].price}
                </span>
                <p className="font-medium leading-4 text-sm text-gray-500 text-center">
                  {featuredSnacks[1].description}
                </p>
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="w-full h-1/2 flex">
              <div className="relative lg:w-1/2 w-full h-full bg-gray-50 p-6 flex flex-col items-center">
                <h2 className="font-extrabold text-2xl text-gray-900 leading-6 py-4 relative text-center">
                  {featuredSnacks[2].name}
                  <div className="absolute bottom-0 left-23 w-16 h-1 bg-orange-500" />
                </h2>
                <span className="font-semibold text-amber-900 text-5xl my-4 praise-font">
                  ₹{featuredSnacks[2].price}
                </span>
                <p className="font-medium leading-4 text-sm text-gray-500 text-center">
                  {featuredSnacks[2].description}
                </p>
              </div>
              <div className="relative w-1/2 h-full overflow-clip">
                <img
                  src={featuredSnacks[2].image}
                  alt=""
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
                <i className="fa-solid fa-caret-right absolute -left-5 top-8 text-5xl text-gray-50" />
              </div>
            </motion.div>
          </div>
          <div className="w-full h-140 flex flex-col border-r border-black">
            <motion.div variants={itemVariants} className="w-full h-1/2 flex">
              <div className="relative w-1/2 h-full overflow-clip">
                <img
                  src={featuredSnacks[3].image}
                  alt=""
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
                <i className="fa-solid fa-caret-left absolute -right-5 top-8 text-5xl text-gray-50" />
              </div>
              <div className="relative lg:w-1/2 w-full h-full bg-gray-50 p-6 flex flex-col items-center">
                <h2 className="font-extrabold text-2xl text-gray-900 leading-6 py-4 relative text-center">
                  {featuredSnacks[3].name}
                  <div className="absolute bottom-0 left-23 w-16 h-1 bg-orange-500" />
                </h2>
                <span className="font-semibold text-amber-900 text-5xl my-4 praise-font">
                  ₹{featuredSnacks[3].price}
                </span>
                <p className="font-medium leading-4 text-sm text-gray-500 text-center">
                  {featuredSnacks[3].description}
                </p>
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="w-full h-1/2 flex">
              <div className="relative lg:w-1/2 w-full h-full bg-gray-50 p-6 flex flex-col items-center">
                <h2 className="font-extrabold text-2xl text-gray-900 leading-6 py-4 relative text-center">
                  {featuredSnacks[4].name}
                  <div className="absolute bottom-0 left-23 w-16 h-1 bg-orange-500" />
                </h2>
                <span className="font-semibold text-amber-900 text-5xl my-4 praise-font">
                  ₹{featuredSnacks[4].price}
                </span>
                <p className="font-medium leading-4 text-sm text-gray-500 text-center">
                  {featuredSnacks[4].description}
                </p>
              </div>
              <div className="relative w-1/2 h-full overflow-clip">
                <img
                  src={featuredSnacks[4].image}
                  alt=""
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
                <i className="fa-solid fa-caret-right absolute -left-5 top-8 text-5xl text-gray-50" />
              </div>
            </motion.div>
          </div>
          <motion.div
            variants={itemVariants}
            className="w-full h-140 flex flex-row"
          >
            <div className="relative w-1/2 h-full overflow-clip">
              <img
                src={featuredSnacks[5].image}
                alt=""
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
              <i className="fa-solid fa-caret-left absolute -right-5 top-8 text-5xl text-amber-100" />
            </div>
            <div className="relative lg:w-1/2 w-full h-full bg-amber-100 p-6 flex flex-col items-center">
              <h2 className="font-extrabold text-2xl text-gray-900 leading-6 py-4 relative text-center">
                {featuredSnacks[5].name}
                <div className="absolute bottom-0 left-18 w-16 h-1 bg-orange-500" />
              </h2>
              <span className="font-semibold text-amber-900 text-5xl my-4 praise-font">
                ₹{featuredSnacks[5].price}
              </span>
              <p className="font-medium leading-4 text-sm text-gray-500 text-center">
                {featuredSnacks[5].description}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedDishes;
