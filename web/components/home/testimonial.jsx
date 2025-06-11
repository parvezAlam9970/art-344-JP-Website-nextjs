'use client';
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/effect-coverflow";
import TestimonialCard from "@/components/reusable/testimonial-card";
// Dummy data for testimonials
const testimonials = [
  {
    name: "Manish Sharma",
    image: "/assets/manish.svg",
    text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry’s standard dummy text ever since the 1500s.",
  },
  {
    name: "Manish Sharma",
    image: "/assets/manish.svg",
    text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry’s standard dummy text ever since.",
  },
  {
    name: "Prateek Mishra",
    image: "/assets/manish.svg",
    text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry’s standard dummy text ever since the 1500s.",
  },
  {
    name: "Himanshu Maurya",
    image: "/assets/manish.svg",
    text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry’s standard dummy text ever since the 1500s.",
  },
  {
    name: "Asad Khan",
    image: "/assets/manish.svg",
    text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry’s standard dummy text ever since the 1500s.",
  },
  {
    name: "Parvez Alam",
    image: "/assets/manish.svg",
    text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry’s standard dummy text ever since the 1500s.",
  },
];
const TestimonialSlider = () => {
  return (
    <div className="pt-10">

     <Swiper
  modules={[Autoplay]}
  autoplay={{ delay: 300000000 }}
  loop={true}
  centeredSlides={true}
  spaceBetween={10}
  breakpoints={{
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
  onSlideChange={(swiper) => {
    const isMobile = window.innerWidth < 768;
    swiper.slides.forEach((slide, index) => {
      if (isMobile) {
        slide.style.transform = "scale(1)";
      } else {
        slide.style.transform = index === swiper.activeIndex ? "scale(1.3)" : "scale(1)";
      }
    });
  }}
>
  {testimonials.map((testimonial, idx, swiper) => (
    <SwiperSlide
      key={idx}
      className="transition-transform duration-300 md:py-20"
      style={{
    zIndex:
      idx === swiper?.activeIndex
        ? 30
        : idx === swiper?.activeIndex - 1 || idx === swiper?.activeIndex + 1
        ? 20
        : 10,
  }}
    >
      <TestimonialCard {...testimonial} />
    </SwiperSlide>
  ))}
</Swiper>
    </div>
  );
};
export default TestimonialSlider;






