import React, { useState } from "react";
import { toast } from "react-toastify";
import {
  cafeTables,
  calculateTables,
  TABLE_FEES,
  MAINTENANCE,
  type FormData,
} from "../../utils/helpers";
import { createTTL, updateTTL } from "../../utils/apiCallers";
import MembersSelector from "./MembersSelector";
import UserTariffCard from "./UserTariffCard";
import InvoiceArea from "./InvoiceArea";

interface ReservationProps {
  state: FormData;
  bookedTables: string[] | undefined;
  reservedSet: Set<string>;
  onTTLCheck: (
    selectedTables: string[],
    total: number,
    members: number
  ) => void;
  isLoading?: boolean;
}

const ReserveTableSection: React.FC<ReservationProps> = ({
  state,
  bookedTables,
  reservedSet,
  onTTLCheck,
  isLoading,
}) => {
  const [baseTable, setBaseTable] = useState<string | null>(null);
  const [members, setMembers] = useState<number>(4);
  const [selectedTables, setSelectedTables] = useState<string[]>([]);
  const [alert, setAlert] = useState<string | null>(null);

  async function handleTableSelect(tableNum: string) {
    const result = await createTTL({
      baseTable: tableNum,
      selectedTables: [tableNum],
      email: state?.email ?? "",
    });
    if (result.status === "pending") {
      if (result.data?.choosedBy === state.email) {
        toast.warning(
          <div className="w-full flex flex-col">
            <h3 className="font-bold text-xl text-red-100">Sorry!</h3>
            <p className="font-medium text-xs text-gray-500">
              This seat is pending temporary lock by you.
            </p>
          </div>
        );
        setAlert(
          `This seat with number-'${tableNum}' is temporarily locked by you previously for 5 minutes. Please wait to unclock it or try any other combinations`
        );
      } else {
        toast.warning(
          <div className="w-full flex flex-col">
            <h3 className="font-bold text-xl text-red-100">Sorry!</h3>
            <p className="font-medium text-xs text-gray-500">
              This seat is temporarily unavailable.
            </p>
          </div>
        );
        setAlert(
          `This seat with number-'${tableNum}' is temporarily locked by some other customer. Please wait for 6 minutes or try any other combinations.`
        );
      }
      return;
    }
    setBaseTable(tableNum);
    setMembers(4);
    setAlert(null);
    const selection = calculateTables(tableNum, 4, cafeTables, reservedSet);
    setSelectedTables(selection);
  }
  async function handleMembersChange(delta: number) {
    if (!baseTable) return;
    const nextMembers = Math.max(1, members + delta);
    const newSelection = calculateTables(
      baseTable,
      nextMembers,
      cafeTables,
      reservedSet
    );
    const res = await updateTTL({
      email: state?.email ?? "",
      selectedTables: newSelection,
    });
    if (res.status !== "ok") {
      console.warn(res.msg);
      return;
    }
    console.log(res.msg);
    setMembers(nextMembers);
    setSelectedTables(newSelection);
  }
  const amount = selectedTables.length * TABLE_FEES;

  return (
    <section id="reserve-table-and-pay" className="relative overflow-hidden">
      <div className="relative w-full min-h-screen bg-gray-100 xl:py-20 md:py-15 py-10 xl:px-40 md:px-30 px-10">
        <h1 className="font-extrabold text-5xl praise-font mb-8 sm:mt-3 mt-9">
          Select your table
        </h1>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 mt-12">
          <div className="relative w-full h-100 xl:ml-3 xl:mr-12 mr-6 xl:pr-42">
            {isLoading ? (
              <div className="w-full h-full flex justify-center items-center">
                <h3 className="font-bold text-3xl text-gray-700">
                  Loading Tables...
                </h3>
              </div>
            ) : (
              <div className="relative px-3 pt-18 pb-9 bg-yellow-100">
                <div className="absolute top-0 left-2 w-25 h-12.5 bg-[url(/images/entrance-door.png)] bg-cover bg-no-repeat opacity-40" />
                <div className="absolute -bottom-12.5 right-2 w-25 h-12.5 bg-[url(/images/exit-door.png)] bg-cover bg-no-repeat opacity-40" />
                <div className="w-full h-full grid grid-cols-5 gap-2 place-content-center place-items-center">
                  {cafeTables.map((tableNum, k) => (
                    <button
                      key={k}
                      type="button"
                      disabled={bookedTables?.includes(tableNum)}
                      className={`w-15 h-15 border border-teal-300 disabled:border-gray-200 flex justify-center items-center disabled:bg-gray-200 disabled:cursor-not-allowed disabled:select-none transition-colors duration-300 cursor-pointer rounded-sm group 
                    ${
                      selectedTables.includes(tableNum)
                        ? " bg-teal-500"
                        : "hover:bg-teal-300"
                    }
                    `}
                      onClick={() => handleTableSelect(tableNum)}
                    >
                      <span
                        className={`text-lg font-semibold group-hover:text-white group-disabled:text-gray-300 group-disabled:cursor-not-allowed 
                      ${
                        selectedTables.includes(tableNum)
                          ? "text-white"
                          : "text-teal-500"
                      }
                      `}
                      >
                        {tableNum}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}
            <div className="w-full px-6 flex items-center justify-between mt-16">
              <div className="flex items-center">
                <span className="w-4 h-4 border border-gray-200 bg-gray-200 rounded mr-1" />
                <em className="text-sm font-medium text-gray-700">Reserved</em>
              </div>
              <div className="flex items-center">
                <span className="w-4 h-4 border border-teal-300 rounded mr-1" />
                <em className="text-sm font-medium text-gray-700">Available</em>
              </div>
              <div className="flex items-center">
                <span className="w-4 h-4 border border-teal-500 bg-teal-500 rounded mr-1" />
                <em className="text-sm font-medium text-gray-700">Selected</em>
              </div>
            </div>
            {alert && (
              <div
                role="alert"
                className="bg-red-300 border-2 border-red-700 p-2 rounded mt-6"
              >
                <p className="text-[13px] font-medium text-red-900 leading-tight">
                  {alert}
                </p>
              </div>
            )}
          </div>
          <div className="w-full relative xl:px-12 md:px-3 px-0 lg:mt-0 mt-12">
            <UserTariffCard selectedTables={selectedTables} state={state} />
            <div className="relative w-full sm:py-6 py-4 sm:px-3 px-2 flex flex-col">
              <div className="relative w-full flex items-center justify-between group">
                {!baseTable && (
                  <div className="absolute bottom-full right-0 -mb-1 w-45 scale-0 transform rounded bg-gray-900 p-2 shadow-lg transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 z-2">
                    <p className="text-sm text-white leading-tight font-medium">
                      👈🏻Choose a table first to proceed.
                    </p>
                    <div className="absolute -bottom-1 left-1/2 w-2 h-2 bg-gray-900 rotate-45" />
                  </div>
                )}
                <MembersSelector
                  members={members}
                  handleChangeN={() => handleMembersChange(-1)}
                  handleChangeP={() => handleMembersChange(1)}
                />
              </div>
              <InvoiceArea amount={amount} maintenance={MAINTENANCE} />
              <div className="w-full relative px-6 mx-3 flex justify-center mt-8">
                <button
                  type="button"
                  className="w-full py-3 px-6 rounded-4xl bg-black hover:bg-gray-800 disabled:bg-gray-300 hover:rounded-sm disabled:pointer-events-none disabled:cursor-not-allowed disabled:select-none group transition-all duration-400"
                  disabled={selectedTables.length === 0}
                  onClick={() =>
                    onTTLCheck(selectedTables, amount + MAINTENANCE, members)
                  }
                >
                  <span className="font-bold text-white group-disabled:text-gray-400 text-lg tracking-wide uppercase group-hover:tracking-widest transition-all duration-300">
                    Proceed to Pay 💰
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReserveTableSection;
