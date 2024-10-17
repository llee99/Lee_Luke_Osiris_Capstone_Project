// models/User.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, sparse: true }, // Sparse allows nulls for guest users
    password: { type: String, required: true},
    isGuest: { type: Boolean, default: false },
    favorites: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
    createdAt: { type: Date, default: Date.now },
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);
