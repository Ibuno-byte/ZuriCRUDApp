/*
* 1. create express server
* 2. introduce env variables from dotenv
* 3. initialize express
* 4. initialize express middleware
* 5. connect to mongodb
* 6. inject our routes
* 7. listen to app connection
*/

const express = require('express');
require('dotenv').config(); // to use the env variables in dotenv
const { PORT } = process.env;
const port = process.env.PORT || PORT;
const app = express();
const dbSetup = require('./src/db/setup');
const infoRoutes = require('./src/routes/infoRoutes');


app.use(express.json());

app.use(infoRoutes)

dbSetup();

// Listen to connection
app.listen(port, () => console.log(`app running on port ${port}`));