import React from "react";

const ContentSection = () => {
  return (
    <section className="bg-white py-24">
      {/* Main Why Us Content */}
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left Column */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold">Why Partner With Us?</h2>
            <p className="text-lg text-neutral-600 leading-relaxed">
              We've spent years perfecting our craft, developing innovative
              solutions, and building lasting relationships with clients
              worldwide. Our commitment to excellence sets us apart.
            </p>
            <div className="flex gap-8 pt-8">
              <div>
                <i className="fas fa-circle-check text-4xl text-greenPrimary"></i>
                <p className="mt-4 font-semibold">Quality Assured</p>
              </div>
              <div>
                <i className="fas fa-clock text-4xl text-orangePrimary"></i>
                <p className="mt-4 font-semibold">On-Time Delivery</p>
              </div>
              <div>
                <i className="fas fa-shield text-4xl text-greenSecondary"></i>
                <p className="mt-4 font-semibold">100% Secure</p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="grid grid-cols-1 gap-8">
            {[
              {
                icon: "fas fa-gem",
                title: "Unmatched Quality",
                description:
                  "We maintain the highest standards in every project we undertake.",
              },
              {
                icon: "fas fa-users",
                title: "Expert Team",
                description:
                  "Our team of specialists brings years of industry expertise.",
              },
              {
                icon: "fas fa-rocket",
                title: "Innovation First",
                description:
                  "We stay ahead of trends to deliver cutting-edge solutions.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex gap-6 group p-6 hover:bg-neutral-50 transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <i
                    className={`${feature.icon} text-2xl text-neutral-800 transition-colors duration-300`}
                  ></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2  transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
