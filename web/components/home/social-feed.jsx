import React from 'react'
import SubHeading from '../reusable/sub-heading'
import Heading from '../reusable/heading'
import Line from '../reusable/horizontal-line'
import Description from '../reusable/description'
import GalleryOne from '@/components/reusable/gallery-one'

const youtubeLinks = [
  'https://youtu.be/rnyrDk4G68g?si=xllTcxpB_T6tct4p',
  'https://www.youtube.com/watch?v=dHfw-_2GF8Q',
  'https://www.youtube.com/watch?v=ckMmJslK12A',
  'https://www.youtube.com/watch?v=AyosOIMk7oc',
  'https://www.youtube.com/watch?v=x57ebJ-fp4I',
];

const SocialFeed = () => {
  
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
      <GalleryOne youtubeLinks={youtubeLinks}/>
      {/* <div className='grid grid-rows-3 grid-cols-4 w-[1200px]'>
        <div className='col-span-4 row-span-2 bg-gray-100'><img src="/socialfeed-1.jpg" alt="" /></div>
        <div className='bg-black'><img src="/socialfeed-2.jpg" alt="" /></div>
        <div className='bg-black'><img src="/socialfeed-3.jpg" alt="" /></div>
        <div className='bg-black'><img src="/socialfeed-4.jpg" alt="" /></div>
        <div className='bg-black'><img src="/socialfeed-5.jpg" alt="" /></div>
      </div> */}
      
      </section>
  )
}

export default SocialFeed