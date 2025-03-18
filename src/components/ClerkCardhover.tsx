import {  BookOpen, Lock,  MessageSquareDot, Phone,  Tv2 } from "lucide-react"
import {motion} from "motion/react"


const ClerkCardhover = () => {

const hoverVariesntsMsg={
  initial:{
    opacity:0,
    y:-20,
  },
  hover:{
    opacity:1,
    y:50,
  }
}



const hoverVariesntsPhone={


  initial:{
    opacity:1,     
       filter:"blur(10px)"
  },
  hover:{
    opacity:1,
    translateY:-35,
  },


  animate:{
      opacity:1,
      scale:1,
      filter:"blur(0px)"
  },
  




  
}


const hoverVariesntsLock={
  initial:{
    backgroundColor: "#212126",
  },
  hover:{
    backgroundColor: "#00ffff" 
  },
}

const hoverVariesntMsgOne={
  initial:{
    backgroundColor: "#b1b1b1",
  },
  hover:{
    backgroundColor: "#00ffff" 
  },
}



  return (
    <>
    <motion.div
    initial="initial"

    whileHover="hover"
    animate="animate"



     className="bg-[#131316] h-[12rem] w-[14.5rem]  border-[1px] border-[#282833]   rounded-2xl relative flex flex-col ">
    <style> {`.clip-path {clip-path: inset(-20px 0px 0px 0px);}`}</style>

<motion.div 




className="upper bg-[#212126] px-5 clip-path h-[9rem] mt-0  rounded-2xl">
  

  <motion.div 


variants={hoverVariesntsMsg}
transition={{
  duration:0.4,
    ease:"easeInOut"
   }}
    

    className="flex absolute top-0 left-0 bg-[#626263] text-white items-center justify-around p-[4px]
     shadow-md w-44 rounded-md  -mt-10 m z-50  ml-7">
      <div className="msgbox flex items-center bg-[#212126] p-[6px] rounded-md">
        <div className="bg-cyan-500 rounded-full p-1 flex items-center justify-center">
          <MessageSquareDot className="w-3 h-3 text-white" />
        </div>
      </div>
      <div className="text flex flex-col items-start justify-center text-center text-[8px]">
        <h4 className="text-cyan-500 font-semibold text-[10px]">Security Alert</h4>
        <p className="text-[8px] text-white">Your security passcode is 789452....</p>
      </div>
    </motion.div>

    <motion.div
   transition={{
  duration:0.3,
    ease:"easeInOut"
   }}
    

 
  
  

variants={hoverVariesntsPhone}


    
    className="phone h-[20rem] bg-[#242529] mt-4 border-[#2e2e35]  border-4 flex items-center  flex-col
    rounded-4xl z-50
    ">


<motion.div


variants={hoverVariesntsLock}
       

className="lock mt-2  p-1 rounded-full">
        <Lock className="h-3 w-3 text-neutral-400   "/>
</motion.div>

<div className="othericons flex items-center justify-center mt-4 text-neutral-400 gap-2">

       <div className="flex flex-col items-center space-y-1">
  <span className="p-2 bg-[#33353b] rounded-xl flex items-center justify-center">
    <Phone fill="#212126" className="w-5 h-5" />
  </span>
  <span className="text-[7px] text-white">Phone</span>
</div>



<div className="flex flex-col items-center space-y-1 relative">

    <motion.div 
    variants={hoverVariesntMsgOne}
    transition={{ duration: 0.4 }}
    className="absolute top-0 -right-1 p-1 h-3  w-3 rounded-full flex items-center justify-center"><span className=" text-neutral-100 text-[8px]">1</span></motion.div>

  <span className="p-2 bg-[#33353b] rounded-xl flex items-center justify-center">
    <MessageSquareDot fill="#212126" className="w-5 h-5" />
  </span>
  <span className="text-[7px] text-white">SMS</span>
</div>

    
<div className="flex flex-col items-center space-y-1">
  <span className="p-2 bg-[#2e3035] rounded-xl flex items-center justify-center">
    <BookOpen  fill="#212126" className="w-5 h-5" />
  </span>
  <span className="text-[7px] text-white">Books</span>
</div>

<div className="flex flex-col items-center space-y-1">
  <span className="p-2 bg-[#33353b] rounded-xl flex items-center justify-center">
    <Tv2 fill="#212126" className="w-5 h-5" />
  </span>
  <span className="text-[7px] text-white">TV</span>
</div>

    
</div>

<div className="forbox flex items-center justify-center gap-5 mt-3">
     <div className="box1 h-6 w-6 bg-[#33353b] rounded-sm "></div>
     <div className="box2 h-6 w-6 bg-[#33353b] rounded-sm "></div>
     <div className="box3 h-6 w-6 bg-[#33353b] rounded-sm "></div>
     <div className="box4 h-6 w-6 bg-[#33353b] rounded-sm "></div>
</div>


    </motion.div>

</motion.div>

<div className="lover absolute bottom-4 px-3">
    <h2 className="">        
    <span className="text-white text-[10px]">Email and SMS one-time passcodes</span>
    </h2>

    <p className="text-neutral-500 text-[8px] mt-[5px]">Fast and reliable one-time passcode delivery with built-in brute force prevention.</p>
</div>

    </motion.div >
    </>
  )
}

export default ClerkCardhover