var express = require('express');
var router = express.Router();
// var Post = require('./../libs/mongoose').Post

var Article = require('../libs/Models/Post');

/* GET home page. */
router.get('/', function (req, res, next) {
    // Post.find({})
    //     .select("title create_at _id")
    //     .exec(function (err, articles) {
    //         if(err) res.send("Something wrong accured when query the article list.");
    //         res.render('index',{
    //             title:"Fat-Bone Blog",
    //             articles:articles,
    //             subtitle:"A lovely fat programmer who pursuing full stack programming."
    //         })
    //     });
    // 将POST类封装一遍，有利于后期类方法的修改和插件的添加，很厉害有木有
    Article.find()
        .then(function (articles) {
            res.render('index',{
                title:"Fat-Bone Blog",
                articles:articles,
                subtitle:"A lovely fat programmer who pursuing full stack programming."
            })
        })
        .catch(function (err) {
            res.render('404');
        });
});

/* 浏览某个文章页面 */
router.get('/article',function (req,res,next) {
    // Post.findOne({_id:req.query._id})
    //     .exec(function (err, article) {
    //         if(err) res.render('404');
    //         res.render('frontend/article',{
    //             title:article.title,
    //             article:article,
    //             subtitle:!!article.subtitle || article.title
    //         });
    //     });
    Article.getPostById(req.query._id)
        .then(function (article) {
            res.render('frontend/article',{
                            title:article.title,
                            article:article,
                            subtitle:!!article.subtitle || article.title
                        });
        })
        .catch(function (err) {
            res.render('404');
        });
})

router.use('/backend', require('./backend/index'));

module.exports = router;
