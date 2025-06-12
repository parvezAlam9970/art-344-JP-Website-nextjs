import React from 'react'
import SubHeading from '../reusable/sub-heading'
import Heading from '../reusable/heading'
import Line from '../reusable/horizontal-line'
import Description from '../reusable/description'
import CardTwo from '../reusable/card-two'

const cards = [
    {
        image: "/mediafeed-1.jpg",
        title: "Leader on Local News",
    },
    {
        image: "/mediafeed-2.jpg",
        title: "Visiting Community Center",
    },
    {
        image: "/mediafeed-3.jpg",
        title: "Campaign Rally HighLights",
    },
    {
        image: "/mediafeed-4.jpg",
        title: "Meeting With Volunteers",
    },
]

const MediaFeed = () => {
  return (
    <section className='mt-16'>
        <div className='flex flex-col items-center gap-4'>
        <SubHeading subHeading="MP Performance Tracker" className="font-pt-serif text-center" />
      <Heading
        heading="Media & Feed"
        orangeWords={0}
        className="font-playfair font-semibold"
      />
      <Line className="w-[22%]"/>
      <Description
        className="text-center font-inter"
        descriptionOne="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, it to make a type specimen book."
      />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-7">
      {cards.map((card, index) => (
        <CardTwo key={index} image={card.image} title={card.title} />
      ))}
    </div>

    </section>
  )
}

export default MediaFeed