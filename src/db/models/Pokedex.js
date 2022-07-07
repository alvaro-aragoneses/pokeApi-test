'use strict';

module.exports = (sequelize, DataTypes) => {
  const Pokedex = sequelize.define('Pokedex',{
    name: DataTypes.STRING,
    id_pokedex: DataTypes.STRING,
    type_1: DataTypes.STRING,
    type_2: DataTypes.STRING,
    captured: DataTypes.INTEGER  
  }, 
  {
    paranoid: true
  });
  return Pokedex;
};