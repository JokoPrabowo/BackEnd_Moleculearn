const express = require("express")
const router = express.Router()

const quizController = require('../controllers/quiz.controller')

router.get("/", quizController.getQuestion)
router.post("/", quizController.create)

module.exports = router