const exp = require('express');
const router = exp();

const rootDir = require('../utils/path');

const path = require('path');
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded());


router.get('/add-product',(req,res,next)=>{
  res.sendFile(path.join(rootDir,'view pages','add-product.html'));
})

router.post('/add-product',(req,res,next)=>{
   //console.log('form data:',req.body);
   res.send('<big>Product submitted Thanks!!</big>');
})

module.exports = router;