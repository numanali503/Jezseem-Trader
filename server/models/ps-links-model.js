const mongoose = require('mongoose');

// Define the main psLinkSchema with a simple category containing link data
const psLinkSchema = new mongoose.Schema({
    categoryName: {
        type: String,
        required: true
    },
    linkName: {
        type: String,
        required: true
    },
    linkURL: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    overview: {
        type: String,
    },
    description: {
        type: String,
    },

}, { timestamps: true });

const PSLInks = mongoose.model('psLinks', psLinkSchema);

module.exports = PSLInks;
