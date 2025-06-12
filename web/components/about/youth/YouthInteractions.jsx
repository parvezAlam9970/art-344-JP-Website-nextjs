"use client";
import Heading from "@/components/reusable/heading";
import Container from "@/components/ui/container";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import Image from "next/image";

const YouthInteractions = () => {
  const imgList = [
    { id: 1, img: "/about/Frame 7.png" },
    { id: 2, img: "/about/Frame 7.png" },
    { id: 3, img: "/about/Frame 7.png" },
  ];

  return (
    <div
      className="bg-center  bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url('/about/youth-bg-mask.jpg')`,
      }}
    >
      <Container className="grid grid-cols-1 md:grid-cols-2 py-20 gap-10">
        {/* Card Swiper */}
        <div className="flex justify-center">
          <Swiper
            effect="cards"
            grabCursor={true}
            modules={[EffectCards]}
            className=" w-[300px] sm:w-[400px] md:w-[350px] lg:w-[400px] xl:w-[450px] h-[350px] md:h-[450px] card_effect"
            dir="rtl"
          >
            {imgList?.map((v, idx) => (
              <SwiperSlide key={idx}>
                <div className="w-full h-full">
                  <Image src={v?.img} fill alt={v.id} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Text Content */}
        <div className="flex justify-center flex-col">
          <Heading
            heading="Youth Interactions"
            className="capitalize md:text-wrap text-left"
            orangeWords={1}
          />
          <p className="text-sm py-3 md:text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever it to make a type specimen book.
          </p>
          <ul className="list-disc space-y-4 mt-4 pl-10">
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
        </div>
      </Container>
    </div>
  );
};

export default YouthInteractions;
