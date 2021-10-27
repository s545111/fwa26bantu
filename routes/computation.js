var express = require('express');
var router = express.Router();
values = 0;

/* GET users listing. */
router.get('/', function(req, res, next) {
    fake_url = "https://fake.com/path" + req.url
    const url = new URL(fake_url)
    const search_params = url.searchParams
      if (req.method === 'GET' ) {
        const Values1 = search_params.get("x")
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.write('Math.acosh() applied to '+Values1+' is '+Math.acosh(Values1))
        res.write('<br/>Math.log1p() applied to '+Values1+' is '+Math.log1p(Values1))
        res.write('<br/>Math.tan() applied to '+Values1+' is '+Math.tan(Values1))
        res.write('<br/>Math.sqrt() applied to '+Values1+' is '+Math.sqrt(Values1))
        res.end()
      }
      values = values+1;
  res.send('User accesses are: '+val);
});

module.exports = router;
