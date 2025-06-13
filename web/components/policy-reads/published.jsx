"use client";
import React from "react";

import Heading from "../reusable/heading";
import Description from "../reusable/description";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ExplorePoliticalCards from "@/components/reusable/ExplorePoliticalCards";
import Image from "next/image";
import Container from "../ui/container";

const newsCardsData = [
  {
    title: "On Economic Reforms, India Seizes The Baton",
    date: "11 May, 2025",
    author: "Baijayant 'Jay' Panda",
    description:
      "As The Long-Pending Privatization Of Air India Concludes, With Tata Group Winning The Bid For The Airline On Friday, India...",
    image: "/reads/published-1.jpg",
  },
  {
    title: "On Economic Reforms, India Seizes The Baton",
    date: "11 May, 2025",
    author: "Baijayant 'Jay' Panda",
    description:
      "As The Long-Pending Privatization Of Air India Concludes, With Tata Group Winning The Bid For The Airline On Friday, India...",
    image: "/reads/published-2.jpg",
  },
  {
    title: "On Economic Reforms, India Seizes The Baton",
    date: "11 May, 2025",
    author: "Baijayant 'Jay' Panda",
    description:
      "As The Long-Pending Privatization Of Air India Concludes, With Tata Group Winning The Bid For The Airline On Friday, India...",
    image: "/reads/published-3.jpg",
  },
  {
    title: "On Economic Reforms, India Seizes The Baton",
    date: "11 May, 2025",
    author: "Baijayant 'Jay' Panda",
    description:
      "As The Long-Pending Privatization Of Air India Concludes, With Tata Group Winning The Bid For The Airline On Friday, India...",
    image: "/reads/published-1.jpg",
  },
  {
    title: "On Economic Reforms, India Seizes The Baton",
    date: "11 May, 2025",
    author: "Baijayant 'Jay' Panda",
    description:
      "As The Long-Pending Privatization Of Air India Concludes, With Tata Group Winning The Bid For The Airline On Friday, India...",
    image: "/reads/published-2.jpg",
  },
  {
    title: "On Economic Reforms, India Seizes The Baton",
    date: "11 May, 2025",
    author: "Baijayant 'Jay' Panda",
    description:
      "As The Long-Pending Privatization Of Air India Concludes, With Tata Group Winning The Bid For The Airline On Friday, India...",
    image: "/reads/published-3.jpg",
  },
];

const Published = () => {
  return (
    <section className="mt-20">
      <Container>
        <div className="flex flex-col items-center gap-4">
          {/* <SubHeading subHeading="Write Social Feeds" /> */}
          <Heading
            heading="Published or Edited"
            orangeWords={1}
            className="font-pt-serif capitalize"
          />
          <Description
            className="text-center font-inter"
            descriptionOne="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, it to make a type specimen book."
          />
        </div>
        <div className="flex justify-end gap-2 mt-4 relative">
          <button
            className="custom-swiper-prev hidden absolute top-[40%] -left-8 z-10 bg-white text-white w-16 h-16 rounded-full md:flex justify-center items-center"
            aria-label="Previous Slide"
          >
            <img src="/arrow-left.svg" alt="" />
          </button>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              prevEl: ".custom-swiper-prev",
              nextEl: ".custom-swiper-next",
            }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {newsCardsData.map((v, idx) => (
              <SwiperSlide key={idx} className=" mb-8">
                <ExplorePoliticalCards data={v} />
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            className="hidden custom-swiper-next absolute top-[40%] -right-8 z-10 bg-white text-white w-16 h-16 rounded-full md:flex justify-center items-center"
            aria-label="Next Slide"
          >
            <img src="/arrow-right.svg" alt="" />
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Published;
