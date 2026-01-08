import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { navs } from "../../utils/helpers";

const Header = ({ isSticky }: { isSticky: boolean }) => {
  const [activeLink, setActiveLink] = useState<string>("hero");
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <header
      className={`w-full py-1 bg-white z-10 ${
        isSticky ? "sticky top-0 left-0" : "relative"
      }`}
    >
      <nav className="w-full lg:flex hidden items-center justify-center border-t-2 border-b-2 border-gray-400 py-2">
        <ul className="relative flex gap-10">
          {navs.slice(0, 3).map((item) => (
            <li key={item.name} className="list-none">
              <ScrollLink
                to={item.to}
                smooth={true}
                spy
                duration={500}
                offset={-100}
                onClick={() => setActiveLink(item.to)}
                onSetActive={() => setActiveLink(item.to)}
                className={`text-lg transition-colors duration-300 cursor-pointer ${
                  activeLink === item.to
                    ? "text-orange-500 font-extrabold"
                    : "text-gray-400 hover:text-gray-500 font-semibold"
                }`}
              >
                {item.name}
              </ScrollLink>
            </li>
          ))}
        </ul>
        <h2 className="praise-font mx-20 text-5xl font-extrabold">foodiez</h2>
        <ul className="relative flex gap-10">
          {navs.slice(3, navs.length).map((item) => (
            <li key={item.name} className="list-none">
              <ScrollLink
                to={item.to}
                smooth={true}
                spy
                duration={500}
                offset={-100}
                onClick={() => setActiveLink(item.to)}
                onSetActive={() => setActiveLink(item.to)}
                className={`text-lg transition-colors duration-300 cursor-pointer ${
                  activeLink === item.to
                    ? "text-orange-500 font-extrabold"
                    : "text-gray-400 hover:text-gray-500 font-semibold"
                }`}
              >
                {item.name}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* mobile nav */}
      <nav className="w-full lg:hidden flex items-center justify-between border-t-2 border-b-2 border-gray-400 py-2 px-5">
        <h2 className="praise-font text-5xl font-extrabold">foodiez</h2>
        <div
          className="w-8 h-8 flex flex-col justify-center gap-1.5 cursor-pointer overflow-clip z-20"
          onClick={() => setOpen(!isOpen)}
        >
          <span
            className={`relative w-[80%] h-1 bg-gray-700 rounded-md transition-transform duration-500 ${
              isOpen ? "rotate-45 top-3" : ""
            }`}
          />
          <span
            className={`relative w-full h-1 bg-gray-700 rounded-md transition-transform duration-500 ${
              isOpen ? "translate-x-9" : ""
            }`}
          />
          <span
            className={`relative h-1 bg-gray-700 rounded-md transition-transform duration-500 ${
              isOpen ? "-rotate-45 bottom-2 w-[80%]" : "w-[45%]"
            }`}
          />
        </div>
        <AnimatePresence mode="popLayout">
          {isOpen && (
            <motion.aside
              initial={{ opacity: 0, x: 70 }}
              animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 70 }}
              exit={{ opacity: 0, x: 70 }}
              transition={{ type: "tween", stiffness: 250, damping: 15 }}
              className="fixed top-0 right-0 w-[85%] h-full flex justify-center items-center bg-black/90 z-10"
            >
              <ul className="relative flex flex-col items-center gap-4">
                {navs.map((item) => (
                  <li key={item.name} className="list-none">
                    <ScrollLink
                      to={item.to}
                      smooth={true}
                      spy
                      duration={500}
                      offset={-100}
                      onClick={() => {
                        setActiveLink(item.to);
                        setOpen(!isOpen);
                      }}
                      onSetActive={() => setActiveLink(item.to)}
                      className={`text-lg transition-colors duration-300 cursor-pointer ${
                        activeLink === item.to
                          ? "text-orange-500 font-extrabold"
                          : "text-gray-400 hover:text-gray-500 font-semibold"
                      }`}
                    >
                      {item.name}
                    </ScrollLink>
                  </li>
                ))}
              </ul>
            </motion.aside>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
