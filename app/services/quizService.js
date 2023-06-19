const quizRepo = require("../repositories/quizRepo");

module.exports = {
    findQuestion(limit){
        return quizRepo.findQuestion(limit);
    }
}