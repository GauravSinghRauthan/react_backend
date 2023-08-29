const express = require('express');
const { getBlog, createBlog, getSingleBlog, blogDelete } = require('../controller/blogController');

const blogRouter = express.Router()

blogRouter.get('/',getBlog)

blogRouter.post('/addblog',createBlog)

blogRouter.get('/:blogId',getSingleBlog)

blogRouter.delete('/:blogId',blogDelete)

module.exports = blogRouter;