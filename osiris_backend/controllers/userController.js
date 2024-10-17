const asyncHandler = require("express-async-handler");

//@dec Register a user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
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