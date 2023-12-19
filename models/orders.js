const mongoose = require('mongoose')
const orderSchema = mongoose.Schema({
    userId: {type: String, require: true},
    customerId: {type: String, require: true},
    productId: {type: mongoose.Schema.Types.ObjectId, ref: "product"},
    quality: {type: Number, require: true},
    subtotal: {type: Number, require: true},
    deliveryStatus: {type: String, require: true, default: "pending"},
    paymentStatus: {type: String, require: true},
    total: {type: Number, require: true},
}, {timestamps: true});

module.exports = mongoose.model("order", orderSchema)