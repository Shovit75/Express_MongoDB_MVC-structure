const Usermodel = require("../models/user")

function getallusers(req, res) {
    Usermodel.find({})
    .then((data) => {
        if(data.length > 0) {
            return res.status(200).json({message:"users have been found", data})
        } else {
            return res.status(404).json({message:"no users found"})
        }
    })
    .catch((err) => {
        return res.status(500).json({message:"Error Occured", err})
    })
}

module.exports = {
    getallusers
}