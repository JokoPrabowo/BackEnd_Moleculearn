const express = require("express")
const router = express.Router()

const compoundController = require("../controllers/compound.controller")

router.get("/", compoundController.getOne)
router.post("/", compoundController.create)

module.exports = router