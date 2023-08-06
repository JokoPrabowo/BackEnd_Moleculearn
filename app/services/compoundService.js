const compoundRepo = require("../repositories/compoundRepo");

module.exports = {
    getCompound(limit) {
        return compoundRepo.getCompound(limit);
    }
}