import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/data";
import Avatar1 from "../../assets/images/ava1.png";

function Testimonial() {
  const { authURL } = useAuth();
  const [testimonials, setTestimonials] = useState([]);
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const colorSchemes = [
    { bg: "bg-red-200", text: "text-redPrimary", shadow: "shadow-red-300" },
    {
      bg: "bg-green-200",
      text: "text-greenPrimary",
      shadow: "shadow-green-300",
    },
    {
      bg: "bg-orange-200",
      text: "text-orangePrimary",
      shadow: "shadow-orange-300",
    },
  ];

  const getCurrentColors = () => {
    return colorSchemes[current % colorSchemes.length];
  };

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(`${authURL}/get-testimonial`);
        const data = await response.json();
        setTestimonials(data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, [authURL]);

  const handleNavigation = (direction) => {
    if (isAnimating) return;
    setIsAnimating(true);

    if (direction === "next") {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    } else {
      setCurrent(
        (prev) => (prev - 1 + testimonials.length) % testimonials.length
      );
    }

    setTimeout(() => setIsAnimating(false), 500);
  };

  const currentColors = getCurrentColors();

  return (
    <div>
      <section className="relative overflow-hidden pt-6 sm:pt-10">
        <div className="relative container px-4 mx-auto">
          <div className="max-w-lg lg:max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-16">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium text-center text-slate-800">
                What our Clients say about us
              </h1>
              <p className="text-sm sm:text-md text-center text-slate-600 mt-4 mb-8 sm:mb-16 px-4">
                Our specialized services are designed to enhance the
                productivity, quality, and efficiency of your textile business.
              </p>
            </div>

            {testimonials.length > 0 && (
              <div className="relative">
                <div
                  className={`h-full flex flex-col md:flex-row items-start md:items-center justify-between w-full rounded-xl ${
                    currentColors.bg
                  } 
                    px-4 sm:px-6 md:px-8 py-6 sm:py-8 transition-all duration-500 transform hover:scale-[1.02] 
                    ${currentColors.shadow} backdrop-blur-sm
                    ${
                      isAnimating
                        ? "opacity-0 scale-95"
                        : "opacity-100 scale-100"
                    }`}
                >
                  <div className="w-full md:w-2/3 items-start justify-start flex flex-col">
                    <i
                      className={`fa-sharp-duotone fa-solid fa-quote-left text-6xl sm:text-8xl md:text-[10rem] ${currentColors.text} 
                      opacity-40 transition-all duration-500 transform hover:scale-110`}
                    ></i>
                    <div className="relative">
                      <h1
                        className={`text-lg sm:text-xl md:text-2xl italic font-serif ${currentColors.text} transition-all duration-500
                        leading-relaxed`}
                      >
                        "{testimonials[current].message}"
                      </h1>
                    </div>
                    <div className="mt-4 sm:mt-6 border-t border-gray-100 pt-4">
                      <h1 className="text-lg sm:text-xl text-gray-800 font-semibold">
                        {testimonials[current].name}
                      </h1>
                      <h1 className="text-sm sm:text-base text-gray-600">
                        {testimonials[current].designation}
                      </h1>
                    </div>
                  </div>
                  <div className="w-full md:w-1/3 items-center md:items-end justify-center md:justify-end flex mt-6 md:mt-0">
                    <div className="relative">
                      <div
                        className={`absolute inset-0 ${currentColors.bg} opacity-30 blur-xl rounded-full transition-all duration-500`}
                      ></div>
                      <img
                        src={Avatar1}
                        alt="profile"
                        className="w-32 sm:w-40 md:w-44 relative transform hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>

                {testimonials.length > 1 && (
                  <div className="absolute bottom-4 right-4 flex gap-2">
                    <button
                      onClick={() => handleNavigation("prev")}
                      className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full 
                        bg-white/70 hover:bg-white backdrop-blur-sm transition-all duration-300
                        transform hover:scale-110 ${currentColors.shadow} shadow-md
                        disabled:opacity-50 disabled:cursor-not-allowed`}
                      disabled={isAnimating}
                      aria-label="Previous testimonial"
                    >
                      &#8592;
                    </button>
                    <button
                      onClick={() => handleNavigation("next")}
                      className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full 
                        bg-white/70 hover:bg-white backdrop-blur-sm transition-all duration-300
                        transform hover:scale-110 ${currentColors.shadow} shadow-md
                        disabled:opacity-50 disabled:cursor-not-allowed`}
                      disabled={isAnimating}
                      aria-label="Next testimonial"
                    >
                      &#8594;
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonial;
