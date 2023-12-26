import UserContext from '../UserContext';
import React, { useContext } from 'react';
export const Header = () => {
    const { user } = useContext(UserContext);

    return (
        <div>
            <h1>My HomeWork</h1>
            {user && <p>Hello, {user.username}!</p>}
        </div>
    );
};