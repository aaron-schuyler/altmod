var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        unique: true,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    postBody: {
        type: String,
        required: true
    },
    tags: {
        type: Array,
        required: true
    }
});
var Post = mongoose.model("Post", PostSchema);
module.exports = Post;
