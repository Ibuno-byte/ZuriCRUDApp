/*
* 1. introduce mongoose
* 2. model a new schema with mongoose
* 3. save model in a variable
* 4. export model
*/

const mongoose = require('mongoose')

const infoSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, lowercase: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true},
    country: {type: String, required: true}
})

const Info = mongoose.model('Info', infoSchema);

module.exports = Info;
