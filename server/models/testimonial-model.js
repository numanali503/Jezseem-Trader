const mongoose = require("mongoose");

const testimonialSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: false,
    },
    message: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const TESTIMONIAL = mongoose.model("testimonial", testimonialSchema);

module.exports = TESTIMONIAL;
