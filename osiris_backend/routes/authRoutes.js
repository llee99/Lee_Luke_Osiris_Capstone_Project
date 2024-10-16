const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware.js");

//Registration and Login
router.post("/register", authController.register);
router.post("/login", authController.login);

// Account Management (Protected Routes)
router.put('/update', authMiddleware, authController.updateAccount);
router.delete('/delete', authMiddleware, authController.deleteAccount);

// Guest Checkout
router.post('/guest', authController.guestCheckout);

module.exports = router;