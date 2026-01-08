import React from "react";

interface SelectorProps {
  handleChangeP: () => void;
  handleChangeN: () => void;
  members: number;
}
const MembersSelector: React.FC<SelectorProps> = ({
  handleChangeN,
  handleChangeP,
  members,
}) => {
  return (
    <>
      <label
        htmlFor="members-count"
        className="font-bold sm:text-xl text-lg text-gray-600"
      >
        Members:
      </label>
      <div className="relative flex items-center justify-center sm:w-35 w-30 p-1 border border-teal-200 bg-teal-200 rounded-3xl">
        <button
          type="button"
          className="sm:w-25 w-20 sm:h-10 h-8 rounded-full bg-teal-800 hover:bg-teal-600 flex items-center justify-center cursor-pointer transition-all duration-300"
          onClick={handleChangeP}
        >
          <i className="fa-solid fa-plus sm:text-lg font-bold text-white" />
        </button>
        <input
          type="tel"
          min={1}
          id="members-count"
          readOnly
          value={members}
          className="w-full outline-0 text-center text-gray-900 font-medium sm:text-xl cursor-default"
        />
        <button
          type="button"
          className="sm:w-25 w-20 sm:h-10 h-8 rounded-full bg-teal-800 disabled:bg-teal-400 disabled:cursor-not-allowed hover:bg-teal-600 flex items-center justify-center cursor-pointer transition-all duration-300 group"
          onClick={handleChangeN}
          disabled={members === 1}
        >
          <i className="fa-solid fa-minus sm:text-lg font-bold text-white group-disabled:text-teal-200" />
        </button>
      </div>
    </>
  );
};

export default MembersSelector;
