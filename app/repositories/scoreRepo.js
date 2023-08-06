const { Score } = require("../models");

module.exports = {
    create(createArgs) {
        return Score.create(createArgs);
    },
    findAll() {
        return Score.findAll();
    },
    findById(userId) {
        return Score.findAll({
            where : {
                userId
            }
        });
    },
}