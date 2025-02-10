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
    <div className="relative bg-slate-50 w-full md:h-[550px] h-[350px]  ">
      {/* Card with responsive positioning */}
      <div
        className="animated-card absolute md:top-44 top-[50%] md:translate-y-[0%] md:mx-auto mx-4 md:left-24 left-0 max-w-xl md:backdrop-blur-md md:bg-opacity-50 bg-greenTertiary p-4 md:p-6 lg:p-8 border-t-4 md:border-t-0 md:border-l-4 border-mainYellow shadow-lg"
        style={{ clipPath: "inset(0 0 0 0)" }}
      >
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-3 lg:mb-4 text-gray-800">
          Consulting Services
        </h1>
        <p className="text-md text-justify mb-4 md:mb-5 lg:mb-6 text-gray-600">
          This is where aspiration meets innovation, candor fuels collaboration
          and impossible surrenders to teamwork. We champion the bold to achieve
          the extraordinary. This is where aspiration meets innovation, candor
          fuels collaboration and impossible surrenders to teamwork. We champion
          the bold to achieve the extraordinary.
        </p>
      </div>

      {/* SVG with animated lines - Hidden on mobile */}
      <svg
        viewBox="0 0 1920 1080"
        className="w-[100vw] h-full hidden md:block"
        preserveAspectRatio="none"
      >
        {/* First (top) line */}
        <path
          d="M0 600 
             L480 600
             Q520 600 520 560
             L520 300
             Q520 260 560 260
             L960 260
             Q1000 260 1000 300
             L1000 700
             Q1000 740 1040 740
             L1440 740
             Q1480 740 1480 700
             L1480 100
             Q1480 60 1520 60
             L1920 60"
          className="fill-none stroke-[#ff5733] stroke-[2]"
        />

        {/* Second (middle) line */}
        <path
          d="M0 700 
             L480 700
             Q520 700 520 660
             L520 400
             Q520 360 560 360
             L960 360
             Q1000 360 1000 400
             L1000 800
             Q1000 840 1040 840
             L1440 840
             Q1480 840 1480 800
             L1480 200
             Q1480 160 1520 160
             L1920 160"
          className="fill-none stroke-[#ff5733] stroke-[2]"
        />

        {/* Third (bottom) line */}
        <path
          d="M0 800 
          L480 800
          Q520 800 520 760
          L520 500
          Q520 460 560 460
          L960 460
          Q1000 460 1000 500
          L1000 900
          Q1000 940 1040 940
          L1440 940
          Q1480 940 1480 900
          L1480 300
          Q1480 260 1520 260
          L1920 260"
          className="fill-none stroke-[#ff5733] stroke-[2]"
        />
      </svg>
    </div>
  );
};

export default Intro;
