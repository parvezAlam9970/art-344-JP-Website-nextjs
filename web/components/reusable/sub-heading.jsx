import React from 'react'
import { cn } from '@/lib/utils'

const SubHeading = ({subHeading, className}) => {
  return (
    <h6 className={cn('text-sm md:text-base font-semibold text-primary font-newsreader', className)}>{subHeading}</h6>
  )
}

export default SubHeading