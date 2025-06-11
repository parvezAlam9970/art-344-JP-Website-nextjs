import React from 'react'
import {CardOne} from  '../reusable/card-one'
const items = [
  {
    imagePath: "/card-icons/mission.svg", // or your actual path
    heading: "Mission",
    description: "Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an to make a type specimen book."
  },
  {
    imagePath: "/card-icons/vision.svg", // or your actual path
    heading: "Vision", 
    description: "Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an to make a type specimen book."
  },
  {
    imagePath: "/card-icons/leadership.svg", // or your actual path
    heading: "Leadership",
    description: "Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an to make a type specimen book."
  }
];

const HomeCard = () => {
  return (
    <>
    <section className='flex  justify-center mt-24 h-96'>
    <div className='flex flex-wrap justify-center gap-8'>
    {items.map((item,index) => <CardOne key={index} item={item} index={index}/>)}
    </div>
    </section>
    </>
  )
}

export default HomeCard