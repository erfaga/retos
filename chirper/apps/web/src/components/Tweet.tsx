import React from 'react';

interface TweetProps {
    username: string;
    content: string;
    timestamp: string;
}

const Tweet: React.FC<TweetProps> = ({ username, content, timestamp }) => {
    return (
        <div className="tweet">
            <div className="tweet-header">
                <span className="tweet-username">{username}</span>
                <span className="tweet-timestamp">{timestamp}</span>
            </div>
            <div className="tweet-content">{content}</div>
        </div>
    );
};

export default Tweet;