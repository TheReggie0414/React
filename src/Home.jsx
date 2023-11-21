import React from 'react';
import { Timer } from "./components/Timer";
import { GeolocationExample } from './components/Location';
import { Memo } from './components/Memo/'
export const Home = () => {
    return (
        <div>
            <h1>Timer</h1>
            <Timer />
            <h1>Fetch</h1>
            <GeolocationExample />
            <Memo />
        </div>


    );
};

export default Home;