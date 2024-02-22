
import { motion } from "framer-motion";
import React from "react";

const Marquee = () => {
  return (
    //h-[65vh]
    <div data-scroll  data-scroll-speed=".1" className="w-full py-10 rounded-t-[1vw] bg-[#004D43]">
      <div className="text border-t-2 border-b-2  mt-12 border-zinc-500 flex whitespace-nowrap overflow-hidden">
        <motion.h1
          initial={{x: 0}}
          animate={{x: "-100%"}}
          transition={{ease: "linear",repeat: Infinity, duration: 10 }}
          className='text-[22vw] -mt-[3vw]  uppercase font-["Familjen Grotesk"] tracking-[-1.5vw] pr-10 leading-none mb-1 font-semibold'
        >
          We are Ochi
        </motion.h1>
        <motion.h1
          initial={{x: 0}}
          animate={{x: "-100%"}}
          transition={{ease: "linear",repeat: Infinity , duration: 10 }}
          className='text-[22vw] -mt-[3vw]  uppercase font-["Familjen Grotesk"] tracking-[-1.5vw] pr-10 leading-none mb-1 font-semibold'
        >
          We are Ochi
        </motion.h1>
        
      </div>
    </div>
  );
};

export default Marquee;
