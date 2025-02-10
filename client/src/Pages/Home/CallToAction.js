import React, { useState } from "react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);

  return (
    <div className="w-full max-w-7xl mx-auto mb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First Card */}
        <div className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-green-50 to-white border border-greenPrimary">
          <div className="absolute inset-0 bg-green-500/5 transition-colors group-hover:bg-green-500/10" />
          <div className="relative p-8 md:p-12 h-full flex flex-col justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
                What can we help you achieve?
              </h2>
              <p className="text-green-700/80 text-lg mb-8">
                Partner with us to turn your goals into reality. We're here to support your journey to success.
              </p>
            </div>
            <Link
              to="/"
              className="inline-flex items-center justify-center space-x-2 bg-greenPrimary text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-green-700 hover:scale-105"
              onMouseEnter={() => setHovered1(true)}
              onMouseLeave={() => setHovered1(false)}
            >
              <span>Let's get to work</span>
              <i className={`fa-solid fa-arrow-right ml-2 transition-transform duration-300 ${
                hovered1 ? 'translate-x-1' : ''
              }`}></i>
            </Link>
          </div>
        </div>

        {/* Second Card */}
        <div className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-yellow-50 to-white border border-orangePrimary">
          <div className="absolute inset-0 bg-yellow-500/5 transition-colors group-hover:bg-yellow-500/10" />
          <div className="relative p-8 md:p-12 h-full flex flex-col justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-yellow-900 mb-4">
                Where will your career take you?
              </h2>
              <p className="text-yellow-700/80 text-lg mb-8">
                Explore endless possibilities and chart your path to professional growth with our guidance.
              </p>
            </div>
            <Link
              to="/"
              className="inline-flex items-center justify-center space-x-2 bg-orangePrimary text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-yellow-700 hover:scale-105"
              onMouseEnter={() => setHovered2(true)}
              onMouseLeave={() => setHovered2(false)}
            >
              <span>Let's find out</span>
              <i className={`fa-solid fa-arrow-right ml-2 transition-transform duration-300 ${
                hovered2 ? 'translate-x-1' : ''
              }`}></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;