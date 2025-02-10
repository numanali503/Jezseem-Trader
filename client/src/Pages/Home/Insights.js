import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/data";

function Insights() {
  const { authURL } = useAuth();
  const [insights, setInsights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchInsights = async () => {
      try {
        const response = await fetch(`${authURL}/get-insight`);
        if (!response.ok) {
          throw new Error("Failed to fetch insights");
        }
        const data = await response.json();
        setInsights(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchInsights();
  }, [authURL]);

  const nextInsights = () => {
    if (insights.length > 0) {
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex + (window.innerWidth >= 768 ? 2 : 1)) % insights.length
      );
    }
  };

  const prevInsights = () => {
    if (insights.length > 0) {
      setCurrentIndex((prevIndex) => {
        const step = window.innerWidth >= 768 ? 2 : 1;
        const newIndex = prevIndex - step;
        return newIndex < 0 ? insights.length + newIndex : newIndex;
      });
    }
  };

  if (loading) {
    return (
      <div className="text-center mt-12">
        <p>Loading insights...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-12">
        <p className="text-red-600">Error: {error}</p>
      </div>
    );
  }

  const visibleInsights = window.innerWidth >= 768 ? 2 : 1;

  return (
    <div className="relative max-w-[80rem] mx-auto rounded-lg bg--300 px-4 sm:px-6 md:px-8 lg:px-12">
      <h1 className="text-xl sm:text-2xl md:text-4xl font-medium text-center text-slate-800">
        Our Latest Insights
      </h1>
      <p className="text-sm sm:text-md text-center text-slate-600 mt-2 sm:mt-4 mb-4 sm:mb-8">
        Our specialized services are designed to enhance the productivity,
        quality, and efficiency of your textile business.
      </p>
      <div className="relative flex flex-col items-center justify-center mt-4 sm:mt-8">
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 sm:-translate-x-12 md:-translate-x-20 z-10">
          <button
            onClick={prevInsights}
            className="bg-[#FC9918] rounded-full hover:bg-[#E92A31] transition duration-300 w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center"
          >
            <i className="fas fa-chevron-left text-white text-sm sm:text-lg"></i>
          </button>
        </div>

        <div className="space-y-8 md:space-y-0 md:space-x-4 flex flex-col md:flex-row">
          {insights
            .slice(currentIndex, currentIndex + visibleInsights)
            .map((insight, index) => (
              <div
                key={index}
                className="h-full w-full flex flex-col space-y-2 sm:space-y-4 items-center justify-center"
              >
                <img
                  src={`data:image/jpeg;base64,${insight.image}`}
                  alt="err"
                  className="h-48 sm:h-64 md:h-80 w-full object-cover"
                />
                <h1 className="text-sm sm:text-base font-semibold w-full text-blue-900">
                  {insight.category}
                </h1>
                <h1 className="text-base sm:text-lg md:text-xl font-bold w-full">
                  {insight.title}
                </h1>
                <h1 className="w-full text-sm sm:text-md text-gray-800">
                  {insight.summary}
                </h1>
              </div>
            ))}
        </div>

        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 sm:translate-x-12 md:translate-x-20 z-10">
          <button
            onClick={nextInsights}
            className="bg-[#FC9918] rounded-full hover:bg-[#E92A31] transition duration-300 w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center"
          >
            <i className="fas fa-chevron-right text-white text-sm sm:text-lg"></i>
          </button>
        </div>
      </div>

      <div className="mt-8 sm:mt-12 w-full flex items-center justify-center">
        <Link
          to="/insights"
          className="relative group inline-block py-1.5 sm:py-2 px-3 sm:px-4 text-xs sm:text-sm text-gray-700 hover:text-gray-200 bg-[#FC9918] rounded-sm overflow-hidden transition duration-300"
        >
          <div className="absolute top-0 right-full w-full h-full bg-[#E92A31] transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
          <span className="relative tracking-wider font-semibold">
            See all Insights
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Insights;
