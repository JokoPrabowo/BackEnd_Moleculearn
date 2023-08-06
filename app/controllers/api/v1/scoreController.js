const scoreService = require("../../../services/scoreService");
const userService = require("../../../services/userService");
const jwt = require("jsonwebtoken");

function verifyToken(token) {
    try {
      return jwt.verify(token, process.env.JWT_SECRET || "Rahasia");
    } catch (error) {
        console.log(error.message);
      return null;
    }
}

module.exports = {
    async addScore(req, res) {
        try{
            const bearerToken = req.headers.authorization;
            const token = bearerToken.split("Bearer ")[1];
            const tokenPayload = verifyToken(token);

            //mencari data pengguna
            const user = JSON.parse(
                JSON.stringify(await userService.findByUsername(tokenPayload.username))
            );
            const userId = user.id;
            const score = req.body.score;
            console.log("nilai score "+ JSON.stringify(req.body));
            scoreService
            .create({userId, score})
            .then((value) =>{
                res.status(201).json({
                    status: "SUCCESS",
                    data: value
                })
            })
        }catch(error) {
            res.status(401).json({
                status: "FAILED",
                message: error.message
            })
            console.log(error.message);
        }
    },

    async getAll(req, res) {
        try{
            scoreService.findAll()
            .then((scores) =>{
                res.status(201).json({
                    status: "SUCCESS",
                    scores,
                })
            })
        }catch(error){
            res.status(500).json({
                status: "FAIL",
                data: error.message,
            })
        }
    },

    async getAllByUser(req, res) {
        try{
            scoreService.findById(req.body.userId)
            .then((scores) =>{
                res.status(201).json({
                    status: "SUCCESS",
                    scores,
                })
            })
        }catch(error){
            res.status(500).json({
                status: "FAIL",
                data: error.message,
            })
        }
    }
}