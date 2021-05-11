const mongoose = require('mongoose')

const infoSchema = new mongoose.Schema({
    name: String,
    email: String,
    country: String
})

const Info = mongoose.model('Info', infoSchema);

module.exports = Info;