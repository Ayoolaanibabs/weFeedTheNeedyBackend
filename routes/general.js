const express = require('express');
const router = express.Router();

const { general } = require('../controllers/generalController.js');


router.get('/', general);


module.exports = router;
