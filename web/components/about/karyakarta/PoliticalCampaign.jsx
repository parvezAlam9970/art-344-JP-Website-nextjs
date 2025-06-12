import React from "react";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import Heading from "@/components/reusable/heading";

const PoliticalCampaign = ({
  heading,
  orangeWords = 0,
  imageSrc,
  videoSrc,
  description,
  listItems = [],
}) => {
  return (
    <div className="my-5 md:my-10 lg:my-10 ">
      <div className="grid md:grid-cols-2 gap-5 md:gap-10">
        {/* Left Side: Image and Video */}
        <div className="relative h-[350px] sm:h-[400px] md:h-full lg:h-[450px]">
          <div className="w-[300px] sm:w-[400px] md:w-[300px] lg:w-[350px] xl:w-[450px] bg-red-300 h-[200px] sm:h-[250px] md:h-[200px] lg:h-[250px] xl:h-[300px] rounded-xl overflow-hidden">
            <Image
              alt="campaign image"
              src={imageSrc}
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute right-0 top-1/3 w-[300px] sm:w-[400px] md:w-[300px] lg:w-[350px] xl:w-[450px] h-[200px] sm:h-[250px] md:h-[200px] lg:h-[250px] xl:h-[300px] bg-red-500 rounded-xl overflow-hidden">
            <div className="relative w-full h-full">
              <video
                src={videoSrc}
                className="w-full h-full object-cover"
                controls={false}
                preload="metadata"
              />
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="border-[3px] border-white rounded-full p-3 flex justify-center items-center">
                  <FaPlay className="text-white text-[23px] opacity-90 hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Text */}
        <div className="flex justify-center flex-col md:gap-5">
          <Heading
            heading={heading}
            orangeWords={orangeWords}
            className="capitalize md:text-wrap text-left"
          />
          <p className="text-sm py-3 md:text-base font-inter">{description}</p>
          <ul className="list-disc space-y-4 mt-4 pl-10">
            {listItems.map((item, index) => (
              <li key={index} className="text-sm md:text-base font-inter">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PoliticalCampaign;
