import React from 'react'
import { cn } from '@/lib/utils'

const Heading = ({ heading, className, orangeWords = 0 }) => {
  // Split the heading into words
  const words = heading ? heading.split(' ') : []
  const n = Math.max(0, Math.min(orangeWords, words.length))
  const normalWords = words.slice(0, words.length - n).join(' ')
  const orangeWordsArr = words.slice(words.length - n)

  return (
    <h6 className={cn('font-normal text-base text-wrap md:text-nowrap md:text-2xl lg:text-2xl xl:text-4xl font-newsreader text-center uppercase', className)}>
      {normalWords}
      {n > 0 && (
        <>
          {normalWords && ' '}
          <span className="text-primary font-bold">
            {orangeWordsArr.join(' ')}
          </span>
        </>
      )}
    </h6>
  )
}

export default Heading