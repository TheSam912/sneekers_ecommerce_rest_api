const mongoose = require('mongoose')
const productSchema = mongoose.Schema({
    name: {type: String, require: true},
    title: {type: String, require: true},
    category: {type: String, require: true},
    imageUrl: {type: [String], require: true},
    oldPrice: {type: String, require: true},
    sizes: {
        type: [{size: {type: String, require: true}, isSelected: {type: Boolean, require: false, default: false}}]
    },
    price: {type: String, require: true},
    description: {type: String, require: true},
}, {timestamps: true});

module.exports = mongoose.model("product", productSchema)