'use client'
import React from 'react'
import GalleryTwo from "../reusable/gallery-two";
import Heading from '../reusable/heading';
import Description from '../reusable/description';

const parliamentVideos = [
        "https://www.youtube.com/watch?v=AyosOIMk7oc",
        "https://www.youtube.com/watch?v=x57ebJ-fp4I",
];
const Videos = () => {
  return (
    <section className="mt-16">
      <div className="flex flex-col items-center gap-4">
        <Heading
          heading="Parliament videos"
          orangeWords={1}
          className="font-pt-serif capitalize"
        />
        <Description
          className="text-center font-inter"
          descriptionOne="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, it to make a type specimen book."
        />
      </div>
        <GalleryTwo parliamentVideos={parliamentVideos}/>
      </section>
  )
}

export default Videos