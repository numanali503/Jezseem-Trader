import React, { useEffect } from "react";
import { gsap } from "gsap";

const Intro = () => {
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const animateWaves = () => {
      const paths = document.querySelectorAll("path");

      paths.forEach((path) => {
        const length = path.getTotalLength();
        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });
      });

      gsap.to(paths, {
        strokeDashoffset: 0,
        duration: 2,
        ease: "power1.inOut",
        stagger: {
          each: 0.3,
          from: "start",
        },
      });
    };

    if (mediaQuery.matches) {
      animateWaves();
    }

    // Card animation
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
    <div className="relative w-full h-[550px] overflow-hidden">
      {/* Split background for mobile */}
      <div className="md:hidden w-full h-[550px]">
        <div className="w-full h-1/2 bg-mainBlue" />
        <div className="w-full h-1/2 bg-white" />
      </div>

      {/* Animated card */}
      <div
        className="animated-card absolute md:top-1/3 top-[20%] left-0 md:mx-0 mx-2 md:left-24 max-w-xl md:backdrop-blur-md 
                   md:bg-opacity-50 bg-greenTertiary p-4 md:p-6 lg:p-8 
                   shadow-lg z-10"
        style={{ clipPath: "inset(0 0 0 0)" }}
      >
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-3 lg:mb-4 text-gray-800">
          About Jezseem Traders
        </h1>
        <p className="text-md mb-4 md:mb-5 lg:mb-6 text-justify text-gray-6 00">
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
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          {/* First wave */}
          <path
            d="M0 500 
            C300 400 600 600 900 500
            C1200 400 1500 600 1920 500"
            className="fill-none stroke-redPrimary stroke-[3]"
          />

          {/* Second wave */}
          <path
            d="M0 600 
            C300 500 600 700 900 600
            C1200 500 1500 700 1920 600"
            className="fill-none stroke-greenSecondary stroke-[3]"
          />

          {/* Third wave */}
          <path
            d="M0 700 
            C300 600 600 800 900 700
            C1200 600 1500 800 1920 700"
            className="fill-none stroke-orangePrimary stroke-[3]"
          />
        </svg>
      </div>
    </div>
  );
};

export default Intro;
