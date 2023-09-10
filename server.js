import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import connectDB from './config/db.js';
import { getUser, postUser } from './controllers/userController.js';
import { getBlogPost, postBlogPost } from './controllers/blogPostController.js';

const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/',(req, res)=>{
    res.send('Server is running!!!');
});

app.get('/users', getUser);

app.post('/user/create', postUser);

app.get('/posts', getBlogPost);

app.post('/post/create', postBlogPost)

app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
});
