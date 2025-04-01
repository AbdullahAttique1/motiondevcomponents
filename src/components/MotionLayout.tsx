import { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'

type CardType = {
  title: string
  description: string
  imageSrc: string
  ctaText: string
  ctaLink: string
  content: () => React.ReactNode
}

const cards: CardType[] = [
  {
    title: 'Something sandra1',
    description: 'Something sandra desc',
    imageSrc:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    ctaText: 'Play',
    ctaLink: 'https://www.google.com',
    content: () => {
      return (
        <div>
          <p>
            Something sandra desc and this is a long description and I want to
            see how it looks on mobile and it goes on and on and on and on and
            on and its a beautiful description how knows its the description of
            30 random characters lets write 30 random characters on the
            description and see how it looks on mobile Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Aliquam quidem ut odit enim
            deserunt, corrupti temporibus hic eaque facilis mollitia eos aliquid
            inventore laudantium eius, quaerat natus optio, impedit illo.
          </p>
        </div>
      )
    },
  },
  {
    title: 'Something sandra2',
    description: 'Something sandra desc',
    imageSrc:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    ctaText: 'Play',
    ctaLink: 'https://www.google.com',
    content: () => {
      return (
        <div>
          <p>
            Something sandra desc and this is a long description and I want to
            see how it looks on mobile and it goes on and on and on and on and
            on and its a beautiful description how knows its the description of
            30 random characters lets write 30 random characters on the
            description and see how it looks on mobile
          </p>
        </div>
      )
    },
  },
  {
    title: 'Something sandra3',
    description: 'Something sandra desc',
    imageSrc:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    ctaText: 'Play',
    ctaLink: 'https://www.google.com',
    content: () => {
      return (
        <div>
          <p>
            Something sandra desc and this is a long description and I want to
            see how it looks on mobile and it goes on and on and on and on and
            on and its a beautiful description how knows its the description of
            30 random characters lets write 30 random characters on the
            description and see how it looks on mobile
          </p>
        </div>
      )
    },
  },
  {
    title: 'Something sandra4',
    description: 'Something sandra desc',
    imageSrc:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    ctaText: 'Play',
    ctaLink: 'https://www.google.com',
    content: () => {
      return (
        <div>
          <p>
            Something sandra desc and this is a long description and I want to
            see how it looks on mobile and it goes on and on and on and on and
            on and its a beautiful description how knows its the description of
            30 random characters lets write 30 random characters on the
            description and see how it looks on mobile
          </p>
        </div>
      )
    },
  },
  {
    title: 'Something sandra5',
    description: 'Something sandra desc',
    imageSrc:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    ctaText: 'Play',
    ctaLink: 'https://www.google.com',
    content: () => {
      return (
        <div>
          <p>
            Something sandra desc and this is a long description and I want to
            see how it looks on mobile and it goes on and on and on and on and
            on and its a beautiful description how knows its the description of
            30 random characters lets write 30 random characters on the
            description and see how it looks on mobile
          </p>
        </div>
      )
    },
  },
]

type Card = (typeof cards)[0]

const MotionLayout = () => {
  const [current, setCurrent] = useState<Card | null>(null)

  const ref = useRef<HTMLDivElement>(null)
  const useoutSideClick = (ref: React.RefObject<HTMLDivElement | null>) => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setCurrent(null)
      }
    }
    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [])
  }
  useoutSideClick(ref)

  return (
    <div className="relative min-h-screen bg-gray-100 py-10">
      {current && (
        <motion.div
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-10 h-full w-full bg-black/50 backdrop-blur-sm"
        ></motion.div>
      )}
      {current && (
        <motion.div
          layoutId={`card-${current.title}`}
          ref={ref}
          className="fixed inset-0 z-20 m-auto h-[500px] w-80 overflow-hidden rounded-2xl border border-neutral-200 bg-white p-4"
        >
          <motion.img
            layoutId={`card-image${current.title}`}
            src={current.imageSrc}
            alt={current.title}
            className="aspect-square h-60 rounded-xl"
          />
          <div className="flex items-start justify-between">
            <div className="flex flex-col items-start gap-2 py-4">
              <motion.h2
                layoutId={`card-title${current.title}`}
                className="text-xs font-bold tracking-tight text-black"
              >
                {current.title}
              </motion.h2>
              <motion.p
                layoutId={`card-description${current.title}`}
                className="text-[10px] text-neutral-700"
              >
                {current.description}
              </motion.p>
            </div>
            <motion.a
              layoutId={`card-cta${current.title}`}
              href={current.ctaLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-green-500 p-1 px-2 text-xs text-white"
            >
              {current.ctaText}
            </motion.a>
          </div>
          <div className="h-50 overflow-scroll pb-20 [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1),rgba(0,0,0,0))]">
            {current.content()}
          </div>
        </motion.div>
      )}
      <div className="mx-auto flex max-w-lg flex-col gap-10">
        {cards.map((card, index) => {
          return (
            <motion.button
              layoutId={`card-${card.title}`}
              onClick={() => setCurrent(card)}
              key={index}
              className="flex cursor-pointer items-center justify-between rounded-lg border border-neutral-200 bg-white p-4 shadow-md transition-all hover:border-neutral-300 hover:shadow-lg"
            >
              <div className="flex items-center gap-4">
                <motion.img
                  layoutId={`card-image${card.title}`}
                  src={card.imageSrc}
                  alt={card.title}
                  className="aspect-square h-14 rounded-lg"
                />
                <div className="flex flex-col items-start gap-2 rounded-xl">
                  <motion.h2
                    layoutId={`card-title${card.title}`}
                    className="text-xs font-bold tracking-tight text-black"
                  >
                    {card.title}
                  </motion.h2>
                  <motion.p
                    layoutId={`card-description${card.title}`}
                    className="text-[10px] text-neutral-700"
                  >
                    {card.description}
                  </motion.p>
                </div>
              </div>
              <motion.div
                layoutId={`card-cta${card.title}`}
                className="rounded-full bg-green-500 px-3 py-1.5 text-xs text-white"
              >
                {card.ctaText}
              </motion.div>
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}

export default MotionLayout
