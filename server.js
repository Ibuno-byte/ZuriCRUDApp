/*
* 1. create express server
* 2. connect to mongodb
* 3. initialize express
* 4. initialize express middleware
* 5. create simple get request (optional)
* 6. inject our routes
* 7. listen to app connection
*/

// 1
const express = require('express');
const connectDB = require('./db');
require('dotenv').config(); // to use the env variables in dotenv
const { PORT } = process.env;



// 2
connectDB();

// 3
const app = express();

// 4
app.use(express.json({ extended: false }));


// 5
app.get('/', (req, res) => res.json({ message: 'CRUD App'}))


// PORT
const port = process.env.PORT || PORT;


// Listen to connection
app.listen(port, () => console.log(`app running on port ${port}`));