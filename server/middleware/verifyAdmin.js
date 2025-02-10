const jwt = require('jsonwebtoken');

// Middleware to verify token and check isAdmin
exports.verifyAdminToken = (req, res, next) => {
    const authHeader = req.header('Authorization'); // Get Authorization header

    // Check if Authorization header is present
    if (!authHeader) {
        return res.status(401).json({ message: 'Authorization header missing' });
    }

    const token = authHeader.startsWith('Bearer ') ? authHeader.replace('Bearer ', '') : null;

    // Check if token is extracted correctly
    if (!token) {
        return res.status(401).json({ message: 'Invalid token format, authorization denied' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Check if the user is an admin
        if (!decoded.isAdmin) {
            return res.status(403).json({ message: 'Access denied. Not an admin' });
        }

        req.user = decoded; // Attach user info to request object
        next();
    } catch (error) {
        res.status(401).json({ message: 'Token is not valid' });
    }
};
