import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useAuth } from "../../context/data";
import TestimonialList from "./TestimonialList";

function Testimonial() {
  const { authURL } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    message: "",
    detailedMessage: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name: formData.name,
      designation: formData.designation,
      image: formData.image, // Image as Base64 string
      message: formData.message,
    };

    try {
      const response = await fetch(`${authURL}/post-testimonial`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        toast.success("Testimonial posted successfully!");
        setFormData({
          name: "",
          designation: "",
          image: "",
          message: "",
          detailedMessage: "",
        });
      } else {
        throw new Error("Failed to post testimonial");
      }
    } catch (error) {
      toast.error("Error posting testimonial. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="p-12">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-col md:flex-row items-center justify-between w-full space-y-4 md:space-y-0 md:space-x-8">
        <h1 className="text-2xl font-bold text-center text-mainBlue md:text-4xl md:whitespace-nowrap">
          Testimonials
        </h1>
        <div className="bg-gray-300 h-0.5 md:w-full w-0"></div>
      </div>
      <h1 className="text-md text-justify mt-4">
        What truly sets Jezseem Traderss apart is our customer-centric ethos.
      </h1>

      <form onSubmit={handleSubmit}>
        <div className="flex items-center justify-center space-x-8 w-full mt-8">
          <div className="relative mb-4 w-full">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full bg-white rounded-sm border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4 w-full">
            <label
              htmlFor="designation"
              className="leading-7 text-sm text-gray-600"
            >
              Designation
            </label>
            <input
              type="text"
              id="designation"
              name="designation"
              value={formData.designation}
              onChange={handleInputChange}
              className="w-full bg-white rounded-sm border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>

        <div className="relative mb-4 w-full">
          <label
            htmlFor="message"
            className="leading-7 text-sm text-gray-600 capitalize"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="w-full bg-white rounded-sm border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>

        <button
          type="submit"
          className="relative group inline-block py-3 px-8 text-sm text-blue-50 bg-mainYellow rounded-sm overflow-hidden transition duration-300"
        >
          <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
          <span className="relative font-semibold">Post Testimonial</span>
        </button>
      </form>
      <TestimonialList />
    </div>
  );
}

export default Testimonial;
