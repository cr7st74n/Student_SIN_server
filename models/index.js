

let { Sequelize, DataTypes }  = require('sequelize')

// EVIROMENT VARIABLE   
let env = process.env.NODE_ENV || 'development'  //default variable 

console.log('using evironment' + env);

let configFile = require(__dirname +'/../config.json')
let config = configFile[env]

let password = process.env.DB_PASSWORD
config.password = password


let db = {}

let sequelize = new Sequelize(config)

let studentModelCreate = require("./student") // function definition 
let studentModel = studentModelCreate(sequelize, DataTypes)

db[studentModel.name] = studentModel

db.sequelize = sequelize   // seq config
db.Sequelize = Sequelize  // library

module.exports = db