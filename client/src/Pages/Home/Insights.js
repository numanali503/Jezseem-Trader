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
        if (!response.ok) throw new Error("Failed to fetch insights");
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
      <div className="flex items-center justify-center min-h-[400px]">
        <i className="fas fa-spinner-third fa-spin text-4xl text-blue-500"></i>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center min-h-[400px] flex items-center justify-center">
        <p className="text-red-600 font-medium">Error: {error}</p>
      </div>
    );
  }

  const visibleInsights = window.innerWidth >= 768 ? 2 : 1;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 relative">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Our Latest Insights
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Our specialized services are designed to enhance the productivity,
          quality, and efficiency of your textile business.
        </p>
      </div>

      <div className="relative">
        <button
          onClick={prevInsights}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-[#FC9918] hover:bg-[#E92A31] transition-colors rounded-full w-12 h-12 flex items-center justify-center"
          aria-label="Previous insights"
        >
          <i className="fas fa-chevron-left text-white text-lg"></i>
        </button>

        <div className="grid md:grid-cols-2 gap-8 mx-12">
          {insights
            .slice(currentIndex, currentIndex + visibleInsights)
            .map((insight, index) => (
              <div
                key={index}
                className="flex flex-col bg-white rounded overflow-hidden h-full"
              >
                <div className="relative h-64">
                  <img
                    src={`data:image/jpeg;base64,${insight.image}`}
                    alt={insight.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col flex-grow p-6">
                  <p className="text-sm font-semibold text-blue-900 mb-2">
                    {insight.category}
                  </p>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {insight.title}
                  </h2>
                  <p className="text-gray-800 text-base">{insight.summary}</p>
                </div>
              </div>
            ))}
        </div>

        <button
          onClick={nextInsights}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-[#FC9918] hover:bg-[#E92A31] transition-colors rounded-full w-12 h-12 flex items-center justify-center"
          aria-label="Next insights"
        >
          <i className="fas fa-chevron-right text-white text-lg"></i>
        </button>
      </div>

      <div className="text-center mt-8">
        <Link
          to="/insights"
          className="relative group inline-block py-2 px-4 text-sm text-gray-700 hover:text-gray-200 bg-[#FC9918] rounded-sm overflow-hidden transition duration-300"
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
