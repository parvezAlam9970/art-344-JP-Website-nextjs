import React from "react";
import Image from "next/image";
import Heading from "@/components/reusable/heading";
import { FaPlayCircle } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";


const mediaList = [
  { type: "image", src: "/about/test1.png" },
  { type: "video", src: "/about/test-video.mp4" },
  { type: "image", src: "/about/test1.png" },
  { type: "video", src: "/about/test-video.mp4",},
];

const ChairmanCommittee = () => {
  return (
    <div className="my-5 md:my-10 lg:my-16">
      <Heading
        heading="Chairman Committee on Public Undertaking"
        orangeWords={2}
        className="font-pt-serif"
      />
      <div className="flex justify-center items-center text-center">
        <p className="text-sm md:text-base max-w-4xl pt-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, it to make a type specimen book.
        </p>
      </div>

      {/* Media Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {mediaList.map((item, index) => (
          <div key={index} className="relative group ">
            {item.type === "image" ? (
              <div className=" h-full md:h-[285px] w-full rounded-xl overflow-hidden">
              <Image
                src={item.src}
                alt={`media-${index}`}
                width={400}
                height={300}
                className="w-full h-full object-cover "
              />
              </div>
            ) : (
              <div className="relative h-full md:h-[285px] w-full rounded-xl overflow-hidden">
                <video
                  src={item.src}
                  className="w-full h-full object-cover"
                  controls={false}
                  preload="metadata"
                />
                <div className="absolute inset-0 flex items-center justify-center ">
                <div className=" border-[3px] border-white rounded-full p-3 flex justify-center items-center">
                  <FaPlay className="text-white text-[23px] opacity-90 hover:opacity-100 transition-opacity " />
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChairmanCommittee;
