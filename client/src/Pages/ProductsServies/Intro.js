import React from "react";
import bg from "../../assets/images/Rex50.jpg";

function Intro() {
  return (
    <div
      className="w-full h-screen bg-cover bg-no-repeat relative"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Blue overlay with opacity 70 */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-slate-50"
        style={{ opacity: 0.7 }}
      ></div>

      <div
        className="animated-card absolute md:top-64 top-[60%] md:left-24 left-4 right-4 md:right-auto md:max-w-xl md:backdrop-blur-sm md:bg-opacity-50 bg-orangeSecondary p-4 md:p-6 lg:p-8 md:border-l-8 border-l-0 border-t-8 md:border-t-0 border-orangeSecondary shadow-lg"
        style={{ clipPath: "inset(0 0 0 0)" }}
      >
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-3 lg:mb-4 text-gray-800">
          Jezseem Traders's Products
        </h1>
        <p className="text-md mb-4 md:mb-5 lg:mb-6 text-justify text-gray-600">
          This is where aspiration meets innovation, candor fuels collaboration
          and impossible surrenders to teamwork. We champion the bold to achieve
          the extraordinary. This is where aspiration meets innovation, candor
          fuels collaboration and impossible surrenders to teamwork. We champion
          the bold to achieve the extraordinary.
        </p>
      </div>
    </div>
  );
}

export default Intro;
