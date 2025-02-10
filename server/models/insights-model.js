const mongoose = require('mongoose');

const insightSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    summary: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const INSIGHTS = mongoose.model('insights', insightSchema);

module.exports = INSIGHTS;