import Heading from "@/components/reusable/heading";
import Image from "next/image";
import React from "react";

const LeadingPolitical = ({
  heading,
  orangeWords = 3,
  images = [],
  description,
  para,
}) => {
  return (
    <div className={`py-5 md:py-10 lg:py-16 `}>
      <div className=" flex justify-center items-center text-center">
        <div className=" md:w-[80%]">
          <Heading
            heading={heading}
            orangeWords={orangeWords}
            className="capitalize"
          />
          {para && (
            <p className="text-sm md:text-base pt-5 font-inter text-center">
              {para}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 mt-5 md:mt-10 gap-3 md:gap-5">
        {images?.slice(0, 2).map((img, index) => (
          <div
            key={index}
            className="w-full h-full lg:h-[380px] rounded-xl overflow-hidden"
          >
            <Image
              src={img}
              alt={`political-img-${index}`}
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="mt-2 md:mt-5">
        <p className="text-sm md:text-base pt-5 font-inter text-center">
          {description}
        </p>
      </div>
    </div>
  );
};

export default LeadingPolitical;
