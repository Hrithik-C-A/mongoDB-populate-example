import { Post } from "../models/blogPostModel.js";

const getBlogPost = async (req, res)=>{
    try {
        const blogPost = await Post.find().populate('postedBy');
        res.json({
            blogPost
        });
    } catch (error) {
        res.status(404).json({
            message: 'Resource not found',
            stack: error.message
        })
    }
};

const postBlogPost = async (req, res)=>{
    try {
        const blogPost = await Post.create(req.body);
        await blogPost.save();
        res.json({
            message: 'Blog Posted',
        })
    } catch (error) {
        console.log('error',error.message);
    }
};

export { getBlogPost, postBlogPost };