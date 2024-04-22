const mongoose = require("mongoose");

const userModel = mongoose.Schema({
    name: { type: String, requre: true },
    email: { type: String, requre: true },
    password: { type: String, requre: true },
})

const User = mongoose.model("User", userModel);
module.exports = User;