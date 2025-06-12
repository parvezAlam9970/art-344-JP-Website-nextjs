import Heading from "@/components/reusable/heading";
import Container from "@/components/ui/container";
import Image from "next/image";
import React from "react";
import ButtonOne from "@/components/reusable/button-one";

const IncomeTaxGridTwo = () => {
  return (
    <div
      className=" my-5 md:my-10 lg:my-16  py-10"
      style={{
        background:
          "linear-gradient(180deg, rgba(244, 114, 22, 0.12) 0%, rgba(45, 144, 55, 0.12) 100%)",
      }}
    >
      <Container className=" grid grid-cols-1 md:grid-cols-2 gap-10 ">
        <div className="   overflow-hidden space-y-3 ">
          <div className=" grid grid-cols-2 gap-3  ">
            <div className=" h-auto border-primary border-2 rounded-[12px]">
              <Image
                src="/policy/income-tax-1.jpg"
                width={260}
                height={400}
                className=" w-full h-full rounded-[12px]"
              />
            </div>
            <div className=" h-auto border-primary border-2 rounded-[12px]">
              <Image
                src="/policy/income-tax-2.jpg"
                width={260}
                height={400}
                className=" w-full h-full rounded-[12px]"
              />
            </div>
          </div>
        </div>
        <div className="flex   justify-center flex-col  md:gap-10">
          <Heading
            heading="Chairman- Select Committee for new income tax bill"
            className="capitalize md:text-wrap text-left font-pt-serif"
            orangeWords={4}
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
          </ul>
          <div className=" items-start ">
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

export default IncomeTaxGridTwo;
