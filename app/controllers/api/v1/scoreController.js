const scoreService = require("../../../services/scoreService");

module.exports = {
    async addScore(req, res) {
        const userId = req.body.userId;
        const score = req.body.score;

        scoreService
        .create({userId, score})
        .then((value) =>{
            res.status(201).json({
                status: "SUCCESS",
                data: value
            })
        })
        .catch((err) =>{
            res.status(401).json({
                status: "FAILED",
                message: err.message
            })
        })
    }
}