import React, { useState } from "react";
import { Link } from "react-router-dom";

function CTA() {
  const [hovered1, setHovered1] = useState(false);
  return (
    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 mb-12">
      <div className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-green-50 to-white border border-greenPrimary">
        <div className="absolute inset-0 bg-green-500/5 transition-colors group-hover:bg-green-500/10" />
        <div className="relative p-6 sm:p-8 md:p-12 flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-8">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-900 text-center sm:text-left">
              Get in Touch with us
            </h2>
          </div>
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-greenPrimary text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-green-700 hover:scale-105"
            onMouseEnter={() => setHovered1(true)}
            onMouseLeave={() => setHovered1(false)}
          >
            <span>Let's get to work</span>
            <i
              className={`fa-solid fa-arrow-right ml-2 transition-transform duration-300 ${
                hovered1 ? "translate-x-1" : ""
              }`}
            ></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CTA;
