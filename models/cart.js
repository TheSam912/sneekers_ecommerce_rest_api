const mongoose = require('mongoose')
const cartSchema = mongoose.Schema({
    userId: {type: String, require: true},
    products: [
        {
            cartItem: {type: mongoose.Schema.Types.ObjectId, ref: "product"},
            quality: {type: Number, default: 1}
        }
    ]
}, {timestamps: true});

module.exports = mongoose.model("cart", cartSchema)