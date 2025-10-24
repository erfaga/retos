export interface User {
    id: string;
    username: string;
    email: string;
    passwordHash: string;
    createdAt: Date;
    updatedAt: Date;
}

export class UserModel {
    constructor(public user: User) {}

    static fromJson(json: any): UserModel {
        return new UserModel({
            id: json.id,
            username: json.username,
            email: json.email,
            passwordHash: json.passwordHash,
            createdAt: new Date(json.createdAt),
            updatedAt: new Date(json.updatedAt),
        });
    }

    toJson(): any {
        return {
            id: this.user.id,
            username: this.user.username,
            email: this.user.email,
            passwordHash: this.user.passwordHash,
            createdAt: this.user.createdAt.toISOString(),
            updatedAt: this.user.updatedAt.toISOString(),
        };
    }
}