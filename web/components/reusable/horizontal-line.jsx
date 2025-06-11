import React from 'react'
import { cn } from '@/lib/utils'

const Line = ({className}) => {
  return (
    <hr className={cn("bg-primary h-[2px] w-[80%]", className)}/>
    
  )
}

export default Line