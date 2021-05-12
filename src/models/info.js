/*
* 1. introduce mongoose
* 2. model a new schema with mongoose
* 3. save model in a variable
* 4. export model
*/

const mongoose = require('mongoose')

const infoSchema = new mongoose.Schema({
    name: String,
    email: String,
    country: String
})

const Info = mongoose.model('Info', infoSchema);

module.exports = Info;