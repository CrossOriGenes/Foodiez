import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { events } from "../../utils/helpers";

interface EventProp {
  title: string;
  date: string;
  description: string;
  linkTo: string;
  delay: number;
}
const EventCard: React.FC<EventProp> = ({
  title,
  date,
  description,
  linkTo,
  delay,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="card bg-white w-full h-100 p-4 shadow-md"
    >
      <div className="p-12 h-full flex flex-col justify-center items-center border-2 border-gray-300">
        <div className="relative w-full text-center">
          <h2 className="text-3xl font-extrabold leading-7">{title}</h2>
          <h5 className="text-xl praise-font text-gray-500 mt-3 mb-2">
            {date}
          </h5>
          <div className="absolute -bottom-1 lg:left-23 md:left-16 left-20 w-15 h-1 bg-orange-600" />
        </div>
        <p className="font-normal text-sm text-gray-500 py-6 leading-4.5 text-center">
          {description}
        </p>
        <a
          href={linkTo}
          className="btn border-2! border-amber-500! hover:bg-amber-500 group"
        >
          <span className="text-xs font-extrabold uppercase tracking-widest text-amber-500 group-hover:text-white!">
            View More
          </span>
        </a>
      </div>
    </motion.div>
  );
};

const EventsSection = () => {
  return (
    <section id="events" className="relative w-full overflow-hidden">
      <div className="relative bg-[url(/images/slide_2.jpg)] bg-cover bg-fixed bg-transparent">
        <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.7)] z-1" />
        <div className="relative xl:px-35 md:px-25 px-10 xl:py-30 md:py-20 py-12 place-items-center z-2">
          <div className="relative flex flex-col items-center justify-center">
            <img
              src="/images/chef.png"
              alt=""
              className="w-18 h-24 object-cover opacity-50"
            />
            <h2 className="text-5xl text-center text-white praise-font capitalize tracking-wide relative my-3">
              Upcoming&nbsp; Events
              <div className="absolute -bottom-5 left-30 w-15 h-1 bg-orange-600" />
            </h2>
            <p
              className="text-[#917b5a] sm:text-lg mt-12 mx-auto text-center font-medium leading-6 lg:w-[50%] w-[85%]"
              data-aos="fade-up"
            >
              More than just food — we host moments worth remembering. From live
              music nights to food-filled celebrations, join us for events that
              bring great vibes, great people, and even better flavors together.
            </p>
          </div>
          <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 sm:p-12 p-0 mt-10">
            {events.map((event, idx) => (
              <EventCard key={idx} delay={idx * 0.3} {...event} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
