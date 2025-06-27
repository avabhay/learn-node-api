const { getUser } = require('../service/auth.js'); // Import the getUser function

// Middleware to restrict access to logged-in users only
// This middleware checks if the user is logged in by verifying the session ID or token
async function restrictToLoggedInUserOnly(req, res, next) {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }

    const user = getUser(token); // Retrieve the user associated with the session ID
    if (!user) {
        return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }

    req.user = user; // Attach the user to the request object
    next(); // Proceed to the next middleware or route handler
    
}

module.exports = {
    restrictToLoggedInUserOnly
};