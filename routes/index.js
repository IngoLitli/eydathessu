var express = require('express');
var router = express.Router();
var skjal = require('../skjal.json');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', skjal: skjal });
});

module.exports = router;
