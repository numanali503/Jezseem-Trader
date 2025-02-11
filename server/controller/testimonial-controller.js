const TESTIMONIAL = require("../models/testimonial-model");

// Create a new testimonial
exports.postTestimonial = async (req, res) => {
  try {
    const { image, message, name, designation } = req.body;
    const testimonial = new TESTIMONIAL({ image, message, name, designation });
    await testimonial.save();
    res.status(201).json({ message: "Testimonial added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Get all testimonials
exports.getTestimonials = async (req, res) => {
  try {
    const testimonials = await TESTIMONIAL.find();
    res.status(200).json(testimonials);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Get a single testimonial by ID
exports.getTestimonialById = async (req, res) => {
  try {
    const testimonial = await TESTIMONIAL.findById(req.params.id);
    if (!testimonial) {
      return res.status(404).json({ message: "Testimonial not found" });
    }
    res.status(200).json(testimonial);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Update a testimonial by ID
exports.updateTestimonial = async (req, res) => {
  try {
    const { image, message, name, designation } = req.body;
    const testimonial = await TESTIMONIAL.findByIdAndUpdate(
      req.params.id,
      { image, message, name, designation },
      { new: true, runValidators: true }
    );
    if (!testimonial) {
      return res.status(404).json({ message: "Testimonial not found" });
    }
    res
      .status(200)
      .json({ message: "Testimonial updated successfully", testimonial });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Delete a testimonial by ID
exports.deleteTestimonial = async (req, res) => {
  try {
    const testimonial = await TESTIMONIAL.findByIdAndDelete(req.params.id);
    if (!testimonial) {
      return res.status(404).json({ message: "Testimonial not found" });
    }
    res.status(200).json({ message: "Testimonial deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
