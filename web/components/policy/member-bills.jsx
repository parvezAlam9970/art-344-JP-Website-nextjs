'use client'
import React, { useState } from "react";
import BillCard from "@/components/reusable/bill-card";
import Heading from "../reusable/heading";
import Description from "../reusable/description";

const billCards = [
  {
    id: 1,
    title: "The Data (Privacy And Protection) Bill, 2017",
    description:
      "Lorem ipsum has been the industry's standard dummy text ever since the 1500s, it took to make a type specimen book.",
  },
  {
    id: 2,
    title: "Right to Information (Amendment) Act, 2019",
    description:
      "This amendment modified provisions related to the terms and conditions of service of the Chief Information Commissioner.",
  },
  {
    id: 3,
    title: "Information Technology (Intermediary Guidelines) Rules, 2021",
    description:
      "Rules framed for social media platforms and digital news outlets regarding compliance and accountability.",
  },
  {
    id: 4,
    title: "Digital Personal Data Protection Act, 2023",
    description:
      "An act to provide for the processing of digital personal data in a manner that recognizes individuals' right to privacy.",
  },
];

const Bills = () => {
  const [showAllBills, setShowAllBills] = useState(false);
  return (
    <section className="mt-16">
      <div className="flex justify-between">
        <div className="flex flex-col gap-4 items-start">
          <Heading
            heading="Private Member Bill"
            orangeWords={2}
            className="font-pt-serif capitalize"
          />
          <Description
            className="text-left font-inter"
            descriptionOne="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, it to make a type specimen book."
          />
        </div>
        <button
          className="flex items-center justify-between gap-3 font-medium text-sm"
          onClick={() => setShowAllBills((prev) => !prev)}
        >
          {showAllBills ? "Show Less" : "View All"}
          <div className="w-11 h-9 flex items-center justify-center rounded-[4px] bg-gradient-to-r from-[#F47316] via-[#FFBF07] to-yellow-400">
            <img src="/arrow.svg" alt="" />
          </div>
        </button>
      </div>
      {(showAllBills ? billCards : billCards.slice(0, 2)).map((card, index) => (
        <div className="mt-4" key={index}>
          <BillCard data={card} />
        </div>
      ))}
      </section>
  )
}

export default Bills