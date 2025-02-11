const INSIGHTS = require("../models/insights-model");

// Create a new insight
exports.postInsights = async (req, res) => {
  try {
    const { image, category, title, summary, description, status } = req.body;
    const insight = new INSIGHTS({
      image,
      category,
      title,
      summary,
      description,
      status,
    });
    await insight.save();
    res.status(201).json({ message: "Insight added successfully", insight });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Get all insights
exports.getInsights = async (req, res) => {
  try {
    const insights = await INSIGHTS.find();
    res.status(200).json(insights);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Get a single insight by ID
exports.getInsightById = async (req, res) => {
  try {
    const insight = await INSIGHTS.findById(req.params.id);
    if (!insight) return res.status(404).json({ message: "Insight not found" });
    res.status(200).json(insight);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Update an insight by ID
exports.updateInsight = async (req, res) => {
  try {
    const { image, category, title, summary, description, status } = req.body;
    const insight = await INSIGHTS.findByIdAndUpdate(
      req.params.id,
      { image, category, title, summary, description, status },
      { new: true } // Return the updated document
    );
    if (!insight) return res.status(404).json({ message: "Insight not found" });
    res.status(200).json({ message: "Insight updated successfully", insight });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Delete an insight by ID
exports.deleteInsight = async (req, res) => {
  try {
    const insight = await INSIGHTS.findByIdAndDelete(req.params.id);
    if (!insight) return res.status(404).json({ message: "Insight not found" });
    res.status(200).json({ message: "Insight deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
