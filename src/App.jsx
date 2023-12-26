import React, { useState } from 'react';
import "./App.css";
import { Header } from "./components/Header";
import { Login } from "./components/Login";
import { Posts } from './components/Posts';
import UserContext from './UserContext';
export const App = () => {
    const [user, setUser] = useState(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <Header />
            <Login />
            <Posts />
        </UserContext.Provider>
    );
};

