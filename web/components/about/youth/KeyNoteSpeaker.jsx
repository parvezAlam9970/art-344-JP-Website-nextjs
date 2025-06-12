import Heading from "@/components/reusable/heading";
import Container from "@/components/ui/container";
import Image from "next/image";
import React from "react";

const members = [
  {
    name: "John Doe",
    designation: "Chairman",
    image: "/about/member.jpg",
  },
  {
    name: "Jane Smith",
    designation: "Vice Chair",
    image: "/about/member.jpg",
  },
  {
    name: "Alex Johnson",
    designation: "Member",
    image: "/about/member.jpg",
  },
];

const KeyNoteSpeaker = () => {
  return (
    <Container className="my-5 md:my-10 lg:my-16">
      <div className="my-5 md:my-10 lg:my-16">
        <Heading
          heading="keynote Speaker visits to college"
          orangeWords={3}
          className="font-pt-serif capitalize"
        />
        <div className="flex justify-center items-center text-center">
          <p className="text-sm md:text-base max-w-4xl pt-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, it to make a type specimen book.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6 mt-10">
          {members.map((member, index) => (
            <div key={index} className="rounded-xl overflow-hidden">
              <div className="w-full h-[350px]  md:h-[350px] ">
                <Image
                  src={member?.image}
                  alt="bjp"
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="py-5 px-5 bg-[#F9F9F9]">
                <h4 className="text-lg md:text-xl font-medium">
                  {member?.name}
                </h4>
                <p className="text-sm pt-1">{member?.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default KeyNoteSpeaker;
