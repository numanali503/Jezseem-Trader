const INSIGHTS = require('../models/insights-model');

exports.postInsights = async (req, res) => {
    try {
        const { image, category, title, summary, description, status } = req.body;
        const insight = new INSIGHTS({ image, category, title, summary, description, status });
        await insight.save();
        res.status(201).json({ message: 'Insight added successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.getInsights = async (req, res) => {
    try {
        const insights = await INSIGHTS.find(); // Fetches all insights
        res.status(200).json(insights);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
