var express = require('express');
var router = express.Router();

/* GET pages and set stylesheets */
router.get('/', function(req, res, next) {
  res.render('index', { style: 'basic' })
})
router.get('/auburn', function(req, res, next) {
  res.render('index', { style: 'auburn' })
})
router.get('/bama', function(req, res, next) {
  res.render('index', { style: 'bama' })
})
module.exports = router;
