//                  const dbConfig = require("../config.js");


const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = 'mongodb://localhost:27017/employees';
db.tutorials = require("../model.js")(mongoose);

module.exports = db;
