import React from "react";
import { cn } from "@/lib/utils";

const Textarea = ({
  name,
  label,
  register,
  errors,
  rules,
  rows,
  asterisk=false,
  placeholder,
  className,
  ...rest
}) => {
  return (
    <div className={cn(" mb-2 sm:mb-4 w-full")}>
      {label && (
        <label className={cn("block text-black font-inter tracking-wide  text-[16px] font-medium mb-1 sm:mb-2")}>
          {label} {asterisk === true ? <span className="text-red"> *</span> : ""}
        </label>
      )}  
      <textarea
       rows={rows}
        {...register(name, rules)}
        placeholder={placeholder}
        className={cn(
          "bg-light appearance-none text-black  bg-[#F9F9F9] w-full py-[20px] px-1 md:px-3  leading-tight focus:outline-none focus:shadow-outline",
          {
            "border-red-500": errors?.[name],
            "bg-gray-200 text-gray-500 cursor-not-allowed": rest.disabled,
          },
          className
        )}
        {...rest}
      />
      {errors?.[name] && (
        <p className="text-red pt-1 pl-1 text-sm italic">{errors[name]?.message}</p>
      )}
    </div>
  );
};

export default Textarea;
