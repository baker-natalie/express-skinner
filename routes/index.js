var express = require('express');
var router = express.Router();

/* GET pages. */
router.get('/', function(req, res, next) {
  res.render('index', { style: 'basic' })
})
router.get('/auburn', function(req, res, next) {
  res.render('index', { style: 'auburn' })
})
router.get('/bama', function(req, res, next) {
  res.render('index', { style: 'bama' })
})
router.get('/who', function(req, res, next) {
  res.render('index', { style: 'who' })
})
router.get('/thrones', function(req, res, next) {
  res.render('index', { style: 'thrones' })
})
router.get('/things', function(req, res, next) {
  res.render('index', { style: 'things' })
})
module.exports = router;
