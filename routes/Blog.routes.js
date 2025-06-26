import express from 'express'
import { CreateBlog, Getblogs } from '../controllers/Blog.controller.js'
const BlogRoutes=express.Router()

BlogRoutes.post('/create',CreateBlog)
BlogRoutes.get('/get',Getblogs)
export default BlogRoutes