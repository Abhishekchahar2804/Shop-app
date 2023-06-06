const express = require('express');

const router = express.Router();
const productsControllers = require('../controllers/contact');

router.get('/contact',productsControllers.getContact)

router.post('/contact',productsControllers.postContact)

module.exports=router