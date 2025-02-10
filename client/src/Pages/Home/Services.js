import React from "react";

function Services() {
  const services = [
    {
      icon: <i class="fa-sharp-duotone fa-light fa-clipboard text-greenSecondary text-6xl"></i>,
      title: "Consultancy",
      description:
        "Expert consultancy to optimize your textile operations, offering strategies tailored to increase efficiency and quality in production.",
    },
    {
      icon: <i class="fa-sharp-duotone fa-light fa-scissors text-redPrimary text-6xl"></i>,
      title: "Fabric Machine Cutters",
      description:
        "Supplying high-precision fabric cutting machines designed to meet the demands of modern textile production.",
    },
    {
      icon: <i class="fa-sharp-duotone fa-light fa-arrow-progress text-orangePrimary text-6xl"></i>,
      title: "Process Improvements",
      description:
        "Implementing process improvements to streamline workflows, reduce waste, and enhance output quality across your textile operations.",
    },
  ];

  return (
    <section className="max-w-[80rem] mx-auto px-4 py-16 sm:px-6 md:px-8 lg:px-0">
      <h1 className="text-4xl font-medium text-center text-slate-800 md:text-4xl md:whitespace-nowrap">
        Precision Solutions for Tomorrow's Textiles
      </h1>
      <p className="text-md text-center text-slate-600 mt-4 mb-16">
        Our specialized services are designed to enhance the productivity,
        quality, and efficiency of your textile business.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center"
          >
            <div className="bg rounded-full p-4 mb-6">{service.icon}</div>
            <h3 className="text-2xl font-semibold mb-4 text-slate-700">
              {service.title}
            </h3>
            <p className="text-gray-600 text-base md:text-center">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
