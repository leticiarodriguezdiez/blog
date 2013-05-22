

// Modelos ORM
var path = require('path');
var Sequelize = require('sequelize');
// Para usar SQLite:
var sequelize = new Sequelize('db75njpp25e3ph', 'inmpvpdjzpxbgc', 'PrYHO9A1YTOIBYVywVE6hFlfvD',
		{ dialect:"postgres",
		 protocol:"postgres", 
		 port:"5432", 
		 host:"ec2-54-227-255-156.compute-1.amazonaws.com", 
		 omitNull: true});
// Importar la definicion de la clase Post desde post.js.
// Y que este modulo exporta la clase Post:
exports.Post = sequelize.import(path.join(__dirname,'post'));
sequelize.sync();


