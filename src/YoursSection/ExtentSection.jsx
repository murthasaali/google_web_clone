import React, { useState, useEffect } from 'react';

function ExtentSection() {
  const [scrollHeight, setScrollHeight] = useState('70%');
  const [scrollWidth, setScrollWidth] = useState('60%');
  const [opacity, setOpacity] = useState(0.5); // Initial opacity

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = document.body.clientHeight - window.innerHeight;
      const scrollFraction = scrollPosition / maxScroll;

      // Set opacity to decrease when scrolling down
      const opacity = 1 - scrollFraction;
      
      // Set opacity
      setOpacity(opacity+0.8);

      const minHeight = '70%';
      const maxHeight = '70%';
      const minWidth = '10%';
      const maxWidth = '60%';
      const newHeight = `calc(${minHeight} + ${scrollFraction * (parseInt(maxHeight) - parseInt(minHeight))}%)`;
      const newWidth = `calc(${minWidth} + ${scrollFraction * (parseInt(maxWidth) - parseInt(minWidth))}%)`;
      setScrollHeight(newHeight);
      setScrollWidth(newWidth);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='w-full h-screen  flex  p-20  gap-10 relative '>
      <div className='  right-10 absolute bottom-20 z-40' style={{ height: scrollHeight, width: scrollWidth }}>
        <img src="https://www.google.com/chrome/static/images/dev-components/extensions-icon-2x.png" className="absolute shadow-lg backdrop-blur rounded-full h-28 top-2 left-2" alt="" style={{ opacity: opacity+0.4, transition: 'opacity 0.5s' }} />
        <img src='https://www.google.com/chrome/static/images/dev-components/extensions-shop-2x.png' className="absolute shadow-lg backdrop-blur rounded-full h-28 top-2 right-2" alt="" style={{ opacity: opacity, transition: 'opacity 0.5s' }} />
        <img src='https://www.google.com/chrome/static/images/dev-components/extensions-person-2x.png' className="absolute shadow-lg backdrop-blur rounded-full h-28 bottom-2 left-2" alt="" style={{ opacity: opacity, transition: 'opacity 0.5s' }} />
        <img src='https://www.google.com/chrome/static/images/dev-components/extensions-paint-2x.png' className="absolute shadow-lg backdrop-blur rounded-full h-28 bottom-2 right-2" alt="" style={{ opacity: opacity, transition: 'opacity 0.5s' }} />
        <img src='https://www.google.com/chrome/static/images/dev-components/extensions-video-2x.png' className="absolute shadow-lg backdrop-blur rounded-full h-28 top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2" alt="" style={{ opacity: opacity, transition: 'opacity 0.5s' }} />
      </div>
      <div className='w-[40%] h-full  rounded-3xl flex flex-col items-start justify-center gap-5 ' >
        <h1 className='w-[70%] font-bold text-[55px] leading-none'>Extend your experience</h1>
        <p className='text-2xl w-[100%] text-start font-normal text-stone-700'>Personalise your web browser with themes, dark mode and other options built just for you.</p>
        <button className='px-6 py-2 bg-blue-100 rounded-full text-xl font-semibold text-blue-400'>Explore your extentions</button>
      </div>
      <div className="w-[80%] h-full rounded-3xl flex flex-col justify-between p-10 relative">
        <img src="https://www.google.com/chrome/static/images/dev-components/extensions-ui-2x.png" className="w-full h-full" alt="" />
      </div>
    </div>
  );
}

export default ExtentSection;
