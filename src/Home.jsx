import React from 'react';
import { Timer } from "./components/Timer";
import { GeolocationExample } from './components/Location';
import { Memo } from './components/Memo/'
import { Table } from './components/table'
export const Home = () => {
    return (
        <div>
            <h1>Timer</h1>
            <Timer />
            <h1>Fetch</h1>
            <GeolocationExample />
            <Memo />
            <Table />
        </div>


    );
};

export default Home;