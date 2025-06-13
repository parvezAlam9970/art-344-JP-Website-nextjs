import Heading from "@/components/reusable/heading";
import Container from "@/components/ui/container";
import Image from "next/image";
import React from "react";
import ButtonOne from "@/components/reusable/button-one";
import Description from "../reusable/description";

const Maverick = () => {
  return (
    <div
      className=" my-5 md:my-10 lg:my-16  py-10"
      style={{
        background:
          "linear-gradient(180deg, rgba(244, 114, 22, 0.12) 0%, rgba(45, 144, 55, 0.12) 100%)",
      }}
    >
      <Container>
        <div className="flex flex-col items-center md:gap-6">
          <Heading
            heading="Lutyens Maverick"
            className="capitalize text-center font-pt-serif"
            orangeWords={1}
          />
          <Description
            className="text-center font-inter"
            descriptionOne="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, it to make a type specimen book."
          />
          <ul className=" list-disc space-y-4">
            <li className="font-inter font-normal">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, it to make a type specimen book.
            </li>
            <li className="font-inter font-normal">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, it to make a type specimen book.
            </li>
            <li className="font-inter font-normal">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, it to make a type specimen book.
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Maverick;
