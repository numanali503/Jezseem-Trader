import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/data";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import toast, { Toaster } from "react-hot-toast";

const InsightsManager = () => {
  const { authURL } = useAuth();
  const [insights, setInsights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingInsight, setEditingInsight] = useState(null);
  const [editFormData, setEditFormData] = useState({
    category: "",
    title: "",
    image: null,
    summary: "",
    description: "",
    status: "",
  });

  // Fetch insights
  useEffect(() => {
    fetchInsights();
  }, [authURL]);

  const fetchInsights = async () => {
    try {
      const response = await fetch(`${authURL}/get-insight`);
      const data = await response.json();
      setInsights(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching insights:", error);
      setError("Failed to load insights");
      setLoading(false);
    }
  };

  // Handle delete
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this insight?")) {
      try {
        const response = await fetch(`${authURL}/delete-insight/${id}`, {
          method: "DELETE",
        });

        if (response.ok) {
          toast.success("Insight deleted successfully!");
          fetchInsights();
        } else {
          toast.error("Failed to delete insight");
        }
      } catch (error) {
        toast.error("Error occurred while deleting");
      }
    }
  };

  // Handle edit mode
  const handleEditClick = (insight) => {
    setEditingInsight(insight._id);
    setEditFormData({
      category: insight.category,
      title: insight.title,
      image: insight.image,
      summary: insight.summary,
      description: insight.description,
      status: insight.status,
    });
  };

  // Handle file change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditFormData({
          ...editFormData,
          image: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  // Helper function to format image source
  const getImageSource = (imageData) => {
    if (!imageData) return null;

    // Check if the image is already a complete data URL
    if (imageData.startsWith("data:image")) {
      return imageData;
    }

    // If it's just a base64 string, convert it to a complete data URL
    return `data:image/webp;base64,${imageData}`;
  };

  // Handle update
  const handleUpdate = async (id) => {
    try {
      const response = await fetch(`${authURL}/update-insight/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editFormData),
      });

      if (response.ok) {
        toast.success("Insight updated successfully!");
        setEditingInsight(null);
        fetchInsights();
      } else {
        toast.error("Failed to update insight");
      }
    } catch (error) {
      toast.error("Error occurred while updating");
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (loading) {
    return <div className="text-center p-6">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 p-6">{error}</div>;
  }

  return (
    <div className="max-w-7xl mx-auto py-6">
      <Toaster position="top-center" reverseOrder={false} />

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Manage Insights
        </h1>
        <p className="text-gray-600">
          Edit or delete your insights and articles
        </p>
      </div>

      {/* Insights List */}
      <div className="bg-white rounded-lg shadow">
        <div className="border-b border-gray-200 px-6 py-4">
          <h2 className="text-xl font-semibold text-gray-800">All Insights</h2>
          <p className="text-sm text-gray-500 mt-1">
            Showing {insights.length} insights
          </p>
        </div>

        <ul className="divide-y divide-gray-200">
          {insights.map((insight) => (
            <li key={insight._id} className="p-6">
              {editingInsight === insight._id ? (
                // Edit Form
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Category
                      </label>
                      <select
                        value={editFormData.category}
                        onChange={(e) =>
                          setEditFormData({
                            ...editFormData,
                            category: e.target.value,
                          })
                        }
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      >
                        <option value="Products">Products</option>
                        <option value="Services">Services</option>
                        <option value="Technology">Technology</option>
                        <option value="Industry">Industry</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Status
                      </label>
                      <select
                        value={editFormData.status}
                        onChange={(e) =>
                          setEditFormData({
                            ...editFormData,
                            status: e.target.value,
                          })
                        }
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      >
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                        <option value="pending">Pending</option>
                        <option value="archived">Archived</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Title
                    </label>
                    <input
                      type="text"
                      value={editFormData.title}
                      onChange={(e) =>
                        setEditFormData({
                          ...editFormData,
                          title: e.target.value,
                        })
                      }
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Image
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="mt-1 block w-full"
                    />
                    {editFormData.image && (
                      <div className="mt-2">
                        <img
                          src={getImageSource(editFormData.image)}
                          alt="Preview"
                          className="h-24 w-24 object-cover rounded-lg"
                        />
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Summary
                    </label>
                    <textarea
                      value={editFormData.summary}
                      onChange={(e) =>
                        setEditFormData({
                          ...editFormData,
                          summary: e.target.value,
                        })
                      }
                      rows="3"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Description
                    </label>
                    <ReactQuill
                      value={editFormData.description}
                      onChange={(value) =>
                        setEditFormData({ ...editFormData, description: value })
                      }
                      className="mt-1 bg-white"
                    />
                  </div>

                  <div className="flex space-x-4">
                    <button
                      onClick={() => handleUpdate(insight._id)}
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                      Save Changes
                    </button>
                    <button
                      onClick={() => setEditingInsight(null)}
                      className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                // Display View
                <div className="flex flex-col space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                        {insight.image ? (
                          <img
                            src={getImageSource(insight.image)}
                            alt={insight.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                            <span className="text-xs text-gray-400">
                              No image
                            </span>
                          </div>
                        )}
                      </div>

                      <div>
                        <h3 className="text-xl font-medium text-gray-900">
                          {insight.title}
                        </h3>
                        <div className="mt-1 text-sm text-gray-500">
                          Category:{" "}
                          <span className="capitalize">{insight.category}</span>
                        </div>
                        <div className="mt-1">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              insight.status === "active"
                                ? "bg-green-100 text-green-800"
                                : insight.status === "inactive"
                                ? "bg-red-100 text-red-800"
                                : insight.status === "pending"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-blue-100 text-blue-800"
                            }`}
                          >
                            {insight.status}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEditClick(insight)}
                        className="px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(insight._id)}
                        className="px-3 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                      >
                        Delete
                      </button>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                      Summary
                    </h4>
                    <p className="text-sm text-gray-600">{insight.summary}</p>
                  </div>

                  {insight.description && (
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">
                        Description
                      </h4>
                      <div
                        className="text-sm text-gray-600 ql-editor"
                        dangerouslySetInnerHTML={{
                          __html: insight.description,
                        }}
                      />
                    </div>
                  )}

                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex justify-between text-xs text-gray-400">
                      <span>Created: {formatDate(insight.createdAt)}</span>
                      <span>Last updated: {formatDate(insight.updatedAt)}</span>
                    </div>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InsightsManager;
