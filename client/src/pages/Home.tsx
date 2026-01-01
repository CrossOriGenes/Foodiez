import { useState, useEffect } from "react";
import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Testimonial from "../components/Testimonial";
import FeaturedDishes from "../components/FeaturedDishes";
import Features from "../components/Features";
import SnacksMenu from "../components/SnacksMenu";
import EventsSection from "../components/EventsSection";
import TableReservation from "../components/TableReservation";
import Footer from "../components/Footer";
import GotoTopButton from "../components/GotoTopBtn";

function Home() {
  const [isSticky, setSticky] = useState<boolean>(false);

  useEffect(() => {
    function setHeaderClass() {
      const scrollVal = window.scrollY;
      setSticky(scrollVal > 670);
    }
    window.addEventListener("scroll", setHeaderClass);

    return () => window.removeEventListener("scroll", setHeaderClass);
  }, []);

  return (
    <>
      <main>
        <Hero />
        <Header isSticky={isSticky} />
        <About />
        <Testimonial />
        <FeaturedDishes />
        <Features />
        <SnacksMenu />
        <EventsSection />
        <TableReservation />
      </main>
      <Footer />

      <GotoTopButton />
    </>
  );
}

export default Home;
