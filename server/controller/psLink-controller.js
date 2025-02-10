const PSLInks = require('../models/ps-links-model');

exports.postPSLinks = async (req, res) => {
    try {
        const { categoryName, linkName, linkURL, overview, description, image } = req.body;
        const psLink = new PSLInks({ categoryName, linkName, linkURL, overview, description, image });
        await psLink.save();
        res.status(201).json({ message: 'Links added successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.getPSLinks = async (req, res) => {
    try {
        const psLinks = await PSLInks.find();
        res.status(200).json(psLinks);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};
