import React from "react";

function Hero() {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            <video
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source
                    src={require("../../assets/images/hero.mp4")}
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>
            {/* Dark overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-slate-900 bg-opacity-60"></div>
            {/* Content overlay */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-4 sm:px-8 md:px-12 lg:px-0 max-w-[85rem] mx-auto">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-normal">
                    Transforming Textiles with Precision <br className="hidden sm:block" /> and Expertise
                </h1>
                <p className="mt-4 text-base sm:text-lg">
                    Jezseem Traderss: Leading the Way in Cutting Solutions, Consulting, and
                    After-Sales Support for the Textile Industry
                </p>
            </div>
        </div>
    );
}

export default Hero;