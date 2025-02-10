import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import MegaMenuPreview from "./MegaMenuPreview";
import { useAuth } from "../../context/data";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Make sure to import the styles

function PSLinks() {
  const { authURL } = useAuth();
  const [formData, setFormData] = useState({
    category: "",
    pageLinkName: "",
    image: null, // Image state
    overview: "", // Overview state
    description: "", // Description state
  });

  // Compute the URL based on the current form data
  const pageUrl =
    formData.category && formData.pageLinkName
      ? `https://Jezseem Traders-solution.vercel.app/${formData.category
          .toLowerCase()
          .replace(/\s+/g, "-")}/${formData.pageLinkName
          .toLowerCase()
          .replace(/\s+/g, "-")}`
      : "";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          image: reader.result, // Store base64 encoded image
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDescriptionChange = (value) => {
    setFormData({
      ...formData,
      description: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create the linkURL by transforming pageLinkName (lowercase and remove spaces)
    const linkURL = `${formData.category
      .toLowerCase()
      .replace(/\s+/g, "-")}/${formData.pageLinkName
      .toLowerCase()
      .replace(/\s+/g, "-")}`;

    // Modify the payload to match the expected keys
    const payload = {
      categoryName: formData.category,
      linkName: formData.pageLinkName,
      linkURL: linkURL,
      image: formData.image, // Include the base64 image
      overview: formData.overview, // Include overview
      description: formData.description, // Include description
    };

    try {
      const response = await fetch(`${authURL}/post-pslinks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        toast.success("Product or Service added successfully!");
        setFormData({
          category: "",
          pageLinkName: "",
          image: null,
          overview: "",
          description: "",
        }); // Reset form
      } else {
        toast.error("Failed to add Product or Service. Please try again.");
      }
    } catch (error) {
      toast.error("Error occurred while submitting data.");
    }
  };

  return (
    <div className="p-12">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-col md:flex-row items-center justify-between w-full space-y-4 md:space-y-0 md:space-x-8">
        <h1 className="text-2xl font-bold text-center text-mainBlue md:text-4xl md:whitespace-nowrap">
          Product & Services MegaMenu Pages
        </h1>
        <div className="bg-gray-300 h-0.5 md:w-full w-0"></div>
      </div>
      <h1 className="text-md text-justify mt-4">
        What truly sets Jezseem Traderss apart is our customer-centric ethos.
      </h1>

      <form onSubmit={handleSubmit}>
        <div className="flex items-center justify-center space-x-8 w-full mt-8">
          <div className="relative mb-4 w-full">
            <label
              htmlFor="category"
              className="leading-7 text-sm text-gray-600"
            >
              Category
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="w-full bg-white rounded-sm border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
            >
              <option value="" disabled>
                Select a Category
              </option>
              <option value="products">Products</option>
              <option value="consulting-services">Consulting Services</option>
              <option value="after-sales-services">After Sales Services</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="relative mb-4 w-full">
            <label
              htmlFor="pageLinkName"
              className="leading-7 text-sm text-gray-600"
            >
              Page Link Name
            </label>
            <input
              id="pageLinkName"
              name="pageLinkName"
              type="text"
              value={formData.pageLinkName}
              onChange={handleInputChange}
              className="w-full bg-white rounded-sm border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>

        {/* File Input for Image */}
        <div className="relative mb-4 w-full">
          <label htmlFor="image" className="leading-7 text-sm text-gray-600">
            Image
          </label>
          <input
            id="image"
            name="image"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full bg-white rounded-sm border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>

        {/* Textarea for Overview */}
        <div className="relative mb-4 w-full">
          <label htmlFor="overview" className="leading-7 text-sm text-gray-600">
            Overview
          </label>
          <textarea
            id="overview"
            name="overview"
            value={formData.overview}
            onChange={handleInputChange}
            rows="4"
            className="w-full bg-white rounded-sm border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>

        {/* React Quill for Description */}
        <div className="relative mb-4 w-full">
          <label
            htmlFor="description"
            className="leading-7 text-sm text-gray-600"
          >
            Description
          </label>
          <ReactQuill
            id="description"
            value={formData.description}
            onChange={handleDescriptionChange}
            className="w-full border border-gray-300 rounded-sm"
          />
        </div>

        <div className="flex items-start justify-between">
          <button
            type="submit"
            className="relative group inline-block py-3 px-8 text-sm text-blue-50 bg-mainYellow rounded-sm overflow-hidden transition duration-300"
          >
            <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
            <span className="relative font-semibold">
              Add Products or Services
            </span>
          </button>

          {pageUrl && (
            <div className="text-sm text-gray-500">
              <span className="font-medium">Page URL will be:</span>
              <div className="text-xs text-blue-600 mt-2 whitespace-nowrap">
                {pageUrl}
              </div>
            </div>
          )}
        </div>
      </form>
      <MegaMenuPreview />
    </div>
  );
}

export default PSLinks;
