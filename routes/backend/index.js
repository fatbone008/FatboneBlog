/**
 * Created by chenyihui on 2017/2/14.
 */
var express = require('express');
var router = express.Router();

router.get('/',function (req,res,next) {
    res.render('backend/backendPage',{title:"Fatbone Blog"});
});

router.post('/',function (req, res, next) {
    console.log("---------------------_________________________");
    res.redirect('/index');
});
module.exports = router;
