import React, { useEffect, useRef } from "react";
import gsap from "gsap";

function IndustryFocus() {
  const imageRefs = useRef([]);
  const overlayRefs = useRef([]);

  useEffect(() => {
    imageRefs.current.forEach((image, index) => {
      gsap.fromTo(
        overlayRefs.current[index],
        {
          yPercent: 100,
          opacity: 0,
          height: "auto",
        },
        {
          yPercent: 0,
          opacity: 0.9,
          height: "100%",
          duration: 0.5,
          ease: "power1.in",
          paused: true,
        }
      );

      image.addEventListener("mouseenter", () => {
        gsap.to(overlayRefs.current[index], {
          yPercent: 0,
          opacity: 0.9,
          height: "100%",
          duration: 0.1,
        });
      });
      image.addEventListener("mouseleave", () => {
        gsap.to(overlayRefs.current[index], {
          yPercent: 100,
          opacity: 0,
          height: "auto",
          duration: 0.1,
        });
      });
    });
  }, []);

  return (
    <div className="max-w-[85rem] mx-auto h-full px-4 sm:px-6 lg:px-0">
      <div className="flex flex-col mb-4 sm:mb-6 md:mb-8 md:flex-row items-center justify-center w-full space-y-4 md:space-y-0 md:space-x-8">
        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-center text-slate-800 md:whitespace-nowrap">
          Industry Focuses
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <div className="grid gap-2">
          <div
            ref={(el) => (imageRefs.current[0] = el)}
            className="relative h-[20rem] sm:h-[32rem] md:h-[44rem] overflow-hidden group"
          >
            <img
              src="https://img.freepik.com/free-photo/people-safety-equipment-their-workplace_23-2148976360.jpg?t=st=1732689053~exp=1732692653~hmac=dc3441e5185c9c13dab54745e9c64188dce8baf4db1b397dc72e3414f5197432&w=900"
              alt="err"
              className="w-full h-full object-cover"
            />
            <div
              ref={(el) => (overlayRefs.current[0] = el)}
              className="absolute bottom-0 w-full bg-orangePrimary p-4 sm:p-8 md:p-12 flex items-center justify-center text-center transition-all"
            >
              <div>
                <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-white md:whitespace-nowrap">
                  What we believe
                </h1>
                <h1 className="text-sm sm:text-md text-gray-200">
                  We believe those who challenge themselves to be exceptional
                  should champion that spirit in others. And that doing the
                  right thing is rarely easy, but always worth it.
                </h1>
              </div>
            </div>
          </div>

          <div
            ref={(el) => (imageRefs.current[1] = el)}
            className="relative h-[16rem] sm:h-[20rem] md:h-[24rem] overflow-hidden group"
          >
            <img
              src="https://img.freepik.com/premium-photo/elderly-employees-returning-work-fashion-designers-clothing-production-workshop-concept-fashion-elderly-employees-clothing-production-workshop-return-work_864588-72962.jpg?w=1380"
              alt="err"
              className="w-full h-full object-cover"
            />
            <div
              ref={(el) => (overlayRefs.current[1] = el)}
              className="absolute bottom-0 w-full bg-mainBlue p-4 sm:p-8 md:p-12 flex items-center justify-center text-center transition-all"
            >
              <div>
                <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-white md:whitespace-nowrap">
                  What we Do
                </h1>
                <h1 className="text-sm sm:text-md text-gray-200">
                  Global leaders come to us to solve industry-defining
                  challenges. Our unique approach to change management helps
                  structure, orchestrate and enable sustained results.
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-2">
          <div
            ref={(el) => (imageRefs.current[2] = el)}
            className="relative h-[16rem] sm:h-[20rem] md:h-[24rem] overflow-hidden group"
          >
            <img
              src="https://img.freepik.com/premium-photo/customer-review-satisfaction-feedback-survey-concept_31965-14813.jpg?w=1380"
              alt="err"
              className="w-full h-full object-cover"
            />
            <div
              ref={(el) => (overlayRefs.current[2] = el)}
              className="absolute bottom-0 w-full bg-mainBlue p-4 sm:p-8 md:p-12 flex items-center justify-center text-center transition-all"
            >
              <div>
                <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-white md:whitespace-nowrap">
                  Awards & Recognition
                </h1>
                <h1 className="text-sm sm:text-md text-gray-200">
                  We're proud to be consistently recognized as one of the
                  world's best places to work, a champion of diversity and a
                  model of social responsibility.
                </h1>
              </div>
            </div>
          </div>

          <div
            ref={(el) => (imageRefs.current[3] = el)}
            className="relative h-[20rem] sm:h-[32rem] md:h-[44rem] overflow-hidden group"
          >
            <img
              src="https://img.freepik.com/free-photo/clothes-designers-working-store_23-2148915552.jpg?ga=GA1.1.903987192.1737529717&semt=ais_hybrid"
              alt="err"
              className="w-full h-full object-cover"
            />
            <div
              ref={(el) => (overlayRefs.current[3] = el)}
              className="absolute bottom-0 w-full bg-orangePrimary p-4 sm:p-8 md:p-12 flex items-center justify-center text-center transition-all"
            >
              <div>
                <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-white md:whitespace-nowrap">
                  Media Center
                </h1>
                <h1 className="text-sm sm:text-md text-gray-200">
                  Our people are continually sought out by global, local and
                  industry media for their unique insights and expert
                  perspectives.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndustryFocus;
