const About = () => {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen overflow-hidden"
    >
      <div className="w-full h-full grid lg:grid-cols-2 grid-cols-1">
        <div className="relative w-full h-full">
          <img
            src="/images/res_img_1.jpg"
            alt=""
            className="w-full h-full object-cover"
            data-aos="fade-in"
          />
        </div>
        <div className="relative w-full h-full xl:p-20 md:p-15 p-8">
          <img
            src="/images/wood_1.png"
            alt=""
            className="absolute w-full h-full inset-0 object-cover"
          />
          <h2 className="text-white text-5xl text-center praise-font capitalize tracking-wide relative">
            About&nbsp; Us
            <div className="absolute -bottom-5 xl:left-68 lg:left-42 md:left-74 left-40 w-15 h-1 bg-orange-600" />
          </h2>
          <p
            className="text-[#917b5a] xl:text-lg sm:text-sm text-[13.5px] mt-12 font-medium leading-relaxed first-letter:float-left first-letter:text-7xl first-letter:font-serif first-letter:font-bold first-letter:mr-3 first-letter:text-gray-100"
            data-aos="fade-up"
          >
            We're all about good vibes and even better food. What began as a
            small café serving freshly made, mouth-watering snacks has grown
            into a go-to spot for people who crave bold flavors and quick
            comfort bites. Every item on our menu is prepared using quality
            ingredients, signature spices, and recipes that hit different —
            whether you're chilling at our café or ordering online from home. We
            believe food should be fun, satisfying, and unforgettable. That's
            why we focus on consistent taste, fast service, and packaging that
            keeps your snacks just as hot and crispy as when they left our
            kitchen. From late-night cravings to casual hangouts, Foodee is here
            to serve happiness, one bite at a time. Come for the food, stay for
            the flavor — we've got your cravings covered.
          </p>
          <div className="w-full flex justify-center mt-12" data-aos="fade-up">
            <button type="button" className="btn btn-outline">
              <strong className="uppercase text-white text-sm tracking-wider">
                Get in touch
              </strong>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
