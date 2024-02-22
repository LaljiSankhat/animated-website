import React from "react";

const Cards = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 flex gap-5 items-center px-12 justify-center">
      <div className="cardcontainer w-1/2 h-[58vh]">
        <div className="card relative w-full h-full rounded-xl bg-[#004D43] flex items-center justify-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute left-10 bottom-10 px-5 py-1 rounded-full border-2 border-[#CDEA68] text-[#CDEA68]">
            ©2019-2022
          </button>
        </div>
      </div>
      <div className="cardcontainer w-1/2 h-[58vh] flex gap-5">
        <div className="card relative flex items-center justify-center w-1/2 h-full rounded-xl bg-[#212121]">
          <img
            className=""
            src="clutch.svg"
            alt=""
          />
          <button className="absolute left-6 bottom-10 px-5 py-1 rounded-full border-2 border-white text-white">
            RATING 5.0 ON CLUTCH
          </button>
        </div>
        <div className="card relative flex items-center justify-center w-1/2 h-full rounded-xl bg-[#212121]">
          <img
            className="h-[7vw] w-[7vw]"
            src="logo003.png"
            alt=""
          />
          <button className="absolute left-6 bottom-10 px-5 py-1 rounded-full border-2 border-white text-white">
            BUSINESS BOOTCAMP ALUMNI
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
