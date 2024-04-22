const bcrypt = require('bcrypt');
const { User, Token } = require('./models');

// Controller for user registration
const registerUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        // Hash the password before saving it to the database
        const hashedPassword = await bcrypt.hash(password, 10);
        // Create a new user record in the database
        const newUser = await User.create({ username, password: hashedPassword });
        res.status(201).json(newUser);
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Controller for user login
const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        // Find the user by username in the database
        const user = await User.findOne({ where: { username } });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        // Compare the provided password with the hashed password stored in the database
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ error: 'Invalid password' });
        }
        res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        console.error('Error logging in user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Controller for user logout
const logoutUser = async (req, res) => {
    // Logic for logging out the user (e.g., invalidating tokens, clearing session)
};

// Controller for retrieving users
const getUsers = async (req, res) => {
    try {
        // Retrieve all users from the database
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        console.error('Error retrieving users:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Controller for sending SMS
const sendSms = async (req, res) => {
    // Logic for sending SMS messages (e.g., using a third-party API)
};

module.exports = { registerUser, loginUser, logoutUser, getUsers, sendSms };
