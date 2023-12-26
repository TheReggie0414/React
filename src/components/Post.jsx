import React, { useContext } from 'react';
import UserContext from '../UserContext';
export const Post = ({ post }) => {
    const { user } = useContext(UserContext);

    return (
        <div>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            {user && user.id === post.userId && <p>You are the author of this post.</p>}
        </div>
    );
};