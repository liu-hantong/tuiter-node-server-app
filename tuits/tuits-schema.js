import mongoose from 'mongoose';
const schema = mongoose.Schema({
    tuit: String,
    likes: Number,
    liked: Boolean,
    disliked: Boolean,
    dislikes: Number,
    replies: Number,
    retuits: Number,
    handle: String,
    tweets: "0k",
    image: String,
    time: String,
    userName: String
}, {collection: 'tuits'});
export default schema;