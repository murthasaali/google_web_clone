import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

function FastSection() {
  const controls = useAnimation();
  const divRef = useRef(null);
  const initialWidth = 484; // Initial width in pixels (96 * 4 for tailwind w-96)
  const minWidth = 200; // Minimum width of the div
  const maxScroll = 500; // Maximum scroll value to affect the width
  const [isFixed, setIsFixed] = useState(false);
  const [marginTop, setMarginTop] = useState(initialWidth / 20); // Initial marginTop

  const handleScroll = () => {
    if (divRef.current) {
      const { top } = divRef.current.getBoundingClientRect();
      const scrollY = window.scrollY;
      const elementTop = top + scrollY; // Element's top position relative to the document

      if (scrollY <= elementTop && scrollY <= elementTop + maxScroll) {
        const newWidth =
          initialWidth -
          ((initialWidth - minWidth) * (scrollY - elementTop)) / maxScroll;
        controls.start({ width: Math.max(newWidth, minWidth) });

        // Calculate and set the new marginTop
        const newMarginTop =
          initialWidth / 20 -
          ((initialWidth / 20) * (scrollY - elementTop)) / maxScroll;
        setMarginTop(Math.max(newMarginTop, 0)); // Ensure marginTop doesn't go below 0

        setIsFixed(newWidth <= 400); // Set isFixed based on the width condition
      } else if (scrollY > elementTop + maxScroll) {
        controls.start({ width: minWidth });
        setMarginTop(0); // Set the minimum marginTop when scrolled past maxScroll
        setIsFixed(false);
      } else {
        controls.start({ width: initialWidth });
        setMarginTop(initialWidth / 20); // Reset the marginTop when not in the scroll range
        setIsFixed(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full flex justify-start h-fit items-center flex-col relative px-10  overflow-hidden">
      <h1
        style={{
          transition: "top 0.3s ease", // Adding transition property
        }}
        className={`md:text-[60px] h-fit text-[50px] text-gray-800 my-10 text-opacity-90 leading-tight bg-white text-center font-bold w-[80%] md:w-[80%] mx-auto`}
      >
        <div className="flex justify-center items-center gap-3 w-full px">
          the
          <button className="px-4 rounded-full text-green-500 text-opacity-70 font-semibold flex justify-center items-center text-center">
            Fast
          </button>
          Way to do
        </div>
        <div>things in online</div>
      </h1>
      <div className="w-full h-screen flex justify-end flex-col p-10">
        <div className="w-full h-full  flex gap-3 p-3">
          <div className="flex-none bg-stone-600 bg-opacity-5 rounded-3xl " style={{ flexBasis: "80%" }}>
            <div className="w-full h-full   flex justify-end flex-col relative">
              <div className="text3xl w-full  font-bold absolute top-20 left-10 flex justify-start items-center gap-9">
                <h1 className="text-[35px] font-bold leading-none">
                  Prioritise <br /> performance
                </h1>
                <div className="flex flex-col gap-5 w-[300px]">
                  <p className="font-thin">
                    Chrome is built for performance. Optimise your experience
                    with features like Energy Saver and Memory Saver.
                  </p>
                  <a className="text-blue-400 bg-opacity-25 px-0 font-normal">
                    lern more abot battery and memory
                  </a>
                </div>
              </div>
              <motion.div className="flex justify-start gap-4 p-4 rounded-3xl w-fit  relative flex-col">
                {/* <div style={{height:initialWidth}} className='' >hello</div> */}
                <motion.img
                  animate={controls}
              
                  src="https://www.google.com/chrome/static/images/dev-components/chrome-gallery-3-2x.webp"
                  className="w-full h-full object-contain"
                  alt=""
                  ref={divRef}
                />
                {/* <img src="" className='w-auto h-full object-cover' alt="" /> */}
              </motion.div>
            </div>
          </div>
          <div className="flex-none" style={{ flexBasis: "80%" }}>
            <div className="w-full h-full   flex justify-end flex-col relative">
              <div className="text3xl w-full  font-bold absolute top-20 left-10 flex justify-start items-center gap-9">
                <h1 className="text-[35px] font-bold leading-none">
                  Prioritise <br /> performance
                </h1>
                <div className="flex flex-col gap-5 w-[300px]">
                  <p className="font-thin">
                    Chrome is built for performance. Optimise your experience
                    with features like Energy Saver and Memory Saver.
                  </p>
                  <a className="text-blue-400 bg-opacity-25 px-0 font-normal">
                    lern more abot battery and memory
                  </a>
                </div>
              </div>
              <motion.div className="flex justify-start gap-4 p-4 rounded-3xl w-fit border relative flex-col">
                {/* <div style={{height:initialWidth}} className='' >hello</div> */}
                <motion.img
                  animate={controls}
                  transition={{ duration: 0.3 }}
                  autoPlay
                  src="https://www.google.com/chrome/static/images/dev-components/chrome-gallery-5-2x.webp"
                  className="w-full h-full object-contain"
                  alt=""
                  ref={divRef}
                />
                {/* <img src="" className='w-auto h-full object-cover' alt="" /> */}
              </motion.div>
            </div>
          </div>
        
        </div>

        <div className="w-full h-fit flex p-3 gap-4">
          <button className="p-4 text-3xl bg-stone-100  hover:text-blue-400 font-bold transition-all duration-300 px-6 text-stone-600 rounded-full">
            {"<"}
          </button>
          <button className="p-4 text-3xl bg-stone-100  hover:text-blue-400 font-bold transition-all duration-300 px-6 text-stone-600 rounded-full">
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default FastSection;
