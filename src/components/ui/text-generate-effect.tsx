import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'

interface ScrollTextEffectProps {
  words: string
  className?: string
}

export const ScrollTextEffect: React.FC<ScrollTextEffectProps> = ({
  words,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const wordsArray = words.split(' ')

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  return (
    <motion.div ref={containerRef} className={className}>
      {wordsArray.map((word, idx) => {
        // Calculate the scroll progress threshold for each word
        const wordStart = idx / wordsArray.length
        const wordEnd = (idx + 1) / wordsArray.length

        const opacity = useTransform(
          scrollYProgress,
          [wordStart, wordEnd],
          [0, 1]
        )

        const y = useTransform(scrollYProgress, [wordStart, wordEnd], [20, 0])

        return (
          <motion.span
            transition={{ delay: 10 }}
            key={word + idx}
            className="mr-[0.25em] inline-block text-white"
            style={{
              opacity,
              y,
            }}
          >
            {word}
          </motion.span>
        )
      })}
    </motion.div>
  )
}
