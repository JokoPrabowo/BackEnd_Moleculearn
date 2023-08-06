const userRepo = require("../repositories/userRepo");

module.exports = {
    create(requestBody) {
        return userRepo.create(requestBody);
    },
    findAll() {
        return userRepo.findAll();
    },
    findByUsername(username) {
        return userRepo.findByUsername(username);
    },
    update(updateArgs, username){
        return userRepo.update(updateArgs, username);
    }
}