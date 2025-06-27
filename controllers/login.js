const { v4: uuidv4 } = require('uuid');
const User = require('../models/user.js');
const bcrypt = require('bcrypt');
const { setUser } = require('./service/auth.js'); // Import the setUser 



async function handleUserLogin(req, res) {
    try {
        // Check if the request body contains username and password
        if (!req.body || !req.body.username || !req.body.password) {
            console.log('Invalid login attempt: Missing username or password');
            return res.status(400).json({ message: 'Username and password are required' });
        }
        const { username, password } = req.body;
        console.log('Login attempt:', username, password);
        
        // Simulate a user login check
        const user = await User.findOne({ email: username});
        if (!user) {
            console.log('Invalid login attempt');
            return res.status(401).json({ message: 'Invalid username or password' });
        }
        if (username === user.email && bcrypt.compareSync(password, user.password)) {
            const token = setUser(user); // Set the user in the request 
            console.log(`User logged in with token: ${token}`);
            res.status(200).json({ message: 'Login successful', token });
        } else {
            console.log('Invalid login attempt');
            res.status(401).json({ message: 'Invalid username or password' });
        }
    } catch (error) {
            console.error('Error during login:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
}

module.exports = {handleUserLogin};