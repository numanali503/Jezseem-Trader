import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const colors = {
  txtTitleBLK: "#374151",
  mainBlue: "#2FAE72",
  mainYellow: "#FC9918",
  greenPrimary: "#4DB850",
  greenSecondary: "#24AE94",
  orangePrimary: "#FC9918",
  redPrimary: "#E92A31",
  greenTertiary: "#44A44D",
  orangeSecondary: "#F58218",
};

const stages = [
  {
    name: "Design",
    color: colors.greenPrimary,
    description:
      "In this stage, creative teams develop innovative product concepts that resonate with consumer demands and evolving trends. This involves extensive research, brainstorming, and preliminary sketches to capture the vision. Designers work to balance aesthetics, functionality, and feasibility to create compelling products that stand out in the market. They collaborate with marketing teams to ensure designs meet consumer expectations and align with brand identity.",
  },
  {
    name: "Sourcing",
    color: colors.mainYellow,
    description:
      "The sourcing stage focuses on finding high-quality materials and reliable suppliers necessary for production. Sourcing specialists evaluate various suppliers to ensure materials meet cost, quality, and ethical standards. This stage may involve negotiating contracts and securing sustainable resources to support the product's lifecycle. Strong supplier relationships are crucial, as they help in maintaining consistency in materials and mitigating risks in the supply chain.",
  },
  {
    name: "Production",
    color: colors.orangeSecondary,
    description:
      "Production involves managing the manufacturing process, transforming designs into tangible products. Teams oversee each phase to maintain quality standards and address any issues that may arise. This stage includes activities such as material assembly, quality checks, and safety inspections to ensure the final product meets brand specifications and industry regulations. Efficient production methods are key to optimizing costs and minimizing waste.",
  },
  {
    name: "Logistics",
    color: colors.greenSecondary,
    description:
      "Logistics manages the transportation of finished products from manufacturing sites to distribution centers and retail outlets. This stage includes planning and coordinating shipments to ensure products reach destinations promptly and securely. Logistics teams often work with carriers and warehousing services to manage inventory and optimize delivery routes. Their focus is on minimizing delays, reducing costs, and ensuring products arrive in pristine condition.",
  },
  {
    name: "Retail",
    color: colors.redPrimary,
    description:
      "In the retail stage, products are made available to consumers through various sales channels, including brick-and-mortar stores, online platforms, and third-party retailers. Retail teams focus on product placement, in-store merchandising, and digital marketing to attract customers. Their goal is to enhance the consumer shopping experience, maximize visibility, and drive sales by ensuring product availability and accessibility across multiple platforms.",
  },
];

const Infographics = () => {
  const [activeStage, setActiveStage] = useState(2); // Setting initial stage to Production
  const pathRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    const totalLength = path.getTotalLength();
    path.style.strokeDasharray = totalLength;

    // Adjust to end exactly at current stage
    const segmentLength = totalLength / (stages.length - 1);
    gsap.to(path, {
      strokeDashoffset: totalLength - segmentLength * activeStage,
      duration: 0.5,
    });
  }, [activeStage]);

  return (
    <div className="flex flex-col lg:flex-row h-[500px] gap-4">
      {/* Left side with dynamic background */}
      <div
        className="w-full lg:w-1/2 h-full flex justify-center items-center transition-colors duration-500"
        style={{ backgroundColor: stages[activeStage].color }}
      >
        <div className="relative w-[32rem] h-[500px] flex justify-center items-center ">
          <svg viewBox="0 0 300 300" className="w-full">
            <path
              ref={pathRef}
              d="M150,50 a100,100 0 1,1 -0.1,0"
              fill="none"
              stroke="#f8fafc" // slate-50
              strokeWidth="2"
              className="transition-all duration-500"
            />
            {stages.map((stage, index) => {
              const angle = index * 72 - 90;
              const x = 150 + 100 * Math.cos(angle * (Math.PI / 180));
              const y = 150 + 100 * Math.sin(angle * (Math.PI / 180));
              const textX = 150 + 130 * Math.cos(angle * (Math.PI / 180));
              const textY = 150 + 130 * Math.sin(angle * (Math.PI / 180));

              return (
                <g
                  key={index}
                  onClick={() => setActiveStage(index)}
                  className="cursor-pointer"
                >
                  <circle cx={x} cy={y} r="6" fill="white" strokeWidth="2" />
                  <text
                    x={textX}
                    y={textY}
                    textAnchor="middle"
                    fill="white"
                    fontSize="14"
                    fontWeight="500"
                    className="select-none text-xs "
                  >
                    {stage.name}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      {/* Right side content */}
      <div className="w-full  lg:w-1/2 h-full bg-white lg:flex hidden items-center">
        <div className=" mx-auto px-8">
          <div className="border-l-2 border-slate-800 pl-4">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              {stages[activeStage].name}
            </h2>
            <p className="text-slate-800 text-lg leading-relaxed">
              {stages[activeStage].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infographics;
