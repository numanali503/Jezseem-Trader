const TESTIMONIAL = require('../models/testimonial-model');

exports.postTestimonial = async (req, res) => {
    try {
        const { image, message, name, designation } = req.body;
        const testimonial = new TESTIMONIAL({ image, message, name, designation });
        await testimonial.save();
        res.status(201).json({ message: 'testimonial added successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.getTestimonial = async (req, res) => {
    try {
        const testimonial = await TESTIMONIAL.find(); // Fetches all insights
        res.status(200).json(testimonial);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
