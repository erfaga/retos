import React, { useState } from 'react';

const Composer: React.FC<{ onTweetSubmit: (tweet: string) => void }> = ({ onTweetSubmit }) => {
    const [tweetContent, setTweetContent] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (tweetContent.trim()) {
            onTweetSubmit(tweetContent);
            setTweetContent('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={tweetContent}
                onChange={(e) => setTweetContent(e.target.value)}
                placeholder="What's happening?"
                rows={3}
                required
            />
            <button type="submit">Tweet</button>
        </form>
    );
};

export default Composer;