import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/data";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import toast, { Toaster } from "react-hot-toast";

const MegaMenuPreview = () => {
  const { authURL } = useAuth();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingProduct, setEditingProduct] = useState(null);
  const [editFormData, setEditFormData] = useState({
    categoryName: "",
    linkName: "",
    image: null,
    overview: "",
    description: "",
  });
  const generatePageUrl = (category, linkName) => {
    if (category && linkName) {
      return `https://www.jezseemtraders.com/${category
        .toLowerCase()
        .replace(/\s+/g, "-")}/${linkName.toLowerCase().replace(/\s+/g, "-")}`;
    }
    return "";
  };
  // Fetch products
  useEffect(() => {
    fetchProducts();
  }, [authURL]);

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${authURL}/get-all-pslinks`);
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setError("Failed to load products");
      setLoading(false);
    }
  };

  // Handle delete
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        const response = await fetch(`${authURL}/delete-pslink/${id}`, {
          method: "DELETE",
        });

        if (response.ok) {
          toast.success("Product deleted successfully!");
          fetchProducts(); // Refresh the list
        } else {
          toast.error("Failed to delete product");
        }
      } catch (error) {
        toast.error("Error occurred while deleting");
      }
    }
  };

  // Handle edit mode
  const handleEditClick = (product) => {
    setEditingProduct(product._id);
    setEditFormData({
      categoryName: product.categoryName,
      linkName: product.linkName,
      image: product.image,
      overview: product.overview,
      description: product.description,
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

  // Handle update
  const handleUpdate = async (id) => {
    try {
      // Generate linkURL
      const linkURL = `${editFormData.categoryName
        .toLowerCase()
        .replace(/\s+/g, "-")}/${editFormData.linkName
        .toLowerCase()
        .replace(/\s+/g, "-")}`;

      const updatedData = {
        ...editFormData,
        linkURL: linkURL,
      };
      const response = await fetch(`${authURL}/update-pslink/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editFormData),
      });

      if (response.ok) {
        toast.success("Product updated successfully!");
        setEditingProduct(null);
        fetchProducts(); // Refresh the list
      } else {
        toast.error("Failed to update product");
      }
    } catch (error) {
      toast.error("Error occurred while updating");
    }
  };

  if (loading) {
    return <div className="text-center p-6">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 p-6">{error}</div>;
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="max-w-7xl mx-auto py-6">
      <Toaster position="top-center" reverseOrder={false} />

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Manage Products and Services
        </h1>
        <p className="text-gray-600">
          Edit or delete your products and services
        </p>
      </div>

      {/* Products List */}
      <div className="bg-white rounded-lg shadow">
        <div className="border-b border-gray-200 px-6 py-4">
          <h2 className="text-xl font-semibold text-gray-800">All Products</h2>
          <p className="text-sm text-gray-500 mt-1">
            Showing {products.length} products
          </p>
        </div>

        <ul className="divide-y divide-gray-200">
          {products.map((product) => (
            <li key={product._id} className="p-6">
              {editingProduct === product._id ? (
                // Edit Form
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Category
                      </label>
                      <select
                        value={editFormData.categoryName}
                        onChange={(e) =>
                          setEditFormData({
                            ...editFormData,
                            categoryName: e.target.value,
                          })
                        }
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      >
                        <option value="products">Products</option>
                        <option value="consulting-services">
                          Consulting Services
                        </option>
                        <option value="after-sales-services">
                          After Sales Services
                        </option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Link Name
                      </label>
                      <input
                        type="text"
                        value={editFormData.linkName}
                        onChange={(e) =>
                          setEditFormData({
                            ...editFormData,
                            linkName: e.target.value,
                          })
                        }
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
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
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Overview
                    </label>
                    <textarea
                      value={editFormData.overview}
                      onChange={(e) =>
                        setEditFormData({
                          ...editFormData,
                          overview: e.target.value,
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
                    {/* URL Preview */}
                    <div className="mt-4 text-sm text-gray-500">
                      <span className="font-medium">Page URL will be:</span>
                      <div className="text-xs text-blue-600 mt-2 whitespace-nowrap">
                        {generatePageUrl(
                          editFormData.categoryName,
                          editFormData.linkName
                        )}
                      </div>
                    </div>

                    <button
                      onClick={() => handleUpdate(product._id)}
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                      Save Changes
                    </button>
                    <button
                      onClick={() => setEditingProduct(null)}
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
                        {product.image ? (
                          <img
                            src={product.image}
                            alt={product.linkName}
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
                          {product.linkName}
                        </h3>
                        <div className="mt-1 text-sm text-gray-500">
                          Category:{" "}
                          <span className="capitalize">
                            {product.categoryName}
                          </span>
                        </div>
                        <div className="mt-1 text-xs text-blue-600">
                          {product.linkURL && (
                            <a
                              href={`https://www.jezseemtraders.com/${product.linkURL}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              https://www.jezseemtraders.com/{product.linkURL}
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEditClick(product)}
                        className="px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(product._id)}
                        className="px-3 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                      >
                        Delete
                      </button>
                    </div>
                  </div>

                  {product.description && (
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">
                        Description
                      </h4>
                      <div
                        className="text-sm text-gray-600 ql-editor"
                        dangerouslySetInnerHTML={{
                          __html: product.description,
                        }}
                      />
                    </div>
                  )}

                  {product.overview && (
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">
                        Overview
                      </h4>
                      <p className="text-sm text-gray-600">
                        {product.overview}
                      </p>
                    </div>
                  )}

                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex justify-between text-xs text-gray-400">
                      <span>Created: {formatDate(product.createdAt)}</span>
                      <span>Last updated: {formatDate(product.updatedAt)}</span>
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

export default MegaMenuPreview;
