var express = require('express');
var router = express.Router();
var Post = require('./../libs/mongoose').Post

/* GET home page. */
router.get('/', function (req, res, next) {
    Post.find({})
        .select("title create_at _id")
        .exec(function (err, articles) {
            if(err) res.send("Something wrong accured when query the article list.");
            res.render('index',{
                title:"Fat-Bone Blog",
                articles:articles,
                subtitle:"A lovely fat programmer who pursuing full stack programming."
            })
        });
});

router.get('/article',function (req,res,next) {
    Post.findOne({_id:req.query._id})
        .exec(function (err, article) {
            if(err) res.render('404');
            res.render('frontend/article',{
                title:article.title,
                article:article,
                subtitle:!!article.subtitle || article.title
            });
        });
})

router.use('/backend', require('./backend/index'));

module.exports = router;
