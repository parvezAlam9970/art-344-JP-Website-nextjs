import Heading from "@/components/reusable/heading";
import Container from "@/components/ui/container";
import Image from "next/image";
import React from "react";
import ButtonOne from "@/components/reusable/button-one";

const GoalsAndMissions = () => {
  return (
    <div
          style={{
      inset: 0,
      backgroundImage: "url('/vision-bg.png')",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      // opacity: 0.1,
      // transform: "rotate(0deg)",
      zIndex: 0,
      pointerEvents: "none",
      width: "100%",
    }}
    >
      <Container className=" grid grid-cols-1 md:grid-cols-2 gap-10 py-20 ">
        <div className="   overflow-hidden space-y-3 ">
          <div className=" grid grid-cols-2 gap-3  ">
            <div className=" h-auto border-primary border-2 rounded-[12px]">
              <Image
                src="/kendrapara/vision-1.jpg"
                width={260}
                height={400}
                className=" w-full h-full rounded-[12px]"
              />
            </div>
            <div className=" h-auto border-primary border-2 rounded-[12px]">
              <Image
                src="/kendrapara/vision-2.jpg"
                width={260}
                height={400}
                className=" w-full h-full rounded-[12px]"
              />
            </div>
          </div>
        </div>
        <div className="flex   justify-center flex-col  md:gap-10">
          <Heading
            heading="Goals and plans for Kendrapara including previous instances"
            className="capitalize md:text-wrap text-left font-pt-serif"
            orangeWords={3}
          />
          <p className=" text-sm py-3 md:text-base font-inter font-normal">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever it to make a type specimen book.
          </p>
          <ul className=" list-disc space-y-4 mt-4 pl-6">
            <li className="font-inter font-normal">
              Lorem Ipsum has been the industry's it to make a type specimen
              book.
            </li>
            <li className="font-inter font-normal">
              Lorem Ipsum has been the industry's it to make a type specimen
              book.
            </li>
            <li className="font-inter font-normal">
              Lorem Ipsum has been the industry's it to make a type specimen
              book.
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default GoalsAndMissions;
