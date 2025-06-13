import React from "react";
import FormComp from "./FormComp"

const FormModal = ({ setIsOpen, isOpen }) => {
 
  return (
    <div>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        onClick={() => setIsOpen(false)} // closes on background click
      >
        <div
          className="bg-white w-[95%] max-w-2xl rounded-xl p-6 md:p-8 shadow-lg relative animate-zoomIn"
          onClick={(e) => e.stopPropagation()} // prevents closing when clicking inside
        >
          <h2 className="text-xl font-semibold mb-6 text-black">
            Work With Us
          </h2>
          <FormComp/>
         
        </div>
      </div>
    </div>
  );
};

export default FormModal;
