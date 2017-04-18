var express = require('express');
var router = express.Router();
var Post = require('./../libs/mongoose').Post

/* GET home page. */
router.get('/', function (req, res, next) {
    Post.find({})
        .select("title create_at")
        .exec(function (err, articles) {
            if(err) res.send("Something wrong accured when query the article list.")
            res.render('index',{
                title:"Fat-Bone Blog",
                articles:articles
            })
        });
});

router.use('/backend', require('./backend/index'));

module.exports = router;
