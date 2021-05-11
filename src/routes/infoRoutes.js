const express = require('express');
const router = express.Router();
const infoCtrl = require('../controllers/infoController');

router.post('/info', infoCtrl.createNewInfo)


router.get('/info', infoCtrl.fetchInfo)


router.get('/info/:id', infoCtrl.fetchSingleInfo)


router.put('/info/:id', infoCtrl.updateSingleInfo)


router.delete('/info/:id', infoCtrl.deleteSingleInfo)

module.exports = router;