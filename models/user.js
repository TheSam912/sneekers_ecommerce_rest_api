const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    username: {type: String, require: true},
    email: {type: String, require: true},
    password: {type: String, require: true},
    location: {type: String, default: "Italy"},
}, {timestamps: true});

module.exports = mongoose.model("user", userSchema)