const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
//@dec Register a user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory!");
    }
    const userAvailable = await User.findOne({ email });
    if (userAvailable) {
        res.status(400);
        throw new Error("All fields are mandatory!")
    }
    res.json({ message: "Register the user" });
});

//@dec Login a user
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler(async  (req, res) => {
    res.json({ message: "Login the user" });
});

//@dec Current user info
//@route POST /api/users/login
//@access public
const currentUser = asyncHandler(async  (req, res) => {
    res.json({ message: "Current user information" });
});

module.exports = { registerUser, loginUser, currentUser };