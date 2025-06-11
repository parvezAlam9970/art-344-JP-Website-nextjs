'use client'
import React, { useState } from 'react'
import SubHeading from '../reusable/sub-heading'
import Heading from '../reusable/heading'
import Line from '../reusable/horizontal-line'
import Description from '../reusable/description'

const youtubeLinks = [
  'https://www.youtube.com/watch?v=7bhp2t5fAzw',
  'https://www.youtube.com/watch?v=dHfw-_2GF8Q',
  'https://www.youtube.com/watch?v=ckMmJslK12A',
  'https://www.youtube.com/watch?v=AyosOIMk7oc',
  'https://www.youtube.com/watch?v=x57ebJ-fp4I',
];

function getVideoId(url) {
  return new URL(url).searchParams.get('v');
}

function getThumbnail(url) {
  const id = getVideoId(url);
  return `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
}



const SocialFeed = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  return (
    <section className="mt-0 md:mt-2 flex flex-col items-center">
      <div className='flex flex-col items-center gap-4'>
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
      {/* <div className='grid grid-rows-3 grid-cols-4 w-[1200px]'>
        <div className='col-span-4 row-span-2 bg-gray-100'><img src="/socialfeed-1.jpg" alt="" /></div>
        <div className='bg-black'><img src="/socialfeed-2.jpg" alt="" /></div>
        <div className='bg-black'><img src="/socialfeed-3.jpg" alt="" /></div>
        <div className='bg-black'><img src="/socialfeed-4.jpg" alt="" /></div>
        <div className='bg-black'><img src="/socialfeed-5.jpg" alt="" /></div>
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 w-full h-auto mt-6">
        {/* Main Video */}
        <button
          onClick={() => setActiveVideo(getVideoId(youtubeLinks[0]))}
          className="relative col-span-1 md:col-span-4 rounded-xl overflow-hidden "
        >
          <img
            src={getThumbnail(youtubeLinks[0])}
            // src='/socialfeed-1.jpg'
            alt="Main Video"
            className="w-full h-[400px] object-cover object-center rounded-xl"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white bg-opacity-70 p-4 rounded-full shadow-lg">
              <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
              </svg>
            </div>
          </div>
        </button>

        {/* Other Videos */}
        {youtubeLinks.slice(1).map((url, index) => (
          <button
            key={index}
            onClick={() => setActiveVideo(getVideoId(url))}
            className="relative rounded-xl overflow-hidden col-span-1"
          >
            <img
              src={getThumbnail(url)}
              alt={`Video ${index + 2}`}
              className="w-full h-auto object-cover rounded-xl"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white bg-opacity-70 p-3 rounded-full shadow">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
                </svg>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center px-4"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="bg-white rounded-xl overflow-hidden relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <button
              className="absolute top-3 right-3 text-white bg-black bg-opacity-60 hover:bg-opacity-80 rounded-full p-2 z-10"
              onClick={() => setActiveVideo(null)}
            >
              ✕
            </button>
            <div className="aspect-w-16 aspect-h-9 w-full">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
      </section>
  )
}

export default SocialFeed