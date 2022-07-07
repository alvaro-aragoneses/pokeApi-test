'use strict';

const Sequelize = require('sequelize');
const models = require('./models');

let sequelize;

sequelize = new Sequelize('database', 'username', 'password', {
  dialect: 'sqlite',
  storage: ':memory',//'database.sqlite3', 
  logging: console.log
});

const db = {
	Sequelize,
	sequelize,
};

for (const modelInit of models) {
	const model = modelInit(db.sequelize, db.Sequelize.DataTypes);
	db[model.name] = model;
}

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
const initDB = async () => {
  await db.Pokedex.sync({ force: true });
  await db.Pokedex.bulkCreate([{
    name: "Bulbasaur",
    id_pokedex: "1",
    type_1: "grass",
    type_2: "poison",
    captured: true
  }]);
}
initDB();

module.exports = db;
