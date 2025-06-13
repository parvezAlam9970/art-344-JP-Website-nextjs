import React from "react";
import { cn } from "@/lib/utils";

const Input = ({
  name,
  label,
  register,
  errors,
  rules,
  placeholder,
  type="text",
  asterisk = false,
  className,
  ...rest
}) => {
  return (
    <div className={cn(" mb-1 sm:mb-2 w-full")}>
      {label && (
        <label
          className={cn(
            "block text-black font-inter tracking-wide text-[14px] sm:text-[16px] font-medium mb-1 sm:mb-2"
          )}
        >
          {label} {asterisk === true ? <span className="text-red"> *</span> : ""}
          {/* {asterisk && (
          <span className={`text-${errors?.[name] ? 'red' : 'black'}`}>*</span>
        )} */}
        </label>
      )}
      <input
       type={type}
        {...register(name, rules)}
        placeholder={placeholder}
        className={cn(
          "bg-[#F9F9F9] rounded-md text-black appearance-none h-[45px]  w-full py-[20px] px-1 md:px-3  leading-tight focus:outline-none focus:shadow-outline",
          {
            "border-red-500": errors?.[name],
            "bg-gray-20 text-gray-500 cursor-not-allowed": rest.disabled,
          },
          className
        )}
        {...rest}
      />
      {errors?.[name] && (
        <p className="text-red pt-1 pl-1 text-[12px] sm:text-sm italic">{errors[name]?.message}</p>
      )}
    </div>
  );
};

export default Input;
