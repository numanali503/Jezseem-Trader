import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import bgImage from '../../assets/images/bg.png'

const stages = [
    {
        name: 'Design',
        description: 'In this stage, creative teams develop innovative product concepts that resonate with consumer demands and evolving trends. This involves extensive research, brainstorming, and preliminary sketches to capture the vision. Designers work to balance aesthetics, functionality, and feasibility to create compelling products that stand out in the market. They collaborate with marketing teams to ensure designs meet consumer expectations and align with brand identity.'
    },
    {
        name: 'Sourcing',
        description: 'The sourcing stage focuses on finding high-quality materials and reliable suppliers necessary for production. Sourcing specialists evaluate various suppliers to ensure materials meet cost, quality, and ethical standards. This stage may involve negotiating contracts and securing sustainable resources to support the product\'s lifecycle. Strong supplier relationships are crucial, as they help in maintaining consistency in materials and mitigating risks in the supply chain.'
    },
    {
        name: 'Production',
        description: 'Production involves managing the manufacturing process, transforming designs into tangible products. Teams oversee each phase to maintain quality standards and address any issues that may arise. This stage includes activities such as material assembly, quality checks, and safety inspections to ensure the final product meets brand specifications and industry regulations. Efficient production methods are key to optimizing costs and minimizing waste.'
    },
    {
        name: 'Logistics',
        description: 'Logistics manages the transportation of finished products from manufacturing sites to distribution centers and retail outlets. This stage includes planning and coordinating shipments to ensure products reach destinations promptly and securely. Logistics teams often work with carriers and warehousing services to manage inventory and optimize delivery routes. Their focus is on minimizing delays, reducing costs, and ensuring products arrive in pristine condition.'
    },
    {
        name: 'Retail',
        description: 'In the retail stage, products are made available to consumers through various sales channels, including brick-and-mortar stores, online platforms, and third-party retailers. Retail teams focus on product placement, in-store merchandising, and digital marketing to attract customers. Their goal is to enhance the consumer shopping experience, maximize visibility, and drive sales by ensuring product availability and accessibility across multiple platforms.'
    }
];

const Infographics = () => {
    const [activeStage, setActiveStage] = useState(null);
    const pathRef = useRef(null);

    useEffect(() => {
        const path = pathRef.current;
        const totalLength = path.getTotalLength();
        path.style.strokeDasharray = totalLength;

        if (activeStage === null) {
            gsap.to(path, { strokeDashoffset: 0, duration: 0.5 });
        } else {
            const segmentLength = totalLength / stages.length;
            gsap.to(path, {
                strokeDashoffset: totalLength - segmentLength * (activeStage + 1),
                duration: 0.5
            });
        }
    }, [activeStage]);

    return (
        <div
            className="relative py-12 lg:py-20 bg-mainBlue"
        >
            <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-8 max-w-[80rem] mx-auto h-full px-4 lg:px-0">
                <div className="relative w-full lg:w-[32rem] h-[400px] lg:h-[500px] flex justify-center items-center">
                    <svg viewBox="0 0 300 300" className="w-full">
                        <path
                            ref={pathRef}
                            className="circular-path"
                            d="M150,50 a100,100 0 1,1 -0.1,0"
                            fill="none"
                            stroke="#FC9918"
                            strokeWidth="2"
                        />
                        {stages.map((stage, index) => {
                            const angle = index * 72 - 90;
                            const x = 150 + 100 * Math.cos(angle * (Math.PI / 180));
                            const y = 150 + 100 * Math.sin(angle * (Math.PI / 180));
                            const textX = 150 + 120 * Math.cos(angle * (Math.PI / 180));
                            const textY = 150 + 120 * Math.sin(angle * (Math.PI / 180));

                            let dx = 0;
                            let dy = 0;

                            // Adjust label position based on angle
                            if (index === 0) dy = 5; // Top
                            if (index === 1) dx = 10; // Top-right
                            if (index === 2) dy = 15; // Bottom
                            if (index === 3) dx = -20; // Bottom-left
                            if (index === 4) dx = -10; // Top-left

                            return (
                                <React.Fragment key={index}>
                                    <circle
                                        cx={x}
                                        cy={y}
                                        r="6"
                                        fill={activeStage !== null && activeStage >= index ? 'white' : 'white'}
                                        strokeWidth="2"
                                        onClick={() => setActiveStage(index)}
                                    />
                                    <text
                                        x={textX}
                                        y={textY}
                                        dx={dx}
                                        dy={dy}
                                        textAnchor="middle"
                                        fontSize="12"
                                        fill="white"
                                        onClick={() => setActiveStage(index)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        {stage.name}
                                    </text>
                                </React.Fragment>
                            );
                        })}
                    </svg>
                </div>
                <div className="border-l-2 border-orangePrimary pl-4 w-full lg:max-w-[30rem]">
                    <h2 className="text-2xl text-white font-bold">
                        {activeStage === null ? 'All Stages' : stages[activeStage].name}
                    </h2>
                    <p className="mt-2 text-justify text-md text-white">
                        {activeStage === null
                            ? 'In the retail stage, products are made available to consumers through various sales channels, including brick-and-mortar stores, online platforms, and third-party retailers. Retail teams focus on product placement, in-store merchandising, and digital marketing to attract customers. Their goal is to enhance the consumer shopping experience, maximize visibility, and drive sales by ensuring product availability and accessibility across multiple platforms.'
                            : stages[activeStage].description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Infographics;