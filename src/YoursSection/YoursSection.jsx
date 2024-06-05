import React, { useState, useEffect } from 'react';
import YoursCarousal from './YoursCarousal';
import ExtentSection from './ExtentSection';

function YoursSection() {
  const [scaleText, setScaleText] = useState(0.2); // Initial scale of 1 (full size) for text
  const [scaleImage, setScaleImage] = useState(1); // Initial scale of 1 for image
  const [scrollPosition, setScrollPosition] = useState(0); // Scroll position for carousel

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY; // Get current scroll position
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight; // Max scroll distance

      // Calculate a smooth scale factor for text based on scroll position (0 to 1)
      const newScaleText = Math.max(0.0, 1 - scrollY / maxScroll);

      // Calculate a smooth scale factor for image based on scroll position (1 to 2)
      const newScaleImage = Math.min(2, 1 + scrollY / maxScroll);

      setScaleText(newScaleText);
      setScaleImage(newScaleImage);
      setScrollPosition(scrollY); // Update scroll position for carousel
    };

    window.addEventListener('scroll', onScroll);

    // Cleanup function to remove event listener on component unmount
    return () => window.removeEventListener('scroll', onScroll);
  }, []); // Empty dependency array for effect to run only once on mount

  return (
    <>
      <div className="w-full flex justify-start items-center flex-col gap-5 h-auto mb-10 relative">
        <h1
          className={`md:text-[100px] text-[50px] pb-96 text-gray-800 text-opacity-90 leading-tight text-center font-bold w-[80%] md:w-[80%] mx-auto`}
          style={{ transform: `scale(${scaleText * 1.2})`, zIndex: 2, position: 'relative' }}
        >
          <div className="flex justify-center items-center gap-3 w-full">
            Make it
            <button className="px-4 rounded-full text-red-500 text-opacity-70 flex justify-center items-center text-center">
              yours
            </button>
            and
          </div>
          <div>take it with you</div>
        </h1>
        <div className="absolute inset-0 flex justify-center items-center z-[999] ">
          <img
            src="https://www.google.com/chrome/static/images/v2/yours-take-over/theme-arches-2x.webp"
            alt=""
            className="w-[40%] mt-96 rounded-3xl"
            style={{ transform: `scale(${scaleImage/.8})` }}
          />
        </div>
      </div>
      <div className='w-full h-[800px]  flex justify-center items-center mt-96 '>
      <div className='w-[80%] h-[80%]  overflow-y-auto relative scroll-container'>
  <div className='sticky top-0 left-0 w-full h-full z-10' style={{backgroundImage:'url("https://www.google.com/chrome/static/images/v2/yours-take-over/theme-ui-1-2x.webp")',backgroundSize:"cover",}}> {/* Adjust z-index if needed */}
  </div>
  <div className='absolute top-full left-0 w-full h-full z-50' style={{backgroundImage:'url("https://www.google.com/chrome/static/images/v2/yours-take-over/theme-ui-2-2x.webp")',backgroundSize:"cover",}}> {/* Adjust z-index if needed */}
  </div>
</div>

    </div>
  <YoursCarousal/>
  {/* <ExtentSection/> */}
    </>
  );
}

export default YoursSection;
