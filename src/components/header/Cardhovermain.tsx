import { BookOpen, Lock, MessageSquareDot, Phone, Tv2 } from 'lucide-react'
import { motion } from 'motion/react'

const ClerkCardhover = () => {
  const hoverVariesntsMsg = {
    initial: {
      opacity: 0,
      y: -20,
    },
    hover: {
      opacity: 1,
      y: 50,
    },
  }

  const hoverVariesntsPhone = {
    initial: {
      opacity: 1,
      filter: 'blur(10px)',
    },
    hover: {
      opacity: 1,
      translateY: -35,
    },

    animate: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
    },
  }

  const hoverVariesntsLock = {
    initial: {
      backgroundColor: '#212126',
    },
    hover: {
      backgroundColor: '#00ffff',
    },
  }

  const hoverVariesntMsgOne = {
    initial: {
      backgroundColor: '#b1b1b1',
    },
    hover: {
      backgroundColor: '#00ffff',
    },
  }

  return (
    <>
      <motion.div
        initial="initial"
        whileHover="hover"
        animate="animate"
        className="relative flex h-[12rem] w-[14.5rem] flex-col rounded-2xl border-[1px] border-[#282833] bg-[#131316]"
      >
        <style> {`.clip-path {clip-path: inset(-20px 0px 0px 0px);}`}</style>

        <motion.div className="upper clip-path mt-0 h-[9rem] rounded-2xl bg-[#212126] px-5">
          <motion.div
            variants={hoverVariesntsMsg}
            transition={{
              duration: 0.4,
              ease: 'easeInOut',
            }}
            className="m absolute top-0 left-0 z-50 -mt-10 ml-7 flex w-44 items-center justify-around rounded-md bg-[#626263] p-[4px] text-white shadow-md"
          >
            <div className="msgbox flex items-center rounded-md bg-[#212126] p-[6px]">
              <div className="flex items-center justify-center rounded-full bg-cyan-500 p-1">
                <MessageSquareDot className="h-3 w-3 text-white" />
              </div>
            </div>
            <div className="text flex flex-col items-start justify-center text-center text-[8px]">
              <h4 className="text-[10px] font-semibold text-cyan-500">
                Security Alert
              </h4>
              <p className="text-[8px] text-white">
                Your security passcode is 789452....
              </p>
            </div>
          </motion.div>

          <motion.div
            transition={{
              duration: 0.3,
              ease: 'easeInOut',
            }}
            variants={hoverVariesntsPhone}
            className="phone z-50 mt-4 flex h-[20rem] flex-col items-center rounded-4xl border-4 border-[#2e2e35] bg-[#242529]"
          >
            <motion.div
              variants={hoverVariesntsLock}
              className="lock mt-2 rounded-full p-1"
            >
              <Lock className="h-3 w-3 text-neutral-400" />
            </motion.div>

            <div className="othericons mt-4 flex items-center justify-center gap-2 text-neutral-400">
              <div className="flex flex-col items-center space-y-1">
                <span className="flex items-center justify-center rounded-xl bg-[#33353b] p-2">
                  <Phone fill="#212126" className="h-5 w-5" />
                </span>
                <span className="text-[7px] text-white">Phone</span>
              </div>

              <div className="relative flex flex-col items-center space-y-1">
                <motion.div
                  variants={hoverVariesntMsgOne}
                  transition={{ duration: 0.4 }}
                  className="absolute top-0 -right-1 flex h-3 w-3 items-center justify-center rounded-full p-1"
                >
                  <span className="text-[8px] text-neutral-100">1</span>
                </motion.div>

                <span className="flex items-center justify-center rounded-xl bg-[#33353b] p-2">
                  <MessageSquareDot fill="#212126" className="h-5 w-5" />
                </span>
                <span className="text-[7px] text-white">SMS</span>
              </div>

              <div className="flex flex-col items-center space-y-1">
                <span className="flex items-center justify-center rounded-xl bg-[#2e3035] p-2">
                  <BookOpen fill="#212126" className="h-5 w-5" />
                </span>
                <span className="text-[7px] text-white">Books</span>
              </div>

              <div className="flex flex-col items-center space-y-1">
                <span className="flex items-center justify-center rounded-xl bg-[#33353b] p-2">
                  <Tv2 fill="#212126" className="h-5 w-5" />
                </span>
                <span className="text-[7px] text-white">TV</span>
              </div>
            </div>

            <div className="forbox mt-3 flex items-center justify-center gap-5">
              <div className="box1 h-6 w-6 rounded-sm bg-[#33353b]"></div>
              <div className="box2 h-6 w-6 rounded-sm bg-[#33353b]"></div>
              <div className="box3 h-6 w-6 rounded-sm bg-[#33353b]"></div>
              <div className="box4 h-6 w-6 rounded-sm bg-[#33353b]"></div>
            </div>
          </motion.div>
        </motion.div>

        <div className="lover absolute bottom-4 bg-[#212126] px-3">
          <h2 className="">
            <span className="text-[10px] text-white">
              Email and SMS one-time passcodes
            </span>
          </h2>

          <p className="mt-[5px] text-[8px] text-neutral-500">
            Fast and reliable one-time passcode delivery with built-in brute
            force prevention.
          </p>
        </div>
      </motion.div>
    </>
  )
}

export default ClerkCardhover
