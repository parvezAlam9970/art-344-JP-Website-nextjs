import { cn } from '@/lib/utils'
import React from 'react'
import type { WithChildren, WithClassName } from '@/types/general'

interface ContainerProps extends WithChildren, WithClassName {}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={cn('mx-md-5 px-20', className)}>{children}</div>
  )
}

export default Container