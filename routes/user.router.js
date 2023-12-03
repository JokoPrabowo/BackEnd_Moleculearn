const express = require("express")
const router = express.Router()

const userController = require('../controllers/user.controller')

router.get("/users", userController.getAll)
router.post("/signUp", userController.signUp)
router.post("/signIn", userController.signIn)
router.put("/updateData", userController.updateData)
router.put("/updateLevel", userController.updateLevel)

module.exports = router