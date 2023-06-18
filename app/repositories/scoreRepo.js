const { Score } = require("../models");

module.exports = {
    create(createArgs) {
        return Score.create(createArgs);
    }
}