// models/User.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, sparse: true }, // Sparse allows nulls for guest users
    password: { type: String },
    isGuest: { type: Boolean, default: false },
    favorites: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
    createdAt: { type: Date, default: Date.now },
    // Additional fields like address, payment info can be added here
});

module.exports = mongoose.model('User', userSchema);
