const express = require("express")
const router = express.Router()

const atomController = require("../controllers/atom.controller")

router.get("/", atomController.getOne)
router.post("/", atomController.create)

module.exports = router