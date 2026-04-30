import express from 'express';
import { getPosts, getPostById, createPost, updatePost, deletePost, getUserPosts } from '../controllers/postController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// Public routes
router.route('/').get(getPosts);
router.route('/:id').get(getPostById);

// Protected routes
router.route('/').post(protect, createPost);
router.route('/user/me').get(protect, getUserPosts); // Important to place before /:id if they conflict, though in this design they don't, but a specific route is better to put before a param route just in case
router.route('/:id').put(protect, updatePost).delete(protect, deletePost);

export default router;
