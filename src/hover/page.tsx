import {  HourglassIcon, MessageCircle, PiIcon, Plus, Sparkle, X } from 'lucide-react'
import {AnimatePresence, motion} from 'motion/react'
import { useState } from 'react'

const CardHover = () => {

    const [open, setOpen] = useState(true)
    return (
        <>
    <AnimatePresence>


    {  open &&  <motion.div

    initial={{
        opacity:0,
        scale:0.98,
         filter:"blur(10px)"
    }}
    animate={{
        opacity:1,
        scale:1,
        filter:"blur(0px)"
    }}
    
exit={{
    opacity:0,
    scale:0.98,
    filter:'blur(10px)'
}}
transition={{
    duration:0.5,
    ease:"easeInOut"
}}


    className={`h-[28rem]  w-72
       rounded-xl  p-4 flex flex-col
        
       shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]
        `}>


            <h2 className='font-bold text-[10px]'>Accernity Ui Component</h2>
            <p className='text-neutral-600  mt-2 text-[10px]'>
                A collection of ui components that are easy to use and customize.

                <div className="flex items-center justify-center ">
                    <button 
                    onClick={()=>{setOpen(false)}}
                    className='flex items-center 
rounded-md px-2 py-1
   shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]

    gap-1 text-[10px] mt-4'><img
                            className='h4 w-4 rounded-full'
                            src="https://ui.aceternity.com/logo.png" alt="" height={50} width={50} />Accerity

                        <X className='h-3 w-3 text-neutral-400 ' />
                    </button>
                </div>
            </p>



            <div className=" flex-1 mt-4 rounded-lg bg-gray-200 border-[0.1px] border-neutral-300 relative">
{/* //motion dev */}

      <motion.div 
      initial={{
        opacity:0,
        scale:0.98,
        filter:"blur(10px)",
      }}

      whileHover={{
        opacity:1,
        scale:1.05,
        filter:"blur(0px)"
      }}
transition={{
    // duration:0.3,

    // ease:"easeInOut"


    type:"spring",
    stiffness:100,
    damping:15,

}}

      className="absollute border border-b-neutral-300 inset-0 h-full w-full bg-white rounded-lg divide-y divide-neutral-200">



                <div className="flex gap-2 p-4">


            <div
              className="h-7 w-7 flex-shrink-0 bg-gradient-to-br 
                shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),
                0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] 
                bg-white rounded-md flex items-center justify-center"
            >
              <MessageCircle className="h-4 w-4 text-neutral-600" />
            </div>
            <div className="flex flex-col">
              <p className="text-[8px] font-bold text-neutral-600">
                Accernity UI Components
              </p>
              <p className="text-[8px] font-bold text-neutral-400 mt-1">
                Accernity UI Components Is the ui library for all the things
              </p>
            </div>
          </div>

          <div className="flex gap-2 p-4">
            <div
              className="h-7 w-7 flex-shrink-0 bg-gradient-to-br 
                shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),
                0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] 
                bg-white rounded-md flex items-center justify-center"
            >
              <HourglassIcon className="h-4 w-4 text-neutral-600" />
            </div>
            <div className="flex flex-col">
              <p className="text-[8px] font-bold text-neutral-600">
               Fully manageable  Time
              </p>
              <p className="text-[8px] font-bold text-neutral-400 mt-1">
              Super Fast Speed At warp Speed
              </p>
            </div>
          </div>
          <div className="flex gap-2 p-4">
            <div
              className="h-7 w-7 flex-shrink-0 bg-gradient-to-br 
                shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),
                0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] 
                bg-white rounded-md flex items-center justify-center"
            >
              <PiIcon className="h-4 w-4 text-neutral-600" />
            </div>
            <div className="flex flex-col">
              <p className="text-[8px] font-bold text-neutral-600">
               IP TV
              </p>
              <p className="text-[8px] font-bold text-neutral-400 mt-1">
             Watch tv at home do not go to the theater
              </p>
            </div>
          </div>

          <div className="flex gap-2 p-4">
            <div
              className="h-7 w-7 flex-shrink-0 bg-gradient-to-br 
                shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),
                0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] 
                bg-white rounded-md flex items-center justify-center"
            >
              <Sparkle className="h-4 w-4 text-neutral-600" />
            </div>
            <div className="flex flex-col">
              <p className="text-[8px] font-bold text-neutral-600">
                Accernity UI Components
              </p>
              <p className="text-[8px] font-bold text-neutral-400 mt-1">
                Accernity UI Components
              </p>
            </div>
          </div>



          <div className="flex gap-2 p-2 items-center justify-center">
      <div
        className="h-10 w-44 flex-shrink-0 bg-gradient-to-br from-white to-gray-100 
          shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),
          0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] 
          rounded-md flex items-center justify-center gap-2 px-3 cursor-pointer hover:shadow-lg transition"
      >
        <Plus className="h-4 w-4 text-neutral-600" />
        <span className="text-xs font-bold text-neutral-600">
          Create a Project
        </span>
      </div>
    </div>

            </motion.div >
{/* //motion dev */}

            </div>





        </motion.div>}

        </AnimatePresence>

        </>
    )
}

export default CardHover