const { Compound, Sequelize } = require("../models");

module.exports = {
    getCompound(limit){
        return Compound.findAll({
            order: Sequelize.literal('random()'),
            limit
        })
    }
}