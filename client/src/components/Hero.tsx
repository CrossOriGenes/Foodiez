import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SLIDES } from "../utils/helpers";

const Hero = () => {
  const [slide, setSlide] = useState<number>(0);
  const imgRef = useRef<HTMLImageElement>(null);
  const { scrollY } = useScroll();
  const textScrollOpacity = useTransform(
    scrollY,
    [50, 80, 110, 140, 170, 200],
    [100, 85, 65, 45, 25, 0]
  );
  const imgScrollY = useTransform(
    scrollY,
    [50, 130, 330, 520, 770],
    [0, 30, 60, 90, 120]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev + 1) % SLIDES.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      {SLIDES.map((s) => (
        <motion.img
          ref={Number(s.id) === slide ? imgRef : null}
          key={s.id}
          src={s.src}
          alt=""
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
            Number(s.id) === slide ? "opacity-100" : "opacity-0"
          }`}
          style={{ y: imgScrollY }}
        />
      ))}
      <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] z-1" />
      <motion.div
        style={{ opacity: textScrollOpacity }}
        className="relative w-full h-screen flex flex-col justify-center items-center transition-opacity duration-500 z-2"
      >
        <h1
          className="xl:text-[24rem] md:text-[20rem] sm:text-[16rem] text-[9rem] text-white -mt-30 font-extrabold praise-font"
          data-aos="fade-up"
          data-aos-once={false}
        >
          foodiez
        </h1>
        <h5
          className="xl:text-4xl md:text-3xl sm:text-2xl text-xl text-gray-300 font-semibold sm:-mt-30 -mt-10"
          data-aos="fade-up"
          data-aos-once={false}
        >
          Your mouth-watering <span className="vibes-font">snacks</span> are
          <span className="text-orange-500"> here</span>...
        </h5>
      </motion.div>
    </section>
  );
};

export default Hero;
