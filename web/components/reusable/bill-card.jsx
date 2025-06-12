import React from 'react'
import ButtonOne from "./button-one"

const BillCard = ({ data, buttonLabel = 'View Document' }) => {
  return (
    <div className="bg-[#F47216]/[0.12] rounded-xl p-6 flex flex-col lg:flex-row items-start lg:items-center justify-between w-full">
      <div className="mb-4 lg:mb-0">
        <h2 className="text-2xl font-pt-serif font-normal text-black mb-2">
          {data.title}
        </h2>
        <p className="text-sm font-inter text-black font-normal max-w-2xl">{data.description}</p>
      </div>
      <ButtonOne text={buttonLabel}/>
    </div>
  )
}

export default BillCard
