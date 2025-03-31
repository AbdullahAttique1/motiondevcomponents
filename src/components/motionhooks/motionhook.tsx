import { Rocket } from 'lucide-react'
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
  useMotionTemplate,
  useSpring,
} from 'motion/react'
import React, { useRef, useState } from 'react'

type Feature = {
  icon: React.ReactNode
  title: string
  description: string
  content: React.ReactNode
}

export function MotionHooksCard({ feature }: { feature: Feature }) {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  // useMotionValueEvent(scrollYProgress,"change",(latest)=>{
  // console.log(latest,"latest")

  // })

  const tralateContent = useSpring(
    useTransform(scrollYProgress, [0, 1], [200, -200]),
    {
      stiffness: 100,
      damping: 30,
      mass: 1,
    }
  )

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])

  const blur = useTransform(scrollYProgress, [0.5, 1], [0, 10])
  const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0.8])

  return (
    <div
      ref={ref}
      key={feature.title}
      className="grid grid-cols-2 items-center gap-20 py-40"
    >
      <motion.div
        style={{
          filter: useMotionTemplate`blur(${blur}px)`,
          scale,
        }}
        className="flex flex-col gap-5"
      >
        {feature.icon}
        <h2 className="text-4xl font-bold text-neutral-100">{feature.title}</h2>

        <p className="text-lg text-neutral-400">{feature.description}</p>
      </motion.div>

      <motion.div
        style={{
          y: tralateContent,
          opacity: opacity,
        }}
      >
        {feature.content}
      </motion.div>
    </div>
  )
}

const MotionHooks = () => {
  const features: Feature[] = [
    {
      icon: <Rocket className="h-8 w-8 text-neutral-200" />,
      title: 'Generate ultra realistic motion graphics in seconds',
      description:
        'With the power of AI, create stunning motion graphics in seconds. No coding required.',
      content: (
        <div className="flex flex-col items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="h-auto w-full"
          />
        </div>
      ),
    },
    {
      icon: <Rocket className="h-8 w-8 text-neutral-200" />,
      title: 'Create stunning motion graphics with ease',
      description:
        'With the power of AI, create stunning motion graphics in seconds. No coding required.',
      content: (
        <div className="flex flex-col items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="h-auto w-full"
          />
        </div>
      ),
    },
    {
      icon: <Rocket className="h-8 w-8 text-neutral-200" />,
      title: 'Generate stunning motion graphics with ease',
      description:
        'With the power of AI, create stunning motion graphics in seconds. No coding required.',
      content: (
        <div className="flex flex-col items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="h-auto w-full"
          />
        </div>
      ),
    },
  ]

  const containerred = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerred,
    offset: ['start end', 'end start'],
  })
  const backGrounds = ['#FF0080', '#7928CA', '#FFD500', '#00D1FF']

  const [background, setbackground] = useState(backGrounds[0])

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setbackground(backGrounds[Math.floor(latest * backGrounds.length)])
  })

  return (
    <motion.div
      animate={{
        background,
      }}
      ref={containerred}
      className="flex min-h-screen flex-col items-center justify-center"
    >
      <div className="mx-auto flex max-w-4xl flex-col gap-10">
        {features.map((feature) => (
          <MotionHooksCard feature={feature} />
        ))}
      </div>
    </motion.div>
  )
}

export default MotionHooks
