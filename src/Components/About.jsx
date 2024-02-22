import { motion } from "framer-motion";
import React from "react";

const About = () => {
  return (
    <div data-scroll data-scroll-speed="-.1" data-scroll-section className="w-full p-20 bg-[#CDEA68] rounded-t-3xl text-black">
      <h1 className="text font-['Neue_Montreal'] text-[3.4vw] leading-[3.2vw] w-[85%]">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className="w-full flex gpa-5 border-t-[2px] pt-5 mt-20 border-[#A5BC57]">
        <div className="w-1/2 ">
          <h1 className="text-6xl tracking-tighter leading-none">Our approach:</h1>
          <button className="uppercase flex gap-10 items-center px-7 py-4 mt-5 font-['Neue_Montreal'] bg-zinc-900 text-white rounded-full">
            Read More
            <div className="w-2 h-2 rounded-full bg-white"></div>
          </button>
        </div>
        <div className="w-1/2 h-[72vh] rounded-[1vw] bg-[url('./public/Homepage-Photo.jpg')] bg-cover bg-red-600"></div>
      </div>
    </div>
  );
};

export default About;
