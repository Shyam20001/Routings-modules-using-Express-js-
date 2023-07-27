const exp = require('express');
const router = exp();

const rootDir = require('../utils/path');

const path = require('path');


router.get('/',(req,res,next)=>{
   // console.log('middleware-1');
    res.sendFile(path.join(rootDir,'view pages','shop.html'));
})

module.exports = router;