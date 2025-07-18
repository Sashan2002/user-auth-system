const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const authenticateToken = require('../middlewares/auth');
const validateInput = require('../middlewares/validation');

// JWT Token generation
const generateToken = (userId) => {
    return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
};

// Register Route
router.post('/register', validateInput(['username', 'email', 'password']), async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const existingUser = await User.findOne({ $or: [{ email }, { username }] });
        if (existingUser) {
            return res.status(400).json({ message: 'User with this email or username already exists' });
        }
        const user = new User({ username, email, password });
        await user.save();
        const token = generateToken(user._id);
        res.status(201).json({ message: 'User registered', token, user });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Login Route
router.post('/login', validateInput(['email', 'password']), async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email: email.toLowerCase() });
        if (!user || !user.isActive) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const isValid = await user.comparePassword(password);
        if (!isValid) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        user.lastLogin = new Date();
        await user.save();
        const token = generateToken(user._id);
        res.json({ message: 'Login successful', token, user });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Profile Route
router.get('/profile', authenticateToken, (req, res) => {
    res.json({ user: req.user });
});

module.exports = router;
