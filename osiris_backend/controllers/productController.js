const asyncHandler = require("express-async-handler");
const Product = require("../models/Product");

//@dec Get all products
//@route GET /api/products
//@access public
const getAllProducts = asyncHandler(async (req, res) => {
    const products = await Product.find();
    res.status(200).json(products);
    console.log(req.body);
});

//@dec Get product
//@route GET /api/product/:id
//@access public
const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
        res.status(404);
        throw new Error("Product not found");
    }
    res.status(200).json(product);
    console.log(req.body);
});

//@dec Create new product
//@route POST /api/product/:id
//@access private
const createProduct = asyncHandler(async (req, res) => {
    // Only admin should access this
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
});

//@dec Update product
//@route PUT /api/product/:id
//@access private
const updateProduct = asyncHandler(async (req, res) => {
    // Only admin should access this
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
});

//@dec Delete product
//@route DELETE /api/product/:id
//@access private
const deleteProduct = asyncHandler(async (req, res) => {
    // Only admin should access this
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json({ message: 'Product deleted successfully' });
});

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}