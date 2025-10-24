export interface Tweet {
    id: string;
    userId: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
}

export class TweetModel {
    constructor(public tweet: Tweet) {}

    static fromJson(json: any): TweetModel {
        return new TweetModel({
            id: json.id,
            userId: json.userId,
            content: json.content,
            createdAt: new Date(json.createdAt),
            updatedAt: new Date(json.updatedAt),
        });
    }

    toJson(): any {
        return {
            id: this.tweet.id,
            userId: this.tweet.userId,
            content: this.tweet.content,
            createdAt: this.tweet.createdAt.toISOString(),
            updatedAt: this.tweet.updatedAt.toISOString(),
        };
    }
}