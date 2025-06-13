'use client'
import React, { useState } from "react";
import ButtonOne from "../reusable/button-one";
import BillCard from "@/components/reusable/bill-card";
import Heading from "../reusable/heading";
import Description from "../reusable/description";


const readingCards = [
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


const ReadingList = () => {
    const [showAllReadings, setShowAllReadings] = useState(false);
  return (
    <section className="mt-16">
      <div className="flex flex-col items-center gap-6">
        <Heading
          heading="Recommended Reading List"
          orangeWords={2}
          className="font-pt-serif capitalize"
        />
        <Description
          className="text-center font-inter"
          descriptionOne="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, it to make a type specimen book."
        />
      </div>
      
        {(showAllReadings ? readingCards : readingCards.slice(0, 2)).map((card, index) => (
        <div className="mt-5" key={index}>
          <BillCard data={card} buttonLabel="Read Now" />
        </div>
      ))}
      <div className="flex justify-center mt-10 mb-20">
      <ButtonOne
          onClick={() => setShowAllReadings((prev) => !prev)}
          text={showAllReadings ? "Show Less" : "See All"}
        />
        </div>
      </section>
  )
}

export default ReadingList