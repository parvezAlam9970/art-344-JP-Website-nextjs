import React from 'react'
import GalleryOne from "../reusable/gallery-one";
import Heading from '../reusable/heading';
import Description from '../reusable/description';
const youtubeLinks = [
  "https://www.youtube.com/watch?v=7bhp2t5fAzw",
  "https://www.youtube.com/watch?v=dHfw-_2GF8Q",
  "https://www.youtube.com/watch?v=ckMmJslK12A",
  "https://www.youtube.com/watch?v=AyosOIMk7oc",
  "https://www.youtube.com/watch?v=x57ebJ-fp4I",
];
const Speeches = () => {
  return (
    
        <section className="mt-16">
      <div className="flex flex-col items-center gap-4">
        <Heading
          heading="Updated speeches"
          orangeWords={1}
          className="font-pt-serif capitalize"
        />
        <Description
          className="text-center font-inter"
          descriptionOne="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, it to make a type specimen book."
        />
      </div>
      <GalleryOne youtubeLinks={youtubeLinks} />
      </section>
  )
}

export default Speeches