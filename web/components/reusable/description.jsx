import React from 'react'
import { cn } from '@/lib/utils'    

const Description = ({descriptionOne, descriptionTwo, className}) => {
  return (
    <>
    <p className={cn('text-sm md:text-base font-normal text-[#4A4B57] font-poppins', className)}>{descriptionOne}</p>
    <p className={cn('text-sm md:text-base font-normal text-[#4A4B57] font-poppins', className)}>{descriptionTwo}</p>
    </>
  )
}

export default Description