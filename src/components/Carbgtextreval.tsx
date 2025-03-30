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
  const lines = words
    .split(/\n/)
    .map((line) => line.trim())
    .filter(Boolean)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 95%', 'end 60%'],
  })

  return (
    <motion.div
      ref={containerRef}
      className={className}
      style={{
        paddingTop: '5vh',
        paddingBottom: '2vh',
      }}
    >
      {lines.map((line, lineIdx) => {
        const letters = line.split('')
        const totalLetters = letters.length

        return (
          <motion.div
            key={line + lineIdx}
            className="mb-4 block overflow-hidden"
          >
            <div className="flex">
              {letters.map((letter, letterIdx) => {
                const progress = useTransform(
                  scrollYProgress,
                  [0, 1],
                  [0, lines.length * totalLetters]
                )

                const letterPosition = lineIdx * totalLetters + letterIdx

                return (
                  <motion.span
                    key={letterIdx}
                    className="inline-block"
                    style={{
                      opacity: useTransform(
                        progress,
                        [letterPosition, letterPosition + 0.5],
                        [0, 1]
                      ),
                      y: useTransform(
                        progress,
                        [letterPosition, letterPosition + 0.5],
                        [50, 0]
                      ),
                      x: useTransform(
                        progress,
                        [letterPosition, letterPosition + 0.5],
                        [20, 0]
                      ),
                    }}
                  >
                    {letter === ' ' ? '\u00A0' : letter}
                  </motion.span>
                )
              })}
            </div>
          </motion.div>
        )
      })}
    </motion.div>
  )
}
