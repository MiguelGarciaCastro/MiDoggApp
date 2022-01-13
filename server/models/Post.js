const { Schema, model } = require('mongoose');
const commentSchema = require('./Comment');
const dateFormat = require('../utils/dateFormat');
const datetime = new Date().toLocaleString('en-US', { timeZone: 'America/New_York' });

const postSchema = new mongoose.Schema(
    {
        body: {
            type: String,
            required: "Don't forget to post!",
            maxlengh: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        },
        username: {
            type: String,
            required: true
        },
        comments: [commentSchema]
    },
    {
        toJSON: {
            getters: true
        }
    }
);


// add comment count later?

const Post = model('Post', postSchema);

module.exports = Post;