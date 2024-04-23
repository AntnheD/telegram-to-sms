// routes.js



// Middleware function to authenticate users
const authenticateUser = (req, res, next) => {
    // Check if the user is authenticated
    if (req.isAuthenticated()) {
        // If authenticated, proceed to the next middleware or route handler
        return next();
    } else {
        // If not authenticated, redirect the user to the login page or send an error response
        return res.status(401).json({ error: 'Unauthorized' });
    }
};

// Export the middleware function
module.exports = { authenticateUser };

// routes.js


const express = require('express');
const router = express.Router();
const { authenticateUser } = require('./middleware');
const { registerUser, loginUser, logoutUser, getUsers, sendSms } = require('./controllers');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', authenticateUser, logoutUser);
router.get('/users', authenticateUser, getUsers);
router.post('/send-sms', authenticateUser, sendSms);

module.exports = router;
// routes.js



// Middleware function to authenticate users
const authenticateUser = (req, res, next) => {
    // Check if the user is authenticated
    if (req.isAuthenticated()) {
        // If authenticated, proceed to the next middleware or route handler
        return next();
    } else {
        // If not authenticated, redirect the user to the login page or send an error response
        return res.status(401).json({ error: 'Unauthorized' });
    }
};

// Export the middleware function
module.exports = { authenticateUser };

// routes.js


const express = require('express');
const router = express.Router();
const { authenticateUser } = require('./middleware');
const { registerUser, loginUser, logoutUser, getUsers, sendSms } = require('./controllers');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', authenticateUser, logoutUser);
router.get('/users', authenticateUser, getUsers);
router.post('/send-sms', authenticateUser, sendSms);

module.exports = router;
