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
require('dotenv').config(); // to use the env variables in dotenv
const { PORT } = process.env;
const port = process.env.PORT || PORT;
const app = express();
const dbSetup = require('./db/setup');
const infoRoutes = require('./routes/infoRoutes');


app.use(express.json());

dbSetup();

app.use(infoRoutes)

// Listen to connection
app.listen(port, () => console.log(`app running on port ${port}`));