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
        className="animated-card absolute md:top-44 top-[50%] md:translate-y-[0%] md:mx-auto mx-4 md:left-24 left-0 max-w-xl md:backdrop-blur-md md:bg-opacity-50 bg-orangeSecondary p-4 md:p-6 lg:p-8 border-t-4 md:border-t-0 md:border-l-4 border-mainYellow shadow-lg"
        style={{ clipPath: "inset(0 0 0 0)" }}
      >
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-3 lg:mb-4 text-gray-800">
          Industries Served
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
        {/* First line */}
        <path
          d="M0 400 
             L400 400
             Q440 400 440 440
             L440 600
             Q440 640 480 640
             L900 640
             Q940 640 940 600
             L940 200
             Q940 160 980 160
             L1400 160
             Q1440 160 1440 200
             L1440 800
             Q1440 840 1480 840
             L1920 840"
          className="fill-none stroke-greenPrimary stroke-[2]"
        />

        {/* Second line */}
        <path
          d="M0 500 
             L500 500
             Q540 500 540 540
             L540 700
             Q540 740 580 740
             L1000 740
             Q1040 740 1040 700
             L1040 300
             Q1040 260 1080 260
             L1500 260
             Q1540 260 1540 300
             L1540 900
             Q1540 940 1580 940
             L1920 940"
          className="fill-none stroke-redPrimary stroke-[2]"
        />

        {/* Third line */}
        <path
          d="M0 600 
             L600 600
             Q640 600 640 640
             L640 800
             Q640 840 680 840
             L1100 840
             Q1140 840 1140 800
             L1140 400
             Q1140 360 1180 360
             L1600 360
             Q1640 360 1640 400
             L1640 1000
             Q1640 1040 1680 1040
             L1920 1040"
          className="fill-none stroke-orangePrimary stroke-[2]"
        />
      </svg>
    </div>
  );
};

export default Intro;
