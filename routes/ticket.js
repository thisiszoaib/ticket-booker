var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/book',(req,res,next)=>{
  res.status(200).json({ message: 'This is a test message' });
});


module.exports = router;
