export type User = {
    id: string;
    username: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
};

export type Tweet = {
    id: string;
    userId: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
};

export type AuthResponse = {
    token: string;
    user: User;
};

export type CreateTweetRequest = {
    content: string;
};

export type UpdateTweetRequest = {
    content?: string;
};