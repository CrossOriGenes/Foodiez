import { useState, useEffect } from "react";
import About from "../components/home/About";
import Header from "../components/home/Header";
import Hero from "../components/home/Hero";
import Testimonial from "../components/home/Testimonial";
import FeaturedDishes from "../components/home/FeaturedDishes";
import Features from "../components/home/Features";
import SnacksMenu from "../components/home/SnacksMenu";
import EventsSection from "../components/home/EventsSection";
import TableReservation from "../components/home/TableReservation";
import Footer from "../components/home/Footer";
import GotoTopButton from "../components/home/GotoTopBtn";

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
