import React from 'react'
import { cn } from '@/lib/utils'

const Heading = ({ heading, className, orangeWords = 0 }) => {
  // Split the heading into words
  const words = heading ? heading.split(' ') : []
  const n = Math.max(0, Math.min(orangeWords, words.length))
  const normalWords = words.slice(0, words.length - n).join(' ')
  const orangeWordsArr = words.slice(words.length - n)

  return (
    <h2 className={cn('font-normal  text-wrap md:text-nowrap text-2xl lg:text-2xl xl:text-4xl font-newsreader text-center uppercase', className)}>
      {normalWords}
      {n > 0 && (
        <>
          {normalWords && ' '}
          <span className="text-primary font-bold">
            {orangeWordsArr.join(' ')}
          </span>
        </>
      )}
    </h2>
  )
}

export default Heading