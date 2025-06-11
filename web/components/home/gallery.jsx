'use client'
import React from 'react'
import SubHeading from '../reusable/sub-heading'
import Heading from '../reusable/heading'
import Line from '../reusable/horizontal-line'
import Description from '../reusable/description'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation } from 'swiper/modules'
const galleryImages = [
  "/gallery/gallery-3.jpg",
  "/gallery/gallery-3.jpg",
  "/gallery/gallery-3.jpg",
  "/gallery/gallery-3.jpg",
  "/gallery/gallery-3.jpg",
  "/gallery/gallery-3.jpg",
  "/gallery/gallery-3.jpg",
  "/gallery/gallery-3.jpg",
];
const Gallery = () => {
  return (
    <section>
              <div className='flex flex-col items-center gap-4 mt-20'>
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
      <div className='grid grid-cols-1 md:grid-cols-4 w-full h-auto gap-5 rounded-lg'>
        <div className=' rounded-xl'><img className=' rounded-xl' src="/gallery/gallery-1.jpg" alt="" /></div>
        <div className='col-span-1 md:col-span-3'><img src="/gallery/gallery-2.jpg" alt="" /></div>
        </div>
<Swiper
  spaceBetween={16}
  slidesPerView={1}
  breakpoints={{
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 4 },
  }}
>
  {galleryImages.map((src, idx) => (
    <SwiperSlide key={idx}>
      <div className="rounded-xl overflow-hidden">
        <img className="w-full h-full object-cover rounded-xl" src={src} alt="" />
      </div>
    </SwiperSlide>
  ))}
</Swiper>
        <div className='grid grid-cols-1 md:grid-cols-4 w-full h-auto gap-5 rounded-lg'>
        <div className='col-span-1 md:col-span-3'><img src="/gallery/gallery-2.jpg" alt="" /></div>
        <div><img src="/gallery/gallery-3.jpg" alt="" /></div>
        </div>
         
      
    </section>
  )
}

export default Gallery