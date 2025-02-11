import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import toast, { Toaster } from "react-hot-toast";
import { useAuth } from "../../context/data";
import InsightsManager from "./InsightsManager";

function Insights() {
  const { authURL } = useAuth();
  const [content, setContent] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    fileBase64: "",
    status: "",
    summary: "",
  });

  const handleContentChange = (value) => {
    setContent(value); // This captures raw HTML from ReactQuill
  };

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
          fileBase64: reader.result.split(",")[1], // Get Base64 part
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      title: formData.title,
      category: formData.category,
      status: formData.status,
      summary: formData.summary,
      description: content, // Rich text content in raw HTML format
      image: formData.fileBase64, // Image as Base64 string
    };

    try {
      const response = await fetch(`${authURL}/post-insight`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const result = await response.json();
        toast.success("Insight posted successfully!");
        setFormData({
          title: "",
          category: "",
          fileBase64: "",
          status: "",
          summary: "",
          image: "",
        });
        setContent(""); // Clear the editor content
      } else {
        throw new Error("Failed to post insight");
      }
    } catch (error) {
      toast.error("Error posting insight. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="p-12">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-col md:flex-row items-center justify-between w-full space-y-4 md:space-y-0 md:space-x-8">
        <h1 className="text-2xl font-bold text-center text-mainBlue md:text-4xl md:whitespace-nowrap">
          Insights and News
        </h1>
        <div className="bg-gray-300 h-0.5 md:w-full w-0"></div>
      </div>
      <h1 className="text-md text-justify mt-4">
        What truly sets Jezseem Traderss apart is our customer-centric ethos.
      </h1>

      <form onSubmit={handleSubmit}>
        <div className="flex items-center justify-center space-x-8 w-full mt-8">
          <div className="relative mb-4 w-full">
            <label htmlFor="title" className="leading-7 text-sm text-gray-600">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full bg-white rounded-sm border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4 w-full">
            <label
              htmlFor="category"
              className="leading-7 text-sm text-gray-600"
            >
              Category
            </label>
            <input
              type="text"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="w-full bg-white rounded-sm border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>

        <div className="relative mb-4 w-full">
          <label
            htmlFor="summary"
            className="leading-7 text-sm text-gray-600 capitalize"
          >
            Summary - [For Homepage only]
          </label>
          <textarea
            id="summary"
            name="summary" // Add the name attribute
            value={formData.summary}
            onChange={handleInputChange}
            className="w-full bg-white rounded-sm border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>

        <div className="flex items-center justify-center space-x-8 w-full">
          <div className="relative mb-4 w-full">
            <label
              htmlFor="file-input"
              className="leading-7 text-sm text-gray-600"
            >
              Upload Image
            </label>
            <input
              type="file"
              name="file"
              id="file-input"
              onChange={handleFileChange}
              className="block bg-white w-full border border-gray-200 shadow-sm rounded-sm text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none
                            file:bg-gray-50 file:border-0 file:me-4 file:py-3 file:px-4"
            />
          </div>
          <div className="relative mb-4 w-full">
            <label htmlFor="status" className="leading-7 text-sm text-gray-600">
              Status
            </label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleInputChange}
              className="w-full bg-white rounded-sm border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out"
            >
              <option value="" disabled>
                Select status
              </option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="pending">Pending</option>
              <option value="archived">Archived</option>
            </select>
          </div>
        </div>

        <div className="my-6">
          <label
            htmlFor="category"
            className="leading-7 text-sm text-gray-600 capitalize"
          >
            For Proper Full Insight Page
          </label>
          <ReactQuill
            theme="snow"
            value={content}
            onChange={handleContentChange}
            placeholder="Insights Description here..."
          />
        </div>

        <button
          type="submit"
          className="relative group inline-block py-3 px-8 text-sm text-blue-50 bg-mainYellow rounded-sm overflow-hidden transition duration-300"
        >
          <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
          <span className="relative font-semibold">Post Insight</span>
        </button>
      </form>
      <InsightsManager />
    </div>
  );
}

export default Insights;
