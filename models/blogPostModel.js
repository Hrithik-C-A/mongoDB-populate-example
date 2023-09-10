import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    username : String,
    email : String
},{
    timestamps: true
});

const postSchema = new Schema({
    title: String,
    postedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
},{
    timestamps: true
});

const User = model('User', userSchema);
const Post = model('Post', postSchema);

export { User, Post };