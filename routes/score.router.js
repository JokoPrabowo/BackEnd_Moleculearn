const express = require("express")
const router = express.Router()

const scoreController = require('../controllers/score.controller')

router.post("/", scoreController.create)
router.get("/", scoreController.getAll)
router.get("/user", scoreController.getAllByUser)

module.exports = router