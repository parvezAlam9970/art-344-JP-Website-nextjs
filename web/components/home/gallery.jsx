"use client";
import React from "react";
import SubHeading from "../reusable/sub-heading";
import Heading from "../reusable/heading";
import Line from "../reusable/horizontal-line";
import Description from "../reusable/description";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
const galleryImages = [
  "/gallery/gallery-3.jpg",
  "/gallery/gallery-1.jpg",
  "/gallery/gallery-3.jpg",
  "/gallery/gallery-3.jpg",
  "/gallery/gallery-1.jpg",
  "/gallery/gallery-3.jpg",
  "/gallery/gallery-1.jpg",
  "/gallery/gallery-3.jpg",
];
const Gallery = () => {
  return (
    <section>
      <div className="flex flex-col items-center gap-4 mt-20">
        <SubHeading subHeading="Write Social Feeds" />
        <Heading
          heading="Moments That Speak Louder Than Words"
          orangeWords={3}
        />
        <Line />
        <Description
          className="text-center"
          descriptionOne="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 w-full h-auto gap-5 rounded-lg">
        <div className="">
          <img className=" rounded-xl" src="/gallery/gallery-1.jpg" alt="" />
        </div>
        <div className="col-span-1 md:col-span-3">
          <img className="rounded-[12px]" src="/gallery/gallery-2.jpg" alt="" />
        </div>
      </div>
      <div className="flex justify-end gap-2 mt-4 relative">
        <button
          className="custom-swiper-prev absolute top-32 -left-8 z-10 bg-white bg-opacity-70 text-white w-16 h-16 rounded-full flex justify-center items-center"
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
                  width={300}
                  height={266}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          className="custom-swiper-next absolute top-28 -right-8 z-10 bg-white bg-opacity-60 text-white w-16 h-16 rounded-full flex justify-center items-center"
          aria-label="Next Slide"
        >
          <img src="/arrow-right.svg" alt="" />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 w-full h-auto gap-5 mt-5">
        <div className="col-span-1 md:col-span-3">
          <img className="rounded-[12px]" src="/gallery/gallery-2.jpg" alt="" />
        </div>
        <div>
          <img className="rounded-[12px]" src="/gallery/gallery-3.jpg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
