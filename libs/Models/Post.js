/**
 * Created by chenyihui on 2017/5/9.
 */
var mongoose = require('mongoose');
var PostSchema = require('../Schemas/PostSchema');

var Post = mongoose.model('Post',PostSchema);

module.exports = {
    create: function (post) {
        return Post.create(post).exec();
    },

    find: function () {
        return Post.find({})
            .exec();
    },

    getPostById: function (postId) {
        return Post.findById(postId)
            .exec();
    }
}