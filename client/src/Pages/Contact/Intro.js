import React, { useEffect } from "react";
import { gsap } from "gsap";

const Intro = () => {
  useEffect(() => {
    const paths = document.querySelectorAll("path");

    // Set up line animations
    paths.forEach((path) => {
      const length = path.getTotalLength();

      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });
    });

    // Animate the lines
    gsap.to(paths, {
      strokeDashoffset: 0,
      duration: 2,
      ease: "power1.inOut",
      stagger: {
        each: 0.3,
        from: "start",
      },
    });

    // Animate the card reveal
    gsap.fromTo(
      ".animated-card",
      {
        x: -300,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 2,
        ease: "power1.inOut",
        delay: 0.5,
      }
    );
  }, []);
  return (
    <div className="relative w-full lg:h-[550px] h-[350px]  overflow-hidden">
      {/* Split background for mobile */}
      <div className="md:hidden w-full h-[550px]">
        <div className="w-full h-1/2 bg-mainBlue" />
        <div className="w-full h-1/2 bg-white" />
      </div>

      {/* Animated card */}
      <div
        className="animated-card absolute md:top-1/3 top-[20%] left-0 md:mx-0 mx-2 md:left-24 max-w-xl md:backdrop-blur-md 
                   md:bg-opacity-50 bg-orangeSecondary p-4 md:p-6 lg:p-8 md:border-l-4 border-t-4 md:border-t-0  border-orangeSecondary 
                   shadow-lg z-10"
        style={{ clipPath: "inset(0 0 0 0)" }}
      >
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-3 lg:mb-4 text-gray-800">
          How can we help you?
        </h1>
        <p className="text-md mb-4 md:mb-5 lg:mb-6 text-justify text-gray-600">
          This is where aspiration meets innovation, candor fuels collaboration
          and impossible surrenders to teamwork. We champion the bold to achieve
          the extraordinary. This is where aspiration meets innovation, candor
          fuels collaboration and impossible surrenders to teamwork. We champion
          the bold to achieve the extraordinary.
        </p>
      </div>

      {/* SVG with animated lines - Only visible on md screens and above */}
      <div className="hidden md:block absolute inset-0 bg-slate-50">
        <svg
          viewBox="0 0 1920 1080"
          className="w-[100vw] h-[100vh] hidden md:block"
          preserveAspectRatio="none"
        >
          {/* First zigzag line */}
          <path
            d="M0 500 
          L200 600
          L400 500
          L600 600
          L800 500
          L1000 600
          L1200 500
          L1400 600
          L1600 500
          L1800 600
          L1920 500"
            className="fill-none stroke-[#ff5733] stroke-[2]"
          />

          {/* Second zigzag line */}
          <path
            d="M0 600 
          L200 700
          L400 600
          L600 700
          L800 600
          L1000 700
          L1200 600
          L1400 700
          L1600 600
          L1800 700
          L1920 600"
            className="fill-none stroke-[#ff5733] stroke-[2]"
          />

          {/* Third zigzag line */}
          <path
            d="M0 700 
          L200 800
          L400 700
          L600 800
          L800 700
          L1000 800
          L1200 700
          L1400 800
          L1600 700
          L1800 800
          L1920 700"
            className="fill-none stroke-[#ff5733] stroke-[2]"
          />
        </svg>
      </div>
    </div>
  );
};

export default Intro;
