import { User } from '../models/user.model';
import { generateToken, verifyToken } from '../utils/auth';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    private users: User[] = [];

    register(userData: User): User {
        const user = new User(userData);
        this.users.push(user);
        return user;
    }

    login(username: string, password: string): string {
        const user = this.users.find(u => u.username === username && u.password === password);
        if (!user) {
            throw new Error('Invalid credentials');
        }
        return generateToken(user);
    }

    validateToken(token: string): User | null {
        try {
            const decoded = verifyToken(token);
            return this.users.find(u => u.id === decoded.id) || null;
        } catch {
            return null;
        }
    }
}