const scoreRepo = require("../repositories/scoreRepo");

module.exports = {
    create(createArgs) {
        return scoreRepo.create(createArgs);
    }
}