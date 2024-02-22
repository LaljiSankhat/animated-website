import { motion } from "framer-motion";
import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { Power4 } from "gsap/all";

const Featured = () => {
  const [isHovering, setisHovering] = useState(false);
  const [isHovering2, setisHovering2] = useState(false);
  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-500 pb-10 mb-10">
        <h1 className='text-[3.5vw] font-["Neue_Montreal"] tracking-wide'>
          Featured projects
        </h1>
      </div>
      <div className="cards w-full flex gap-5 px-10 py-2">
        <div
          onMouseEnter={() => setisHovering(true)}
          onMouseLeave={() => setisHovering(false)}
          className={`relative w-1/2 ${isHovering && "scale-98"}`}
        >
          <h1 className="absolute  flex z-[9] font-['Neue_Montreal'] overflow-hidden leading-none tracking-tighter left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] text-[6vw] font-bold">
            {"FYDE".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={isHovering ? { y: 0 } : { y: "100%" }}
                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                className="inline-block "
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <div className="text flex items-center gap-2 pb-3">
            <GoDotFill />
            <h2>FYDE</h2>
          </div>
          <div className="card  h-[85vh] border-2 border-zinc-600 rounded-[.7vw] bg-cover  bg-[url('./public/Fyde.png')]"></div>
        </div>
        <div
          onMouseEnter={() => setisHovering2(true)}
          onMouseLeave={() => setisHovering2(false)}
          className="relative w-1/2"
        >
          <h1 className="absolute z-[9] flex overflow-hidden font-['Neue_Montreal'] leading-none tracking-tighter right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] text-[6vw] font-bold">
            {"VISE".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={isHovering2 ? { y: 0 } : { y: "100%" }}
                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                className="inline-block "
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <div className="text flex items-center gap-2 pb-3">
            <GoDotFill />
            <h2>VISE</h2>
          </div>
          <div className="card  h-[85vh] border-2 border-zinc-600 rounded-[.7vw] bg-[url('./public/Vise.jpg')]"></div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
