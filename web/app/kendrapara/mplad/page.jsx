import Heading from "@/components/reusable/heading";
import Container from "@/components/ui/container";
import Image from "next/image";
import React from "react";
import ButtonOne from "@/components/reusable/button-one";
import Description from "@/components/reusable/description";
import BreadCrumb from "@/components/reusable/BreadCrumb";
import EmblemCard from "@/components/reusable/emblem-card";

const documents = [
  {
    title: 'The Data (Privacy And Protection) Bill, 2017',
  },
  {
    title: 'The Data (Privacy And Protection) Bill, 2017',
  },
  {
    title: 'The Data (Privacy And Protection) Bill, 2017',
  },
  {
    title: 'The Data (Privacy And Protection) Bill, 2017',
  },
  {
    title: 'The Data (Privacy And Protection) Bill, 2017',
  },
  {
    title: 'The Data (Privacy And Protection) Bill, 2017',
  },
  {
    title: 'The Data (Privacy And Protection) Bill, 2017',
  },
  {
    title: 'The Data (Privacy And Protection) Bill, 2017',
  },
];

const Mplad = () => {
  return (
    <>
    <BreadCrumb title="MPLAD" subTitle='Kendrapara, Odisha' desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum and scrambled it to make a type specimen book.'/>    
    <Container className="my-20">
        <div className="flex items-center flex-col  md:gap-6">
          <Heading
            heading="Developmental works in the constituency"
            className="capitalize text-center font-pt-serif"
            orangeWords={3}
          />
          <Description className="text-center font-inter" descriptionOne="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, it to make a type specimen book. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, it to make a type specimen book."/>
    </div>
    <div className="flex items-center flex-col  md:gap-6 mt-16">
          <Heading
            heading="Road, stadium & water tank construction"
            className="capitalize text-center font-pt-serif"
            orangeWords={1}
          />
          <Description className="text-center font-inter" descriptionOne="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, it to make a type specimen book. "/>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10 justify-items-center mt-5">
        {documents.map((doc, index) => (
          <EmblemCard key={index} {...doc} />
        ))}
      </div>
    </Container>
    </>
  );
};

export default Mplad;
