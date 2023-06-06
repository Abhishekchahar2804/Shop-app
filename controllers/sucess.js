const path = require('path');

const rootDir=require('../util/path');

exports.getSucess =  (req, res, next) => {
    res.sendFile(path.join(rootDir,'views','sucess.html'));
}