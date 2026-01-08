import { useNavigate } from "react-router-dom";
import { type FormData } from "../../utils/helpers";
import ReservationForm from "./ReservationForm";

const TableReservation = () => {
  const navigate = useNavigate();
  function handleTableReservationData(data: FormData) {
    navigate("reservation", { state: data });
  }

  return (
    <section id="reservation" className="relative overflow-hidden min-h-screen">
      <div className="relative xl:p-25 md:p-20 p-15">
        <div className="relative flex flex-col items-center justify-center mt-4">
          <img
            src="/images/coffee-love.png"
            alt=""
            className="w-22 h-22 object-cover"
          />
          <h2 className="text-5xl text-center praise-font capitalize tracking-wide relative my-3">
            Reserve&nbsp; a&nbsp; Table
            <div className="absolute -bottom-5 left-27 w-15 h-1 bg-orange-600" />
          </h2>
          <p
            className="text-[#917b5a] sm:text-lg mt-12 mx-auto text-center font-medium leading-6 lg:w-[50%] w-[85%]"
            data-aos="fade-up"
          >
            Whether it's a quick coffee break, a casual hangout, or a special
            celebration, we'll make sure your table is ready when you arrive.
          </p>
        </div>
        <div className="grid xl:grid-cols-2 grid-cols-1 gap-6 mt-20 sm:px-16 px-0">
          <div className="relative w-full md:pl-8 md:pr-16 p-0">
            <h2 className="text-4xl font-bold vibes-font">Contact Info</h2>
            <ul className="w-full flex flex-col mt-3 md:pr-16">
              <li className="inline-flex items-center py-3">
                <i className="text-2xl text-gray-700 mr-3 fa-solid fa-home" />
                <p className="font-medium text-gray-500 leading-4.5">
                  Ground-floor, Sonajhuri Abasan, Rammandir
                  <br />
                  Chinsurah RS, Hooghly-712102
                </p>
              </li>
              <li className="inline-flex items-center py-3">
                <i className="text-2xl text-gray-700 mr-3 fa-solid fa-phone" />
                <a
                  href="tel:(+91) 9831388297"
                  className="font-medium text-gray-500 hover:text-orange-500 transition-colors duration-300"
                >
                  (+91) 9831388297
                </a>
              </li>
              <li className="inline-flex items-center py-3">
                <i className="text-2xl text-gray-700 mr-3 fa-solid fa-envelope" />
                <a
                  href="mailto:foodiez.25@gmail.com"
                  className="font-medium text-gray-500 hover:text-orange-500 transition-colors duration-300"
                >
                  foodiez.25@gmail.com
                </a>
              </li>
              <div className="relative w-full h-70 mt-3 mb-2 overflow-clip rounded-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3675.6389271187486!2d88.37084907508762!3d22.889792979267053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDUzJzIzLjMiTiA4OMKwMjInMjQuMyJF!5e0!3m2!1sen!2sin!4v1766207256268!5m2!1sen!2sin"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="absolute top-0 left-0 w-full h-full object-cover border-0"
                />
              </div>
            </ul>
          </div>
          <div className="relative w-full sm:pl-10 sm:pr-6 p-0 xl:mt-0 mt-12">
            <h2 className="text-4xl font-bold vibes-font">Reservation Form</h2>
            <ReservationForm onSubmit={handleTableReservationData} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TableReservation;
