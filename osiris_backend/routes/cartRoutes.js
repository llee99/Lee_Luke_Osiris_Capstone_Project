const express = require("express");
const router = express.Router();
// const errorHandler = require();
const {
    getCart,
    addToCart,
    updateCartItem,
    removeFromCart,
    clearCart
} = require("../controllers/cartController");

//Protected Routes (fix user auth!!)
router.route("/").get(getCart);
router.route("/add").post(addToCart);
// router.route("/update").put(updateCartItem);
// router.route("/remove/:id").delete(removeFromCart);
// router.route("/clear").post(clearCart);

module.exports = router;