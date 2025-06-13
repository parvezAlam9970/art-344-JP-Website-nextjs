"use client";
import React, { useState } from "react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Heading from "../reusable/heading";
import Description from "../reusable/description";
import clsx from "clsx";
import Container from "../ui/container";

const images = [
  "/kendrapara/stakeholder-1.jpg",
  "/kendrapara/stakeholder-2.jpg",
  "/kendrapara/stakeholder-3.jpg",
  "/kendrapara/stakeholder-1.jpg",
  "/kendrapara/stakeholder-2.jpg",
  "/kendrapara/stakeholder-3.jpg",
];

const Published = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  return (
    <Container className="mt-20">
      <div className="flex items-center flex-col  md:gap-6">
        <Heading
          heading="Pictures of Meeting With Stakeholders"
          className="capitalize text-center font-pt-serif"
          orangeWords={3}
        />
        <Description
          className="text-center font-inter"
          descriptionOne="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, it to make a type specimen book. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, it to make a type specimen book."
        />
      </div>
      <div className="flex justify-end gap-2 mt-4 relative my-10    
      ">
        <button
          className="custom-swiper-prev hidden absolute top-[40%] -left-8 z-10 bg-white text-white w-16 h-16 rounded-full md:flex justify-center items-center"
          aria-label="Previous Slide"
        >
          <img src="/arrow-left.svg" alt="" />
        </button>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
        //   slidesPerView={1}
          spaceBetween={10}
          centeredSlides={true}
          loop={true}
          navigation={{
            prevEl: ".custom-swiper-prev",
            nextEl: ".custom-swiper-next",
          }}
          autoplay={{ delay: 25000000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          // className="!overflow-visible"
          className="flex"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index} className="border border-black ">
              {({ isActive }) => (
                <div
                  className={clsx(
                    "transition-all duration-500 rounded-2xl overflow-hidden shadow-lg h-[360px]",
                    isActive ? "w-[500px]" : "w-[250px]"
                  )}
                >
                  <Image
                    src={src}
                    alt={`Slide ${index + 1}`}
                    width={500}
                    height={300}
                    className="object-cover w-full h-full justify-end"
                  />
                </div>
              )}
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
  );
};

export default Published;
