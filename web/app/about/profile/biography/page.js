import Heading from "@/components/reusable/heading";
import Container from "@/components/ui/container";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div
      className=" pt-[180px] md:pt-[200px] lg:pt-[250px] bg-cover bg-center"
      style={{
        backgroundImage: `url('/about/Mask group.png')`,
      }}
    >
      <Container>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="  rounded-[60px] overflow-hidden space-y-3">
            <div className=" grid grid-cols-2 gap-3  ">
              <div className=" h-auto md:h-[260px]">
                <Image
                  src="/about/Frame 877.png"
                  width={1000}
                  height={1000}
                  className=" w-full h-full"
                />
              </div>
              <div className=" h-auto md:h-[260px]">
                <Image
                  src="/about/Frame 878.png"
                  width={1000}
                  height={1000}
                  className=" w-full h-full"
                />
              </div>
              <div className=" h-auto md:h-[260px]">
                <Image
                  src="/about/Frame 879.png"
                  width={1000}
                  height={1000}
                  className=" w-full h-full"
                />
              </div>
              <div className=" h-auto md:h-[260px]">
                <Image
                  src="/about/Frame 881.png"
                  width={1000}
                  height={1000}
                  className=" w-full h-full"
                />
              </div>
            </div>
          </div>
          <div className="flex   justify-center flex-col  md:gap-5">
            <Heading
              heading="Baijayant ‘Jay’ Panda"
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
            </ul>
          </div>
        </div>
        <div className=" mt-10 py-10 flex justify-center items-center flex-col ">
          <Heading
            heading="Baijayant ‘Jay’ Panda"
            className="capitalize md:text-wrap text-left"
            orangeWords={2}
          />
          <p className=" text-sm py-3 md:text-base  text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, it to make a type specimen book. 
          </p>
          <p className=" text-sm py-3 md:text-base  text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever it to make a type specimen book.
          </p>
          <p className=" text-sm py-3 md:text-base  text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, it to make a type specimen book. 
          </p>
          <p className=" text-sm py-3 md:text-base  text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever it to make a type specimen book.
          </p>

        </div>
      </Container>
    </div>
  );
};

export default page;
