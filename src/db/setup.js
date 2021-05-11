/*
* 1. Create a connection function for mongodb using mongoose
* 2. Start a local mongodb server connection
*/

const mongoose = require('mongoose');
require('dotenv').config()
const { MONGO_URI } = process.env;


// 1
module.exports = function() {
    mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(() => {
        console.log('MongoDB connected...');
    })
    .catch((err) => {
        console.error(err.message);

        process.exit(1);
    })
}



