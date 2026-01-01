import React, { type FormEvent, useRef } from "react";
import { getToday, type FormData } from "../utils/helpers";

interface FormProps {
  onSubmit: (data: FormData) => void;
  isLoading?: boolean;
}
const ReservationForm: React.FC<FormProps> = ({ onSubmit, isLoading }) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const mailRef = useRef<HTMLInputElement>(null);
  const occasionRef = useRef<HTMLSelectElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const timeRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const data: FormData = {
      name: nameRef.current?.value,
      email: mailRef.current?.value,
      occasion: occasionRef.current?.value,
      date: dateRef.current?.value,
      time: timeRef.current?.value,
      message: messageRef.current?.value,
    };
    onSubmit(data);
    formRef.current?.reset();
  }

  return (
    <form
      ref={formRef}
      autoComplete="off"
      className="relative w-full my-4 bg-gray-200 p-6"
      onSubmit={handleSubmit}
    >
      <div className="w-full px-1 flex flex-col mb-2.5">
        <label htmlFor="name" className="text-gray-700 text-sm font-bold">
          Name
        </label>
        <input
          ref={nameRef}
          type="text"
          id="name"
          className="outline-0 border-0 bg-gray-400 p-2 rounded-sm"
          placeholder="Sujit Bose"
          minLength={4}
          required
        />
      </div>
      <div className="w-full px-1 flex flex-col mb-2.5">
        <label htmlFor="email" className="text-gray-700 text-sm font-bold">
          Email
        </label>
        <input
          ref={mailRef}
          id="email"
          className="outline-0 border-0 bg-gray-400 p-2 rounded-sm"
          placeholder="bose.sujit.12@yahoo.mail"
          type="email"
          minLength={15}
          required
        />
      </div>
      <div className="w-full px-1 flex flex-col mb-2.5">
        <label htmlFor="occasion" className="text-gray-700 text-sm font-bold">
          Occasion
        </label>
        <select
          ref={occasionRef}
          className="outline-0 border-0 bg-gray-400 p-2 rounded-sm"
          id="occasion"
          required
        >
          <option value="">--Select an Occasion--</option>
          <option value="wedding ceremony">Wedding Ceremony</option>
          <option value="birthday">Birthday</option>
          <option value="others">Others</option>
        </select>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-3 mb-2.5 px-1">
        <div className="w-full flex flex-col">
          <label htmlFor="date" className="text-gray-700 text-sm font-bold">
            Date
          </label>
          <input
            ref={dateRef}
            type="date"
            id="date"
            className="outline-0 border-0 bg-gray-400 p-2 rounded-sm"
            min={getToday()}
            required
          />
        </div>
        <div className="w-full flex flex-col">
          <label htmlFor="time" className="text-gray-700 text-sm font-bold">
            Time
          </label>
          <input
            ref={timeRef}
            type="time"
            id="time"
            className="outline-0 border-0 bg-gray-400 p-2 rounded-sm"
            min="10:00"
            max="22:30"
            required
          />
        </div>
      </div>
      <div className="w-full px-1 flex flex-col mb-2.5">
        <label htmlFor="message" className="text-gray-700 text-sm font-bold">
          Message
        </label>
        <textarea
          ref={messageRef}
          id="message"
          rows={5}
          className="outline-0 border-0 bg-gray-400 p-2 rounded-sm"
          placeholder="Your short Message here..."
          defaultValue=""
        />
      </div>
      <div className="w-full px-1 mt-8">
        <button className="btn bg-black hover:bg-black/60 group">
          <span className="text-sm font-bold text-white uppercase tracking-wider">
            {isLoading ? "Booking..." : "Book a table"}
          </span>
        </button>
      </div>
    </form>
  );
};

export default ReservationForm;
