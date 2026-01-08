import React from "react";
import { extractDate, extractTime, type FormData } from "../../utils/helpers";

interface CardProps {
  state: FormData;
  selectedTables: string[];
}
const UserTariffCard: React.FC<CardProps> = ({ state, selectedTables }) => {
  return (
    <>
      <h3 className="font-extrabold text-2xl lg:-mt-6 mt-12 capitalize tracking-wide text-gray-700">
        Confirmations for
      </h3>
      <div className="relative w-full h-85 bg-gray-800 p-4 rounded-sm shadow-md mt-2">
        <div className="absolute top-8 right-8 w-15.5 h-15 bg-[url(/images/served-plate.png)] bg-cover bg-center bg-no-repeat opacity-20 -rotate-4" />
        <ul className="w-full h-full border-3 border-gray-500 list-none flex flex-col rounded-sm sm:p-6 p-3">
          <li className="inline-flex items-center sm:text-3xl text-[22px] praise-font">
            <strong className="text-white font-bold mr-6">Name:&nbsp; </strong>
            <span className="text-teal-500 font-semibold">
              {state?.name ?? "N.A."}
            </span>
          </li>
          <li className="inline-flex items-center sm:text-3xl text-[22px] praise-font">
            <strong className="text-white font-bold mr-6">
              Ocassion:&nbsp;{" "}
            </strong>
            <span className="text-teal-500 font-semibold">
              {state?.occasion ?? "N.A."}
            </span>
          </li>
          <li className="inline-flex items-center sm:text-3xl text-[22px] praise-font">
            <strong className="text-white font-bold mr-6">Date:&nbsp; </strong>
            <span className="text-teal-500 font-semibold">
              {extractDate(state?.date ?? "")}
            </span>
          </li>
          <li className="inline-flex items-center sm:text-3xl text-[22px] praise-font">
            <strong className="text-white font-bold mr-6">Time:&nbsp; </strong>
            <span className="text-teal-500 font-semibold">
              {extractTime(state?.time ?? "--:--")}
            </span>
          </li>
          <li className="inline-flex items-center sm:text-3xl text-[22px] praise-font">
            <strong className="text-white font-bold mr-6">
              Selected table:&nbsp;{" "}
            </strong>
            <span className="text-teal-500 font-semibold">
              {selectedTables.join(", ")}
            </span>
          </li>
          <li className="inline-flex items-center praise-font">
            <strong className="text-white sm:text-3xl text-[22px] font-bold mr-6">
              Message:&nbsp;{" "}
            </strong>
            <p className="text-teal-500 text-xl font-semibold w-full overflow-hidden text-ellipsis whitespace-nowrap">
              {state?.message ?? "--"}
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default UserTariffCard;
