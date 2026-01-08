import { Link as ScrollLink } from "react-scroll";
import { useState, useRef, type FormEvent } from "react";
import { getCpyRtYr } from "../../utils/helpers";

export const footerNavs: { name: string; to: string }[] = [
  { name: "Features", to: "features" },
  { name: "Menu", to: "menu" },
  { name: "Events", to: "events" },
  { name: "Reservation", to: "reservation" },
];

const Footer = () => {
  const [activeLink, setActiveLink] = useState<string>("");
  const newsltrMailref = useRef<HTMLInputElement>(null);
  const newsltrFormref = useRef<HTMLFormElement>(null);

  function handleNewsltrMailSubmit(e: FormEvent) {
    e.preventDefault();
    let email = newsltrMailref.current?.value.toLowerCase();
    console.log(email);
    newsltrFormref.current?.reset();
  }

  return (
    <footer id="footer" className="relative overflow-hidden">
      <div className="relative xl:p-25 md:p-20 p-10 grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 bg-gray-900 min-h-[65vh]">
        <div className="w-full sm:px-2 px-0">
          <figure className="w-full flex items-center">
            <img
              src="/logo.svg"
              alt=""
              className="sm:w-17.5 w-14.25 sm:h-16.25 h-13.25 object-cover mr-2"
            />
            <h1 className="sm:text-7xl text-6xl text-white font-extrabold praise-font">
              Foodiez
            </h1>
          </figure>
          <p className="sm:text-sm text-xs text-gray-500 font-medium leading-tight mt-7.5">
            whether you&apos;re enjoying it hot at our café or ordering it
            straight to your doorstep. From crispy bites to indulgent treats, we
            focus on delivering consistent taste, quick service, and a
            satisfying experience every single time!
          </p>
        </div>
        <div className="w-full sm:px-2 px-0 sm:ml-6 sm:mr-2 xl:mt-0 mt-4">
          <h3 className="relative sm:text-[32px] text-[28px] font-bold text-gray-400">
            Reach us
            <span className="absolute -bottom-1.5 left-0 w-15 h-1 bg-orange-500" />
          </h3>
          <ul className="flex items-center gap-2 sm:mt-12 mt-7">
            <li>
              <a
                href="#"
                className="flex justify-center items-center sm:w-12 w-10 sm:h-12 h-10 rounded-full bg-white hover:bg-gray-700 transition-colors duration-300 group"
              >
                <i className="fa-brands fa-facebook sm:text-2xl text-lg text-gray-900 group-hover:text-white" />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex justify-center items-center sm:w-12 w-10 sm:h-12 h-10 rounded-full bg-white hover:bg-gray-700 transition-colors duration-300 group"
              >
                <i className="fa-brands fa-whatsapp sm:text-2xl text-lg text-gray-900 group-hover:text-white" />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex justify-center items-center sm:w-12 w-10 sm:h-12 h-10 rounded-full bg-white hover:bg-gray-700 transition-colors duration-300 group"
              >
                <i className="fa-brands fa-x-twitter sm:text-2xl text-lg text-gray-900 group-hover:text-white" />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex justify-center items-center sm:w-12 w-10 sm:h-12 h-10 rounded-full bg-white hover:bg-gray-700 transition-colors duration-300 group"
              >
                <i className="fa-brands fa-linkedin sm:text-2xl text-lg text-gray-900 group-hover:text-white" />
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full sm:px-2 px-0 sm:ml-6 sm:mr-2 xl:mt-0 mt-4">
          <h3 className="relative sm:text-[32px] text-[28px] font-bold text-gray-400">
            Links
            <span className="absolute -bottom-1.5 left-0 w-15 h-1 bg-orange-500" />
          </h3>
          <ul className="flex flex-col gap-2 sm:mt-12 mt-7">
            {footerNavs.map((nav, k) => (
              <li key={k} className="list-none">
                <ScrollLink
                  to={nav.to}
                  smooth={true}
                  spy
                  duration={500}
                  offset={-100}
                  onClick={() => setActiveLink(nav.to)}
                  onSetActive={() => setActiveLink(nav.to)}
                  className={`cursor-pointer transition-colors duration-300 sm:text-md text-sm ${
                    activeLink === nav.to
                      ? "font-bold text-amber-500"
                      : "font-medium text-gray-300"
                  }`}
                >
                  {nav.name}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full sm:px-2 px-0 sm:ml-6 sm:mr-2 xl:mt-0 mt-4">
          <h3 className="relative sm:text-[32px] text-[28px] font-bold text-gray-400">
            Newsletter
            <span className="absolute -bottom-1.5 left-0 w-15 h-1 bg-orange-500" />
          </h3>
          <div className="relative w-full sm:mt-12 mt-7">
            <form
              ref={newsltrFormref}
              onSubmit={handleNewsltrMailSubmit}
              autoComplete="off"
              className="w-full sm:h-12 h-10 flex"
            >
              <input
                ref={newsltrMailref}
                type="email"
                minLength={15}
                placeholder="Your Email here"
                className="outline-0 bg-transparent border-2 border-gray-500 text-white w-[80%] h-full py-1.5 px-3 rounded-l-lg"
                required
              />
              <button className="h-full w-[20%] flex justify-center items-center bg-linear-to-tr from-0% from-red-900 to-100% to-orange-700 rounded-r-lg hover:from-red-700 hover:to-orange-500 cursor-pointer transition-colors duration-300">
                <i className="fa-solid fa-paper-plane text-white sm:text-[22px] text-[18px]" />
              </button>
            </form>
            <p className="text-xs text-gray-500 font-medium mt-4 leading-tight">
              Join our community channel to recieve daily notifications about
              events and new food-product launches.
            </p>
          </div>
        </div>
      </div>
      <div className="relative bg-gray-900">
        <div className="w-full flex justify-center px-12">
          <hr className="w-full h-0.5 bg-gray-700" />
        </div>
        <div className="relative w-full sm:p-10 p-8 flex flex-col items-center justify-center">
          <div className="flex gap-2 items-center text-gray-500">
            <a
              href="#"
              className="font-medium text-xs hover:text-indigo-500 transition-colors duration-300"
            >
              Terms & Conditions
            </a>{" "}
            |
            <a
              href="#"
              className="font-medium text-xs hover:text-indigo-500 transition-colors duration-300"
            >
              Privacy Policy
            </a>
          </div>
          <p className="text-sm text-gray-700 font-semibold">
            &copy;{getCpyRtYr()} All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
