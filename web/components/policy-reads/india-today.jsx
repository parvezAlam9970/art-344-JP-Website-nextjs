"use client";
import React from "react";

import Heading from "../reusable/heading";
import Description from "../reusable/description";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ExplorePoliticalCards from "@/components/reusable/ExplorePoliticalCards";
import Image from "next/image";
import Container from "../ui/container";

const indiaTodayImages=[
    "/reads/india-today-1.jpg",
    "/reads/india-today-2.jpg",
    "/reads/india-today-3.jpg",
    "/reads/india-today-4.jpg",    
    "/reads/india-today-1.jpg",
    "/reads/india-today-2.jpg",
    "/reads/india-today-3.jpg",
    "/reads/india-today-4.jpg",
]

const IndiaToday = () => {
  return (
    <section className="mt-20">
      <Container>
      <div className="flex flex-col items-center gap-4">
        {/* <SubHeading subHeading="Write Social Feeds" /> */}
        <Heading
          heading="India Today Tomorrow"
          orangeWords={2}
          className="font-pt-serif capitalize"
        />
        <Description
          className="text-center font-inter"
          descriptionOne="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, it to make a type specimen book."
        />
      </div>
      <div className="flex justify-end gap-2 mt-4 relative">
        <button
          className="custom-swiper-prev absolute top-[40%] hidden -left-8 z-10 bg-white text-white w-16 h-16 rounded-full md:flex justify-center items-center"
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
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {indiaTodayImages.map((src, idx) => (
            <SwiperSlide key={idx} className="mb-8">
              <div className="rounded-xl overflow-hidden">
                <Image
                  className="w-full h-[360px] object-cover rounded-xl"
                  src={src}
                  alt=""
                  width={285}
                  height={360}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          className="custom-swiper-next absolute top-[40%] hidden -right-8 z-10 bg-white text-white w-16 h-16 rounded-full md:flex justify-center items-center"
          aria-label="Next Slide"
        >
          <img src="/arrow-right.svg" alt="" />
        </button>
      </div>
      </Container>
    </section>
  );
};

export default IndiaToday;
