import Image from 'next/image'
import React from 'react'

export function CardOne ({item, index})  {
  const isOdd = index % 2 === 0
  // Only top or bottom shadow gets the specified color, left/right are always lighter black
  // Top/bottom shadow is now solid (no blur, spread or offset except y)
  const boxShadow = isOdd
    // Odd: solid top shadow #1B1F3B, left/right lighter black, bottom black
    ? '0px -8px 0px 0px #1B1F3B, 6px 0px 0px 0px rgba(0,0,0,0.02), 0px 6px 0px 0px rgba(0,0,0,0.02), -6px 0px 0px 0px rgba(0,0,0,0.02)'
    // Even: solid bottom shadow #F47216, left/right lighter black, top black
    : '0px 8px 0px 0px #F47216, 6px 0px 0px 0px rgba(0,0,0,0.02), -6px 0px 0px 0px rgba(0,0,0,0.02), 0px -6px 0px 0px rgba(0,0,0,0.02)'

  return (
    <div
      className="bg-white text-black flex flex-col justify-start md:w-[300px] lg:w-[26rem] lg:max-h-72 xl:w-96 gap-4 md:gap-6 border p-5"
      style={{
        borderRadius: '12px',
        boxShadow,
      }}
    > 
      <Image
        src={item.imagePath}
        alt=""
        width={80}
        height={80}
      />
      <h4 className='font-newsreader text-lg md:text-2xl font-semibold'>{item.heading}</h4>
      <p className='font-poppins text-sm md:text-base font-normal'>{item.description}</p>
    </div>
  )
}