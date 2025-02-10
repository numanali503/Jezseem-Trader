const ADMIN = require('../models/admin-model');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        let admin = await ADMIN.findOne({ email });
        if (admin) {
            return res.status(400).json({ message: 'ADMIN already exists' });
        }
        admin = new ADMIN({ name, email, password });
        await admin.save();
        res.status(201).json({ message: 'ADMIN registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(email);
        console.log(password);
        
        const admin = await ADMIN.findOne({ email });
        if (!admin) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        const isMatch = await admin.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        await admin.save();

        const token = jwt.sign(
            { id: admin._id, isAdmin: admin.isAdmin },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );
        res.json({ email, token });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Server error' });
    }
};
