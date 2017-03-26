/**
 * Created by chenyihui on 2017/2/14.
 */
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Post = require('../../libs/mongoose').Post;

router.get('/', function (req, res, next) {
    Post.find({})
        .select('title create_at')
        .exec(function (err, articles) {
            if(err) res.send('Something wrong accured when query the article list.');
            // var sender = JSON.stringify(articles);
            res.render('backend/backendPage',{"articleMeta":articles,title:"Fatbone`s blog"});
        });

    // res.render('backend/backendPage', {title: "Fatbone Blog"});
});

router.post('/', function (req, res, next) {
    console.log("This is backend：" + "title - " + req.fields.title + ",content - " + req.fields.content + ",published - " + req.fields.published);

    var article = new Post({
        title: req.fields.title,
        content: req.fields.content,
        published: req.fields.published ? true : false
    });
    article.save(function (err) {
        if (err) res.send('保存不成功');
        res.send('保存成功');
    });
});

module.exports = router;
