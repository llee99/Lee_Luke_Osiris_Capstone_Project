const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    stock: { type: Number, default: 0 },
    category: { type: String },
    images: [{ type: String }],
    reviews: [{ type: String, ref: 'Review' }]
    // Additional fields like SKU, weight, dimensions can be added here
}, {
    timestamps: true,
});

module.exports = mongoose.model("Product", productSchema);
