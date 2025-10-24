import React, { useEffect, useState } from 'react';
import { fetchTweets } from '../services/api';
import Tweet from '../components/Tweet';
import Composer from '../components/Composer';

const Home: React.FC = () => {
    const [tweets, setTweets] = useState([]);

    useEffect(() => {
        const loadTweets = async () => {
            const fetchedTweets = await fetchTweets();
            setTweets(fetchedTweets);
        };

        loadTweets();
    }, []);

    return (
        <div>
            <h1>Home</h1>
            <Composer />
            <div>
                {tweets.map(tweet => (
                    <Tweet key={tweet.id} tweet={tweet} />
                ))}
            </div>
        </div>
    );
};

export default Home;