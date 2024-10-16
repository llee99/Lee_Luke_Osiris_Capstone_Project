const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartItemSchema = new Schema({
    product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, default: 1 }
});

const cartSchema = new Schema({
    //user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    items: [cartItemSchema],
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Cart",cartItemSchema);