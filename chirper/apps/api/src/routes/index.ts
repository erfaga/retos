import { Router } from 'express';
import AuthController from '../controllers/auth.controller';
import TweetsController from '../controllers/tweets.controller';

const router = Router();

// Auth routes
router.post('/auth/login', AuthController.login);
router.post('/auth/register', AuthController.register);

// Tweet routes
router.post('/tweets', TweetsController.createTweet);
router.get('/tweets', TweetsController.getTweets);
router.delete('/tweets/:id', TweetsController.deleteTweet);

export default router;