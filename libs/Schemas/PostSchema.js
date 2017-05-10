/**
 * Created by chenyihui on 2017/5/9.
 */
var marked = require('marked');
var mongoose = require('mongoose');

var PostSchema = mongoose.Schema({
    title: String,
    content: String,
    published: Boolean,
    create_at: {type: Date, default: Date.now}
});

// test for schema.post() API
PostSchema.post('find', function(docs) {
    console.log('this fired after you run a find query');
});

PostSchema.post('findOne', function (post) {
    post.content = marked(post.content);
    console.log("The content has been transvert into html marks");
});

// exports.Post = mongoose.model('Post', PostSchema);
module.exports = PostSchema;