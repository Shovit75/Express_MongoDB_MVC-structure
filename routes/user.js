const express = require("express")
const router = express.Router()
const { getallusers } = require("../controllers/user")

router.get("/getusers", getallusers)

module.exports = router