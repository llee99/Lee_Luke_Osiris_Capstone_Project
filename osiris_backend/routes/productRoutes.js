const express = require("express");
const router = express.Router();
const {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} = require("../controllers/productController");


// Public Routes
router.route("/").get(getAllProducts);
router.route("/:id").get(getProductById);

// Admin Routes (Protected - Add Middleware for Admin Role)
router.route("/").post(createProduct);
router.route("/:id").put(updateProduct);
router.route("/:id").delete(deleteProduct);

module.exports = router;
