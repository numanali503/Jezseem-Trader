import React from "react";

const MissionVision = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Vision Section */}
      <section className="relative bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative aspect-rectangle">
                <div className="absolute inset-0 bg-gradient-to-br from-greenPrimary to-greenPrimary rounded transform -rotate-2 opacity-50" />
                <img
                  src="https://img.freepik.com/premium-photo/air-conditioning-cleaning-service-with-air-blower_979131-7089.jpg?ga=GA1.1.529639526.1738752801&semt=ais_incoming"
                  alt="Vision"
                  className="relative rounded shadow-xl transform rotate-2 transition-transform hover:rotate-0 duration-500"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <h4 className="text-red-600 font-semibold text-xs mb-4">
                  Our Vision
                </h4>
                <h2 className="text-2xl lg:text-4xl font-bold tracking-tight text-gray-900 mb-6">
                  Jezseem Traders's Vision
                </h2>
              </div>
              <p className="text-md text-gray-600 leading-relaxed">
                We're a global consultancy that helps the world's most ambitious
                change makers define the future. Across 65 cities in 40
                countries, we work alongside our clients as one team with a
                shared ambition to achieve extraordinary results, outperform the
                competition, and redefine industries. We complement our
                tailored, integrated expertise with a vibrant ecosystem of
                digital innovators to deliver better, faster, and more enduring
                outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative  flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-50 via-white to-white" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="animate-fade-in">
                <h4 className="text-red-600 font-semibold mb-4 text-xs">
                  Our Mission
                </h4>
                <h1 className="text-2xl lg:text-4xl font-bold tracking-tight text-gray-900 mb-6">
                  Jezseem Traders's Mission
                </h1>
              </div>
              <p className="text-md text-gray-600 leading-relaxed">
                We're a global consultancy that helps the world's most ambitious
                change makers define the future. Across 65 cities in 40
                countries, we work alongside our clients as one team with a
                shared ambition to achieve extraordinary results, outperform the
                competition, and redefine industries. We complement our
                tailored, integrated expertise with a vibrant ecosystem of
                digital innovators to deliver better, faster, and more enduring
                outcomes.
              </p>
            </div>
            <div className="relative aspect-rectangle">
              <div className="absolute inset-0 bg-gradient-to-br from-orangePrimary to-orangePrimary rounded transform rotate-3 transition-transform duration-500 opacity-50" />
              <img
                src="https://img.freepik.com/free-vector/isometric-textile-industry-horizontal-banner-with-editable-text-more-button-with-human-operated-weaver-loom-vector-illustration_1284-80366.jpg?ga=GA1.1.529639526.1738752801&semt=ais_incoming"
                alt="Mission"
                className="relative rounded shadow-xl transform -rotate-3 transition-transform hover:rotate-0 duration-500"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MissionVision;
