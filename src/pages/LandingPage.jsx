import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import HomeLanding from '../Home/HomeLanding';
import UpdateSection from '../update/UpdateSection';
import YoursSection from '../YoursSection/YoursSection';
import SafeSection from '../Safe/SafeSection';
import FastSection from '../Fast/FastSection';
import HomeNavBar from '../Home/HomeNavBar';
import ExtentSection from '../YoursSection/ExtentSection';

function LandingPage() {
  const [showNavBar, setShowNavBar] = useState(false);

  const handleScroll = () => {
    const fastSection = document.getElementById('fast-section');
    const fastSectionTop = fastSection.getBoundingClientRect().top;

    if (fastSectionTop <= 0) {
      setShowNavBar(true);
    } else {
      setShowNavBar(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='w-full h-fit flex flex-col relative overflow-hidden'>
      <HomeLanding />
      {/* <SafeSection /> */}
      {showNavBar && (
        <div className='w-full flex justify-center items-center fixed top-10 z-[1000]'>
          <HomeNavBar />
        </div>
      )}
      <div id='fast-section'>
        <FastSection />
      <UpdateSection />
      </div>
      {/* <YoursCarousal/> */}
      <YoursSection />
  <ExtentSection/>
      {/* <HomeLanding /> */}
      {/* <YoursSection /> */}
    </div>
  );
}

export default LandingPage;
