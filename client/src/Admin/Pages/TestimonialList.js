import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useAuth } from "../../context/data";

function TestimonialList() {
  const { authURL } = useAuth();
  const [testimonials, setTestimonials] = useState([]);
  const [editing, setEditing] = useState(null);
  const [editData, setEditData] = useState({
    name: "",
    designation: "",
    image: "",
    message: "",
  });

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const response = await fetch(`${authURL}/get-testimonial`);
      const data = await response.json();
      setTestimonials(data);
    } catch (error) {
      toast.error("Error fetching testimonials.");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this testimonial?"))
      return;
    try {
      const response = await fetch(`${authURL}/delete-testimonial/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        toast.success("Testimonial deleted successfully!");
        fetchTestimonials();
      } else {
        throw new Error("Failed to delete testimonial");
      }
    } catch (error) {
      toast.error("Error deleting testimonial.");
    }
  };

  const handleEdit = (testimonial) => {
    setEditing(testimonial._id);
    setEditData(testimonial);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData({
      ...editData,
      [name]: value,
    });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${authURL}/update-testimonial/${editing}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editData),
      });
      if (response.ok) {
        toast.success("Testimonial updated successfully!");
        setEditing(null);
        fetchTestimonials();
      } else {
        throw new Error("Failed to update testimonial");
      }
    } catch (error) {
      toast.error("Error updating testimonial.");
    }
  };

  return (
    <div className="py-12">
      <Toaster position="top-center" reverseOrder={false} />
      <h1 className="text-2xl font-bold mb-8">Testimonial List</h1>
      <div className="space-y-4">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial._id}
            className="p-4 border rounded-md shadow-md"
          >
            {editing === testimonial._id ? (
              <form onSubmit={handleEditSubmit}>
                <div className="mb-2">
                  <label className="block text-sm">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={editData.name}
                    onChange={handleEditChange}
                    className="w-full border rounded-md p-2"
                  />
                </div>
                <div className="mb-2">
                  <label className="block text-sm">Designation</label>
                  <input
                    type="text"
                    name="designation"
                    value={editData.designation}
                    onChange={handleEditChange}
                    className="w-full border rounded-md p-2"
                  />
                </div>
                <div className="mb-2">
                  <label className="block text-sm">Message</label>
                  <textarea
                    name="message"
                    value={editData.message}
                    onChange={handleEditChange}
                    className="w-full border rounded-md p-2"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setEditing(null)}
                  className="ml-2 bg-gray-500 text-white px-4 py-2 rounded-md"
                >
                  Cancel
                </button>
              </form>
            ) : (
              <div>
                <h2 className="text-lg font-bold">{testimonial.name}</h2>
                <p className="text-sm">{testimonial.designation}</p>
                <p className="mt-2">{testimonial.message}</p>
                <div className="mt-4">
                  <button
                    onClick={() => handleEdit(testimonial)}
                    className="bg-yellow-500 text-white px-4 py-2 rounded-md"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(testimonial._id)}
                    className="ml-2 bg-red-500 text-white px-4 py-2 rounded-md"
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestimonialList;
