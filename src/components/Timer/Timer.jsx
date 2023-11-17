import React, { useState, useEffect } from 'react';


export const Timer = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setSeconds(seconds + 1);
        }, 1000);

        return () => {
            clearTimeout(timerId);
        };
    }, [seconds]);

    return (
        <div>
            <h1>Timer: {seconds} seconds</h1>
        </div>
    );
};