'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Compound extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Compound.init({
    z1: DataTypes.INTEGER,
    x1: DataTypes.STRING,
    n1: DataTypes.INTEGER,
    z2: DataTypes.INTEGER,
    x2: DataTypes.STRING,
    n2: DataTypes.INTEGER,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Compound',
  });
  return Compound;
};