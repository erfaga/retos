import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api';

export const fetchTweets = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/tweets`);
        return response.data;
    } catch (error) {
        console.error('Error fetching tweets:', error);
        throw error;
    }
};

export const createTweet = async (tweetContent) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/tweets`, { content: tweetContent });
        return response.data;
    } catch (error) {
        console.error('Error creating tweet:', error);
        throw error;
    }
};

export const deleteTweet = async (tweetId) => {
    try {
        await axios.delete(`${API_BASE_URL}/tweets/${tweetId}`);
    } catch (error) {
        console.error('Error deleting tweet:', error);
        throw error;
    }
};

export const login = async (credentials) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/login`, credentials);
        return response.data;
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
};

export const register = async (userData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/register`, userData);
        return response.data;
    } catch (error) {
        console.error('Error registering:', error);
        throw error;
    }
};