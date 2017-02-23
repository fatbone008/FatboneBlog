var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Blog of Fatbone'});
});

router.use('/backend', require('./backend/index'));

module.exports = router;
