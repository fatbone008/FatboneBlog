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

var PostSchema = mongoose.Schema({
    title: String,
    content: String,
    published: Boolean,
    create_at: {type: Date, default: Date.now}
});

exports.Post = mongoose.model('Post', PostSchema);