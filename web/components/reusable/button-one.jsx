import React from "react";
import { cn } from "@/lib/utils";

const ButtonOne = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'border border-primary py-2 px-5 rounded-[5px] bg-white text-sm text-primary font-normal',
        className
      )}
    >
      {text}
    </button>
  );
};

export default ButtonOne;
