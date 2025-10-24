import { TweetRepository } from '../repositories/tweet.repository';
import { Tweet } from '../models/tweet.model';

export class TweetService {
    private tweetRepository: TweetRepository;

    constructor() {
        this.tweetRepository = new TweetRepository();
    }

    async createTweet(content: string, userId: string): Promise<Tweet> {
        const newTweet = new Tweet({ content, userId });
        return await this.tweetRepository.create(newTweet);
    }

    async getTweets(): Promise<Tweet[]> {
        return await this.tweetRepository.findAll();
    }

    async getTweetById(tweetId: string): Promise<Tweet | null> {
        return await this.tweetRepository.findById(tweetId);
    }

    async deleteTweet(tweetId: string): Promise<void> {
        await this.tweetRepository.delete(tweetId);
    }
}