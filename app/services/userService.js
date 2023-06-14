const userRepo = require("../repositories/userRepo");

module.exports = {
    create(requestBody) {
        return userRepo.create(requestBody);
    },
    findByUsername(username) {
        return userRepo.findByUsername(username);
    }
}