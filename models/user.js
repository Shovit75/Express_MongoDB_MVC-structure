const mongoose = require("mongoose")

const Userschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

const Usermodel = mongoose.model("users", Userschema)

module.exports = Usermodel