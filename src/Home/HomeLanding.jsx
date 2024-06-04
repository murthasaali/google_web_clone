import React, { useEffect, useRef } from 'react';
import HomeNavBar from './HomeNavBar';
import HomeCarousal from './HomeCarousal';

function HomeLanding() {
  const carouselRef = useRef(null);


  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollTop = window.scrollY;
      const scrollAmount = scrollTop * 0.5; // Adjust the multiplier as needed
      carouselRef.current.scrollLeft = scrollAmount;
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className='w-full h-fit flex justify-center items-center flex-col p-10 gap-5'>
        <img src="https://www.google.com/chrome/static/images/chrome-logo-m100.svg" alt="" className='h-20 w-auto' />
        <h1 className='md:text-[95px] text-[50px] text-gray-800 leading-none text-center font-bold w-[80%] md:w-[60%]'>
          The browser <br />
          built to be yours
        </h1>
        <HomeNavBar />
        <h2 className='text-2xl font-thin'>Need the Chrome installer? <span className='text-blue-600'>Download here</span></h2>
      </div>
      <div className='w-full h-[500px] overflow-x-hidden' ref={carouselRef}>
        <HomeCarousal />
      </div>
    </>
  );
}

export default HomeLanding;
