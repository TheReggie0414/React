import React, { useContext, useState, useEffect } from 'react';
import UserContext from '../UserContext';

export const Posts = () => {
    const { user } = useContext(UserContext);
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (user) {

            fetch('https://dummyjson.com/posts')
                .then((res) => res.json())
                .then((data) => {
                    console.log('Data from server:', data);
                    if (Array.isArray(data.posts)) {
                        setPosts(data.posts);
                        setError(null);
                    } else {
                        setPosts([]);
                        setError('Invalid data format for posts');
                    }
                })
                .catch((error) => {
                    console.error('Error fetching posts:', error);
                    setPosts([]);
                    setError('Error fetching posts');
                });
        }
    }, [user]);

    return (
        <div>
            {!user ? (
                <p>Please login to view posts.</p>
            ) : (
                <div>
                    {error ? (
                        <p>{error}</p>
                    ) : (
                        <div>
                            {Array.isArray(posts) && posts.length === 0 ? (
                                <p>No posts available.</p>
                            ) : (
                                posts.map((post) => (
                                    <div key={post.id}>
                                        <h3>{post.title}</h3>
                                        <p>{post.body}</p>
                                    </div>
                                ))
                            )}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Posts;