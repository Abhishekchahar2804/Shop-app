const express = require('express');
const path = require('path');
const router = express.Router();
const rootDir=require('../util/path');

router.get('/contact',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contact.html'));
})

router.post('/contact',(req,res,next)=>{
    res.redirect('/sucess');
})

module.exports=router