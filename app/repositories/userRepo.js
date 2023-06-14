const { User } = require("../models");

module.exports = {
    create(createArgs) {
        return User.create(createArgs);
    },
    findByUsername(username) {
        return User.findOne(username);
    }
};