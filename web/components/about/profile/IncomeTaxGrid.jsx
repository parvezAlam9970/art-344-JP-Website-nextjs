import Heading from "@/components/reusable/heading";
import Container from "@/components/ui/container";
import Image from "next/image";
import React from "react";
import ButtonOne from "../../reusable/button-one";

const IncomeTaxGrid = () => {
  return (
    <div
      className=" my-5 md:my-10 lg:my-16  py-10"
      style={{
        background:
          "linear-gradient(180deg, rgba(244, 114, 22, 0.12) 0%, rgba(45, 144, 55, 0.12) 100%)",
      }}
    >
      <Container className=" grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="  rounded-[60px] overflow-hidden space-y-3">
          <div className=" grid grid-cols-2 gap-3  ">
            <div className=" h-auto md:h-[260px]">
              <Image
              alt="bjp"
                src="/about/Frame 788.png"
                width={1000}
                height={1000}
                className=" w-full h-full"
              />
            </div>
            <div className=" h-auto md:h-[260px]">
              <Image
              alt="bjp"
                src="/about/Frame 802.png"
                width={1000}
                height={1000}
                className=" w-full h-full"
              />
            </div>
          </div>
          <div className=" w-full h-auto md:h-[260px]">
            <Image
            alt="bjp"
              src="/about/Frame 801.png"
              width={1000}
              height={1000}
              className=" w-full h-full "
            />
          </div>
        </div>
        <div className="flex   justify-center flex-col  md:gap-5">
          <Heading
            heading="Chairman- Select Committee for new income tax bill"
            className="capitalize md:text-wrap text-left"
            orangeWords={4}
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
          <div className=" items-start mt-10">
            {/* <button className=" border border-primary py-2 px-5 rounded-[5px] bg-white text-primary">
              Download PDF
            </button> */}
            <ButtonOne text="Download PDF"/>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default IncomeTaxGrid;
