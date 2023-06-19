const { Quiz, Sequelize } = require("../models");

module.exports = {
    findQuestion(limit) {
        return Quiz.findAll({
            order: Sequelize.literal('random()'),
            limit
        })
    }
}