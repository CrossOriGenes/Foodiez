import React, { useRef, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { toPng } from "html-to-image";
import type { DataProp } from "../../utils/apiCallers";
import SparkLayer from "./SparkLayer";
import { extractDate2, extractTime } from "../../utils/helpers";
import Spinner from "../Spinner";
import { toast } from "react-toastify";

interface SuccessProps {
  bookingId?: string | null;
  data?: DataProp | null;
  isLoading?: boolean;
}

const TableReservationPaymentSuccess: React.FC<SuccessProps> = ({
  isLoading,
  bookingId,
  data,
}) => {
  const [load, setLoad] = useState<boolean>(false);
  const recieptRef = useRef<HTMLDivElement>(null);

  async function downloadRecieptHandler() {
    if (!recieptRef.current) return;
    try {
      setLoad(true);
      const png = await toPng(recieptRef.current, {
        cacheBust: true,
        backgroundColor: "transparent",
      });
      const link = document.createElement("a")!;
      link.href = png;
      link.download = "Reservation-reciept";
      link.click();
    } catch (e) {
      toast.error(
        <p className="text-sm text-gray-200">Failed to download Reciept</p>
      );
    } finally {
      setLoad(false);
    }
  }
  async function printRecieptHandler() {
    window.print();
  }

  return (
    <section className="overflow-hidden min-h-screen bg-white">
      <div className="relative xl:p-25 md:p-20 sm:p-15 p-8">
        <div className="relative w-full grid xl:grid-cols-2 grid-cols-1 gap-12">
          <div className="relative sm:w-[90%] w-full xl:mx-12 md:mx-6 sm:mt-0 mt-8">
            <div className="card relative w-full h-90 p-6 rounded-3xl bg-linear-to-tl from-0% to-100% from-gray-900 via-gray-700 to-gray-500 shadow-xl">
              <SparkLayer />
              <div className="h-full flex flex-col items-center justify-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-500/50">
                  <svg
                    className="h-10 w-10 text-green-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h2 className="sm:text-[40px] text-[28px] text-white font-extrabold mt-3">
                  Tables booked 🎉
                </h2>
                <p className="text-[13px] text-gray-500 font-medium -ml-7">
                  Reservation id:
                  <strong className="sm:text-sm text-[12px] ml-1.5"> {bookingId}</strong>
                </p>
              </div>
            </div>
            <div className="space-y-4 sm:mt-12 mt-6 sm:ml-1.5">
              <h2 className="sm:text-3xl text-2xl font-extrabold text-gray-900">
                Your table is confirmed
              </h2>
              <p className="sm:text-md text-sm text-gray-600 font-medium leading-tight">
                We've successfully reserved your table for the selected date and
                time. Please keep this ticket handy and show the QR code at the
                café entrance for a smooth check-in experience.
              </p>
              <p className="sm:text-xs text-[11px] text-gray-400 -mt-1 mb-6">
                Arrive 5-10 minutes early to avoid automatic release of the
                table.
              </p>
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  className="px-4 py-2 flex items-center bg-green-700 hover:bg-green-600 rounded-md hover:rounded-3xl cursor-pointer transition-all duration-300"
                  onClick={downloadRecieptHandler}
                >
                  {load ? (
                    <>
                      <span className="text-white text-sm font-semibold pr-1.5">
                        Downloading...
                      </span>
                      <Spinner />
                    </>
                  ) : (
                    <>
                      <span className="text-white text-sm font-semibold pr-1.5">
                        Download Reciept
                      </span>
                      <i className="fa-solid fa-download text-gray-800" />
                    </>
                  )}
                </button>
                <button
                  type="button"
                  className="px-4 py-2 md:flex hidden items-center border-2 border-gray-300 hover:bg-green-600 hover:border-green-600 rounded-md hover:rounded-3xl cursor-pointer group transition-all duration-300"
                  onClick={printRecieptHandler}
                >
                  <span className="font-semibold text-sm pr-1.5 group-hover:text-white">
                    Print Ticket
                  </span>
                  <i className="fa-solid fa-print text-gray-500 group-hover:text-gray-800" />
                </button>
              </div>
            </div>
          </div>
          <div className="w-full min-h-120 xl:px-12 md:px-6 px-0 xl:ml-8 md:ml-4 xl:mt-0 mt-6">
            {isLoading ? (
              <div className="relative w-full h-full flex items-center justify-center">
                <h4 className="font-semibold text-gray-800">
                  Loading Reciept...
                </h4>
              </div>
            ) : (
              <div
                ref={recieptRef}
                id="reciept"
                className="relative sm:w-120 w-90 h-150 bg-linear-to-t from-10% to-100% from-gray-200 to-gray-300 rounded-xl overflow-hidden"
              >
                <span className="absolute -left-2 top-2/3 w-6 h-6 rounded-full bg-blend-screen bg-white" />
                <span className="absolute -right-2 top-2/3 w-6 h-6 rounded-full bg-blend-screen bg-white" />
                <div className="relative w-full h-full flex flex-col p-6">
                  <h2 className="flex items-center justify-center">
                    <img
                      src="/logo.png"
                      alt=""
                      className="w-10.5 h-10 object-cover"
                    />
                    <span className="text-[44px] text-gray-600 praise-font ml-1">
                      Foodiez
                    </span>
                  </h2>
                  <div className="relative flex mt-8 ml-4">
                    <img
                      src="/images/dining-table.png"
                      alt=""
                      className="w-27 h-19.5 object-cover drop-shadow-lg drop-shadow-gray-800"
                    />
                    <div className="flex flex-col pl-6">
                      <h3 className="font-extrabold sm:text-[26px] text-[20px] text-gray-900 -mt-2 mb-1">
                        Table Reservation
                      </h3>
                      <p className="text-[11px] text-gray-500 font-medium italic">
                        for <strong>{data?.totalMembers}</strong> members
                      </p>
                      <p className="text-[11px] text-gray-500 font-medium italic">
                        {extractDate2(data?.dateToVisit ?? "")}
                        &nbsp;&nbsp;|&nbsp;&nbsp;
                        {extractTime(data?.timeToVisit ?? "")}
                      </p>
                      <p className="text-[11px] text-gray-500 font-medium italic">
                        Foodiez Café: Ground-floor, Srihari Tower, Hooghly
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col mt-6 items-center border-b-2 border-dashed border-gray-400 pb-7">
                    <em className="font-bold text-lg">
                      Tables:&nbsp;
                      <span className="text-indigo-600">
                        {data?.tables?.join(", ")}
                      </span>
                    </em>
                    <QRCodeCanvas
                      value={JSON.stringify({
                        bookingId,
                        type: "table_reservation",
                      })}
                      size={120}
                      className="mt-1"
                      bgColor="transparent"
                      fgColor="#333333"
                      level="H"
                    />
                  </div>
                  <ul className="flex flex-col bg-amber-200 p-3 mt-3">
                    <li className="inline-flex items-center justify-between">
                      <h5 className="font-extrabold text-gray-900">
                        Total Amount Paid:
                      </h5>
                      <strong className="text-gray-900 font-extrabold">
                        ₹{data?.paymentData?.amountPaid}
                      </strong>
                    </li>
                    <li className="inline-flex items-center justify-between font-medium text-[15.5px] text-gray-700 leading-tight">
                      <p>Fees for 1 table (4-seater):</p>
                      <span>₹50</span>
                    </li>
                    <li className="inline-flex items-center justify-between font-medium text-[15.5px] text-gray-700 leading-tight">
                      <p>Total tables chosen:</p>
                      <span>{data?.tables?.length}</span>
                    </li>
                    <li className="inline-flex items-center justify-between font-medium text-[15.5px] text-gray-700 leading-tight">
                      <p>Maintenance Charges:</p>
                      <span>₹5</span>
                    </li>
                  </ul>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-10 bg-linear-to-t from-0% to-100% from-black/80 to-black/50 rounded-b-xl">
                  <p className="w-full h-full text-xs font-semibold tracking-wide text-gray-300 flex items-center justify-center italic">
                    Please provide this QR above at the reception while entering
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TableReservationPaymentSuccess;
