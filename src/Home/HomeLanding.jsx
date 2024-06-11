import React, { useEffect, useRef } from "react";
import HomeNavBar from "./HomeNavBar";
import HomeCarousal from "./HomeCarousal";
import Navbar from "../components/Navbar";

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
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="w-full h-fit flex justify-center text-gray-100 items-center flex-col gap-5"
      style={{
        backgroundImage:
          "url('https://uiuiui.in/uploads/posts/2022-11/2570582566-78fe7f823357080bbbb9cc25615dd928.webp')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundBlendMode: "darken",
        backgroundAttachment: "fixed", // Add this line to fix the background

      }}
    >
      <Navbar />
      <img
        src="https://www.google.com/chrome/static/images/chrome-logo-m100.svg"
        alt=""
        className="h-20 w-auto opacity-50"
      />
      <h1 className="md:text-[95px] text-[50px]  leading-none text-center font-bold w-[80%] md:w-[60%]">
        The browser <br />
        built to be yours
      </h1>
      <HomeNavBar top={"50px"} />
      <h2 className="text-2xl font-thin">
        Need the Chrome installer?{" "}
        <span className="text-blue-600">Download here</span>
      </h2>
      <div className="w-full h-[500px] overflow-x-hidden" ref={carouselRef}>
        <HomeCarousal />
      </div>
    </div>
  );
}

export default HomeLanding;
