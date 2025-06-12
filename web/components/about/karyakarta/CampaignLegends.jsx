import Heading from "@/components/reusable/heading";
import Container from "@/components/ui/container";
import Image from "next/image";
import React from "react";

const cardData = [
  {
    name: "John Doe",
    designation: "President",
    image: "/about/Frame 278.png",
  },
  {
    name: "Jane Smith",
    designation: "Vice President",
    image: "/about/Frame 278 (1).png",
  },
  {
    name: "Alice Johnson",
    designation: "Secretary",
    image: "/about/Frame 278 (2).png",
  },
];

const CampaignLegends = () => {
  return (
    <div
      className=" my-5 md:my-10  py-10"
      style={{
        background:
          "linear-gradient(180deg, rgba(244, 114, 22, 0.12) 0%, rgba(45, 144, 55, 0.12) 100%)",
      }}
    >
      <Container>
        <div className=" flex  justify-center items-center text-center">
          <div className=" md:w-[70%]">
            <Heading
              heading={"campaign Legend Speakers"}
              orangeWords={2}
              className="capitalize md:text-wrap "
            />
            <p className="text-sm py-3 md:text-base font-inter text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, it to make a type specimen book.
            </p>
          </div>
        </div>
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-3 pt-5">
          {cardData?.map((v, idx) => {
            return (
              <div key={idx}>
                <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] rounded-xl overflow-hidden">
                  <Image
                    src={v?.image}
                    alt="bjp"
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="py-4">
                  <h4 className="text-lg md:text-xl text-center font-medium">
                    {v?.name}
                  </h4>
                  <p className="text-center text-sm">{v?.designation}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default CampaignLegends;
