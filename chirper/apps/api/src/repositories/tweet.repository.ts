export class TweetRepository {
    private tweets: Map<string, any>;

    constructor() {
        this.tweets = new Map();
    }

    public createTweet(tweet: any): string {
        const id = this.generateId();
        this.tweets.set(id, { ...tweet, id });
        return id;
    }

    public getTweet(id: string): any | null {
        return this.tweets.get(id) || null;
    }

    public getAllTweets(): any[] {
        return Array.from(this.tweets.values());
    }

    public updateTweet(id: string, updatedTweet: any): boolean {
        if (!this.tweets.has(id)) {
            return false;
        }
        this.tweets.set(id, { ...this.tweets.get(id), ...updatedTweet });
        return true;
    }

    public deleteTweet(id: string): boolean {
        return this.tweets.delete(id);
    }

    private generateId(): string {
        return Math.random().toString(36).substr(2, 9);
    }
}