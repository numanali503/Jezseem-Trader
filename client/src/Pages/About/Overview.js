import React from "react";

function Overview() {
  return (
    <section className="relative  flex items-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-50 via-white to-white" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="animate-fade-in">
              <h4 className="text-red-600 text-xs font-semibold mb-4 ">
                Our History
              </h4>
              <h1 className="text-2xl lg:text-4xl font-bold tracking-tight text-gray-900 mb-6">
                Moja's History
              </h1>
            </div>
            <p className="text-md text-gray-600 leading-relaxed">
              We're a global consultancy that helps the world's most ambitious
              change makers define the future. Across 65 cities in 40 countries,
              we work alongside our clients as one team with a shared ambition
              to achieve extraordinary results, outperform the competition, and
              redefine industries. We complement our tailored, integrated
              expertise with a vibrant ecosystem of digital innovators to
              deliver better, faster, and more enduring outcomes.
            </p>
          </div>
          <div className="relative aspect-rectangle">
            <div className="absolute inset-0 bg-gradient-to-br from-redPrimary to-redPrimary rounded transform rotate-3 transition-transform duration-500 opacity-50" />
            <img
              src="https://media.gettyimages.com/id/173806592/photo/textile-workers-inspecting-striped-woven-thread-in-mill.jpg?s=612x612&w=0&k=20&c=WIcT2AB9eazgJ6j2zd6xki1zHgBSvqu0DldXylrj-OI="
              alt="Mission"
              className="relative rounded shadow-xl transform -rotate-3 transition-transform hover:rotate-0 duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Overview;
