const quizService = require("../../../services/quizService");

module.exports = {
    randomQuestion(req, res){
        quizService
        .findQuestion(1)
        .then((question) =>{
            res.status(201).json({
                status: "SUCCESSFULL",
                data: question
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