import Image from 'next/image'
import React from 'react'

const CardTwo = ({ image, title }) => {
  return (
    <div className="rounded-xl shadow-md overflow-hidden bg-white">
      <div className="w-full h-48 relative">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-xl"
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-medium text-gray-800">{title}</h2>
      </div>
    </div>
  )
}

export default CardTwo