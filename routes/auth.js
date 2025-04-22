import express from 'express';
import { register, login, getUserProfile } from '../controllers/authController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// Register route - POST /api/auth/register
router.post('/register', register);

// Login route - POST /api/auth/login
router.post('/login', login);

// Get user profile - GET /api/auth/profile
router.get('/profile', protect, getUserProfile);

export default router;