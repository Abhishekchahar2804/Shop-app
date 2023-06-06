const express = require('express');
const path = require('path');
const router = express.Router();

const productsControllers = require('../controllers/sucess');

router.get('/sucess',productsControllers.getSucess);


module.exports = router;