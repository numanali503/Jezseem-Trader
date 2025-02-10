import React from "react";

function Overview() {
  return (
    <div className="max-w-[85rem] mx-auto px-4 md:px-0">
      <div className="flex flex-col md:flex-row items-center justify-between w-full mt-44 md:mt-0 space-y-4 md:space-y-0 md:space-x-8">
        <h1 className="text-2xl font-bold text-center text-slate-800 md:text-4xl md:whitespace-nowrap ">
          Why Choose Jezseem Traders
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-stretch justify-between space-y-6 md:space-y-0 md:space-x-12 mt-8">
        <div className="w-full md:w-[35%] h-64">
          <img
            className="w-full h-full object-cover "
            src="https://img.freepik.com/premium-photo/portrait-young-woman-gesturing-against-white-background_1048944-3043929.jpg?ga=GA1.1.529639526.1738752801&semt=ais_incoming"
            alt="Jezseem Traders Company"
          />
        </div>
        <div className="w-full md:w-[65%] flex items-center">
          <p className="text-md text-justify text-slate-600">
            We're a global consultancy that helps the world's most ambitious
            change makers define the future. Across 65 cities in 40 countries,
            we work alongside our clients as one team with a shared ambition to
            achieve extraordinary results, outperform the competition, and
            redefine industries. We complement our tailored, integrated
            expertise with a vibrant ecosystem of digital innovators to deliver
            better, faster, and more enduring outcomes. $1 billion in pro bono
            services brings our talent, expertise, and insight to organizations
            tackling today's urgent challenges in education, racial equity,
            social justice, economic development, and the environment. We earned
            a platinum rating from EcoVadis, the leading platform for
            environmental, social, and ethical performance ratings for global
            supply chains, putting us in the top 1% of all companies. Since our
            founding in 1973, we have measured our success by the success of our
            clients, and we proudly maintain the highest level of client
            advocacy in the industry.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Overview;
