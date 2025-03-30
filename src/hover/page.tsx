import {
  HourglassIcon,
  MessageCircle,
  PiIcon,
  Plus,
  Sparkle,
  X,
} from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'

const CardHover = () => {
  const [open, setOpen] = useState(true)
  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.98,
              filter: 'blur(10px)',
            }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: 'blur(0px)',
            }}
            exit={{
              opacity: 0,
              scale: 0.98,
              filter: 'blur(10px)',
            }}
            transition={{
              duration: 0.5,
              ease: 'easeInOut',
            }}
            className={`flex h-[28rem] w-72 flex-col rounded-xl p-4 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]`}
          >
            <h2 className="text-[10px] font-bold">Accernity Ui Component</h2>
            <p className="mt-2 text-[10px] text-neutral-600">
              A collection of ui components that are easy to use and customize.
              <div className="flex items-center justify-center">
                <button
                  onClick={() => {
                    setOpen(false)
                  }}
                  className="mt-4 flex items-center gap-1 rounded-md px-2 py-1 text-[10px] shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]"
                >
                  <img
                    className="h4 w-4 rounded-full"
                    src="https://ui.aceternity.com/logo.png"
                    alt=""
                    height={50}
                    width={50}
                  />
                  Accerity
                  <X className="h-3 w-3 text-neutral-400" />
                </button>
              </div>
            </p>

            <div className="relative mt-4 flex-1 rounded-lg border-[0.1px] border-neutral-300 bg-gray-200">
              {/* //motion dev */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.98,
                  filter: 'blur(10px)',
                }}
                whileHover={{
                  opacity: 1,
                  scale: 1.05,
                  filter: 'blur(0px)',
                }}
                transition={{
                  // duration:0.3,

                  // ease:"easeInOut"

                  type: 'spring',
                  stiffness: 100,
                  damping: 15,
                }}
                className="absollute inset-0 h-full w-full divide-y divide-neutral-200 rounded-lg border border-b-neutral-300 bg-white"
              >
                <div className="flex gap-2 p-4">
                  <div className="shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04), 0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md bg-white bg-gradient-to-br">
                    <MessageCircle className="h-4 w-4 text-neutral-600" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[8px] font-bold text-neutral-600">
                      Accernity UI Components
                    </p>
                    <p className="mt-1 text-[8px] font-bold text-neutral-400">
                      Accernity UI Components Is the ui library for all the
                      things
                    </p>
                  </div>
                </div>

                <div className="flex gap-2 p-4">
                  <div className="shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04), 0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md bg-white bg-gradient-to-br">
                    <HourglassIcon className="h-4 w-4 text-neutral-600" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[8px] font-bold text-neutral-600">
                      Fully manageable Time
                    </p>
                    <p className="mt-1 text-[8px] font-bold text-neutral-400">
                      Super Fast Speed At warp Speed
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 p-4">
                  <div className="shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04), 0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md bg-white bg-gradient-to-br">
                    <PiIcon className="h-4 w-4 text-neutral-600" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[8px] font-bold text-neutral-600">
                      IP TV
                    </p>
                    <p className="mt-1 text-[8px] font-bold text-neutral-400">
                      Watch tv at home do not go to the theater
                    </p>
                  </div>
                </div>

                <div className="flex gap-2 p-4">
                  <div className="shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04), 0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md bg-white bg-gradient-to-br">
                    <Sparkle className="h-4 w-4 text-neutral-600" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[8px] font-bold text-neutral-600">
                      Accernity UI Components
                    </p>
                    <p className="mt-1 text-[8px] font-bold text-neutral-400">
                      Accernity UI Components
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-2 p-2">
                  <div className="shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04), 0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] flex h-10 w-44 flex-shrink-0 cursor-pointer items-center justify-center gap-2 rounded-md bg-gradient-to-br from-white to-gray-100 px-3 transition hover:shadow-lg">
                    <Plus className="h-4 w-4 text-neutral-600" />
                    <span className="text-xs font-bold text-neutral-600">
                      Create a Project
                    </span>
                  </div>
                </div>
              </motion.div>
              {/* //motion dev */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default CardHover
