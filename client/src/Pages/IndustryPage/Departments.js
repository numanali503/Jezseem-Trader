import React from "react";

function Departments() {
  return (
    <div className="max-w-[85rem] mx-auto px-4 md:px-0">
      {/* Cutting Department Section */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-between w-full mt-[150px] md:mt-0 space-y-4 md:space-y-0 md:space-x-8">
        <h1 className="text-2xl font-bold text-center text-slate-900 md:text-4xl md:whitespace-nowrap">
          Cutting Department
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-stretch justify-between space-y-6 md:space-y-0 md:space-x-12 mt-8">
        <div className="w-full md:w-[35%] h-64">
          <img
            className="w-full h-full object-cover border-2 shadow-lg"
            src="https://img.freepik.com/free-photo/serious-engineer-glasses-operating-machine_74855-5419.jpg?semt=ais_hybrid"
            alt="Cutting Department"
          />
        </div>
        <div className="w-full md:w-[65%] flex items-center">
          <p className="text-md text-justify text-slate-600">
            With a primary focus on the textile industry, we emphasize the
            cutting department — the bedrock of textile manufacturing and a
            crucial determinant of operational excellence. As the first stage in
            the production process, the cutting department lays the foundation
            for everything that follows. Any inefficiency or inaccuracy at this
            stage can ripple through the entire production line, resulting in
            material wastage, inconsistent quality, and increased costs. Our
            dedicated team of experts brings years of experience in optimizing
            cutting operations, implementing state-of-the-art technologies, and
            developing innovative solutions that drive efficiency and precision.
            We understand that the cutting department is not just about making
            cuts; it's about creating value through precision, speed, and
            reliability. Our comprehensive approach encompasses everything from
            pattern optimization to waste reduction, ensuring that every cut
            contributes to your bottom line.
          </p>
        </div>
      </div>

      {/* Manufacturer & SMEs Section */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full mt-20 space-y-4 md:space-y-0 md:space-x-8">
        <h1 className="text-2xl font-bold text-center text-slate-900 md:text-4xl md:whitespace-nowrap">
          Manufacturer & SMEs
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-stretch justify-between space-y-6 md:space-y-0 md:space-x-12 mt-8">
        <div className="w-full md:w-[65%] flex items-center">
          <p className="text-md text-justify text-slate-600">
            Our solutions are tailored to meet the needs of medium to large
            manufacturers as well as SMEs, addressing their unique challenges
            and enabling them to scale efficiently. Starting with a geographic
            focus on Punjab — the heart of textile manufacturing in the region —
            we are building a strong foundation to support businesses where it
            matters most. With plans for nationwide expansion, we are committed
            to transforming the textile industry by focusing on the cutting
            department's pivotal role in driving sustainable growth and
            excellence. Our comprehensive approach includes customized training
            programs, technical support, and innovative solutions that help
            businesses optimize their cutting operations. We understand that
            each business has unique needs, and our flexible solutions are
            designed to scale with your growth, ensuring long-term success in an
            increasingly competitive market.
          </p>
        </div>
        <div className="w-full md:w-[35%] h-64">
          <img
            className="w-full h-full object-cover border-2 shadow-lg"
            src="https://img.freepik.com/free-photo/men-warehouse-working_23-2148886837.jpg?semt=ais_hybrid"
            alt="Manufacturer & SMEs"
          />
        </div>
      </div>
    </div>
  );
}

export default Departments;
