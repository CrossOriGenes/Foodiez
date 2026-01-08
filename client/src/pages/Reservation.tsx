import { useState, useRef, useEffect } from "react";
import { Link } from "react-scroll";
import { useLocation, Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AnimatePresence } from "framer-motion";
import {
  checkTTL,
  createPaymentOrder,
  openRazorpayCheckout,
  fetchBookedTables,
  type UserDataPayload,
} from "../utils/apiCallers";
import ReserveTableSection from "../components/reservation/ReserveTableSection";
import Modal from "../components/Modal";

function Reservation() {
  const { state } = useLocation();
  const [isLoading, setLoadTableMap] = useState<boolean>(false);
  const [showConfirmPopup, setShowConfirmPopup] = useState<boolean>(false);
  const [totalAmt, setTotalAmt] = useState<number>(0);
  const [bookedTables, setBookedTables] = useState<string[] | undefined>([]);
  const [userTempData, setUserTempData] = useState<UserDataPayload | any>(null);
  const fetchedRef = useRef(false);
  const navigate = useNavigate();

  const getBookedTables = async () => {
    try {
      setLoadTableMap(true);
      const result = await fetchBookedTables(state.date, state.time);
      if (result.status === "ok") setBookedTables(result.bookedTables);
    } catch (e) {
      console.error("Server error!", e);
    } finally {
      setLoadTableMap(false);
    }
  };
  const checkTTLandShowPrompt = async (
    selectedTables: string[],
    total: number,
    members: number
  ) => {
    const result = await checkTTL(state.email, selectedTables);
    if (result.status !== "ok") {
      toast.error(
        <div className="w-full flex flex-col">
          <h3 className="font-bold text-xl text-red-100">Oops!</h3>
          <p className="font-medium text-[11px] text-gray-500 leading-3! mt-0.5">
            This table combination has been expired! Please refresh your browser
            to try again or some other combinations
          </p>
        </div>
      );
      console.error(result.msg);
      return;
    }

    setUserTempData({
      name: state?.name,
      email: result.data?.choosedBy,
      selectedTables: result.data?.selectedTables,
      chosenDateToVisit: state?.date,
      chosenTimeToVisit: state?.time,
      amountPaid: total,
      members,  
    });
    setTotalAmt(total);
    setShowConfirmPopup((prev) => !prev);
  };
  const reservationPaymentHandler = async () => {
    setShowConfirmPopup(false);
    try {
      const order = await createPaymentOrder(totalAmt);
      openRazorpayCheckout(
        order,
        userTempData,
        (res) => {
          if (res.status === "payment_success_but_booking_failed") {
            toast.warning(res.msg);
            return;
          }
          toast.success(
            <div className="w-full flex flex-col">
              <h3 className="font-bold text-xl text-green-100">{res.msg}</h3>
              <p className="font-medium text-[11px] text-gray-500 leading-3 mt-0.5">
                Your table has been reserved successfully.
              </p>
            </div>
          );
          navigate(`success?b_id=${res.bookingId}`, { replace: true });
        },
        () => {
          toast.error("Payment failed!");
        }
      );
    } catch (e) {
      console.error("Server error!", e);
    }
  };

  if (!state)
    return (
      <>
        <Navigate to=".." />
        {toast.error(
          <div className="flex flex-col">
            <h4 className="text-xl font-bold text-white capitalize">
              Sorry! 🙁
            </h4>
            <p className="text-xs text-gray-400 font-medium leading-3.5 mt-1.5">
              You must fill in the reservation form, or click{" "}
              <Link
                to="reservation"
                smooth={true}
                spy
                duration={500}
                offset={-50}
                className="text-orange-400 underline cursor-pointer"
              >
                here
              </Link>{" "}
              to proceed with your table reservation choice.
            </p>
          </div>
        )}
      </>
    );

  useEffect(() => {
    if (!fetchedRef.current) {
      getBookedTables();
      fetchedRef.current = true;
    }
  }, []);

  return (
    <>
      <header className="absolute top-0 left-0 w-full py-3 px-6 z-10 bg-white">
        <div
          className="w-full flex items-center text-2xl cursor-pointer"
          onClick={() => navigate("..")}
        >
          <i className="fa-solid fa-angle-left text-orange-500" />
          <span className="text-gray-800 font-bold">Back</span>
        </div>
      </header>
      <main>
        <ReserveTableSection
          state={state}
          bookedTables={bookedTables}
          reservedSet={new Set(bookedTables)}
          onTTLCheck={checkTTLandShowPrompt}
          isLoading={isLoading}
        />
      </main>

      <AnimatePresence mode="popLayout">
        {showConfirmPopup && (
          <Modal>
            <header className="w-full flex items-center py-1.5 px-3 bg-purple-600 rounded-md">
              <span className="text-2xl text-white font-extrabold tracking-wide capitalize">
                Confirm to Pay?
              </span>
            </header>
            <div className="w-full flex p-2 mt-2 items-start border-b-2 border-gray-700">
              <i className="fa-solid fa-circle-question text-3xl text-indigo-400 mr-2" />
              <p className="font-medium leading-relaxed text-gray-300">
                Are you sure to pay the amount of{" "}
                <strong className="text-white">₹{totalAmt}</strong> and confirm
                to reservation of your table(s)
              </p>
            </div>
            <div className="w-full flex items-center justify-end gap-2 mt-3">
              <button
                type="button"
                className="btn btn-outline border-black! hover:border-gray-900! hover:bg-gray-900! w-20 py-1 px-2 text-center"
                onClick={() => {
                  setShowConfirmPopup(false);
                  navigate("..", { replace: true });
                }}
              >
                <span className="text-white font-bold">No</span>
              </button>
              <button
                type="button"
                className="btn bg-black hover:bg-gray-900 w-20 py-1 px-2 flex items-center justify-center"
                onClick={reservationPaymentHandler}
              >
                <span className="text-white font-bold">Pay</span>
              </button>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
}

export default Reservation;
