const asyncHandler = require("express-async-handler");
const Cart = require("../models/Cart");

//@dec Get cart
//@route GET /api/cart
//@access public
const getCart = asyncHandler(async (req, res) => {
    const cart = await Cart.find();
    res.status(200).json(cart);
    console.log(req.body);
});

//@dec Add item to cart
//@route POST /api/cart/add
//@access public
const addToCart = asyncHandler(async (req, res) => {
    const cart = new Cart(req.body);
    await cart.save();
    res.status(201).json(cart);
});

module.exports = {
    getCart,
    addToCart
}