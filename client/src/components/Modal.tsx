import React, { type ReactNode } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";

interface ModalProps {
  // onClose: () => void;
  children: ReactNode;
}
const Modal: React.FC<ModalProps> = ({ children }) => {
  return createPortal(
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ type: "tween", damping: 25, stiffness: 500 }}
        className="fixed top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.8)] backdrop-blur-sm z-70 cursor-pointer"
        // onClick={onClose}
      />
      <motion.dialog
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -60 }}
        transition={{ type: "spring", damping: 15, stiffness: 800 }}
        className="fixed top-[5vh] w-104 max-w-[90%] mt-8 mx-auto border-none outline-none p-2 rounded-xl shadow-lg z-100 bg-gray-800"
        open
      >
        {children}
      </motion.dialog>
    </>,
    document.getElementById("modals")!
  );
};

export default Modal;
