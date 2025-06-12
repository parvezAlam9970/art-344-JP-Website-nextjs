'use client';
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import TestimonialCard from "@/components/reusable/testimonial-card";
import SubHeading from "../reusable/sub-heading";
import Heading from "../reusable/heading";
import Line from "../reusable/horizontal-line";
import Description from "../reusable/description";
import Image from "next/image";

const testimonials = [
  {
    name: "Unknown",
    image: "/testimonial.png",
    text: "Lorem Ipsum has been the scrambled it to make a type specimen book.Lorem Ipsum has been the scrambled it to",
  },
  {
    name: "Unknown",
    image: "/testimonial.png",
    text: "Lorem Ipsum has been the book.Lorem Ipsum has been the scrambled it to",
  },
  {
    name: "Unknown",
    image: "/testimonial.png",
    text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry’s standard dummy text ever since the 1500s.",
  },
  {
    name: "Unknown",
    image: "/testimonial.png",
    text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry’s standard dummy text ever since the 1500s.",
  },
  {
    name: "Unknown",
    image: "/testimonial.png",
    text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry’s standard dummy text ever since the 1500s.",
  },
  {
    name: "Unknown",
    image: "/testimonial.png",
    text: "Lorem Ipsum has been the book.Lorem Ipsum has been the scrambled it to",
  },
];

const TestimonialSlider = () => {
  return (
    <div className="mt-16 relative">
              <Image
              src="/testimonial-bg.png"
              alt="Background"
              fill
              className="object-cover object-center"
            />
      <div className='flex flex-col items-center gap-4 mt-16'>
        <SubHeading subHeading="TESTIMONIALS" className="text-center" />
      <Heading
        heading="Hear It from Those Who Know Us Best"
        orangeWords={3}
        className=""
      />
      <Line className="w-[65%]"/>
      <Description
        className="text-center font-inter"
        descriptionOne="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, it to make a type specimen book."
      />
        </div>
        <div className="mt-14">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 1000 }}
        loop={true}
        centeredSlides={true}
        spaceBetween={2}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((testimonial, idx) => (
          <SwiperSlide key={idx} className="">
            {({ isActive }) => (
              <TestimonialCard {...testimonial} isActive={isActive} />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </div>
  );
};

export default TestimonialSlider;