import Heading from "@/components/reusable/heading";
import React from "react";
import Image from "next/image";

// Sample data — replace with real members
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
  {
    name: "Sarah Lee",
    designation: "Member",
    image: "/about/member.jpg",
  },
];

const MemberCommerceCommittee = () => {
  return (
    <div className="my-5 md:my-10 lg:my-16">
      <Heading
        heading="Member of Commerce Committee"
        orangeWords={2}
        className="font-pt-serif capitalize"
      />
      <div className="flex justify-center items-center text-center">
        <p className="text-sm md:text-base max-w-4xl pt-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, it to make a type specimen book.
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {members.map((member, index) => (
          <div key={index} className="relative h-[360px] rounded-xl overflow-hidden group">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black/50 z-10" />
            <div className="absolute bottom-4 left-4 z-20 text-white">
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm">{member.designation}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemberCommerceCommittee;
