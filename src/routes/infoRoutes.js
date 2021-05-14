/*
* 1. create express server
* 2. initialize router function in express
* 3. import api callback functions
* 4. create routes for post, get(single & all), put and delete methods
* 5. export routes
*/

const express = require('express');
const router = express.Router();
const infoCtrl = require('../controllers/infoController');

router.post('/info', infoCtrl.createNewInfo)


router.get('/', infoCtrl.fetchInfo)


router.get('/info/:id', infoCtrl.fetchSingleInfo)


router.put('/info/:id', infoCtrl.updateSingleInfo)


router.delete('/info/:id', infoCtrl.deleteSingleInfo)

module.exports = router;
