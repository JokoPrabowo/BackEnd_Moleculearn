const scoreRepo = require("../repositories/scoreRepo");

module.exports = {
    create(createArgs) {
        return scoreRepo.create(createArgs);
    },
    findAll() {
        return scoreRepo.findAll();
    },
    findById(id) {
        return scoreRepo.findById(id);
    }
}