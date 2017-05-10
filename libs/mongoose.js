/**
 * Created by chenyihui on 2017/2/23.
 */
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/fatboneBLog');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('mongodb is connected');
});
//
// var PostSchema = mongoose.Schema({
//     title: String,
//     content: String,
//     published: Boolean,
//     create_at: {type: Date, default: Date.now}
// });
//
// // test for schema.post() API
// PostSchema.post('find', function(docs) {
//     console.log('this fired after you run a find query');
// });
//
// PostSchema.post('findOne', function (post) {
//     post.content = post.content + " hello!";
//     console.log("The content has been transvert into html marks");
// });
//
// exports.Post = mongoose.model('Post', PostSchema);