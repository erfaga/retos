import React from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { getUserProfile } from '../services/api';

const Profile: React.FC = () => {
    const { userId } = useParams<{ userId: string }>();
    const { user } = useAuth();
    const [profile, setProfile] = React.useState<any>(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState<string | null>(null);

    React.useEffect(() => {
        const fetchProfile = async () => {
            try {
                const data = await getUserProfile(userId);
                setProfile(data);
            } catch (err) {
                setError('Failed to load profile');
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, [userId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>{profile.name}'s Profile</h1>
            <p>{profile.bio}</p>
            <h2>Tweets</h2>
            <ul>
                {profile.tweets.map((tweet: any) => (
                    <li key={tweet.id}>{tweet.content}</li>
                ))}
            </ul>
        </div>
    );
};

export default Profile;