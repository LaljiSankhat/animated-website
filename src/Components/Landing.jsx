import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion";

const Landing = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".2" className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-40 px-20">
        {/* font : Test Founders Grotesk X-Condb SmBd*/}
        {["we create", "Eye-opening", "presentations"].map((item, index) => (
          <div className="masker ">
            <div className="flex w-fit items-center">
              {index === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "9vw" }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 1}}
                  className="w-[9vw] h-[5vw] mr-[.5vw] bg-red-500 rounded-md bg-[url('./public/content-image01.jpg')] bg-cover"
                ></motion.div>
              )}
              <h1 className="uppercase font-['jetbrains_mono'] text-[7vw] leading-[6.8vw] tracking-[-.1em] font-semibold">
                {item}
              </h1>
            </div>
          </div>
        ))}
        {/* <div className="masker ">
          <h1 className="uppercase font-['jetbrains_mono'] text-8xl leading-[5.5vw] tracking-tighter font-semibold">
            WE CREATE
          </h1>
        </div>
        <div className="masker ">
          <h1 className="uppercase font-['jetbrains_mono'] text-8xl leading-[5.5vw] tracking-tighter font-semibold">
            Eye Opening
          </h1>
        </div>
        <div className="masker ">
          <h1 className="uppercase font-['jetbrains_mono'] text-8xl leading-[5.5vw] tracking-tighter font-semibold">
            Presentations
          </h1>
        </div> */}
      </div>

      <div className="border-t-[1px] border-zinc-800 mt-24 flex justify-between px-20 py-5 items-center">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-md font-light tracking-tight leading-none">
            {item}
          </p>
        ))}
        <div className="start flex justify-center gap-1">
          <div className="uppercase px-5 py-1 border-[1px] font-light rounded-full border-zinc-600">
            Start the project
          </div>
          <div className="px-2 py-2 rounded-full  border-zinc-600 border-[1px]">
            <MdOutlineArrowOutward />
            {/* <GoArrowUpRight /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
