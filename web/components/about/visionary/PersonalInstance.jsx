import Heading from "@/components/reusable/heading";
import Image from "next/image";
import React from "react";

const PersonalInstance = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10">
      <div className=" order-2 md:order-1 col-span-1 md:col-span-2 flex mt-5 md:mt-0   justify-center flex-col  md:gap-5">
          <Heading
            heading="Policy initiatives & Personal instance"
            className="capitalize md:text-wrap text-left"
            orangeWords={2}
          />
          <p className=" text-sm py-3 md:text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever it to make a type specimen book.
          </p>
          <ul className=" list-disc space-y-4 mt-4 pl-10">
            <li>
              Lorem Ipsum has been the industry's it to make a type specimen
              book.
            </li>
            <li>
              Lorem Ipsum has been the industry's it to make a type specimen
              book.
            </li>
            <li>
              Lorem Ipsum has been the industry's it to make a type specimen
              book.
            </li>
          </ul>
      </div>
      <div className=" order-1 md:order-2 col-span-1">
        <div className=" flex justify-center md:items-center  md:justify-end">
          <div className=" relative ml-5  xl:ml-10 h-full   xl:h-[509px]  group">
            <Image
              src={"/about/Frame 273 (1).png"}
              alt="bjp"
              width={1000}
              height={1000}
              className="h-full w-full object-cover z-10 rounded-2xl "
            />
            <div className="absolute z-[-1] top-[10px] md:top-[17px] -left-3 md:-left-5 transition-all duration-400 ease-in group-hover:bg-primary w-full h-full border-2 border-primary rounded-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInstance;
