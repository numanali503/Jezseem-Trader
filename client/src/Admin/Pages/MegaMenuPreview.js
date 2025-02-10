import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/data";

function MegaMenuPreview() {
  const { authURL } = useAuth();
  const [psLinks, setPsLinks] = useState([]);

  useEffect(() => {
    fetch(`${authURL}/get-pslinks`)
      .then((response) => response.json())
      .then((data) => setPsLinks(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [psLinks]);

  // Group the links by categoryName
  const groupedLinks = psLinks.reduce((acc, link) => {
    const { categoryName, linkName } = link;
    if (!acc[categoryName]) {
      acc[categoryName] = [];
    }
    acc[categoryName].push(linkName);
    return acc;
  }, {});

  return (
    <div>
      <div className="text-sm text-gray-500 mt-8 mb-1">
        <span className="font-medium">Current MegaMenu</span>
      </div>
      <div className="flex items-start justify-start p-12 space-x-8 text-center bg-mainBlue text-gray-200 border-b-8 border-mainYellow">
        <div className="text-start w-full">
          <h2 className="text-lg font-semibold mb-4">Overview</h2>
          <h1 className="text-2xl font-bold mb-4 text-gray-200">
            Product & Services
          </h1>
          <p className="mb-8 text-sm">
            At Jezseem Traders, we provide a comprehensive range of products and
            services to meet the needs of the textile and manufacturing
            industries.
          </p>
        </div>

        {Object.keys(groupedLinks).map((categoryName, index) => (
          <div key={index} className="text-start w-1/2">
            <label className="font-bold underline capitalize">{`${categoryName}`}</label>
            <ul>
              {groupedLinks[categoryName].map((link, idx) => (
                <li key={idx} className="capitalize">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MegaMenuPreview;
