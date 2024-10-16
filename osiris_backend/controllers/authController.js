// controllers/authController.js
const User = require('../models/User');
const asyncHandler = require("express-async-handler");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = asyncHandler(async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if user exists
        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ message: 'User already exists' });

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        user = new User({ name, email, password: hashedPassword });
        await user.save();

        // Generate JWT
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(201).json({ token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

    exports.login = asyncHandler(async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'Invalid credentials' });

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        // Generate JWT
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

exports.updateAccount = asyncHandler(async (req, res) => {
    try {
        const updates = req.body;
        if (updates.password) {
            updates.password = await bcrypt.hash(updates.password, 10);
        }

        const user = await User.findByIdAndUpdate(req.user.userId, updates, { new: true }).select('-password');
        res.json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

exports.deleteAccount = asyncHandler(async (req, res) => {
    try {
        await User.findByIdAndDelete(req.user.userId);
        res.json({ message: 'Account deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

exports.guestCheckout = asyncHandler(async (req, res) => {
    try {
        // Handle guest checkout logic, possibly creating a temporary user or processing order directly
        // This can involve storing session-based cart information
        res.json({ message: 'Guest checkout not fully implemented yet' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
