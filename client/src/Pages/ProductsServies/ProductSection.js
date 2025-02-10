import React from "react";
import rexMachine from "../../assets/images/rex70.png";

function ProductSection() {
  return (
    <div className="bg-slate-100 py-8 sm:py-12">
      <div className="max-w-[85rem] mx-auto flex flex-col md:flex-row items-center px-4 sm:px-6 md:px-8 lg:space-x-4">
        <div className="h-full w-full mb-6 md:mb-0">
          <div className="flex items-center justify-center md:justify-start w-full">
            <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-center md:text-left text-slate-800">
              High Performing Machines
            </h1>
          </div>
          <p className="text-md sm:text-md text-gray-700 text-justify mt-2 md:mt-4 md:pr-4">
            The largest and highest technological range of systems of the
            cutting room. Choosing Morgan Tecnica machinery you will be able to
            rely on absolute performances of: quality, versatility, reliability
            and energy saving. The machines are designed to never stop and to
            follow you wherever your production ambition will lead you. Morgan
            Tecnica machinery are installed in some of the most important
            textile companies and most prestigious Italian and international
            Fashion Houses.The largest and highest technological range of
            systems of the.
          </p>
        </div>
        <div className="h-full w-full md:w-1/2">
          <img
            src={rexMachine}
            alt="err"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default ProductSection;
