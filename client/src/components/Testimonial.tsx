import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";
import { quotes } from "../utils/helpers";
import "swiper/css";
import "swiper/css/pagination";

const Testimonial = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <section id="testimonials" className="relative h-[70vh] overflow-hidden">
      <div className="relative w-full h-full xl:p-30 md:p-20 p-15">
        <Swiper
          onSwiper={(swiper) => setSwiperInstance(swiper)}
          onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation={true}
          className="relative w-full h-full md:mb-0 mb-2"
        >
          {quotes.map((quote) => (
            <SwiperSlide key={quote.id}>
              <blockquote className="w-full h-full flex flex-col lg:p-8 p-4 gap-12">
                <p className="xl:text-5xl md:text-4xl text-2xl italic font-medium text-orange-950">
                  {quote.comment}
                </p>
                <p className="font-bold sm:text-2xl text-sm text-gray-500">
                  — {quote.reviewer}
                </p>
              </blockquote>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="relative w-full mx-auto flex justify-center gap-2">
          {[0, 1, 2, 3].map((idx) => (
            <button
              key={idx}
              className={`sm:h-3.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeSlide === idx ? "sm:w-7 w-5 bg-orange-500" : "sm:w-3.5 w-2.5 bg-gray-300"
              }`}
              onClick={() => swiperInstance?.slideTo(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
