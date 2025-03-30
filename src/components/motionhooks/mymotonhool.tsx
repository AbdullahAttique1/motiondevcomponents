import { RocketIcon } from 'lucide-react'
import {
  motion,
  useMotionTemplate,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'motion/react'
import { useRef, useState } from 'react'

type Feature = {
  icon: React.ReactNode
  title: string
  description: string
  content: React.ReactNode
}

const features: Feature[] = [
  {
    icon: <RocketIcon className="h-5 w-5" />,
    title: 'FirstTitle',
    description:
      '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sed nulla illo ullam numquam fuga, recusandae, quas vel minus molestias, quo sunt aliquid officia ex praesentium eum libero. Accusamus, laudantium.',
    content: (
      <div>
        <img
          src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
    ),
  },
  {
    icon: <RocketIcon className="h-5 w-5" />,
    title: 'Second Title',
    description:
      '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sed nulla illo ullam numquam fuga, recusandae, quas vel minus molestias, quo sunt aliquid officia ex praesentium eum libero. Accusamus, laudantium.',
    content: (
      <div>
        <img
          src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
    ),
  },
  {
    icon: <RocketIcon className="h-5 w-5" />,
    title: 'Third Title',
    description:
      '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sed nulla illo ullam numquam fuga, recusandae, quas vel minus molestias, quo sunt aliquid officia ex praesentium eum libero. Accusamus, laudantium.',
    content: (
      <div>
        <img
          src="https://images.unsplash.com/photo-1549927681-0b673b8243ab?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
    ),
  },
  {
    icon: <RocketIcon className="h-5 w-5" />,
    title: 'Fourth Title',
    description:
      '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sed nulla illo ullam numquam fuga, recusandae, quas vel minus molestias, quo sunt aliquid officia ex praesentium eum libero. Accusamus, laudantium.',
    content: (
      <div>
        <img
          src="https://images.unsplash.com/photo-1555626906-fcf10d6851b4?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
    ),
  },
]

const MotionCard = ({ feature }: { feature: Feature }) => {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const tralateY = useTransform(scrollYProgress, [0, 1], [200, -300])

  const blur = useTransform(scrollYProgress, [0.5, 1], [0, 10])
  const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0.8])

  return (
    <div className="mt-52 flex max-w-4xl">
      <div className="flex max-w-2xl gap-14 text-white">
        <motion.div
          ref={ref}
          style={{
            filter: useMotionTemplate`blur(${blur}px)`,
            translateY: tralateY,
            scale,
          }}
          className="flex flex-col gap-4"
        >
          {feature.icon}
          <div className="title">{feature.title}</div>
          <div className="desc">{feature.description}</div>
        </motion.div>

        <div className="overflow-hidden rounded-2xl">{feature.content}</div>
      </div>
    </div>
  )
}

const MymotionCom = () => {
  const refCon = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: refCon,
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
    >
      {features.map((feature) => (
        <MotionCard feature={feature} />
      ))}
    </motion.div>
  )
}

export default MymotionCom
