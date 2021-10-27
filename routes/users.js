var express = require('express');
var router = express.Router();
value1 = 0;

/* GET users listing. */
router.get('/', function(req, res, next) {
  value1 = value1 +1;
  res.send('User accesses are: '+value1);
});

module.exports = router;
