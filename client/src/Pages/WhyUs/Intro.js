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
    <div className="relative bg-slate-50 w-full h-[550px] overflow-hidden">
      {/* Split background for mobile */}
      <div className="md:hidden w-full h-[550px]">
        <div className="w-full h-1/2 bg-mainBlue" />
        <div className="w-full h-1/2 bg-white" />
      </div>

      {/* Animated card */}
      <div
        className="animated-card absolute md:top-1/3 top-[20%] left-0 md:mx-0 mx-2 md:left-24 max-w-xl md:backdrop-blur-sm 
                   md:bg-opacity-50 bg-redPrimary p-4 md:p-6 lg:p-8 
                   shadow-lg z-10"
        style={{ clipPath: "inset(0 0 0 0)" }}
      >
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-3 lg:mb-4 text-gray-800">
          Why Choose Us?
        </h1>
        <p className="text-md mb-4 md:mb-5 lg:mb-6 text-justify text-gray-600">
          This is where aspiration meets innovation, candor fuels collaboration
          and impossible surrenders to teamwork. We champion the bold to achieve
          the extraordinary. This is where aspiration meets innovation, candor
          fuels collaboration and impossible surrenders to teamwork. We champion
          the bold to achieve the extraordinary.
        </p>
      </div>

      {/* SVG with animated lines - hidden on mobile */}
      <svg
        viewBox="0 0 1920 1080"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-full hidden md:block"
      >
        {/* Horizontal lines */}
        <path
          d="M0 200 L1920 200"
          className="fill-none stroke-orangePrimary stroke-[2]"
        />
        <path
          d="M0 400 L1920 400"
          className="fill-none stroke-greenPrimary stroke-[2]"
        />
        <path
          d="M0 600 L1920 600"
          className="fill-none stroke-greenSecondary stroke-[2]"
        />
        <path
          d="M0 800 L1920 800"
          className="fill-none stroke-orangePrimary stroke-[2]"
        />

        {/* Vertical lines */}
        <path
          d="M200 0 L200 1080"
          className="fill-none stroke-redPrimary stroke-[2]"
        />
        <path
          d="M400 0 L400 1080"
          className="fill-none stroke-greenTertiary stroke-[2]"
        />
        <path
          d="M600 0 L600 1080"
          className="fill-none stroke-orangeSecondary stroke-[2]"
        />
        <path
          d="M800 0 L800 1080"
          className="fill-none stroke-greenTertiary stroke-[2]"
        />
      </svg>
    </div>
  );
};

export default Intro;
