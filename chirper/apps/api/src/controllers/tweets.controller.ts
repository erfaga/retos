import { Request, Response } from 'express';
import { TweetService } from '../services/tweet.service';

export class TweetsController {
    private tweetService: TweetService;

    constructor() {
        this.tweetService = new TweetService();
    }

    public async createTweet(req: Request, res: Response): Promise<Response> {
        try {
            const tweetData = req.body;
            const newTweet = await this.tweetService.createTweet(tweetData);
            return res.status(201).json(newTweet);
        } catch (error) {
            return res.status(500).json({ message: 'Error creating tweet', error });
        }
    }

    public async getTweets(req: Request, res: Response): Promise<Response> {
        try {
            const tweets = await this.tweetService.getTweets();
            return res.status(200).json(tweets);
        } catch (error) {
            return res.status(500).json({ message: 'Error retrieving tweets', error });
        }
    }

    public async deleteTweet(req: Request, res: Response): Promise<Response> {
        try {
            const tweetId = req.params.id;
            await this.tweetService.deleteTweet(tweetId);
            return res.status(204).send();
        } catch (error) {
            return res.status(500).json({ message: 'Error deleting tweet', error });
        }
    }
}