const PSLInks = require("../models/ps-links-model");

// Create (POST)
exports.createPSLink = async (req, res) => {
  try {
    const { categoryName, linkName, linkURL, overview, description, image } =
      req.body;
    const psLink = await PSLInks.create({
      categoryName,
      linkName,
      linkURL,
      overview,
      description,
      image,
    });
    res.status(201).json({ message: "Link created successfully", psLink });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Read (GET all)
exports.getAllPSLinks = async (req, res) => {
  try {
    const psLinks = await PSLInks.find();
    res.status(200).json(psLinks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Read (GET by ID)
exports.getPSLinkById = async (req, res) => {
  try {
    const psLink = await PSLInks.findById(req.params.id);
    if (!psLink) {
      return res.status(404).json({ message: "Link not found" });
    }
    res.status(200).json(psLink);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Update (PUT)
exports.updatePSLink = async (req, res) => {
  try {
    const updatedPSLink = await PSLInks.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedPSLink) {
      return res.status(404).json({ message: "Link not found" });
    }
    res
      .status(200)
      .json({ message: "Link updated successfully", updatedPSLink });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete (DELETE)
exports.deletePSLink = async (req, res) => {
  try {
    const deletedPSLink = await PSLInks.findByIdAndDelete(req.params.id);
    if (!deletedPSLink) {
      return res.status(404).json({ message: "Link not found" });
    }
    res.status(200).json({ message: "Link deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
