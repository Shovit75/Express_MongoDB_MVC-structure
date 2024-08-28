const mongoose = require("mongoose")

async function connectMongoDB() {
    return mongoose.connect("mongodb://localhost:27017/Demo")
}

module.exports = {
    connectMongoDB
}