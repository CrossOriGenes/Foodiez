import React from "react";

interface InvoiceAreaProps {
  amount: number;
  maintenance: number;
}
const InvoiceArea: React.FC<InvoiceAreaProps> = ({ amount, maintenance }) => {
  return (
    <>
      <div className="w-full flex items-center justify-between mt-6">
        <div className="flex items-center">
          <span className="sm:text-xl text-lg text-gray-800 font-bold">
            Amount Payable:
          </span>
          <div className="relative group">
            <i className="fa-solid fa-info text-xs ml-0.5 text-gray-500" />
            <div className="absolute bottom-full -left-34 mb-1 w-70 scale-0 transform rounded bg-gray-900 p-2 shadow-lg transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
              <p className="text-xs text-white leading-tight font-medium">
                This is an one-time reservation charge of{" "}
                <em className="font-bold">₹50</em>&nbsp; (non-refundable) per
                table of 4 members.
              </p>
              <div className="absolute -bottom-1 left-1/2 w-2 h-2 bg-gray-900 rotate-45" />
            </div>
          </div>
        </div>
        <strong className="font-extrabold sm:text-xl text-[18px] text-teal-600 mr-2">
          ₹{amount > 0 ? amount : "--"}
        </strong>
      </div>
      <div className="w-full flex items-center justify-between mt-1 border-b-2 border-dashed border-gray-700 pb-2">
        <div className="flex items-center">
          <span className="sm:text-xl text-lg text-gray-800 font-bold">Maintenance:</span>
          <div className="relative group">
            <i className="fa-solid fa-info text-xs ml-0.5 text-gray-500" />
            <div className="absolute bottom-full -left-34 mb-1 w-70 scale-0 transform rounded bg-gray-900 p-2 shadow-lg transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
              <p className="text-xs text-white leading-tight font-medium">
                A one-time reservation charge of{" "}
                <em className="font-bold">₹5</em>&nbsp; (non-refundable) for the
                welfare & maintenance of our café.
              </p>
              <div className="absolute -bottom-1 left-1/2 w-2 h-2 bg-gray-900 rotate-45" />
            </div>
          </div>
        </div>
        <strong className="font-extrabold sm:text-xl text-[18px] text-teal-600 mr-2">
          ₹{maintenance}
        </strong>
      </div>
      <div className="w-full flex items-center justify-between mt-1">
        <div className="flex flex-col justify-center leading-tight">
          <span className="sm:text-xl text-lg text-gray-800 font-extrabold">Total:</span>
          <em className="text-xs text-orange-400 font-medium">
            (incl. of GST)
          </em>
        </div>
        <strong className="font-extrabold sm:text-2xl text-xl text-teal-600 mr-2">
          ₹{amount + maintenance}
        </strong>
      </div>
    </>
  );
};

export default InvoiceArea;
