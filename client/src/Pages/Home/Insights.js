import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from '../../context/data';

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
  }, []);

  const nextInsights = () => {
    if (insights.length > 2) {
      setCurrentIndex((prevIndex) => (prevIndex + 2) % insights.length);
    }
  };

  const prevInsights = () => {
    if (insights.length > 2) {
      setCurrentIndex((prevIndex) => {
        const newIndex = prevIndex - 2;
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

  return (
    <div className="relative max-w-[80rem] mx-auto rounded-lg bg--300 px-4 sm:px-8 md:px-12">
      <h1 className="text-2xl font-medium text-center text-slate-800 md:text-4xl">Our Latest Insights</h1>
      <p className="text-md text-center text-slate-600 mt-4 mb-8">
        Our specialized services are designed to enhance the productivity,
        quality, and efficiency of your textile business.
      </p>
      <div className="relative flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 mt-8">
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-20 z-10 ">
          <button
            onClick={prevInsights}
            className="bg-[#FC9918] rounded-full hover:bg-[#E92A31] transition duration-300 w-12 h-12 flex items-center justify-center"
          >
            <i className="fas fa-chevron-left text-white text-lg"></i>
          </button>
        </div>

        <div className="space-x-4 flex">
          {insights.slice(currentIndex, currentIndex + 2).map((insight, index) => (
            <div key={index} className="h-full w-full flex flex-col space-y-4 items-center justify-center ">
              <img src={`data:image/jpeg;base64,${insight.image}`} alt="err" className="h-64  sm:h-80 w-full" />
              <h1 className="text-base sm:text-md font-semibold w-full text-blue-900">{insight.category}</h1>
              <h1 className="text-lg sm:text-xl font-bold w-full">{insight.title}</h1>
              <h1 className="w-full text-md text-gray-800">{insight.summary}</h1>
            </div>
          ))}
        </div>

        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-20 z-10 ">
          <button
            onClick={nextInsights}
            className="bg-[#FC9918] rounded-full hover:bg-[#E92A31] transition duration-300 w-12 h-12 flex items-center justify-center"
          >
            <i className="fas fa-chevron-right text-white text-lg"></i>
          </button>
        </div>
      </div>

      <div className="mt-12 w-full flex items-center justify-center">
        <Link to="/insights" className="relative group inline-block py-2 px-4 text-sm text-gray-700 hover:text-gray-200 bg-[#FC9918] rounded-sm overflow-hidden transition duration-300">
          <div className="absolute top-0 right-full w-full h-full bg-[#E92A31] transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
          <span className="relative tracking-wider font-semibold">See all Insights</span>
        </Link>
      </div>
    </div>
  );
}

export default Insights;