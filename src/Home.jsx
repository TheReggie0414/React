import React from 'react';
import { ComponentButton } from "./components/Button";
import { Timer } from "./components/Timer";
import { GeolocationExample } from './components/Location';
export const Home = () => {
    return (
        <div>
            <h1>Timer</h1>
            <Timer />
            <h1>Fetch</h1>
            <GeolocationExample />
      </div>

       
    );
};

export default Home;