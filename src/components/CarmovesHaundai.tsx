import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from 'motion/react'
import { useRef, useState } from 'react'

const CarmovesHaundai = () => {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const tralateContent1 = useSpring(
    useTransform(scrollYProgress, [0, 1], [100, -200]),
    {
      stiffness: 100,
      damping: 30,
      mass: 1,
    }
  )

  const tralateContent2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [100, -600]),
    {
      stiffness: 100,
      damping: 30,
      mass: 1,
    }
  )

  const tralateContent3 = useSpring(
    useTransform(scrollYProgress, [0, 1], [300, -800]),
    {
      stiffness: 100,
      damping: 30,
      mass: 1,
    }
  )
  const tralateContent4 = useSpring(
    useTransform(scrollYProgress, [0, 1], [300, -400]),
    {
      stiffness: 100,
      damping: 30,
      mass: 1,
    }
  )
  const tralateContent5 = useSpring(
    useTransform(scrollYProgress, [0, 1], [600, -300]),
    {
      stiffness: 100,
      damping: 30,
      mass: 1,
    }
  )
  const translatetext = useSpring(
    useTransform(scrollYProgress, [0, 1], [10, 1200]),
    {
      stiffness: 100,
      damping: 30,
      mass: 1,
    }
  )

  const texts = ['Vision', 'Goal', 'Team', 'Strategy', 'Purpose']

  const [text, setText] = useState(texts[0])

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setText(texts[Math.floor(latest * texts.length)])
  })

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    console.log(latest, 'latest')
  })
  return (
    <>
      <div ref={ref} className="relative flex">
        <motion.div
          ref={ref}
          style={{
            y: translatetext,
          }}
          className="uppertext absolute right-[1%] z-[55] text-8xl font-semibold text-neutral-800 md:right-[20%] lg:right-[40%]"
        >
          One {text}
        </motion.div>

        <motion.div
          ref={ref}
          style={{
            y: tralateContent2,
          }}
          className="firstimage absolute mt-[30rem]"
        >
          <img
            className="h-86 w-[15rem]"
            src="https://convencion-hyundai.plastic.design/_ipx/_/images/one-goal3.jpg"
            alt="Car Image"
          />
        </motion.div>

        <motion.div
          ref={ref}
          style={{
            y: tralateContent1,
          }}
          className="SecondImage absolute mt-[20rem] ml-[16rem]"
        >
          <img
            className="h-72 w-[24rem]"
            src="https://convencion-hyundai.plastic.design/_ipx/_/images/one-goal1.jpg"
            alt="Car Image"
          />
        </motion.div>

        <motion.div
          ref={ref}
          style={{
            y: tralateContent3,
          }}
          className="ThirdImage absolute mt-[50rem] ml-[52rem] hidden lg:flex"
        >
          <img
            className="h-72 w-[23rem]"
            src="https://convencion-hyundai.plastic.design/_ipx/_/images/one-goal4.jpg"
            alt="Car Image"
          />
        </motion.div>

        <motion.div
          ref={ref}
          style={{
            y: tralateContent4,
          }}
          className="FourthImage absolute mt-[50rem] ml-[5rem] md:ml-[75rem]"
        >
          <img
            className="h-72 w-[23rem]"
            src="https://convencion-hyundai.plastic.design/_ipx/_/images/one-goal2.jpg"
            alt="Car Image"
          />
        </motion.div>

        <motion.div
          ref={ref}
          style={{
            y: tralateContent5,
          }}
          className="FifthImage mt-[65rem]"
        >
          <img
            className="h-72 w-[30rem]"
            src="https://convencion-hyundai.plastic.design/_ipx/_/images/one-goal5.jpg"
            alt="Car Image"
          />
        </motion.div>
      </div>
    </>
  )
}

export default CarmovesHaundai
