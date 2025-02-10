import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import vector from "../../assets/images/rex70.png";

function ServicesCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slideRef = useRef(null);
  const contentRef = useRef(null);

  const slidesData = [
    {
      img: vector,
      title: "Sustainability",
      description:
        "This slide highlights the textile industry's potential to adopt sustainable practices, reduce its environmental footprint, and promote eco-conscious materials. The focus is on encouraging the use of organic fibers, recycled materials, and green production methods that minimize waste and energy consumption. By prioritizing sustainab products and contribute to long-term ecological balance.",
      features: ["Eco-friendly materials", "Energy-efficient"],
    },
    {
      img: vector,
      title: "Innovation",
      description:
        "Innovation is vital for the textile industry to stay competitive and advance production techniques. perform additional functions, such as monitoring health or adapting to temperature changes. Embracing technological advancements not only improves product offerings but also opens up new market segments and enhances the consumer experience.",
      features: ["Smart textiles", "Wearable technology"],
    },
    {
      img: vector,
      title: "Global Reach",
      description:
        "The textile industry plays an integral role in the global supply borders. This slide emphasizes the industry's international scope, where textiles are manufactured, traded, and sold globally, creating demand in diverse markets. By tapping into export opportunities, the industry supports economic growth and enables global ure goods, or engage in trade.",
      features: ["Global market demand", "Export opportunities"],
    },
    {
      img: vector,
      title: "Labor-Intensive",
      description:
        "As a labor-intensive sector, the textile industry provides a wide range of employment workers. This slide highlights the sector's ability to create jobs in areas such as weaving, dyeing, and manufacturing. Many communities rely on textile factories as a primary employment source, driving local economies and providing livelihoods in both developed and developing regions.",
      features: ["Skilled labor jobs", "Factory jobs"],
    },
  ];

  const handleDotClick = (index) => {
    setActiveSlide(index);
    animateContent();
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % slidesData.length);
      animateContent();
    }, 5000);

    return () => clearInterval(intervalId);
  });

  const animateContent = () => {
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7 }
    );
  };

  useEffect(() => {
    const fadeDuration = 0.7;
    gsap.fromTo(
      slideRef.current,
      { opacity: 0 },
      { opacity: 1, duration: fadeDuration }
    );
  }, [activeSlide]);

  return (
    <div className="max-w-[80rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-0">
      <div className="flex items-center justify-between space-x-8 w-full">
        <div className="md:bg-gray-300 bg-transparent h-0.5 w-0 md:w-full"></div>
        <h1 className="text-2xl md:text-4xl font-bold text-center w-full text-mainBlue md:whitespace-nowrap">
          Competitive Advantages
        </h1>
        <div className="md:bg-gray-300 bg-transparent h-0.5 w-0 md:w-full"></div>
      </div>
      <h1 className="text-md text-center mt-4">
        Here's a descriptive paragraph for "See how we've helped ambitious
        clients achieve extraordinary outcomes": Discover the transformative
        journeys of our ambitious clients and the remarkable results they've
        achieved through our partnership. Each success story is a testament to
        our commitment, expertise, and personalized approach. From overcoming
        complex challenges to reaching new heights,
      </h1>

      <div className="flex flex-col md:flex-row items-start justify-start w-full space-x-0 md:space-x-8 mt-8">
        <div className="md:h-[32rem] h-80 w-full md:w-1/2 ">
          <img
            ref={slideRef}
            src={slidesData[activeSlide].img}
            alt="Advantage"
            className="transition-opacity duration-1000 w-full h-full object-contain"
          />
        </div>

        <div className="h-auto md:h-64 w-full md:w-1/2 flex flex-col mt-8 md:mt-0">
          <h1 className="text-2xl font-bold text-gray-800">
            {slidesData[activeSlide].title}
          </h1>
          <div ref={contentRef} className="text-md text-justify mt-2">
            {slidesData[activeSlide].description}
          </div>

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-8">
            {slidesData[activeSlide].features.map((feature, index) => (
              <div
                key={index}
                className="border-t-4 border border-mainYellow h-[12rem] w-full md:w-1/2"
              >
                <div className="h-full w-full flex flex-col space-y-4 items-center justify-center">
                  <i className="fa-solid fa-coins text-[4rem] text-mainBlue"></i>
                  <h1 className="text-xl font-bold text-mainBlue">{feature}</h1>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <div className="flex space-x-2">
              {slidesData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full ${
                    activeSlide === index ? "bg-mainBlue" : "bg-gray-300"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesCarousel;
