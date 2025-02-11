import React, { useState, useEffect } from "react";
import Loader from "../../../Components/Loader";
import { useLocation } from "react-router-dom";

function DynamicProducts() {
  // State to track loading status and data
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const fetchData = () => {
      const storedData = localStorage.getItem("psLinks");

      // Log to see the data from localStorage
      console.log("Stored Data:", storedData);

      if (storedData) {
        try {
          const parsedData = JSON.parse(storedData);
          console.log("Parsed Data:", parsedData);

          // Remove the leading slash from location.pathname
          const pathname = location.pathname.replace(/^\/+/, "");
          console.log("Matching with pathname:", pathname);

          // Match pathname with linkURL in the data array
          const matchedData = parsedData.find(
            (item) => item.linkURL === pathname
          );
          console.log("Matched Data:", matchedData);

          if (matchedData) {
            setData(matchedData); // Set matched data
          } else {
            console.log("No matching product found for the current URL");
          }
        } catch (error) {
          console.error("Error parsing data from localStorage:", error);
        }
      } else {
        console.log("No data found in localStorage.");
      }

      setLoading(false); // Set loading to false once data is fetched
    };

    fetchData();
  }, [location.pathname]); // Re-run when location.pathname changes

  // If loading, display the loader
  if (loading) {
    return <Loader />; // Display the loader while data is being fetched
  }

  // If no data is found, handle this case (optional)
  if (!data) {
    return <div>No product data available.</div>;
  }

  return (
    <div className="mb-24">
      <div className="bg-slate-900">
        <div className="max-w-[60rem] mx-auto flex flex-col items-center justify-center min-h-[50vh] text-white px-4 md:px-6 py-8 md:py-12">
          <p className="mb-4 uppercase tracking-wider text-sm font-semibold text-center">
            {data.categoryName}
          </p>
          <div className="flex flex-col md:flex-row items-center justify-between w-full space-y-4 md:space-y-0 md:space-x-8">
            <div className="bg-gray-300 h-0.5 md:w-1/3 w-0"></div>
            <h1 className="text-xl sm:text-2xl font-bold text-center text-mainYellow md:text-4xl md:whitespace-nowrap px-2">
              {data.linkName}
            </h1>
            <div className="bg-gray-300 h-0.5 md:w-1/3 w-0"></div>
          </div>
          <p className="mt-2 text-center px-4 sm:px-6">{data.overview}</p>
        </div>
      </div>

      <div className="max-w-[85rem] mx-auto w-full px-4 sm:px-8 md:px-16 lg:px-24 py-8 md:py-12">
        <img
          src={data.image}
          alt="Product"
          className="w-full h-[35rem] object-cover"
        />
      </div>

      <div className="max-w-[85rem] mx-auto w-full px-4 sm:px-8 md:px-16 lg:px-24 py-4">
        <iframe
          srcDoc={`<html><head><style>body {   font-family: "Montserrat", sans-serif; }</style></head><body>${data.description}</body></html>`}
          title="Product Description"
          style={{ width: "100%", height: "auto", border: "none" }}
        />
      </div>

      <div className="max-w-[85rem] mx-auto w-full px-4 sm:px-8 md:px-16 lg:px-24">
        <h1 className="font-bold flex flex-wrap items-center">
          Tags:
          <span className="mt-2 md:mt-0 mx-2 md:mx-4 capitalize text-sm font-light">
            {data.categoryName}, {data.linkName}
          </span>
        </h1>
      </div>
    </div>
  );
}

export default DynamicProducts;
