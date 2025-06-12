import React from "react";

import Heading from "../reusable/heading";
import Description from "../reusable/description";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";

const galleryImages = [
  "/policy/activities-1.jpg",
  "/policy/activities-2.jpg",
  "/policy/activities-3.jpg",
  "/policy/activities-4.jpg",
  "/policy/activities-1.jpg",
  "/policy/activities-2.jpg",
  "/policy/activities-3.jpg",
  "/policy/activities-4.jpg",
];

const Activities = () => {
  return (
    <section className="mt-20">
      <div className="flex flex-col items-center gap-4">
        {/* <SubHeading subHeading="Write Social Feeds" /> */}
        <Heading
          heading="Parliamentary activities"
          orangeWords={1}
          className="font-pt-serif capitalize"
        />
        <Description
          className="text-center font-inter"
          descriptionOne="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, it to make a type specimen book."
        />
      </div>
      <div className="flex justify-end items-center gap-2 mt-4 relative">
        <button
          className="custom-swiper-prev absolute top-44 -left-8 z-10 bg-white bg-opacity-70 text-white w-16 h-16 rounded-full flex justify-center items-center"
          aria-label="Previous Slide"
        >
          <img src="/arrow-left.svg" alt="" />
        </button>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={4}
          navigation={{
            prevEl: ".custom-swiper-prev",
            nextEl: ".custom-swiper-next",
          }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 4 },
          }}
        >
          {galleryImages.map((src, idx) => (
            <SwiperSlide key={idx}>
              <div className="rounded-xl overflow-hidden">
                <Image
                  className="w-full h-full object-cover rounded-xl"
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
          className="custom-swiper-next absolute top-44 -right-8 z-10 bg-white bg-opacity-60 text-white w-16 h-16 rounded-full flex justify-center items-center"
          aria-label="Next Slide"
        >
          <img src="/arrow-right.svg" alt="" />
        </button>
      </div>
    </section>
  );
};

export default Activities;
