const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");
//@dec Register a user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory!");
    }
    const userAvailable = await User.findOne({ email });
    if (userAvailable) {
        res.status(400);
        throw new Error("User already exists!");
    }

    //Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed Password: ", hashedPassword);
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
    })
    console.log(`User created ${user}`);
    if (user) {
        res.status(201).json({_id: user.id, email: user.email})
    } else {
        res.status(400);
        throw new Error("User data is not valid");
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