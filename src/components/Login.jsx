import React, { useContext } from 'react';
import UserContext from '../UserContext';

export const Login = () => {
    const { user, setUser } = useContext(UserContext);

    const handleLogin = async () => {
        try {
            const response = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: 'kminchelle',
                    password: '0lelplR',
                }),
            });

            const data = await response.json();
            setUser(data);
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    return (
        <div>
            {!user ? (
                <button onClick={handleLogin}>Login</button>
            ) : (
                <p>Login successful! Welcome, {user.username}.</p>
            )}
        </div>
    );
};
