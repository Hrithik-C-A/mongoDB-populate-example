import { User } from "../models/blogPostModel.js";

const getUser = async (req, res)=>{
    try {
        const user = await User.find({});
        res.json({
            user
        });
    } catch (error) {
        res.status(404).json({
            message: 'Resource not found',
            stack: error.message
        })
    }
};

const postUser = async (req, res)=>{
            try {
                const user = await User.create(req.body);
                await user.save();
            
                res.json({
                    message: 'User created'
                })
            } catch (error) {
                console.log('error',error.message)
            }
};

export { getUser, postUser };