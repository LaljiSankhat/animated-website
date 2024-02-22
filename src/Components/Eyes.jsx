import React, { useEffect, useState } from "react";

const Eyes = () => {
    const [rotate, setrotate] = useState(0);

    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            console.log(e.clientX, e.clientY);
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;

            var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setrotate(angle - 180);
        })
    })


  return (
    <div className="eyes overflow-hidden h-screen w-full ">
      <div data-scroll data-scroll-speed="-.7" className='relative w-full h-full bg-cover bg-center bg-[url("./public/Top-View.jpg")] '>
        <div className="absolute flex gap-10  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <div className="w-[14vw] h-[14vw] flex justify-center items-center rounded-full bg-zinc-100">
            <div className="w-3/5 h-3/5 relative rounded-full bg-black">
              <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-5">
                <div className="w-[1.2vw]  h-[1.2vw] rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
          <div className="w-[14vw] h-[14vw] flex justify-center items-center rounded-full bg-zinc-100">
            <div className="w-3/5 h-3/5 relative rounded-full bg-black">
              <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-5">
                <div className="w-[1.2vw]  h-[1.2vw] rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
