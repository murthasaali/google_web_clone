import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import HomeLanding from '../Home/HomeLanding';
import UpdateSection from '../update/UpdateSection';
import YoursSection from '../YoursSection/YoursSection';
import SafeSection from '../Safe/SafeSection';
import FastSection from '../Fast/FastSection';
import HomeNavBar from '../Home/HomeNavBar';
import ExtentSection from '../YoursSection/ExtentSection';
import CaseStudy from '../components/Arju';
import YoursCarousal from '../YoursSection/YoursCarousal';
import About from '../components/Arju';

function LandingPage() {
  const [showNavBar, setShowNavBar] = useState(false);
  const bgImages = [
    "https://www.blendernation.com/wp-content/uploads/2022/05/thumb-scaled.jpg",
    "https://uiuiui.in/uploads/posts/2022-11/2570582566-78fe7f823357080bbbb9cc25615dd928.webp"
  ];
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);

  const handleScroll = () => {
    const fastSection = document.getElementById('fast-section');
    if (fastSection) {
      const fastSectionTop = fastSection.getBoundingClientRect().top;
      if (fastSectionTop <= 0) {
        setShowNavBar(true);
      } else {
        setShowNavBar(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(0.9); // Start fading out
      setTimeout(() => {
        setCurrentBgIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
        setOpacity(1); // Start fading in
      }, 500); // Duration of fade out
    }, 2000); // Interval between background changes

    return () => clearInterval(interval);
  }, [bgImages.length]);

  return (
    <div
      className="w-full h-fit relative overflow-hidden transition-opacity duration-1000 ease-in-out"
      style={{
        backgroundImage: `url('https://uiuiui.in/uploads/posts/2022-11/2570582566-78fe7f823357080bbbb9cc25615dd928.webp')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundBlendMode: "darken",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="backdrop-blur-xl z-[10] relative"      style={{
        backgroundImage: `url('https://uiuiui.in/uploads/posts/2022-11/2570582566-78fe7f823357080bbbb9cc25615dd928.webp')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundBlendMode: "darken",
        backgroundAttachment: "fixed",
      }}>
        <HomeLanding />
        {showNavBar && (
          <div className="w-full flex justify-center items-center fixed top-10 z-[1000]">
            <HomeNavBar />
          </div>
        )}
        <div id="fast-section" className='backdrop-blur-xl'>
          <FastSection />
          <UpdateSection />
        <ExtentSection />
        <YoursCarousal />
        <CaseStudy/>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
