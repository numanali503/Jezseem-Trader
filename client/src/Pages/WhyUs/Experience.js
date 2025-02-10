import React from "react";

const ExperienceBlock = ({ title, description }) => (
  <div className="w-full lg:w-[580px] group">
    {/* Title with lines */}
    <div className="flex items-center justify-center w-full space-x-8">
      <h2 className="text-2xl md:text-4xl font-bold text-neutral-800 whitespace-nowrap transition-transform duration-500 group-hover:scale-105">
        {title}
      </h2>
    </div>

    {/* Description with animation */}
    <div className="relative mt-8 overflow-hidden">
      <p className="text-neutral-600 leading-relaxed text-justify relative z-10">
        {description}
      </p>
    </div>
  </div>
);

const Experience = () => {
  const sections = [
    {
      title: "Unmatched Experience",
      description:
        "Beyond our commitment to business excellence, we believe in creating a better world. Through our 10-year, $1 billion pro bono commitment, we channel our talent and resources into addressing critical global challenges, from advancing education to promoting racial equity, social justice, and environmental sustainability. Our dedication to making a difference reflects our belief that success is only meaningful when it uplifts society as a whole.",
    },
    {
      title: "Transform Industries",
      description:
        "Choosing Jezseem Traderss means choosing a partner who is as invested in your success as you are. With unmatched experience, an unyielding commitment to quality, a deeply personal approach to collaboration, and a relentless drive for innovation, we empower our clients to not only outperform the competition but to transform industries and create a brighter, more sustainable future. With us, the possibilities are endless, and the results are extraordinary.",
    },
  ];

  return (
    <section className=" bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-16">
          {sections.map((section, index) => (
            <div key={index} className="w-full">
              <ExperienceBlock {...section} />

              {/* Decorative elements */}
              <div className="hidden lg:block">
                <div
                  className={`w-24 h-24 rounded-full bg-gradient-to-r 
                  ${
                    index === 0
                      ? "from-blue-50 to-purple-50"
                      : "from-purple-50 to-blue-50"
                  } 
                  opacity-20 absolute 
                  ${index === 0 ? "-left-12" : "-right-12"} 
                  blur-2xl transform -translate-y-1/2`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
